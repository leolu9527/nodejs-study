var pet = {
	words: '...',
	speak: function(say) {
		console.log(say+' '+this.words)
	}
}

var dog = {
	words: 'wang'
}

pet.speak.call(dog,'speak')