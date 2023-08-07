var str = 'aaaabbbbssssxcccddddsdfscxxasa'
  var obj = {};
  for(var i=0; i<str.length; i++){
    var char = str.charAt(i)
    if(obj[char]){
      obj[char]++;
    }else{
      obj[char] = 1;
    }
  }
  console.log(obj);
  //统计出来最大值
  var max = 0;
  for(var key in obj){
    if(max < obj[key]){
      max = obj[key]
    }
  }
  //拿最大值去对比
  for(var key in obj){
    if(obj[key] == max){
      console.log('最多的字符是'+key);
      console.log('出现的次数是'+max);
    }
  }

.line-container {
  position: relative;
}
.point {
  position: absolute;
  border-radius: 50%;
  background-color: #000;
}
.point-1 {
  top: 50px;
  left: 50px;
  width: 20px;
  height: 20px;
}
.point-2 {
  top: 100px;
  left: 150px;
  width: 20px;
  height: 20px;
}
.line {
  position: absolute;
  height: 2px;
  background-color: black;
}
.point-1::before {
  content: "";
  position: absolute;
  top: -35%;
  left: 150%;
  height: 200%;
  width: 100px;
 background-color: #000;
  transform: rotate(45deg);
  border-radius: 50%;
}

.point-2::after {
  content: "";
  position: absolute;
  top: -35%;
  left: -100%;
  height: 200%;
  width: 100px;
  background-color: #000;
  transform: rotate(-45deg);
  border-radius: 50%;
}