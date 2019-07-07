/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let n = s.length;
if(n == 0) return ''; //字符串为空则返回空
if(n == 1) return s;  //字符串为一个字符, 显然返回自身
let result = ''
for (let i = 0; i < n; i++) { //字符串长度超过2
for (let j = i + 1; j <= n; j++) {
  let str = s.slice(i, j); //可得到所有子串
  let f = str.split('').reverse().join(''); //对字符串利用数组方法倒序

  if (str == f) { //判断是否为回文
    result = str.length > result.length ? str : result;
  }
}
}
return result;
};
console.log(longestPalindrome('cbbd'))