var hasGroupsSizeX = function(deck) {
  var counter =[]
  var arr = deck.sort((a,b)=>a-b)
  counter.length = arr.length
  counter.fill(0)
  var count = 0
  for(var i = 0;i < arr.length;i++){
      if(arr[i] == arr[i+1] && counter[count] == 0){
          counter[count] += 2
      } else if(arr[i] == arr[i+1]) counter[count] +=1
      if(arr[i] != arr[i + 1] && counter[count] == 0) counter[count]++
      if(arr[i] != arr[i + 1])  count++

      if(arr[i] != arr[i + 1] && arr[i + 1] != arr[i + 2]) return false
      if(count > counter.length) return false
  }
  for(var j = 2;j <= counter[0];j++ ){
      for(var k = 0;k < counter.length;k++){
          if(counter[k] % j != 0) break
          if(k == counter.length - 1) return true
      }
  }
  return false
};

var findTheDifference = function(s, t) {
  var arr1 = s.split('')
  var arr2 = t.split('')
  var res = arr1.concat(arr2)
  return String.fromCharCode(res.reduce( (x,y) => x ^ String(y).charCodeAt(),0))
};


// var wordPattern = function(pattern, s) {
//   var a = pattern.split('')
//   var s = s.split(' ')
//   if(a.length != s.length) return false
//   for(var i = 0;i < a.length;i++){
//     for(var j = a.length - 1;j > 0;j-- ){
//       if(i == j) return true
//       if(a[i] == a[j] && s[i] != s[j]) return false
//       if(a[i] != a[i + 1] && s[i] == s[j]) return false
//     }
//   }
//   return true
// };

