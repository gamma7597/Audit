const winston = require('winston');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const mylevels = {
  error: 0,
  http: 1,
  file: 2,
  info: 3
}

const myFormat = printf( ({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(
    label({ label: 'CUSTOM', message: true }),
    timestamp(),
    myFormat
  ),
  transports: [new transports.Console()]
});

logger.info("Hello there!")
logger.error("Testing errors too!")

/*const logger = createLogger({
  level: levels,
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD hh:mm:ss.SSS A',
    }),
    json()
  ),
  transports: [
    new transports.File({
      filename: './logs/all.log',
    }),
  ],
});*/

module.exports = logger;