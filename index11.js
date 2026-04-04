//npm i winston
import  winston from "winston";
const logger = winston.createLogger({
  level: "info",
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "app.log" })
  ]
});
logger.info("Server started");
logger.error("Something went wrong");
