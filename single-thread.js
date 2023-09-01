function fibonacci(n) {
  return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

const doFib = (iterations) =>
  new Promise((resolve) => {
    const start = Date.now();
    const result = fibonacci(iterations);
    console.log(`doFib done in: ${Date.now() - start}ms) `);
    resolve(result);
  });

// @ts-ignore
const main = async () => {
  const start = Date.now();
  /*
    it all done so obviously it didn't actually execute all of these 
    concurrently it actually did it one at a time it did it synchronously why because
    in JavaScript you can't just take a synchronous function and then wrap it 
    in an async promise and expect it to magically become async
  */
  //  Promise all waits for the all the functions to be done.
  const values = await Promise.all([
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
  ]);
  console.log("values: ", values);
  console.log(`doFib done in: ${Date.now() - start}ms) `);
};
main().catch(console.error);