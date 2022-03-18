//*
// Các chức năng:
// 1. Thay đổi số lượng sản phẩm
// 2. Xóa sản phẩm
// 3. Add mã giảm giá
// 4. Tự động tính tiền
// 5. Cập nhật số lượng sản phẩm
// 6. Render danh sách sản phẩm


// Đối tượng công việc bao gồm:
// - id 
// - title (tên sản phẩm)
// - description (mô tả sản phẩm): any
// - price (giá sản phẩm)
// - total số lượng sản phẫm
// - image


// Mockup danh sách sản phẩm
let products = [
    {
        id: 1,
        title: "Giày Jockey Style 0414",
        description: "Giày Jockey Style đơn giản mà không đơn điệu, thoải mái bất chấp mọi giới hạn giúp bạn tự tin mix & match và khẳng định phong cách cá nhân",
        image: "https://static.sonkimfashion.vn/static/file/image/jockey/jockey-giay-jockey-style-0414-unisex-den-8_-_copy_b94907d26b904621a3f551011a6deaeb_1024x1024.jpg",
        price: 450000,
        total: 1
    },
    {
        id: 2,
        title: "Giày Jockey Explore 0416",
        description: "Một đôi giày tốt sẽ đưa bạn đến những trải nghiệm tuyệt vời. Cùng Jockey Explore khẳng định phong cách cá nhân, tự tin vẽ nên hành trình tuyệt diệu.",
        image: "https://static.sonkimfashion.vn/static/file/image/jockey/ey-jockey-giay-jockey-explore-0416-unisex-trang-phoi-xam-giay-8_-_copy_a2e3b11f48fd4a04a86e8f61db6c25a7_1024x1024.jpg",
        price: 650000,
        total: 1
    },
    {
        id: 3,
        title: "Giày Jockey Go 0415",
        description: "Phong cách Chunky hiện đại kết hợp phối màu cá tính sẽ mang đến cho bạn những diện mạo hoàn hảo, tự tin bước & chinh phục mọi hành trình.",
        image: "https://static.sonkimfashion.vn/static/file/image/jockey/jockey-giay-jockey-go-0415-woman-trang-phoi-do-giay-1_-_copy_b63f71f21b3a4d9a865dcd01d6cd826e_1024x1024.jpg",

        price: 500000,
        total: 1
    }
]

let promotionCode = {
    A: 0.4,
    B: 0.3,
    C: 0.2,
    D: 0.1,
}
const numberFormater = new Intl.NumberFormat('de-DE');
const productsElement = document.querySelector(".products");
const promotionElement = document.querySelector(".promotion");
const summaryElement = document.querySelector(".summary");
const totalProductsElement = document.querySelector(".count");
const subTotalElement = document.querySelector(".subtotal");
const btnElement = document.querySelector(".promotion button");
const promoCodeElement = document.querySelector("#promo-code");
const summaryUlElement = document.querySelector(".summary ul");
const inputCodeElement = document.getElementById("promo-code");
const discountElement = document.querySelector(".discount.hide")
let discountRate = 0;



// Render danh sách sản phẩm ra ngoài giao diện
const renderProduct = (arr) => {

    //B1: Xóa hết nội dung trước khi render
    productsElement.innerHTML = "";

    // Update tong so luong khi thay doi giao dien
    updateTotalProduct(products)
    //Trường hợp mảng rỗng
    if (arr.length == 0) {
        productsElement.innerHTML = "<li>Không có sản phẩm nào trong danh mục</li>";
        promotionElement.style.display = "none";
        summaryElement.style.display = "none";
        totalProductsElement.style.display = "none";
        return
    }

    for (let i = 0; i < arr.length; i++) { 
        const p = arr[i];
        // Clear nội dung
        productsElement.innerHTML += `
        <li class="row">
                    <div class="col left">
                        <div class="thumbnail">
                            <a href="#">
                                <img src= ${p.image} alt=${p.title}>
                            </a>
                        </div>
                        <div class="detail">
                            <div class="name"><a href="#">${p.title}</a></div>
                            <div class="description">
                                ${p.description}
                            </div>
                            <div class="price">${numberFormater.format(p.price)} VND</div>
                        </div>
                    </div>
                    <div class="col right">
                        <div class="quantity" onchange="changeTotalProduct(${p.id}, event)">
                            <input type="number"  class="quantity" value="${p.total}">
                        </div>
    
                        <div class="remove">
                            <span class="close" onclick="deleteProduct(${p.id})">
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
        </li>   
        `
    }
    updateTotalMoney(products)
}
 
// Xóa sản phẩm
const deleteProduct = (id) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products.splice(i, 1);
        }
    }
    renderProduct(products)
}

// Cập nhật số lượng sản phẩm

const updateTotalProduct = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += products[i].total;
    }
    totalProductsElement.innerHTML = `<span class="count">${count} items in the bag</span>`
}

// Thay đổi số lượng của item
const changeTotalProduct = (id, event) => {
    // Lấy giá trị trong ô input dựa vào biến event trong hàm xử lý sự kiện
    let inputQuantityValue = parseInt(event.target.value);
    // Duyệt mảng products để tìm sản phẩm thay đổi
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products[i].total = inputQuantityValue;
        }
    }
    // Render lại giao diện sau khi xóa
    renderProduct(products)
}

// Tính tổng tiền
const updateTotalMoney = (arr) => {
    // Tính tổng tiền subtotal
    // subtotal = Số lượng * đơn giá
    let subTotal = 0;
    for (let i = 0; i < arr.length; i++) {
        subTotal += products[i].total * products[i].price;
    }

    // Tính thuế giá trị gia tăng
    // VAT = 10% của subtotal
    let vatTotal = 0;
    for (let i = 0; i < arr.length; i++) {
        vatTotal = 0.1 * subTotal;
    }

    // Kiểm tra xem mã giảm giá có chính xác hay không
    // Nếu có => discount = subtotal * (% mã giảm giá)
    // Nếu không => discount = 0
    // Ẩn hiện class "hide" nếu discount chính xác hoặc không
    let discountRate = getDiscountRate();
    let discountTotal = discountRate * subTotal;
    // Tính tổng tiền phải trả
    // total = subtotal + VAT - discount
    let totalMoney = subTotal + vatTotal - discountTotal;

    let hideClass = discountRate == 0 ? " hide" : "";

    // Cập nhật lên trên giao diện
    summaryUlElement.innerHTML = "";

    summaryUlElement.innerHTML += `
    <li class="subtotal">Subtotal <span>${numberFormater.format(subTotal)} VND</span></li>
    <li class="vat">VAT<span>${numberFormater.format(vatTotal)} VND</span></li>
    <li class="discount${hideClass}">
        Discount<span>- ${numberFormater.format(discountTotal)} VND</span>
    </li>
    <li class="total">Total <span>${numberFormater.format(totalMoney)} VND</span></li>
    `
}

const checkPromoCodeValue = () => {
    let inputPromodCode = inputCodeElement.value;
    let rate = promotionCode[inputPromodCode];
    if (!rate) {
        alert("Ma giam gia khong phu hop!");
        discountRate = 0;
    } else {
        discountRate = rate;
    }
    updateTotalMoney(products);
}

const getDiscountRate = () => {
    return discountRate;
}

btnElement.addEventListener("click", checkPromoCodeValue);


const main = () => {
    renderProduct(products)
}

main()