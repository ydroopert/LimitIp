const rateLimit = require("express-rate-limit")

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 1000,
  status: 429,
  headers: true,
});
module.exports = limiter;
