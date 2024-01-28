async function wait(thing, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(thing);
      resolve();
    }, ms);
  });
}

async function stretch() {
  await wait("done stretching", 1000);
}

async function runOnTreadmill() {
  await wait("2", 500);
}

async function liftWeights() {
  await wait("3", 2000);
}

// refactor this function to handle Promises using async/await instead of
// .then and .catch
async function workout() {
  await stretch();
  await runOnTreadmill();
  await liftWeights();
  console.log("done working out");
  // .then(runOnTreadmill)
  // .then(liftWeights)
  // .then(() => console.log("done working out"))
  // .catch((err) => console.log(err));
}

/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/

workout();
// should print out the following:
// done stretching
// done running on treadmill
// done lifting weights
// done working out
