const fs = require('fs');
const path = require('path');

const { logFilePath } = require('./logger');

const backupDir = path.join(__dirname, '..', '..', 'logs');

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

function processLogFile() {
  fs.readFile(logFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading log file:', err);
      return;
    }

    if (!data.trim()) {
      console.log('Log file is empty, nothing to process.');
      return;
    }

    const transformedData = data
      .trim()
      .split('\n')
      .map((line) => {
        try {
          const entry = JSON.parse(line);
          return JSON.stringify({
            message: entry.message || 'Unknown error',
            code: entry.code || 500,
            time: entry.time || Date.now(),
          });
        } catch (e) {
          console.error('Error parsing log entry:', e);
          return null;
        }
      })
      .filter(Boolean)
      .join('\n');

    const now = new Date();
    const timestamp = now.toISOString().replace(/[:]/g, '-').split('.')[0];
    const backupFileName = `error_log_${timestamp}.log`;
    const backupFilePath = path.join(backupDir, backupFileName);

    fs.writeFile(backupFilePath, transformedData, (writeErr) => {
      if (writeErr) {
        console.error('Error writing backup log file:', writeErr);
        return;
      }

      console.log('Log file processed and saved as:', backupFilePath);

      fs.writeFile(logFilePath, '', (clearErr) => {
        if (clearErr) {
          console.error('Error clearing log file:', clearErr);
        } else {
          console.log('Original log file cleared.');
        }
      });
    });
  });
}

processLogFile();