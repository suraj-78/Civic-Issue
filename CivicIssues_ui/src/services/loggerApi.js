import axios from "axios";

const loggerApi = axios.create({
  baseURL: "http://localhost:5141/api/logs"
});

export const logEvent = async (level, message, source) => {
  try {
    await loggerApi.post("", {
      level,
      message,
      source,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    console.error("logger service unreachable");
  }
};
