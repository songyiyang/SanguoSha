//= require sanguosha
//= require jquery
//= require jquery.ui.all
//= require jquery_ujs
//= require jquery.ui.touch-punch.min
//= require turbolinks
//= require bootstrap
//= require private_pub
//= require_tree .
$(function(){
  Function.prototype.bind=(function(){}).bind||function(b){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");}function c(){}var a=[].slice,f=a.call(arguments,1),e=this,d=function(){return e.apply(this instanceof c?this:b||window,f.concat(a.call(arguments)));};c.prototype=this.prototype;d.prototype=new c();return d;};
});