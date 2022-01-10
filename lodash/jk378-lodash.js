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
  },
  concat : function concat(array){
    var res = array.slice()
    if(arguments.length == 1) return array
    for(var i = 1;i < arguments.length;i++){
      if(Array.isArray(arguments[i])){
        res.push(...arguments[i])
      } else res.push(arguments[i])
    }
    return res
  },


  drop : function drop(array, n = 1){
    var res = []
    var len = array.length
    if(n >= len) return res
    for(var i = n;i < len;i++){
      res.push(array[i])
    }
    return res
  },
  dropRight : function dropRight(array, n = 1){
    var res = []
    var len = array.length
    if(!n) return array
    for(var i = 0;i < len - n;i++){
      res.push(array[i])
    }
    return res
  },

  fill : function fill(array, value, start = 0, end = array.length){
    for(var i = start; i < end;i++){
      array[i] = value
    }
    return array
  },
  findIndex : function findIndex(array, predicate = identity,fromIndex = 0){

  },
  flatten : function flatten(array){
    var res = []
    for(var i = 0;i < array.length;i++){
      if(Array.isArray(array[i])){
        for(var j = 0; j < array[i].length;j++){
          res.push(array[i][j] )
        }
      } else(
        res.push(array[i])
      )
    }
    return res
  },
  flattenDeep : function flattenDeep(array, res = []){
    for(var i = 0;i < array.length;i++){
      if(!Array.isArray(array[i])) res.push(array[i])
      else flattenDeep(array[i],res)
    }
    return res
  },
  flattenDepth : function flattenDepth(array, depth = 1){

  },
  fromPairs : function fromPairs(pairs) {
    var res = {}
    for(var i = 0;i < pairs.length;i++){
      res[pairs[i][0]] = pairs[i][1]
    }
    return res
  },
  head : function head(array){
    return array[0]
  },
  indexOf : function indexOf(array, value, fromIndex=0){
    if(fromIndex < 0) fromIndex = array.length + fromIndex
    for(var i = fromIndex;i < array.length;i++){
      if(array[i] == value) return i
    }
    return -1
  },
  initial : function initial(array){
    var res = []
    for(var i = 0;i < array.length - 1;i++){
      res.push(array[i])
    }
    return res
  },
  join : function join(array, separator = ','){
    if(array.length == 0) return ''
    var res = '' + array[0]
    for(var i = 1;i < array.length;i++){
      res = res + separator + array[i]
    }
    return res
  },

}
