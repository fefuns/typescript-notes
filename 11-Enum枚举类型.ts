// 1. JS写法
// const Status = {
//   OFFLINE: 0,
//   ONLINE: 1,
//   DELETED: 2,
// };
// 2. Ts 枚举写法
enum Status {
  OFFLINE,
  ONLINE,
  DELETED,
}
console.log(Status.OFFLINE, Status.ONLINE, Status.DELETED); // => 0 1 2
console.log(Status[0]); // => OFFLINE
// 3. 上面的console.log 说明枚举类型默认是从 0 开始的，也可以指定从其他数字开始，比如
// enum Status {
//   OFFLINE = 2,
//   ONLINE,
//   DELETED,
// }
// console.log(Status.OFFLINE, Status.ONLINE, Status.DELETED); // => 2 3 4
function getResult(status) {
  if (status == Status.OFFLINE) {
    return 'offline';
  } else if (status === Status.ONLINE) {
    return 'online';
  } else if (status === Status.DELETED) {
    return 'deleted';
  }
  return 'error';
}
