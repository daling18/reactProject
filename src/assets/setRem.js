function setRem (){
    const clientWidth=document.documentElement.clientWidth||document.body.clientWidth
    document.documentElement.style.fontSize=clientWidth/375*16+'px'
}
setRem()
window.onresize=setRem