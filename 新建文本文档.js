function sq(n){
  var i = n / 2
  var left = 0
  var right = n
  while( Math.abs(i * i - n) >= 0.0001){
    if(i * i > n) {
      right = i
      i = (i + left) / 2

    } else {
      left = i
      i = (i + right) /2
    }
  }
  return i.toFixed(3) * 1
}

var largestNumber = function(nums) {
  if(nums.reduce((x,y)=>x+y)== 0) return '0'
  return ''+ nums.sort((x,y) => {
    var xx = 10
    var yy = 10
    while(xx <= y){
      xx *= 10
    }
    while(yy <= x){
      yy *= 10
    }
    return (y * yy + x) - (x * xx + y)
  }).join('')
};

function ww(n){
  var res = 0
  while(n > 0){
    res++
    var d = n % 10
    n = (n - d) / 10
  }
  return res
}

var dayOfYear = function(date) {
  var arr = date.split('-')
  var res = 0
  for(var i = 1; i < arr[1] * 1;i++){
    if(i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10) res += 31
    else if(i == 2){
      if(arr[0] % 4 == 0 && arr[0] % 100 != 0 || arr[0] % 400 == 0) res += 29
      else res += 28
    } else res += 30
  }
  return res + arr[2] * 1
};


var validPalindrome = function(s) {
  var i = 0
  var j = s.length - 1
  var count = 0
  while(i < j){
    if(s[i] == s[j]){
      i++
      j--
    } else return isPalindrome(i,j - 1 ,s) || isPalindrome(i + 1,j,s)
  }
  return true
  function isPalindrome(x , y , str){
    let i = x
    let j = y
    while(i <= j){
      if(str[i] == str[j]){
        i++
        j--
      } else {
        return false
      }
    }
    return true
  }
};

// var validPalindrome = function(s) {
//   var i = 0
//   var j = s.length - 1
//   var count = 0
//   while(i <= j){
//     if(count == 2) return false
//     if(s[i] == s[j]){
//       i++
//       j--
//     } else {
//       if(s[i] == s[j - 1] && s[i + 1] == s[j - 2]){
//         i++
//         j -= 2
//         count++
//       } else if(s[i + 1] == s[j] && s[i + 2] == s[j - 1]){
//         j--
//         i+=2
//         count++
//       } else return false
//     }
//   }
//   return true

// };

var reorderSpaces = function(text) {
  var count = 0
  for(var i = 0;i < text.length;i++){
    if(text[i] == ' ') count++
  }
  text = text.trim().split(' ').filter(x => x[0] != ' ' && x)
  var res = ''
  var tail0 = ''
  if(text.length - 1 == 0){
    while(count > 0){
      tail0 += ' '
      count--
    }
  } else {
    var str0 = Math.floor(count / (text.length - 1))
    var c0 = ''
    while(str0 > 0) {
      c0 += ' '
      str0--
    }
    var tail = count % (text.length - 1)
    while(tail > 0){
      tail0 += ' '
      tail--
    }
  }
  for(var j = 0;j < text.length;j++){
    if(j != text.length - 1)res = res + text[j] + c0
    if(j == text.length - 1) res = res + text[j] + tail0
  }
  return res
};

var reformat = function(s) {
  var countChar = 0
  var countNumber = 0
  for(let i = 0;i < s.length;i++){
    if(s[i].charCodeAt() > 58) countChar++
    else countNumber++
  }
  var res = ''
  if( Math.abs(countChar - countNumber) > 1) return res

  var i = 0
  var j = 0
  if(countChar > countNumber){

    while(res.length < s.length){
      if(!(res.length % 2)){
        if(s[i].charCodeAt() > 58) {
          res += s[i]
          i++
        } else i++
      } else {
        if(s[j].charCodeAt() < 58){
          res += s[j]
          j++
        } else j++
      }
    }
  }else {
    while(res.length < s.length){
      if(!(res.length % 2)){
        if(s[i].charCodeAt() < 58) {
          res += s[i]
          i++
        } else i++
      } else {
        if(s[j].charCodeAt() > 58){
          res += s[j]
          j++
        } else j++
      }
    }
  }
  return res
};
