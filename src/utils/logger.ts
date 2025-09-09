import pino from "pino";

const logger = pino({
  level: process.env.NODE_ENV === "development" ? "debug" : "info",
  browser: {
    asObject: true, // cleaner output in dev tools
  },
});

export default logger;
