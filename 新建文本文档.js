

var mergeKLists = function(lists) {
  for(var i = 1;i < lists.length;i++){
    lists[i] = mergeTwoLists(lists[i],lists[i-1])
  }
  return lists[i - 1]
};


var mergeTwoLists = function(l1, l2) {

  var head = new ListNode()
  var p = head
  while(l1 && l2){
    if(l1.val > l2.val ){
      p.next = l2
      l2 = l2.next
    } else{
      p.next = l1
      l1 = l1.next
    }
    p = p.next
  }
  p.next = l1 ? l1 : l2
  return head.next
};

function sortArray(nums) {
  if(nums.length < 2) return nums
  var mid = nums.length >> 1
  var left = nums.slice(0,mid)
  var right = nums.slice(mid)

  sortArray(left)
  sortArray(right)

  var i = 0,j = 0,k = 0

  while(i < left.length && j < right.length){
    if(left[i] < right[j]){
      nums[k++] = left[i++]
    } else{
      nums[k++] = right[j++]
    }
  }
  while(i < left.length){
    nums[k++] = left[i++]
  }
  while(j < right.length){
    nums[k++] = right[j++]
  }
  return nums
}


function array2list(array){
  if(array.length == 0) return null
  var nodes = []
  for(var i = 0;i < array.length;i++){
    var node = {}
    node.val = array[i]
    node.next = null
    nodes.push(node)
  }
  for(var i = 0;i < nodes.length - 1;i++){
    nodes[i].next = nodes[i + 1]
  }
  return nodes[0]

}
function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
 }

var insertionSortList = function(head) {
  var dummy = new ListNode(0,head)
  var cur = head

  while(cur && cur.next){
    if(cur.next.val < cur.val){
      var temp = cur.next
      cur.next = cur.next.next
      var node = dummy
      while(node.next && node.next.val < temp.val){
        node = node.next
      }
      var c = node.next
      node.next = temp
      temp.next = c
    } else {
      cur = cur.next
    }
  }
  return dummy.next
};


var oddEvenList = function(head) {
  var odd = head
  var even = head.next
  var last = even
  while(odd && even && evev.next){
    odd.next = even.next
    odd = odd.next
    even.next = odd.next
    even = even.next
  }
  odd.next = last
  return head
};

var swapNodes = function(head, k) {
  var dummy = new ListNode(0,head)
  var p = dummy
  var count = 0
  while(p.next){
    count++
    p = p.next
  }

  var pi = dummy
  var i = k - 1
  while(i > 0){
    pi = pi.next
    i--
  }
  var pj = dummy
  var j = count - k
  while(j > 0){
    pj = pj.next
    j--
  }
  var t = pi.next.val

  pi.next.val = pj.next.val
  pj.next.val = t
  return dummy.next
};


var findRestaurant = function(list1, list2) {
  var map = {}
  var res = []
  for(var i = 0 ,j = 0; i < list1.length || j < list2.length;i++,j++){
    if(list1[i] in map && list1[i]) {
      map[list1[i]][0] = 2
      map[list1[i]][1] += i
    }else map[list1[i]] = [1,i]

    if(list2[j] in map && list2[j]) {
      map[list2[j]][0] = 2
      map[list1[j]][1] += j
    }else  map[list2[j]] = [1,j]
  }
  var min = Infinity
  for(var key in map){
    if(map[key][0] == 2 && map[key][1] < min){
      min = map[key][1]
    }
  }
  for(var key in map){
    if(map[key][0] == 2 && map[key][1] == min){
      res.push(key)
    }
  }
  return res
};

https://leetcode.com/problems/swap-nodes-in-pairs

function randomAry(n) {
  var ary = []
  for(var i = 0;i < n;i++){
    ary.push( Math.floor(Math.random() * n))
  }
  return ary
}
function isSorted(ary){
  for(var i = 1;i < ary.length;i++){
    if(ary[i] < ary[i - 1]) return false
  }
  return true
}

function swap(ary,i,j){
  var t = ary[i]
  ary[i] = ary[j]
  ary[j] = t
}

function selectSort(ary) {
  for(var i = 0;i < ary.length - 1;i++){
    var minindex = i
    for(var j = i + 1;j < ary.length;j++){
      if(ary[j] < ary[minindex]) {
        minindex = j
      }
    }
    swap(ary,i,minindex)
  }
  return ary
}
function bubbleSort(ary) {
  var n = ary.length
  var temp
  while(n > 1){
    var flag = true
    for(var i = 0; i < n - 1;i++){
      if(ary[i] > ary[i + 1]){
        temp = ary[i + 1]
        ary[i + 1] = ary[i]
        ary[i] = temp
        flag = false
      }
    }
    if(flag) return ary
    n--
  }
  return ary
}
function mergeSort(ary) {
  if(ary.length < 2) return ary
  var len = ary.length
  var mid = len >> 1
  var leftAry = ary.slice(0,mid)
  var rightAry = ary.slice(mid)
  mergeSort(leftAry)
  mergeSort(rightAry)
  var i = 0
  var j = 0
  var k = 0
  while(i < leftAry.length && j < rightAry.length){
    if(leftAry[i] > rightAry[j]){
      ary[k++] = rightAry[j++]
    } else {
      ary[k++] = leftAry[i++]
    }
  }
  while(i < leftAry.length){
    ary[k++] = leftAry[i++]
  }
  while(j < rightAry.length){
    ary[k++] = rightAry[j++]
  }
  return ary
}

function insertSort(nums){
  for(var i = 1;i < nums.length;i++){
    var temp = nums[i]
    var j = i
    while(temp < nums[j - 1]){
      nums[j] = nums[j - 1]
      j--
    }
    nums[j] = temp
  }
  return nums
}
var deleteDuplicates = function(head) {
  var dummy = new ListNode(0,head)
  var p = dummy
  while(p.next && p.next.next){
    if(p.next.val == p.next.next.val){
      var x = p.next.val
      while(p.next && p.next.val == x){
        p.next = p.next.next
      }
    } else{
      p = p.next
    }
  }
  return dummy.next
};


var swapPairs = function(head) {
  if(!head || !head.next) return head

  var temp = head.next
  head.next = swapPairs(head.next.next)
  temp.next = head
  return temp
};



function arrtList(arr){
  if(arr.length == 0) return null
  var head = {val: arr[0],next: null}
  var phead = head

  for(var i = 1;i < arr.length;i++){
    var temp = {val: arr[i],next:null}
    phead.next = temp
    phead = temp
  }
  return head
}

function atl(arr, start = 0){
  if(arr.length == start) {
    return null
  }
  var head = {
    val: arr[start],
    next: null,
  }
  var tail = atl(arr, start + 1)
  head.next = tail
  return head
}

function listToArray(head){
  var res = []
  while(head){
    res.push(head.val)
    head = head.next
  }
  return res
}

function prepend(val, head){
  return {val:val,rest:head}
}

function append(val, head) {
  var node = head
  while(node.next){
    node = node.next
  }
  node.next = {val:val,next: null}
  return head
}


function nth(list, index) {
  var p = list
  var count = 0
  while(count < index){
    if(!p.next) return undefined
    p = p.next
    count++
  }
  return p.val
}

function nth(list, n){

  if(list == null || n < 0) return undefined
  if(n == 0) return list.val

  return nth(list.next, n - 1)
}

function insert(list, n, val) {
  var count = 0
  var head = list
  if(count < n - 1){
    head = head.next
    count++
  }
  var t = head.next
  head = {
    val: val,
    next: t,
  }
  return list
}




var summaryRanges = function(nums) {
  var res = []
  var start = nums[0]
  var end
  for(var i = 1;i < nums.length;i++){
    if(nums[i] - nums[i - 1] == 1){
      end = nums[i]
    } else if(nums[i] - nums[i - 1] > 1 && end - start > 0){
      res.push(start + '->' + end)
      start = nums[i]
      end = nums[i]
    } else{
      res.push('' + start)
      start = nums[i]
    }
    if(i == nums.length - 1 ){
      if(end > start) res.push(start + '->' + end)
      else  res.push('' + start)
    }
  }
  return res
};

var minPathSum = function(grid) {
    for(var i = 1;i < grid[0].length;i++){
      grid[0][i] = grid[0][i] + grid[0][i - 1]
    }
    for(var i = 1;i < grid.length;i++){
      grid[i][0] = grid[i][0] + grid[i - 1][0]
    }
    for(var i = 1;i < grid[0].length;i++){
      for(var j = 1;j < grid.length;j++){
        grid[i][j] = Math.min((grid[i - 1][j] + grid[i][j]) , (grid[i][j] + grid[i][j - 1]) )
      }
    }
    return grid[grid.length - 1][grid[0].length - 1]
};
var findLongestChain = function(pairs) {
  pairs.sort( (x,y) => x[1] - y[1])
  var count = 1
  var prev = pairs[0]
  for(var i = 1;i < pairs.length;i++){
    if(pairs[i][0] > prev[1]) {
      count++
      prev = pairs[i]
    }
  }
  return count
};
var lastRemaining = function(n) {
  var res = []
  for(var i = 0;i < n;i++){
    res[i] = i + 1
  }
  while(res.length > 1){
    for(var i = 0;i < res.length;i += 2){
      if(res.length == 1) return res
      res.splice(i,1)
    }
    for(var i = res.length - 1;i >= 0;i -= 2){
      if(res.length == 1) return res
      res.splice(i,1)
    }
  }
  return res
};


var isIsomorphic = function(s, t) {
    var maps = {}
    var mapt = {}
    for(var i = 0;i < s.length;i++){
      if(!(s[i] in maps)) maps[s[i]] = i
      if(!(t[i] in mapt)) mapt[t[i]] = i
      if(maps[s[i]] == mapt[t[i]]) continue
      else return false
    }
    return true
};


var spiralOrder = function(matrix) {
  var res = []
  var m = matrix.length
  var n = matrix[0].length
  var over = m * n
  var x = 0
  while(over > 0){
    for(var i = x;i < m - x;i++){
      res.push(matrix[x][i])
      over--
    }
    for(var i = x + 1; i < n - x;i++)
      res.push(matrix[i][m - 1 - x])
      over--
    for(var i = m - 2 - x;i > x - 1;i--){
      res.push(matrix[n - x - 1][i])
      over--
    }
    for(var i = n - 2 - x;i > x ;i--){
      res.push(matrix[i][x])
      over--
    }
    x++
  }
  return res
};

var tribonacci = function(n) {
  var dp = new Array(n)
  dp[0] = 0
  dp[1] = 1
  dp[2] = 1
  for(var i = 3;i <= n;i++){
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
  }
  return dp[n]
};

function fill(array, val){
  for(var i = 0;i < array.length;i++){
    array[i] = val
  }
  return array
}
var slice = function(array, start ,end){
  var res = []
  for(var i = start;i < end;i++){
    res.push(array[i])
  }
  return res
}

var multiply = function(num1, num2) {
  var arr = []
  var count = ''
  for(var i = num1.length - 1; i >= 0 ;i--){
    var res = ''
    var remain = 0
    for(var j = num2.length - 1; j >= 0;j--){
      var temp = num1[i] * num2[j] + remain
      var digit = temp % 10
      res = digit + res
      remain = (temp - digit) / 10
    }
    res = res + count
    arr.push(res)
    count+= 0
  }
  return arr
};

var addStrings = function(num1, num2) {
  var res = ''
  var i = num1.length - 1
  var j = num2.length - 1
  var count = 0
  while(i >= 0 || j >= 0){
    if(i >= 0 && j >= 0){
      var temp = num1[i] * 1 + num2[j] * 1 + count
    } else if(i >=0 ) {
      var temp = num1[i] * 1 + count
    } else if(j >= 0) {
      var temp = num1[j] * 1 + count
    }
    var digit = temp % 10
    res = digit + res
    var count = (temp - digit) / 10
    i--
    j--
  }
  if(count > 0) res = 1 + res
  return res
};


var addBinary = function(a, b) {
  var res = ''
  var i = a.length - 1
  var j = b.length - 1
  var count = 0
  while(i >= 0 || j >= 0){
    if(i >= 0 && j >= 0){
      var temp = a[i] * 1 + b[j] * 1 + count
    } else if(i >=0 ) {
      var temp = a[i] * 1 + count
    } else if(j >= 0) {
      var temp = b[j] * 1 + count
    }
    var digit = temp % 2
    res = digit + res
    if(temp >= 2) count = 1
    else count = 0
    i--
    j--
  }
  if(count > 0) res = 1 + res
  return res
};
var detectCapitalUse = function(word) {
  var count = 1
  if(word.charCodeAt(0) > 90){
    for(var i = 0;i < word.length;i++){
      if(word.charCodeAt(i) <= 90) return false
    }
  }

  for(var i = 1;i < word.length;i++){
    if(word.charCodeAt(i) <= 90){
      count++
    }
  }
  if(count == 1 || count == word.length) return true
  return false
};

var maximumProduct = function(nums) {
    var sum = -999999999999
    nums.sort((x,y )=> x - y)
    if(nums[0] < 0 && nums[1] < 0 && nums[nums.length - 1]> 0) {
        return Math.max(nums[0] * nums[1] * nums[nums.length - 1],nums[nums.length - 1]
          * nums[nums.length - 2] * nums[nums.length - 3])
    }
    for(var i = 2;i < nums.length;i++){
        var temp = 0
        temp = nums[i] * nums[i -1 ] * nums[i - 2]
        sum = Math.max(temp,sum)
    }
    return sum

};


var numFriendRequests = function(ages) {
    ages.sort((x,y => x - y))
    var agebt100 = ages.filter(x => x >= 100)
    var ages = ages.filter(x => x < 100)
    var count = 0
    for(var i = agebt100.length - 1;i >= 0 ;i--){
      for(var j = i - 1;i >= 0;i--){
        if(agebt100[i] == agebt100[j]) count+=2
        else count += 1
      }
    }

    for(var i = ages.length;i > 0;i--){

    }
};


var partition = function(s) {
    var res = []
    var path = []

    back(0)
    return res
    function back(start){
      if(start == s.length){
        res.push(path.slice())
        return
      }
      for(var i = start;i < s.length;i++){
        if(isPali(start,i )){
          path.push(s.slice(start,i + 1))
          back(i + 1)
          path.pop()
        }
      }
    }

    function isPali(start,end){
      while(start < end){
        if(s[start] !== s[end]]) return false
        start++
        end--
      }
      return true
    }
};




    var permute = function(nums) {
      var res = []
      var path = []
      var used = []
      function back(used){
        if(path.length == nums.length){
          res.push(path.slice())
          return
        }
        for(var i = 0;i < nums.length;i++){
          if(used[i]) continue
          path.push(nums[i])
          used[i] = true
          back(used)
          path.pop()
          used[i] = false
        }
      }
      back(used)
      return res
    };
    var subsetsWithDup = function(nums) {
      var res = []
      var sub = []
      nums.sort((x,y) => x - y)
      function back(start){
        res.push(sub.slice())
        for(var i = start;i < nums.length;i++){
          if(i > start && nums[i] == nums[i - 1]) continue
          sub.push(nums[i])
          back(i + 1)
          sub.pop()
        }
      }
      back[0]
    }
  var addToArrayForm = function(num, k) {
    var count = 0
    while(k > 0){
      var digit = k % 10
      count++
      num = plus(digit,num)
      k = (k - digit) / 10
    }
    return num
    function plus(digit,num){
      if(num.length < count){
        num = num.unshift(0)
      }
      num[num.length - count] = num[num.length - count] + digit
      for(var i = num.length - count;i >= 0;i--){
        if( num[i] >= 10){
          if(num[i - 1] == undefined) {
            num[i] = num[i] % 10
            num.unshift(0)
            num[i]++
            break
          }
          num[i] = num[i] % 10
          num[i - 1]++
        }
      }
      return num
    }
  };
  var maxProfit = function(prices) {
      var max = 0
      var temp = -prices[0]
      var sum = 0
      for(var i = 1;i < prices.length;i++){
        if(prices[i] + temp <= 0) {
          temp = - prices[i]
          sum = temp
        }
        if(prices[i] + temp > 0){
          sum = temp + prices[i]
        }
        max = Math.max(max ,sum)
      }
      return max
  };
  var trap = function(height) {
    var sum = 0, max = 0, maxi = 0
    for(var i = 0;i < height.length;i++){
      if(height[i] > max){
        max = height[i]
        maxi = i
      }
    }
    var lefth = 0
    for(var i = 0;i < maxi;i++){
      if(height[i] > lefth) {
        lefth = height[i]
      }
      if(height[i] < lefth){
        sum += lefth - height[i]
      }
    }
    var righth = 0
    for(var i = height.length - 1;i > maxi;i--){
      if(height[i] > righth) {
        righth = height[i]
      }
      if(height[i] < righth){
        sum += righth - height[i]
      }
    }
    return sum
  };
  var uniquePaths = function(m, n) {
    var paths = new Array(m)
    for(var i = 0;i < m;i++){
      paths[i] = new Array(n).fill(1)
    }
    for(var i = 1;i < m;i++){
      for(var j = 1;j < n;j++){
        paths[i][j] = paths[i - 1][j] + paths[i][j - 1]
      }
    }
    return paths[m - 1][n - 1]
  };
  var minimumTotal = function(triangle) {
    for(var i = triangle.length - 2;i >= 0;i--){
      for(var j = 0;j <= i;j++){
        triangle[i][j] = triangle[i][j] + Math.min(triangle[i + 1][j] , triangle[i + 1][j+1])
      }
    }
    return triangle[0][0]
  };

  function findSolution(target) {

  // var target = 151

  function find(start, history) {
    if (start == target) {
      return history
    }
    if (start > target) {
      return null
    }
    return find(start * 3, '(' + history + ') * 3')
    || find(start + 5, history + ' + 5')
  }

  return find(1, '1')
}
找到并返回第一个可能

function findSolution(target) {

  // var target = 151
  var array = []

  function find(start, history) {
    if (start == target) {
      array.push(history)
      return
    }
    if (start > target) {
      return
    }
    find(start * 3, '(' + history + ') * 3')
    find(start + 5, history + ' + 5')
  }

  find(1, '1')
  return array
}
找到并返回（放在数组里）所有的可能

function findSolution(numbers) {
  var max = 0
  var maxHistory = null

  function find(x, y, sum, history) {
    if (x == numbers.length - 1) { // 已经走到最后一行了
      if (sum + numbers[x][y] > max) {
        max = sum + numbers[x][y]
        maxHistory = history
      }
      return
    }
    find(x + 1, y,     sum + numbers[x][y], history + '左')
    find(x + 1, y + 1, sum + numbers[x][y], history + '右')
  }

  find(0, 0, 0, '')

  return [max, maxHistory]
}

var numbers = [
  [2],
  [3, 1],
  [9, 8, 4],
  [7, 1, 5, 6],
  [3, 0, 4, 9 ,8],
  [10, 0, 0, 0, 0, 0],
  [10, 0, 0, 0, 0, 0, 200],
]

function maxSum(x, y) {
  if (x == numbers.length - 1) {
    return numbers[x][y]
  }
  return numbers[x][y] + Math.max(maxSum(x + 1, y), maxSum(x + 1, y + 1))
}


var myPow = function(x, n) {
  var res = 1
  if(n < 0) {
    n = n * -1
    var flag = true
  }
  while(n > 1){
    if(n % 2){
      n--
      res = res *  x
    }
    x *= x
    n /= 2
  }
  if(flag) return 1 / (res * x)
  return res * x
};

var intToRoman = function(num) {
  var res = ''
  var count = 0
  while(num > 0){
    var digit = num % 10
    if(count == 0) {
      res = spliceR(digit,'V','I','X',res)
    } else if(count == 1){
      res = spliceR(digit,'L','X','C',res)
    } else if(count == 2) {
      res = spliceR(digit,'D','C','M',res)
    } else if(count == 3){
      res = spliceR(digit, '' ,'M','',res)
    }
    count++
    num = (num - digit) / 10
  }
  return res

  function spliceR(number ,big,small,ne,res){
    if(number == 4) res = small + big + res
    if(number == 9) res = small + ne + res
    if(number < 4) {
      for(var i = 0;i < number;i++){
        res = small + res
      }
    }
    if(number == 5) res = big + res
    if(number > 5 && number < 9){
      for(var i = 0;i < number - 5;i++){
        res = small + res
      }
      res = big + res
    }
    return res
  }
};
