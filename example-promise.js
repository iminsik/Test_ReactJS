// Challenge Area

function addPromise (a, b) {
  return new Promise(function(resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    }
    else {
      reject('One of the parameters is not number.');
    }
  });
}

addPromise(1, 2)
.then(function(result) {
  console.log('Success:', result);
})
.catch(function(err){
  console.log('Fail:', err);
});