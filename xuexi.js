var partition = function (s) {
  const res = [];

  function dfs(temp, start) {
      if (start == s.length) {
          res.push(temp.slice());
          return;
      }
      for (let i = start; i < s.length; i++) {
          if (isPali(s, start, i)) {
              temp.push(s.substring(start, i + 1));
              dfs(temp, i + 1);
              temp.pop();
          }
      }
  }
  dfs([], 0);
  return res;
};

function isPali(s, l, r) {
  while (l < r) {
      if (s[l] != s[r]) {
          return false;
      }
      l++;
      r--;
  }
  return true;
}







var r = ''
for(var i=0;i<7;i++){
  console.log(r+='#')
}

for(var i=0;i<100;i++){
  var a=i+1
  if(a%3==0&&a%5==0){
    console.log('fizzbuzz')
  } else if(a%3==0){
    console.log('fizz')
  } else if(a%5==0){
    console.log('buzz')
  } else console.log(a)
}
// chrome.exe --proxy-server=http://10.3.3.3:55555
function min(a,b){
  return a>b ? b : a
}

function isEven(a){
  if(a<0){ return'请输入大于2的正整数'}
  if(a==0||a==1){
    return a?false:true
  }
  a= a-2
  return isEven(a)
}

function countBs(a){
  var r = 0
  for(var i=0;i<a.length;i++){
    if(a[i] == 'B') r++
  }
  return r
}

function countChar(a,b){
  var r= 0
  for(var i=0;i<a.length;i++){
    if(a[i] == b) r++
  }
  return r
}

function qipan(a){
  var r1 = ''
  var r2 = ''
  for(var i=0;i<a;i++){
    r1.length % 2 ? r1+=' ': r1+='#'
    r2.length % 2 ? r2+='#': r2+=' '
  }
  for(var i=0;i<a;i++){
    console.log(i%2?r1:r2)
  }
}

function qipan(a){
  var r1 = ''
  var r2 = ''
  for(var i=0;i<a;i++){
    r1.length % 2 ? r1+=' ': r1+='#'
    r2.length % 2 ? r2+='#': r2+=' '
  }
  var r=''
  for(var i=0;i<a;i++){
    i%2? r = r+r1+'\n' : r = r+r2+'\n'
  }
  return console.log(r)
}
function qipan(a){
  var r1 = ''
  var r2 = ''
  for(var i=0;i<a;i++){
    if(r1.length % 2 ==0) r1 +='#'
    else r1 +=' '
    if(r2.length % 2 ==0) r2 +=' '
    else r2 +='#'
  }
  var r=''
  for(var i=0;i<a;i++){
    if(i%2 == 1) r = r+r1+'\n'
    else r = r+r2+'\n'
  }
  return console.log(r)
}

function range(start,end){
  var res = []
  for (var i = start;i <=end ;i++){
      res.push(i)
  }
  return res
}

function sum(array){
  var res = 0
  for(var i=0;i<arry.length;i++){
      res+=array[i]
  }
  return res
}

function range(start,end,step){
  var res = []
  if(start < end ){
      for (var i = start;i <=end ;i+=step){
          res.push(i)
      } return res
  } else if(start > end&&step <0){
      for(var i = start;i>=end ;i+=step){
          res.push(i)
      } return res
  }
}
function reverseArray(array){
  var res = []
  var j = array.length
  for(var i=0;i<j;i++){
      res.push(array.pop())
  }
  return res
}

function reverseArrayInPlace(array){
  var len = array.length
  for(var i = 0;i < (len >> 1);i++){
    var temp = array[i]
    array[i] = array[len - i - 1]
    array[len - i - 1] = temp
  }
  return array
}

var Stack =function() {
  var result = []
  this.get = function(){
    return result
  }
  this.push = function(ele){
    result.push(ele)
  }
  this.pop = function(){
    return result.pop()
  }
  this.peek = function(){
    return result[result.length - 1]
  }
  this.isEmpty = function(){
    return result.length == 0
  }
  this.clear = function (){
    result = []
  }
  this.size = function(){
    return result.length
  }
}

function  d2b (d){
  var s = new Stack()
  var c = 0
  var r = ''
  while(d > 0){
    s.push(d % 2)
    d = Math.floor(d / 2)
    c++
  }
  for(var i = 0;i < c;i++){
    r+= s.pop()
  }
  return r
}


