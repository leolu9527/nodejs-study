/**
 * Created by waitfor9527 on 16/4/7.
 */
var http = require('http')
var Promise = require('bluebird')
var cheerio = require('cheerio')
var baseUrl = 'http://www.imooc.com/learn/'
var videoIds = [348,259,197,134,75]
function filterChapters(html) {
  var $ = cheerio.load(html)
  var chapters = $('.chapter')
  var title = $('.course-infos .path span').text()
  var number = $('.statics .meta-value strong').text().trim()
  //courseDate = {
  //  title:title,
  //  number:number,
  //  videos:[{
  // 	  chapterTitle: '',
  // 	  videos: [
  // 		  title: '',
  // 		  id: ''
  // 	  ]
  //  }]
  //}

  var courseDate = {
    title:title,
    number:number,
    videos:[]
  }
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

    courseDate.videos.push(chapterData)


  })

  return courseDate
}


function printCourseInfo(coursesDate) {
  coursesDate.forEach(function(courseData){
    console.log(courseData.number + '人学过' +courseData.title + '\n' )
  })
  coursesDate.forEach(function(courseData) {
    console.log('###' +courseData.title + '\n' )
    
    courseData.videos.forEach(function (item) {
      var chapterTitle = item.chapterTitle
      console.log(chapterTitle + '\n')
      item.videos.forEach(function(video) {
        console.log(' {' +video.id+'}' +video.title +'\n')
      })
    })

  })
}


function getPageAsync(url){
  return new Promise(function(resolve,reject){
    console.log('正在爬取' + url)

    http.get(url,function (res) {
      var html = ''
      res.on('data',function(data) {
        html += data
      })

      res.on('end',function(){
        resolve(html)


      })
    }).on('error',function(e) {
      reject(e)
      console.log('出错')
    })

  })
}

var fethCourseArray = []

videoIds.forEach(function(id) {
  fethCourseArray.push(getPageAsync(baseUrl + id))
})

Promise.all(fethCourseArray).then(function(pages){
  var coursesData = []
  pages.forEach(function(html) {
    var courses = filterChapters(html)

    coursesData.push(courses)
  })

  coursesData.sort(function(a,b){
    return a.number < b.number
  })

  printCourseInfo(coursesData)
})

