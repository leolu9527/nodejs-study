var  EventEmitter = require('events').EventEmitter

var life = new EventEmitter()


//增加事件数量
life.setMaxListeners(11)


//addEventListener   10件事


function water(who){
	console.log('给' + who + ' 洗衣服1')
}

life.on('安慰',water)

life.on('安慰',function (who) {
	console.log('给' + who + ' 洗衣服2')
})

life.on('安慰',function (who) {
	console.log('给' + who + ' 洗衣服3')
})


life.on('安慰',function (who) {
	console.log('给' + who + ' 累死了')
})

life.on('玩坏',function (who) {
	console.log('玩坏' + who)
})

//移除
life.removeListener('安慰',water)

//移除所有/一类
life.removeAllListeners('安慰')

//是否监听
var hasListenter = life.emit('安慰','汉子')
var hasListenter1 = life.emit('玩坏','汉子')
var hasListenter2 = life.emit('bbb','汉子')

console.log(life.listeners('安慰').length)

console.log(EventEmitter.listenerCount(life,'安慰'))




console.log(hasListenter)
console.log(hasListenter1)
console.log(hasListenter2)
