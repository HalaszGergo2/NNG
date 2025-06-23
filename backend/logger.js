function getTimestamp() {
  return new Date().toISOString();
}

function log(message, type = "Info") {
  const timestamp = getTimestamp();
  const formatted = `${timestamp}, ${type}, ${message}`;
  console.log(formatted);
}

module.exports = {
  log,
};
