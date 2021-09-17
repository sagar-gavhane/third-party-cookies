export default function handler(req, res) {
  if (req.cookies.ThirdPartyCookie === "true") {
    res.status(200).json({});
    return;
  }

  res.status(400).json({});
}
