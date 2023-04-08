const myPromise = new Promise((resolve, reject) => {
  const user = "hasan";
  if (!user) {
    reject("something went wrong");
    return;
  }
  setTimeout(() => {
    resolve("successfully got the data");
  }, 1000);
});

myPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("done");
  });
