const menuIconEl = document.querySelector(".menu-icon");

const menuEL = document.querySelector(".nav-list");

menuIconEl.addEventListener("click", function(){
    menuEL.classList.toggle("show")
})
window.addEventListener("resize", function(){
    if(window.innerWidth > 768){
        menuEL.classList.remove("show")
    }
})
let products = [
    {
        id: 1,
        name: 'Pizza Bò Mê-Hi-Cô Thượng Hạng - Prime Beef',
        alt: 'Pizza Bò Mê-Hi-Cô Thượng Hạng - Prime Beef',
        image: './images/PZ1.png',
        price: {
            S: 249000,
            M: 249000,
            L: 249000,
        },
        type: 'pizza',
        quantity: 1,
        
    },
    {
        id: 2,
        name: 'Pizza Hải Sản Kiểu Singapore - Singapore Style Seafood',
        alt:'Pizza Hải Sản Kiểu Singapore - Singapore Style Seafood',
        image: './images/PZ2.png',
        price: {
            S: 329000,
            M: 329000,
            L: 329000,
        },
        type: 'pizza',
        quantity: 1,
       
    },
    {
        id: 3,
        name: 'Pizza Gà Phô Mai Thịt Heo Xông Khói - Cheesy Chicken Bacon',
        alt:'Pizza Gà Phô Mai Thịt Heo Xông Khói - Cheesy Chicken Bacon',
        image: './images/PZ3.png',
        price: {
            S: 329000,
            M: 329000,
            L: 329000,
        },
        type: 'pizza',
        quantity: 1,
        
    },
    {
        id: 4,
        name: 'Pizza Gà Xốt Tương Kiểu Nhật - Teriyaki Chicken',
        alt:'Pizza Gà Xốt Tương Kiểu Nhật - Teriyaki Chicken',
        image: './images/PZ4.png',
        price: {
            S: 349000,
            M: 349000,
            L: 349000,
        },
        type: 'pizza',
        quantity: 1,
        
    },
]
const menuIconEl1 = document.querySelector(".card-item");

const menuEL1 = document.querySelector(".product-popup");

menuIconEl1.addEventListener('click', ()=>{
    menuEL1.classList.add("show1");
    
})
    
//     const highlightproducts = document.querySelector('.highlight-product')
//     const popup = document.querySelector('.product-popup')
//     const overlay = document.querySelector('.overlay')
  



// function popupRender(product) {
    
//     popup.style.display = 'block'
//     let path

//     if(window.location.pathname=='/index.html'){
//         path='';
//       }else{
//         path='.';
//       }
//     if (product) {
//         popup.innerHTML = `
//         <div class="popup-box ">
//             <button type="button" class="btn-close" aria-label="Close"></button>
//             <div class="popup-item d-flex align-items-center">
//                 <div class="popup-image">
//                     <img src="${path}${product.image}" alt="${product.name}">
//                 </div>
//                 <div class="d-flex flex-column">
//                     <div class="popup-name">${product.name}</div>
//                     <div class="popup-price">${product.price.S.toLocaleString()}</div>
//                 </div>
//             </div>
//             <div class="popup-picksize">
//                 <div class="popup-title">Chọn size *</div>
//                 <div class="form-group">
//                     <div class="form-check">
//                         <input class="form-check-input" type="radio" value="S" name="flexRadioDefault" id="size-s" checked>
//                         <label class="form-check-label" for="size-s">
//                         Size S
//                         </label>
//                     </div>
//                     <div class="form-check">
//                         <input class="form-check-input" type="radio" value="M" name="flexRadioDefault" id="size-m">
//                         <label class="form-check-label" for="size-m">
//                         Size M + 5.000đ
//                         </label>
//                     </div>
//                     <div class="form-check">
//                         <input class="form-check-input" type="radio" value="L" name="flexRadioDefault" id="size-l">
//                         <label class="form-check-label" for="size-l">
//                         Size L + 10.000đ
//                         </label>
//                     </div>
//                 </div>
//             </div>
            
//             <div class="popup-note">
//                 <div class="popup-title">Ghi chú <span>(nếu có)</span>
//                 </div>
//                 <input class="popup-input" type="text" placeholder="Ghi chú cho quán">
//             </div>
        
//             <div class="popup-bottom mt-16 d-flex align-items-center justify-content-center flex-column">
//                 <div class="cart-item-button d-flex align-items-center">
//                     <div class="minus"><i class="fa-solid fa-circle-minus"></i></div>
//                     <div class="cart-item-quantity">${product.quantity}</div>
//                     <div class="plus"><i class="fa-solid fa-circle-plus"></i></div>
//                 </div>
//                 <button class="btn">Thêm vào giỏ hàng : <span>${(product.price.S * product.quantity).toLocaleString()}</span> đ</button>
//             </div>
//         </div>
//         `
//     }

//     overlay.style.display = 'block'
//     overlay.addEventListener('click', function () {
//         popup.style.display = 'none'
//     })
//     closePopup()
// }


