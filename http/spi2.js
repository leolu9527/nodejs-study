var http = require('http')

var cheerio = require('cheerio')

var url  = 'http://www.imooc.com/learn/348'

function filterChapters(html) {
	var $ = cheerio.load(html)
	var chapters = $('.chapter')

	// [{
	// 	chapterTitle: '',
	// 	videos: [
	// 		title: '',
	// 		id: ''
	// 	]
	// }]

	var courseDate = []
	chapters.each(function(item) {
		var chapter = $(this)
		var chapterTitle = chapter.find('strong').text()
		var videos = chapter.find('.video').children('li')
		var chapterData = {
			chapterTitle: chapterTitle,
			videos: []
		}

		videos.each(function() {
			var video = $(this).find('.studyvideo')
			var videoTitle =video.text()
			var id = video.attr('href').split('video/')[1]

			chapterData.videos.push({
				title: videoTitle,
				id: id
			})
		})

		courseDate.push(chapterData)


	})

	return courseDate
}


function printCourseInfo(courseDate) {
	courseDate.forEach(function(item) {
		var chapterTitle = item.chapterTitle

		console.log(chapterTitle + '\n')

		item.videos.forEach(function(video) {
			console.log(' {' +video.id+'}' +video.title +'\n')
		})
	})
}


http.get(url,function (res) {
	var html = ''
	res.on('data',function(data) {
		html += data
	})

	res.on('end',function(){
		var courseDate = filterChapters(html)
		printCourseInfo(courseDate)
	})
}).on('error',function() {
	console.log('loading')
})