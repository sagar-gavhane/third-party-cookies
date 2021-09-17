import { serialize } from "cookie";

export default function handler(req, res) {
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
