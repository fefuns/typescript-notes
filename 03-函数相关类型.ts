// function add(first: number, second: number) {
//   return first + second;
// }
/**
 * 思考上面这段代码足够完善吗，是否需要写函数返回值的类型注解？
 * 答案是需要，因为正常情况下，ts可以通过类型推断返回值为number，
 * 但是有可能函数体中为 return first + second + ''，这样就容易造成与预期不符的问题
 * 因此应该修改成如下
 */
function add(first: number, second: number): number {
  return first + second;
}

/**
 * 函数void表示该函数没有返回值
 */
function voidFn(): void {
  console.log('void');
}
/**
 * never 表示该函数永远不会执行完成
 */
function neverFn1(): never {
  throw new Error();
  console.log('a'); // 这串代码永远不会执行
}

function neverFn2(): never {
  while (true) {}
  console.log('a'); // 这串代码永远不会执行
}
/**
 * 函数参数解构赋值应该如何定义ts类型
 */
// function add1({ first: number, second: number }) {
//   return first + second;
// }
/**
 * 上面这种方式是错误的，正确方法如下
 * { first: number; second: number } 是对解构的参数定义类型
 * 后面的:number 表示该函数返回值为 number 类型
 */
function add1({ first, second }: { first: number; second: number }): number {
  return first + second;
}
const total1 = add1({ first: 1, second: 2 });
