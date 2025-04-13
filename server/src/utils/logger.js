const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '..', '..', 'error.log');

function logError(message, code, stackTrace) {
  const logEntry = {
    message: message || 'Unknown error',
    time: Date.now(),
    code: code || 500,
    stackTrace: stackTrace || {},
  };

  fs.appendFile(logFilePath, JSON.stringify(logEntry) + '\n', (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    }
  });
}

module.exports = {
  logError,
  logFilePath,
};