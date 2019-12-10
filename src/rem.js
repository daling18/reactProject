function setRem(rem){
  const html = document.getElementsByTagName("html")[0]
  const clientW = document.documentElement.clientWidth || document.body.clientWidth
  html.style.fontSize = clientW / rem * 100 * 2 + 'px' 
}
window.onload = function(){
  setRem(720)
}
window.onresize = function(){
  setRem(720)
}