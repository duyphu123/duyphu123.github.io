const bar1=document.querySelector(".bar1")
const bar2=document.querySelector(".bar2")
const bar3=document.querySelector(".bar3")
bar1.addEventListener("click",function(){
    bar1.style.background="#fff"
    bar2.style.background="none"
    bar3.style.background="none"
  })
bar2.addEventListener("click",function(){
        
    bar1.style.background="none"
    bar2.style.background="#fff"
    bar3.style.background="none"

  })
  bar3.addEventListener("click",function(){
        
    bar1.style.background="none"
    bar2.style.background="none"
    bar3.style.background="#fff"
  })