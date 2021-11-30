process.stdout.write('hello from spinner1.js... \rheyyy\n');
let spinner = ['|', '/', '-', '\\', '-', '|'];
let index = 100;
for (let i = 0; i < spinner.length - 1; i++) {
  index += 200;
  setTimeout(() => {
    process.stdout.write(`\r${spinner[i]}   `);
  }, index);
}