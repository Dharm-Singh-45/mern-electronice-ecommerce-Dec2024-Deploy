const wakeUpBackend = async (req, res) => {
  res.status(200).json({ message: "Server is up and running!" });
};

export default wakeUpBackend;
