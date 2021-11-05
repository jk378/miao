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
chrome.exe --proxy-server=http://10.3.3.3:55555
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

