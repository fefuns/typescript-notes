/**
 * 假如有这么个文件，是通过import语法引入的jquery
 */
// import $ from 'jquery';
// $(function () {
//   $('body').html('<div>123</div>');
//   new $.fn.init();
// });

// ES6模块化
declare module 'jquery' {
  interface JqueryInstance {
    html: (html: string) => JqueryInstance;
  }
  // 混合类型
  function $(readyFunc: () => void): void;
  function $(selector: string): JqueryInstance;
  namespace $ {
    namespace fn {
      class init {}
    }
  }
  export = $;
}
