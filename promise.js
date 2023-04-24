const myPromise = new Promise((resolve, reject) => {
  const user = "hasan";
  if (!user) {
    reject("something went wrong");
    return;
  }
  setTimeout(() => {
    resolve({ name: "john" });
  }, 1000);
});

const userIds = [1, 5, 9, 8, 9];
let userData = [];

for (let i = 0; i < userIds.length; i++) {
  const userId = userIds[i];
  userData.push(myPromise);
}

Promise.all(userData).then((res) => {
  console.log(res);
});
// console.log(userData);

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
