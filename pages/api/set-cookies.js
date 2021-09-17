import { serialize } from "cookie";

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");

  res.setHeader(
    "Set-Cookie",
    serialize("ThirdPartyCookie", "true", {
      domain: "third-party-cookies-ten.vercel.app",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      httpOnly: true,
      secure: true,
    })
  );

  res.status(200).json({});
}
