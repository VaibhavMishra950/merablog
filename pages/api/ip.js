export default function handler(req, res) {
  // Try to get the IP address from different headers or connection properties
  const ip =
    req.headers['x-forwarded-for']?.split(',').shift() || // Get from the 'x-forwarded-for' header (useful when behind a proxy)
    req.socket?.remoteAddress || // Fallback to socket remote address
    null;

  res.status(200).json({ ip });
}
