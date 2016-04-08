//EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。
//当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。


var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.on('someEvent', function(arg1, arg2) {
  console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function(arg1, arg2) {
  console.log('listener2', arg1, arg2);
});



//该事件在添加新监听器时被触发。
emitter.on('newListener', function(arg1) {
  console.log('newListener', arg1,'\n');
});


var mmfe = function (ff){
  console.log('mmfe', ff);
}


emitter.addListener('someEvent',mmfe)


emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');

emitter.emit('someEvent', '第二次监听1', '第二次监听2');


var count = EventEmitter.listenerCount(emitter,'someEvent')

console.log(count)
