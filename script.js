window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
function createRandomPromise() {
  return new Promise((resolve) => {
    const randomTime = Math.floor(Math.random() * 5000) + 1000; // Random time between 1000ms (1s) and 5000ms (5s)
    setTimeout(() => {
      resolve(`Resolved after ${randomTime / 1000} seconds`);
    }, randomTime);
  });
}

// Create 5 promises and add them to the promises array
for (let i = 0; i < 5; i++) {
  window.promises.push(createRandomPromise());
}

// Use Promise.any() to wait for the first promise to resolve
Promise.any(window.promises)
  .then((result) => {
    document.getElementById('output').innerText = result;
  })
  .catch((error) => {
    console.error('All promises were rejected:', error);
  });