export const infoLogFormatter = (logMessage: string) => {
  return console.info("------- Info from UI: " + logMessage);
};

export const errorLogFormatter = (logMessage: string) => {
  return console.error("-------- Error from UI: " + logMessage);
};
