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
<div class="container">
  <div class="left"></div>
  <div class="right"></div>
</div>


.container {
  position: relative;
  display: flex;
  width: 500px; /* 容器宽度 */
}

.left {
  width: 50%;
  height: 300px; /* div高度 */
  border-right: 1px solid #000; /* 连接div的垂直边框 */
}

.right {
  width: 50%;
  height: 300px;
  border-left: 1px solid #000; /* 连接div垂直边框 */
  position: relative;
}

.right:before {
  content: "";
  position: absolute;
  top: 50%;
  left: -10px;
  width: 10px; /* 长度 */
  height: 1px; /* 粗细 */
 -color: black;
}

.right:after {
  content: "";
  position: absolute;
  top: 50%;
  right: -10px;
  width: 10px;
  height: 1px;
  background-color: black;
}