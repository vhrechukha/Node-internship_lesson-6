const { spawn } = require('child_process');

const command = spawn('npm', ['migrate-mongo', 'up', '-f', 'migrate-mongo-config.js']);

command.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});
command.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});
