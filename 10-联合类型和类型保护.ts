interface Bird {
  fly: boolean;
  sing: () => {};
}
interface Dog {
  fly: boolean;
  bark: () => {};
}
/**
 * 1. 输入animal. 的时候，会发现编辑器只智能提示了一个fly属性，并没有提示出sing和bark方法，这是因为animal在这里是一个联合类型，它只会去Bird 和Dog接口中共有的属性和方法。如果这时候强行输入  animal.sing() 方法，TS就会检测出错误，因为 animal并不一定会有sing方法。如果需要纠正这个错误提示，就需要应用TS中的类型保护的机制
 * @param animal
 */
// function trainAnimal(animal: Bird | Dog) {
//   animal.fly;
// }
/**
 * 2. 类型保护机制之类型断言
 */
// function trainAnimal(animal: Bird | Dog) {
//   if (animal.fly) {
//     (animal as Bird).sing();
//   } else {
//     (animal as Dog).bark();
//   }
// }
/**
 * 3. 类型保护机制之 in 语法
 */
function trainAnimal(animal: Bird | Dog) {
  if ('sing' in animal) {
    animal.sing();
  } else {
    animal.bark();
  }
}
/**
 * 4. 类型保护机制之 typeof 语法
 */
function add(first: string | number, second: string | number) {
  if (typeof first === 'string' || typeof second === 'string') {
    return `${first}${second}`;
  }
  return first + second; // 如果不写上面的 if 也会报错
}
/**
 * 5. 类型保护机制之 instanceof 语法
 */
class NumberObj {
  count: number;
}
function addSecond(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    // 注意上面NumberObj 是一个class ，并不是一个interface。
    return first.count + second.count;
  }
  return 0;
}
