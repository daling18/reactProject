// new Fn()
// function Fn(){}

function New(fn){
// console.log(000)
let obj = {}
obj.__proto__ = fn.prototype
fn.call(obj)
if(obj.constructor==Object)return fn
else return obj
}