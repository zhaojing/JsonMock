//引入mockjs文件
let Mock  = require('mockjs');
let Random = Mock.Random;
module.exports = function() {
  var data = { 
      users: [],
      type:{
        a:"a",
        b:"b"
      }
  };
  for (var i = 0; i < 20; i++) {
    var content = Random.cparagraph(0,10);
    data.users.push({
        "id": i,
        "name": Random.cname(),
        "activeStatus": Random.integer(0,1),
        "age": Random.integer(10,100),
        "status": Random.integer(0,1),
        "gender": Random.integer(0,3),
        "nickName": Random.first(),
        "email": Random.first()+"@thoughtworks.com",
        "phone": Random.integer(130,139) + Random.integer(000000000,999999999).toString(),
        "image": Random.image('100x100'),
        "address": Random.county(true)
    })
  }

  return data
}