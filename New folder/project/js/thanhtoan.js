//   const overlayOpen=document.querySelector(".overlay")
overlayOpen.addEventListener("click", function () {
    
    overlayOpen.style.display = "none";
    const delA = document.querySelector(".aa");
    document.querySelector(".cart-side").style.right = "-100%";
    // console.log(delA)
  
    delA.parentElement.remove();
  
  });
