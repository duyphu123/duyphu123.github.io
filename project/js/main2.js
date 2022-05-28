const menuIconEl = document.querySelector(".menu-icon");

const menuEL = document.querySelector(".nav-list");

menuIconEl.addEventListener("click", function () {
  menuEL.classList.toggle("show");
});
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    menuEL.classList.remove("show");
  }
});

const overlayOpen = document.querySelector(".overlay");

const cartBtn = document.querySelector(".cart-side .btn-close");
const cartShowOpen = document.querySelector(".cart");
cartShowOpen.addEventListener("click", function () {
  document.querySelector(".cart-side").style.right = "0";
  overlayOpen.style.display = "block";
});
cartBtn.addEventListener("click", function () {
  document.querySelector(".cart-side").style.right = "-100%";
  overlayOpen.style.display = "none";
});

// bâm vào card-item hiện ra popup
const cartShow = document.querySelectorAll(".card-item ");
const popup = document.querySelector(".product-popup");

cartShow.forEach(function (item, index) {
  item.addEventListener("click", function (event) {
    var btnItem = event.target;
    var popupEl = btnItem.parentElement;
    var productImg = popupEl.querySelector("img").src;
    var productName = popupEl.querySelector("p").innerText;
    var productPrice = popupEl.querySelector(".price").innerText;
    // console.log(productPrice)
    popup.style.display = "block";
    overlayOpen.style.display = "block";

    addcart(productImg, productName, productPrice);
  });
});

function addcart(productImg, productName, productPrice) {
  var addDiv = document.createElement("div");
  var divNew =
    '<div class=aa><div><div class="popup-item d-flex align-items-center"><div class="popup-image"><img src="' +
    productImg +
    '" alt="PZ1"></div><div class="d-flex flex-column"><div class="popup-name">' +
    productName +
    '</div><div class=popup-price-2><div class="popup-price">' +
    productPrice +
    '</div><p>VND</p></div></div></div><div class="popup-picksize"><div class="popup-title">Chọn size *</div><div class="form-group"><div class="form-check"><input class="form-check-input" type="radio" value="S" name="flexRadioDefault" id="size-s" checked><label class="form-check-label" for="size-s">Size S</label></></div><div class="form-check"><input class="form-check-input" type="radio" value="M" name="flexRadioDefault" id="size-m"><label class="form-check-label" for="size-m">Size M + 20.000đ</label></></div><div class="form-check"><input class="form-check-input" type="radio" value="L" name="flexRadioDefault" id="size-l"><label class="form-check-label" for="size-l">Size L + 40.000đ</label></></div></div></div><div class="popup-note"><div class="popup-title">Ghi chú <span>(nếu có)</span></div><input class="popup-input" type="text" placeholder="Ghi chú cho quán"></></div><div class="popup-bottom mt-16 d-flex align-items-center justify-content-center flex-column"><div class="cart-item-button d-flex align-items-center"><div class="minus"><i class="fa-solid fa-circle-minus"></i></div><div class="cart-item-quantity">1</div><div class="plus"><i class="fa-solid fa-circle-plus"></i></div></div><button class="btnadd">Thêm vào giỏ hàng: <span>' +
    productPrice +
    "</span> đ</button></div></></div></div>";
  addDiv.innerHTML = divNew;
  var popupNew = document.querySelector(".product-popup");

  popupNew.append(addDiv);

  var storageKey='todoList';
  var dataString= localStorage.getItem(storageKey);
  var todoList;
  if (dataString){
    todoList=JSON.parse(dataString);
  }else{
    todoList=[]
  }
  const btnAdd = document.querySelectorAll(".btnadd");

  btnAdd.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
      {
        var btnItemAdd = event.target;
        var productItemAdd =
          btnItemAdd.parentElement.parentElement.parentElement;
        var productItemAddImg = productItemAdd.querySelector("img").src;

        var productItemAddName =
          productItemAdd.querySelector(".popup-name").innerHTML;
        var productItemAddPrice =
          productItemAdd.querySelector(".btnadd span").innerHTML;
          

        addcartItem(productItemAddImg, productItemAddName, productItemAddPrice);
        localStorage.setItem(storageKey, JSON.stringify(todoList))
        
      }
    });
    
    
    const btnAdd2 = document.querySelector(".btnadd");

    btnAdd2.addEventListener("click", function () {
      alert("Bạn Đã Thêm Sản Phẩm Vào Giỏ Hàng Thành Công");
      popup.style.display = "none";
      overlayOpen.style.display = "none";
      const delA = document.querySelector(".aa");
      // console.log(delA)

      delA.parentElement.remove();
    });
  });

  const sizeS = document.querySelector("#size-s");
  const sizeM = document.querySelector("#size-m");
  const sizeL = document.querySelector("#size-l");
  const sizeSPrice = document.querySelector(".btnadd span");
  const sizeSPriceA = document.querySelector(".popup-price").innerHTML;

  var cartProduct = document.querySelectorAll(".cart-item");
  sizeM.addEventListener("click", function () {
    sizeSPrice.innerHTML = (sizeSPriceA * 1000 + 20000).toLocaleString('de-DE');
  });
  sizeL.addEventListener("click", function () {
    sizeSPrice.innerHTML = (sizeSPriceA * 1000 + 40000).toLocaleString('de-DE');
  });
  sizeS.addEventListener("click", function () {
    sizeSPrice.innerHTML = (sizeSPriceA * 1000).toLocaleString('de-DE');
  });
}

// thêm sản phẩm vào giỏ hàng

function addcartItem(
  productItemAddImg,
  productItemAddName,
  productItemAddPrice
) {
 
  var addDiv2 = document.createElement("div");

  var divNew2 =
    '<div class="content"><div class="cart-item d-flex"><div class="cart-item-image"><img src="' +
    productItemAddImg +
    '" alt="pz1" /></div><div class="cart-item-info"><div class="name">' +
    productItemAddName +
    '</div><div class="size d-flex align-items-center">Size S x<td><input style="width:30px;outline:none;" type="number" value="1" min="1"></td><div class="edit"><i class="fa-solid fa-pen"></i></div></div><div class="note"></div></div><div class="d-flex align-items-center"><div class="cart-item-sub-price"><span>' +
    productItemAddPrice +
    '</span> đ</div></div><div class="delete-product d-flex align-items-center"><i class="fa-solid fa-trash-can"></i></div></div></div>';

  addDiv2.innerHTML = divNew2;
  var cartTable = document.querySelector(".cart-side2");
  cartTable.append(addDiv2);
  var cartProduct = document.querySelectorAll(".cart-item");
  var soluong = document.querySelector(".cart-quantity");
  soluong.innerHTML = cartProduct.length;
  
  cartTotal();
  deleteCart();
}



const todoListElement = document.querySelector(".card-side2");

const renderTodos = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const t = arr[i];
    todoListElement.innerHTML += ` '<div class="content"><div class="cart-item d-flex"><div class="cart-item-image"><img src="' +
    productItemAddImg +
    '" alt="pz1" /></div><div class="cart-item-info"><div class="name">' +
    productItemAddName +
    '</div><div class="size d-flex align-items-center">Size S x<td><input style="width:30px;outline:none;" type="number" value="1" min="1"></td><div class="edit"><i class="fa-solid fa-pen"></i></div></div><div class="note"></div></div><div class="d-flex align-items-center"><div class="cart-item-sub-price"><span>' +
    productItemAddPrice +
    '</span> đ</div></div><div class="delete-product d-flex align-items-center"><i class="fa-solid fa-trash-can"></i></div></div></div>';`;
  }
};

const cartHide = document.querySelector(".product-popup .btn-close");
// console.log(cartHide)
cartHide.addEventListener("click", function () {
  popup.style.display = "none";
  overlayOpen.style.display = "none";
  // const delA = document.querySelector(".aa");
  // console.log(delA)
  const delA = document.querySelector(".aa");
  delA.parentElement.remove();
});

function cartTotal() {
  var cartProduct = document.querySelectorAll(".cart-item");
  var totalC = 0;
  for (i = 0; i < cartProduct.length; i++) {
    var inputValue = cartProduct[i].querySelector("input").value;
    // console.log(inputValue)
    var productPriceValue = cartProduct[i].querySelector(
      ".cart-item-sub-price span"
    ).innerHTML;

    // console.log(productPriceValue)
    totalA = inputValue * productPriceValue;
    totalC = totalC + totalA;
    
  }
  var cartTotalA = document.querySelector(".sub-total span");
  cartTotalA.innerHTML = (totalC*1000).toLocaleString('de-DE');
  inputChange();
}

function deleteCart() {
  var cartProduct = document.querySelectorAll(".cart-item");
  for (i = 0; i < cartProduct.length; i++) {
    var btnDelete = document.querySelectorAll(".fa-trash-can");
    btnDelete[i].addEventListener("click", function (event) {
      var ItemDelete = event.target;
      var ItemDeleteA = ItemDelete.parentElement.parentElement;
      const popupDel=document.querySelector(".popup-delete")
      popupDel.style.display="block"
      const Ok=document.querySelector(".co")
      const No=document.querySelector(".khong")
      Ok.addEventListener("click",function(){
        ItemDeleteA.remove();
        popupDel.style.display="none"
        var cartProduct = document.querySelectorAll(".cart-item");
      var soluong = document.querySelector(".cart-quantity");
      soluong.innerHTML = cartProduct.length;
        cartTotal();
      })
      No.addEventListener("click",function(){
        
        popupDel.style.display="none"
        cartTotal();
      })
      
      
      
      cartTotal();
    });
  }
}
function inputChange() {
  var cartProduct = document.querySelectorAll(".cart-item");
  for (i = 0; i < cartProduct.length; i++) {
    var inputA = cartProduct[i].querySelector("input");
    inputA.addEventListener("change", function () {
      cartTotal();
    });
  }
}

overlayOpen.addEventListener("click", function () {
  popup.style.display = "none";
  overlayOpen.style.display = "none";
  const delA = document.querySelector(".aa");
  document.querySelector(".cart-side").style.right = "-100%";
  // console.log(delA)
  if (delA) {
    delA.parentElement.remove();
  }
});

var offset = 500;

var duration = 50;
$(function(){
$(window).scroll(function () {
if ($(this).scrollTop() > offset)
$('#top-up').fadeIn(duration);else
$('#top-up').fadeOut(duration);
});
$('#top-up').click(function () {
$('body,html').animate({scrollTop: 0}, duration);
});
});
//Render lại giao diện

//     cartHide()
//     cartHide2()
// }
// function cartHide(){
//   var cartPopup=document.querySelectorAll(".aa")
//   for(var i=0;i<cartPopup.length;i++){
//     var cartHide1 = document.querySelectorAll(".xoa");
//     cartHide1[i].addEventListener("click",function(event){
//       var popupDelete=event.target
//       var popupDeleteA=popupDelete.parentElement.parentElement

//       popupDeleteA.remove()
//   })
//   }

// }
// function cartHide2(){
//   var popup2 = document.querySelectorAll(".product-popup");
//   for(var i=0;i<popup2.length;i++){
//     var cartHide1 = document.querySelectorAll(".xoa");
//     cartHide1[i].addEventListener("click",function(event){
//       var popupDelete2=event.target
//       var popupDeleteA2=popupDelete2.parentElement.parentElement.parentElement
//       console.log(popupDeleteA2)

//       popupDeleteA2.style.display="none"
//   })
//   }

// }

// btnAdd.forEach(function(button2,index){

// var productT=document.querySelector(".btn-close")
// productT.addEventListener("click", function () {
//     popup.style.display = "none";

//   });

// deleteCart()
// function deleteCart(){
//     var cartItem=document.querySelectorAll(".a")

//     for (var i=0;i<cartItem.length;i++){
//         var productT=document.querySelectorAll(".btn-close")

//         productT[i].addEventListener("click",function(event){
//             var cartDelete=event.target
//             var carditemR=cartDelete.parentElement.parentElement
//             carditemR.remove()
//         })
//     }
// }

// let products = [
//     {
//         id: 1,
//         name: 'Pizza Bò Mê-Hi-Cô Thượng Hạng - Prime Beef',
//         alt: 'Pizza Bò Mê-Hi-Cô Thượng Hạng - Prime Beef',
//         image: './images/PZ1.png',
//         price: {
//             S: 249000,
//             M: 249000,
//             L: 249000,
//         },
//         type: 'pizza',
//         quantity: 1,

//     },
//     {
//         id: 2,
//         name: 'Pizza Hải Sản Kiểu Singapore - Singapore Style Seafood',
//         alt:'Pizza Hải Sản Kiểu Singapore - Singapore Style Seafood',
//         image: './images/PZ2.png',
//         price: {
//             S: 329000,
//             M: 329000,
//             L: 329000,
//         },
//         type: 'pizza',
//         quantity: 1,

//     },
//     {
//         id: 3,
//         name: 'Pizza Gà Phô Mai Thịt Heo Xông Khói - Cheesy Chicken Bacon',
//         alt:'Pizza Gà Phô Mai Thịt Heo Xông Khói - Cheesy Chicken Bacon',
//         image: './images/PZ3.png',
//         price: {
//             S: 329000,
//             M: 329000,
//             L: 329000,
//         },
//         type: 'pizza',
//         quantity: 1,

//     },
//     {
//         id: 4,
//         name: 'Pizza Gà Xốt Tương Kiểu Nhật - Teriyaki Chicken',
//         alt:'Pizza Gà Xốt Tương Kiểu Nhật - Teriyaki Chicken',
//         image: './images/PZ4.png',
//         price: {
//             S: 349000,
//             M: 349000,
//             L: 349000,
//         },
//         type: 'pizza',
//         quantity: 1,

//     },
// ]
// function renderTodo(arr){
// let html=""
// for (let i=0; i<Arr.length; i++){
//     const p=arr[i];
//     html+=`<div class="popup-box ">
//     <button type="button" class="btn-close" aria-label="Close"></button>
//     <div class="popup-item d-flex align-items-center">
//         <div class="popup-image">
//             <img src="${p.image}" alt="PZ1">
//         </div>
//         <div class="d-flex flex-column">
//             <div class="popup-name">${p.name}</div>
//             <div class="popup-price">${p.price}</div>
//         </div>
//     </div>
//     <div class="popup-picksize">
//         <div class="popup-title">Chọn size *</div>
//         <div class="form-group">
//             <div class="form-check">
//                 <input class="form-check-input" type="radio" value="S" name="flexRadioDefault" id="size-s" checked>
//                 <label class="form-check-label" for="size-s">
//                 Size S
//                 </label>
//             </div>
//             <div class="form-check">
//                 <input class="form-check-input" type="radio" value="M" name="flexRadioDefault" id="size-m">
//                 <label class="form-check-label" for="size-m">
//                 Size M + 5.000đ
//                 </label>
//             </div>
//             <div class="form-check">
//                 <input class="form-check-input" type="radio" value="L" name="flexRadioDefault" id="size-l">
//                 <label class="form-check-label" for="size-l">
//                 Size L + 10.000đ
//                 </label>
//             </div>
//         </div>
//     </div>

//     <div class="popup-note">
//         <div class="popup-title">Ghi chú <span>(nếu có)</span>
//         </div>
//         <input class="popup-input" type="text" placeholder="Ghi chú cho quán">
//     </div>

//     <div class="popup-bottom mt-16 d-flex align-items-center justify-content-center flex-column">
//         <div class="cart-item-button d-flex align-items-center">
//             <div class="minus"><i class="fa-solid fa-circle-minus"></i></div>
//             <div class="cart-item-quantity">1</div>
//             <div class="plus"><i class="fa-solid fa-circle-plus"></i></div>
//         </div>
//         <button class="btn">Thêm vào giỏ hàng : <span>249000</span> đ</button>
//     </div>
// </div>`
// }

// popup.innerHTML=html;
// }
// renderTodo(products)
