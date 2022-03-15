var jk378 = {
  iteratee :function iteratee(predicate){
    if(typeof predicate === 'string'){
      predicate = jk378.property(predicate)
    }
    if(Array.isArray(predicate)){
      predicate = jk378.matchesProperty(...predicate)
    }
    if(typeof predicate === 'object'){
      predicate = jk378.matches(predicate)
    }
    return predicate
  },
  matchesProperty: function matchesProperty (...args){

    var path = jk378.toPath(args[0])
    return function (obj){
      for(var key of path){
        obj = obj[key]
      }
      return obj === args[1]
    }
  } ,
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
    if(Array.isArray(predicate)){
      for(var i = fromIndex;i < array.length;i++){
        for(var key in array[i]){
          if(key === predicate[0] && array[i][key] === predicate[1]) return i
        }
      }
    }
    if(typeof predicate === 'object'){
      for(var i = fromIndex;i < array.length;i++){
        var flag = true
        for(var key in predicate){
          if(key in array[i] && predicate[key] === array[i][key]) continue
          else flag = false
        }
        if(flag) return i
      }
    }
    if(typeof predicate === 'string'){
      for(var i = fromIndex;i < array.length;i++){
        if(array[i][predicate] === true) return i
      }
    }
    if(typeof predicate === 'function'){
      for(var i = fromIndex;i < array.length;i++){
        if(predicate(array[i])) return i
      }
    }
    return -1
  },
  findLastIndex: function findLastIndex(array, predicate = identity,fromIndex = array.length-1){
    if(Array.isArray(predicate)){
      for(var i = fromIndex;i >= 0;i--){
        for(var key in array[i]){
          if(key === predicate[0] && array[i][key] === predicate[1]) return i
        }
      }
    }
    if(typeof predicate === 'object'){
      for(var i = fromIndex;i >= 0;i--){
        var flag = true
        for(var key in predicate){
          if(key in array[i] && predicate[key] === array[i][key]) continue
          else flag = false
        }
        if(flag) return i
      }
    }
    if(typeof predicate === 'string'){
      for(var i = fromIndex;i >= 0;i--){
        if(array[i][predicate] === true) return i
      }
    }
    if(typeof predicate === 'function'){
      for(var i = fromIndex;i >= 0;i--){
        if(predicate(array[i])) return i
      }
    }
    return -1
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
    if(depth == 0) return [...array]
    var res = []
    for(var i = 0;i < array.length;i++){
      if(Array.isArray(array[i])) res.push(...flattenDepth(array[i],depth - 1))
      else res.push(array[i])
    }
    return res
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
  last : function last(array){
    return array[array.length - 1]
  },
  lastIndexOf : function lastIndexOf(array, value, fromIndex = array.length - 1){
    for(var i = fromIndex;i >= 0;i--){
      if(array[i] === value) return i
    }
    return -1
  },
  reverse : function reverse(array){
    var len = array.length
    for(var i = 0;i < len >> 1;i++){
      var t = array[i]
      array[i] = array[len - 1 - i]
      array[len - 1 - i] = t
    }
    return array
  },
  uniq : function uniq(array){
    var res = []
    var map = {}
    for(var i = 0;i < array.length;i++){
      if(array[i] in map) continue
      else{
        map[array[i]] = 1
        res.push(array[i])
      }
    }
    return res
  },
  without : function without(array){
    var map = {}
    var res = []
    for(var i = 1;i < arguments.length;i++){
      map[arguments[i]] = 1
    }
    for(var i = 0;i < array.length;i++){
      if(array[i] in map) continue
      res.push(array[i])
    }
    return res
  },
  zip : function zip (){
    var res = []

    for(var i = 0;i < arguments[0].length;i++){
      res[i] = []
      for(var j = 0;j < arguments.length;j++){
        res[i][j] = arguments[j][i]
      }
    }
    return res
  },
  isBoolean : function isBoolean (value){
    if(value === true || value === false) return true
    return false
  },
  isNaN : function isNaN(value){
    if(typeof(value) === 'object' && value !== value) return true
    if(value !== value) return true
    return false
  },
  toArray : function toArray(value){
    if(typeof(value) === 'number' || !value) return []
    var res = []
    if(typeof(value) === 'string' || Array.isArray(value)){
      for(var i = 0;i < value.length;i++){
        res.push(value[i])
      }
      return res
    }
    for(var key in value){
      res.push(value[key])
    }
    return res
  },
  max : function max(array) {
    if(array.length == 0) return undefined
    var max = array[0]
    for(var i = 1;i < array.length;i++){
      max = array[i] > max ? array[i] : max
    }
    return max
  },
  sum : function sum(array) {
    return array.reduce( (x,y) => x + y)
  },
  repeat : function repeat(string = '', n = 1){
    var res = ''
    for(var i = 0; i < n;i++){
      res += string
    }
    return res
  },
  range : function range(start = 0, end ,step = 1){
    if(arguments.length == 1){
      start = 0
      end = arguments[0]
    }
    var res = []
    if(step == 0) return new Array(end - start).fill(start)
    if(end < start  && step > 0) step *= - 1
    for(var i = start; start > end ? i > end : i < end; i += step){
      res.push(i)
    }
    return res
  },
  difference : function difference(array,...values){
    var map = {}
    var res = []
    for(var i = 0;i < values.length;i++){
      for(var j = 0;j < values[i].length;j++){
        map[values[i][j]] = 1
      }
    }
    for(var i = 0;i < array.length;i++){
      if(array[i] in map) continue
      res.push(array[i])
    }
    return res
  } ,
  nth : function nth(array, n = 0){
    return n >= 0 ? array[n] : array[array.length + n]
  },
  groupBy : function groupBy(array, predicate) {
    return array.reduce((grouped, it) => {
      var action
      if(typeof(predicate) == 'function') action = predicate(it)
      else action = it[predicate]
      if(!grouped[action]){
        grouped[action] = []
      }
      grouped[action].push(it)
      return grouped
    },{})
  },
  flatMap : function flatMap(ary, predicate = it => it){
    var res = []
    return jk378.flatten(ary.map( it => predicate(it)))
  },
  toPath : function toPath(val){
    if(typeof val === 'string') return val.split('.').flatMap( it => it.split('[')).flatMap( it => it.split(']'))
    .filter(it =>it)
    else return val
  },
  property : function property(path){
    return function(obj){
      var res = obj
      var t = jk378.toPath(path)
      for(var i = 0;i < t.length;i++){
        res = res[t[i]]
      }
      return res
    }
  },
  matches : function matches(source){
    return function(obj){
      for(var key in source){
        if(source[key] !== obj[key]) return false
      }
      return true
    }
  },
  isMatch : function isMatch(obj, src){
    for(var key in src){
      if(typeof src[key] === 'object'){
        return isMatch(obj[key], src[key])
      }
      if(src[key] !== obj[key]) return false
    }
    return true
  },
  constant: function constant(value){
    return function(){
      var res = value
      return res
    }
  },
  times : function times(n, predicate = it=>it){
    var res = []
    for(var i = 0;i < n;i++){
      res.push(predicate(i))
    }
    return res
  },
  once: function once (func){
    var res = null
    return function(...args){
      if(!res) {
        res = func(...args)
      }
      return res
    }
  },
  negate : function negate(func){
    return function (...args){
      return !func(...args)
    }
  },
  get : function get(obj, path , defaultValue = 'default'){
    var paths = jk378.toPath(path)
    var res = obj
    for(var i = 0;i < paths.length;i++){
      if(res)res = res[paths[i]]
      else return defaultValue
    }
    return res
  },
  has : function has(obj,path){
    var paths = jk378.toPath(path)
    for(var i = 0;i < paths.length;i++){
      if( obj && (paths[i] in obj)){
        obj = obj[path[i]]
      } else{
        return false
      }
    }
    return true
  },
  differenceBy:function differenceBy(array, ...args){
    var predicate
    if(!Array.isArray(args[args.length - 1] )){
      predicate = jk378.iteratee(args.pop())
    } else predicate = it => it
    var args = Array.from(args)
    args = jk378.flatten(args).map(it => predicate(it))
    var res = []
    array.forEach((it,idx) =>{
      if(!args.includes(predicate(it))){
        res.push(array[idx])
      }
    } )
    return res
  } ,
  differenceWith: function differenceWith(array,...args){
    var comparator = args.pop()
    var res = []
    var args = jk378.flatten(args)
    for(var i = 0;i < array.length;i++){
      var flag = false
      for(var j = 0;j < args.length;j++){
        if(comparator(array[j] , args[i])){
          flag = true
        }
      }
      if(!flag){
        res.push(array[i])
      }
    }
    return res
  },
  dropRightWhile:function dropRightWhile(array, predicate){
    var predicate = jk378.iteratee(predicate)
    var res = Array.from(array)
    for(var i = res.length - 1;i >= 0;i--){
      if(predicate(res[i])) res.pop()
      else return res
    }
    return res
  },
  dropWhile:function dropRightWhile(array, predicate){
    var predicate = jk378.iteratee(predicate)
    var res = Array.from(array)
    for(var i = 0;i < res.length ;i++){
      if(predicate(res[i])) {
        res.shift()
        i--
      }
      else return res
    }
    return res
  },
  intersection: function intersection(...arrays){
    var res = []
    var ary = arrays.shift()
    var array = this.flatten(arrays)
    for(var i = 0;i < ary.length;i++){
      if(array.includes(ary[i])){
        res.push(ary[i])
      }
    }
    res = Array.from(new Set(res))
    return res
  },
  intersectionBy: function intersectionBy(ary1,ary2,predicate){
    var res = []
    var predicate = this.iteratee(predicate)
    var ary2 = ary2.map(it => predicate(it))
    for(var i = 0;i < ary1.length;i++){
      if(ary2.includes(predicate(ary1[i]))){
        res.push(ary1[i])
      }
    }
    res = Array.from(new Set(res))
    return res
  },
  intersectionWith: function intersectionWith(ary1,ary2,comparator){
    var res = []
    for(var i = 0;i < ary1.length;i++){
      for(var item of ary2){
        if(comparator(ary1[i],item)) res.push(ary1[i])
      }
    }
    res = Array.from(new Set(res))
    return res
  },
  pull: function pull(array,...vals){
    for(var i = 0;i < array.length;i++){
      if(vals.indexOf(array[i]) >= 0){
        array.splice(i--,1)
      }
    }
    return array
  },
  pullAll :function pullAll(ary1,ary2){
    for(var i = 0;i < ary1.length;i++){
      if(ary2.indexOf(ary1[i]) >= 0){
        ary1.splice(i--,1)
      }
    }
    return ary1
  },
  uniqBy :function uniqBy(array, iteratee){
    var iteratee = this.iteratee(iteratee)
    var map = {}
    var res = []
    array.forEach((it,idx) =>{
      if(! (iteratee(it) in map)){
        map[iteratee(it)] = idx
        res.push(array[idx])
      }
    })
    return res
  },
  uniqWith: function uniqWith(array, comparator){
    var ary = Array.from(array)
    for(var i = 1;i < ary.length;i++){
      for(var j = 0;j < i;j++){
        if(comparator(ary[i] , ary[j])){
          ary.splice(i--,1)
          break
        }
      }
    }
    return ary
  },
  countBy : function countBy(collection, iteratee){
    var res = {}
    var iteratee = this.iteratee(iteratee)
    for(var item of collection){
      if(!(iteratee(item) in res)){
        res[iteratee(item)] = 1
      } else res[iteratee(item)]++
    }
    return res
  },
  maxBy:function maxBy(array, iteratee){
    var iteratee = this.iteratee(iteratee)
    var max = 0
    var maxV = iteratee(array[0])
    array.reduce((a,b,idx)=>{
      if(iteratee(b) > maxV){
        max = idx
        maxV = iteratee(b)
      }
    })
    return array[max]
  },
  sumBy: function sumBy(array, iteratee){
    var iteratee = this.iteratee(iteratee)
    return array.reduce( (a,b) => a + iteratee(b) ,0)
  },
  size: function size(collection){
    var sum = 0
    if(typeof collection === 'object'){
      for(var item in collection){
        sum++
      }
      return sum
    }
    return collection.length
  },
  sample: function sample(){

  },

  // every filter find forEach ceil   cloneDeep
  // keyBy,map isEqual isNil isNull  isNumber
  // partition,reduce,reduceRight,reject,shuffle,some

}
