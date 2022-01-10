var jk378 = {
  chunk : function chunk(array, size = 1){
    var res = []
    var count = 0
    var temp = []
    for(var i = 0; i < array.length;i++){
      temp.push(array[i])
      count++
      if(count == size || i == array.length - 1){
        res.push(temp)
        temp = []
        count = 0
      }
    }
    return res
  },
  compact : function compact(array){
    var res = []
    for(var i = 0;i < array.length;i++){
      var t = array[i]
      if(!t || t !== t) continue
      res.push(t)
    }
    return res
  }



}
