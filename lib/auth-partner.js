require("dotenv").config();
const jwt = require("jsonwebtoken");
var requestIp = require("request-ip");
const IP = require("ip");

module.exports = checkToken = async (req, res, next) => {
  let token = req.headers["auth-token"];
  const ipAddress = IP.address();
  console.log(ipAddress);
  console.log(req.socket.localAddress);
  
  if (token) {
    token = token.replace(/^Bearer\s+/, "");
    jwt.verify(token, process.env.JWTPRIVATEKEY, (err, decoded) => {
      if (err) {
        return res.status(408).json({
          success: false,
          message: "ไม่สามารถเข้าถึงการใช้งานนี้ได้",
          logout: true,
          description: "Request Timeout",
        });
      }
      req.decoded = decoded;

      if (decoded.level !== "partner") {
        return res.status(401).json({
          success: false,
          message: "ไม่มีสิทธิใช้งานฟังก์ชั่นนี้",
          logout: true,
          description: "Unauthorized",
        });
      }

      next();
    });
  } else {
    return res.status(401).json({
      success: false,
      message: "Token not provided Token ไม่ถูกต้อง",
      logout: false,
      description: "Unauthorized",
    });
  }
};
