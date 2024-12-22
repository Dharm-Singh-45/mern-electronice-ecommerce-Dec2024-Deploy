import api from "../common/api.js";

const wakeUpBackend = async () => {
  try {
    await api.get("/health");
    console.log("Backend is awake");
  } catch (error) {
    console.error("Error waking up the backend:", error.message);
  }
};

export default wakeUpBackend;
