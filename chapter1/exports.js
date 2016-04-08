module.exports = {
	name: function() {
	console.log(module.exports)
	console.log('aaa')
	}
}

exports.name = function() {
	console.log(exports)
	console.log('fff')
}

//结果A

//所有的exports收集到的属性和方法，都赋值给了Module.exports。
//当然，这有个前提，就是Module.exports本身不具备任何属性和方法。
//如果，Module.exports已经具备一些属性和方法，那么exports收集来的信息将被忽略。