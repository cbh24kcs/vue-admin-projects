import "winston-daily-rotate-file";

import * as winston from "winston";

import { utilities } from "nest-winston";

const transports = [];

/*
  verbose: 0,
  debug: 1,
  log: 2,
  warn: 3,
  error: 4,
*/

// 控制台日志
transports.push(
  new winston.transports.Console({
    level: "verbose", // 指定日志级别
    format: winston.format.combine(winston.format.timestamp(), utilities.format.nestLike()),
  })
);

// 存下来的文件日志
transports.push(
  new winston.transports.DailyRotateFile({
    level: "error",
    dirname: "logs",
    filename: "error-%DATE%.log",
    datePattern: "YYYY-MM-DD-HH",
    zippedArchive: true, 
    maxSize: "1m",
    maxFiles: "1d",
    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  })
);

// 如果是生产环境
if(process.env.NODE_ENV === 'production') {

}

export const winstonLogger = winston.createLogger({ transports });
