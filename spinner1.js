const spinnerKeys = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|',];
let counter = 100;
for (let key of spinnerKeys) {
  setTimeout(() => {
    process.stdout.write(`\r${key}   `);
  }, counter);
  counter += 200;
}