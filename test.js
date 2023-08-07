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

<div style="width: 200px;height: 200px;border: 1px solid red;">
    <svg width="100%" height="100%">
        <path d="M 10 100 C 150 100, 50 10, 190 10" fill="none" stroke="red" />
  <path d="M 10 100 C 150 100, 50 190, 190 190" fill="none" stroke="red" />
    </svg>
</div>
