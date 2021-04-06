/**
 * 比如通过<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>引入一个jquery的时候，页面上会写
 * $(function() {
 *    console.log(1);
 * })
 * 虽然代码可以正常运行，但是编辑器会对$有波浪线提示，
 * 因此可以试写一下 jquery.d.ts 文件，帮助编辑器识别$
 */
// 定义全局变量
// declare var $: (param: () => void) => void;
// 定义全局函数
interface JqueryInstance {
  html: (html: string) => JqueryInstance;
}
// 定义全局函数与函数重载
declare function $(readyFunc: () => void): void;
declare function $(selector: string): JqueryInstance; // 定义了这个之后，就可以使用 $('body').html('<p>11</p>')

// 如何对对象进行类型定义，以及对类进行类型定义，以及命名空间的嵌套
declare namespace $ {
  namespace fn {
    class init {} // 此时可以写 $.fn.init()方法了
  }
}
// 使用 interface 的语法，实现函数重载，这种方法不能定义对象
// interface JQuery {
//   (readyFunc: () => void): void;
//   (selector: string): JqueryInstance;
// }
// declare var $: JQuery;
