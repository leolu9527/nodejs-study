//this 指向拥有者  函数内部使用


var pet = {
	works: '...',
	speak: function () {
		console.log(this.works)
		console.log(this.some)
	}
}

pet.some = 'some'
pet.speak()



function Pet2(works) {
	this.works = works
	this.speak = function () {
		console.log(this.works)
		console.log(this)
	}
}

var cat = new Pet2('Miao')
cat.speak()