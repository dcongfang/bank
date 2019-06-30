var addTwoNumbers = function(l1, l2) {
  var mylist1 = l1;
  var mylist2 = l2;
  var c3;
  var l3;
  var carry = 0;
  while(mylist1 || mylist2|| carry){
      var value1 = 0;
      var value2 = 0;
      var sum = 0;
      if(mylist1)
      {
          value1 = mylist1.val;
          mylist1 = mylist1.next;            
      }
      if(mylist2)
      {
          value2 = mylist2.val;
          mylist2 = mylist2.next;
      }
      sum = value1 + value2 + carry;
      carry = Math.floor(sum / 10);
      if (!c3) {
          l3 = new ListNode(sum % 10);
          c3 = l3;
      } else {
        c3.next = new ListNode(sum % 10);
        c3 = c3.next;
      }
  }
  return l3;
};
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var a1 = new ListNode(2);
var a2 = new ListNode(4);
a1.next = a2;
var a3 = new ListNode(3);
a2.next = a3;

var b1 = new ListNode(5);
var b2 = new ListNode(6);
b1.next = b2;
var b3 = new ListNode(4);
b2.next = b3;
console.log(addTwoNumbers(a1, b1));
