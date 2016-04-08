var https= require('https')

var cheerio = require('cheerio')

var url  = 'https://www.zhihu.com/people/waitfor9527'

function filterUser(html) {
  var $ = cheerio.load(html)
   //{
   //	nickname: '',
   // bio: '',
   // user_agree:0,
   // user_thanks:0
   //}

  var userinfo = {}

  userinfo.nickname=$('.title-section .name').text()
  userinfo.bio=$('.bio').text()
  userinfo.user_thanks=$('.zm-profile-header-user-thanks strong').text()
  userinfo.user_agree=$('.zm-profile-header-user-agree strong').text()


  return userinfo
}


function printUserInfo(info) {
  console.log('昵称:' + info.nickname + '\n')
  console.log('一句话:' + info.bio + '\n')
  console.log('赞同:' + info.user_agree + '\n')
  console.log('感谢:' + info.user_thanks + '\n')

}


https.get(url,function (res) {
  var html = ''
  res.on('data',function(data) {
    html += data
  })

  res.on('end',function(){
    var info = filterUser(html)
    printUserInfo(info)
  })
}).on('error',function() {
  console.log('loading')
})