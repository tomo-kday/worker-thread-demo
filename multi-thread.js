/* 
 it will use worker thread which enables multi thread thus execution will be completed way faster than single threaded. 
*/

// https://partytown.builder.io/

const path = require("path");
const { Worker } = require("worker_threads");
const doFib = async (iterations) => {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    // ---- Start worker
    const worker = new Worker(path.join(__dirname, "fib.js"), {
      workerData: { iterations },
    });
    // ---- Listen for message from worker
    worker.once("message", (data) => {
      console.log(
        `worker [${worker.threadId}]: done in ${Date.now() - start}ms`
      );
      resolve(data);
    });
    // ---- Listen for error from worker
    worker.once("error", (err) => reject(err));
  });
};

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
