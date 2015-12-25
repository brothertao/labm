var spawn = require('child_process').spawn;
    bash    = spawn('bash', []);
bash.stdout.on('data', function(data) {
  console.log(data)
})
bash.stdin.write("ls ~\r");
