/**
 * 1. 假如有以下三个类
 */
// class Circle {
//   getArea() {}
// }
// class Square {
//   getArea() {}
// }
// class Triangle {
//   getArea() {}
// }
// 2. 会发现这些类都有一些通性，都有一个计算面积getArea方法，因此可以用abstract定义一个抽象类
abstract class Geom {
  width: number;
  getType() {
    return 'Geom';
  }
  abstract getArea(): number; // 注意这里前面如果有abstract的话，表示这是类中的一个抽象的方法。getArea() 后面是不能有大括号{}的
}
// new Geom(); // 会报错，因为抽象类是不可以直接被实例化的，它只能被继承

// class Circle extends Geom{
//   // 会报错，因为Geom里面含有一个抽象的方法getArea, 里面必须有实际的这个方法
// }
class Square extends Geom {
  getArea() {
    return 123; // Square继承了抽象类，里面也定义了一个具体的getArea方法，这时候才不会报错
  }
}
class Triangle {}

/**
 * abstract 和 inferface 有什么区别？
 * abstract：抽象类是把一些类相关的通用的东西提炼出来
 * inferface：接口是把其他的各种各样的通用的东西提炼出来
 */
