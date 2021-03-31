/**
 * 1. 假定有这么个函数
 */
// function join(first: string | number, second: string | number) {
//   return `${first}${second}`;
// }
// join('1', 1);
// join(1, 1);
// join('1', '1');
// join(1, '1');
/**
 * 2. 如果此时对join函数想再做一道限制，
 * 如果first是一个number，那second也必须是一个number;
 * 如果first是一个string，那second也必须是一个string;
 * 那么就需要应用TS的泛型的概念  generic 泛指的类型
 * <T> 可以随便指定，也可以是<A>
 */
function join<T>(first: T, second: T) {
  return `${first}${second}`;
}
join<number>(1, 1);
join<string>('1', '1');
// join<number>('1', 1); // 会报错
// join<string>(1, '1') // 会报错
/**
 * 3. 也可以指定数组中的项为泛型
 * params: Array<T> 等同于 T[]
 */
function map<T>(params: Array<T>) {
  return params;
}
/**
 * 4. 指定多个泛型
 */
function join1<T, P>(first: T, second: P) {
  return `${first}${second}`;
}
join1<number, string>(1, '1');
join1(1, '1'); // 不会报错，因为TS的类型推断机制
/**
 * 5. 添加函数返回值也是一个泛型
 */
function join2<T>(first: T, second: T): T {
  return first;
}
