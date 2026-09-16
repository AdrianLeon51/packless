export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/subscribe") {
      if (request.method !== "POST") {
        return Response.json({ ok: false, error: "method_not_allowed" }, { status: 405 });
      }
      return handleSubscribe(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function handleSubscribe(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: bots fill every field, real users never see/fill this one.
  if (typeof body.hp === "string" && body.hp.trim() !== "") {
    return Response.json({ ok: true }); // pretend success, drop silently
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const source = ["hero", "final"].includes(body.source) ? body.source : "unknown";

  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return Response.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const ip = request.headers.get("CF-Connecting-IP") || "";
  const ua = request.headers.get("User-Agent") || "";

  try {
    await env.DB.prepare(
      `INSERT INTO subscribers (email, source, ip, user_agent, created_at)
       VALUES (?1, ?2, ?3, ?4, ?5)
       ON CONFLICT(email) DO NOTHING`
    ).bind(email, source, ip, ua, Date.now()).run();
  } catch (err) {
    console.error("D1 insert failed", err);
    return Response.json({ ok: false, error: "server_error" }, { status: 500 });
  }

  return Response.json({ ok: true });
}
