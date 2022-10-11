import { createLogger, transports, format } from 'winston';
const { combine, timestamp, label, printf, prettyPrint,splat, errors } = format;
const logger = createLogger({
  level: "info", //Sets the default level
  format: combine(
      errors({ stack: true }),
      timestamp(),
      prettyPrint(),
      splat()
  ),
  transports: [
    new transports.File({ filename: "error.log", level: "error" }),
    new transports.File({ filename: 'combined.log' })
  ],
});
export default logger