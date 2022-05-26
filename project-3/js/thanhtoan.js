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
const btnEl1 = document.querySelector(".btn1");

const dropEL1 = document.querySelector(".dropdown-menu1");
const sizeS1 = document.querySelector(".sizeS1");
const sizeM1 = document.querySelector(".sizeM1");
const sizeL1 = document.querySelector(".sizeL1");
const price1 = document.querySelector(".gia-thanhtoan1 span");
const priceAll1 = document.querySelector(".tong1 span");
// const inputValue = document.querySelector("input").value;

btnEl1.addEventListener("click", function () {
  dropEL1.classList.toggle("show");
});
total1();
total2();
total3();

function total1() {
  var totalC = 0;
  var inputValue = document.querySelector(".input1").value;
  // console.log(inputValue)
  var productPriceValue = document.querySelector(
    ".gia-thanhtoan1 span"
  ).innerHTML;

  // console.log(productPriceValue)
  totalA = inputValue * productPriceValue;

  totalC = totalC + totalA;

  var cartTotalA = document.querySelector(".tong1 span");
  // console.log(cartTotalA)
  cartTotalA.innerHTML = totalC;
  change1();
}
function change1() {
  var inputA = document.querySelector(".input1");
  inputA.addEventListener("change", function () {
    total1();
  });
  const tamtinh = document.querySelector(".text-row2");
  const tongcong = document.querySelector(".tongcong");
  const tong1 = document.querySelector(".tong1 span").innerHTML;

  const tong2 = document.querySelector(".tong2 span").innerHTML;
  const tong3 = document.querySelector(".tong3 span").innerHTML;
  tamtinh.innerHTML = parseInt(tong1) + parseInt(tong2) + parseInt(tong3);
  tongcong.innerHTML = parseInt(tong1) + parseInt(tong2) + parseInt(tong3);
}

sizeS1.addEventListener("click", function () {
  dropEL1.classList.remove("show");
  btnEl1.innerHTML = "Size S";
  price1.innerHTML = 249000;
  total1();
});
sizeM1.addEventListener("click", function () {
  dropEL1.classList.remove("show");
  btnEl1.innerHTML = "Size M";
  price1.innerHTML = 269000;
  total1();
});
sizeL1.addEventListener("click", function () {
  dropEL1.classList.remove("show");
  btnEl1.innerHTML = "Size L";
  price1.innerHTML = 289000;
  total1();
});
const btnEl2 = document.querySelector(".btn2");

const dropEL2 = document.querySelector(".dropdown-menu2");
const sizeS2 = document.querySelector(".sizeS2");
const sizeM2 = document.querySelector(".sizeM2");
const sizeL2 = document.querySelector(".sizeL2");
const price2 = document.querySelector(".gia-thanhtoan2 span");
const priceAll2 = document.querySelector(".tong2 span");
btnEl2.addEventListener("click", function () {
  dropEL2.classList.toggle("show");
});
sizeS2.addEventListener("click", function () {
  dropEL2.classList.remove("show");
  btnEl2.innerHTML = "Size S";
  price2.innerHTML = 89000;
  total2();
});
sizeM2.addEventListener("click", function () {
  dropEL2.classList.remove("show");
  btnEl2.innerHTML = "Size M";
  price2.innerHTML = 89000 + 20000;
  total2();
});
sizeL2.addEventListener("click", function () {
  dropEL2.classList.remove("show");
  btnEl2.innerHTML = "Size L";
  price2.innerHTML = 89000 + 40000;
  total2();
});

function total2() {
  var totalC = 0;
  var inputValue = document.querySelector(".input2").value;
  // console.log(inputValue)
  var productPriceValue = document.querySelector(
    ".gia-thanhtoan2 span"
  ).innerHTML;

  // console.log(productPriceValue)
  totalA = inputValue * productPriceValue;

  totalC = totalC + totalA;

  var cartTotalA = document.querySelector(".tong2 span");
  // console.log(cartTotalA)
  cartTotalA.innerHTML = totalC;
  change2();
}
function change2() {
  var inputA = document.querySelector(".input2");
  inputA.addEventListener("change", function () {
    total2();
  });
  const tamtinh = document.querySelector(".text-row2");
  const tong1 = document.querySelector(".tong1 span").innerHTML;
  const tongcong = document.querySelector(".tongcong");
  const tong2 = document.querySelector(".tong2 span").innerHTML;
  const tong3 = document.querySelector(".tong3 span").innerHTML;
  tamtinh.innerHTML = parseInt(tong1) + parseInt(tong2) + parseInt(tong3);
  tongcong.innerHTML = parseInt(tong1) + parseInt(tong2) + parseInt(tong3);
}
const btnEl3 = document.querySelector(".btn3");
const dropEL3 = document.querySelector(".dropdown-menu3");
const sizeS3 = document.querySelector(".sizeS3");
const sizeM3 = document.querySelector(".sizeM3");
const sizeL3 = document.querySelector(".sizeL3");
const price3 = document.querySelector(".gia-thanhtoan3 span");
const priceAll3 = document.querySelector(".tong3 span");
btnEl3.addEventListener("click", function () {
  dropEL3.classList.toggle("show");
});
sizeS3.addEventListener("click", function () {
  dropEL3.classList.remove("show");
  btnEl3.innerHTML = "Size S";
  price3.innerHTML = 20000;
  total3();
});
sizeM3.addEventListener("click", function () {
  dropEL3.classList.remove("show");
  btnEl3.innerHTML = "Size M";
  price3.innerHTML = 20000 + 20000;
  total3();
});
sizeL3.addEventListener("click", function () {
  dropEL3.classList.remove("show");
  btnEl3.innerHTML = "Size L";
  price3.innerHTML = 20000 + 40000;
  total3();
});

function total3() {
  var totalC = 0;
  var inputValue = document.querySelector(".input3").value;
  // console.log(inputValue)
  var productPriceValue = document.querySelector(
    ".gia-thanhtoan3 span"
  ).innerHTML;

  // console.log(productPriceValue)
  totalA = inputValue * productPriceValue;

  totalC = totalC + totalA;

  var cartTotalA = document.querySelector(".tong3 span");
  // console.log(cartTotalA)
  cartTotalA.innerHTML = totalC;
  change3();
}
function change3() {
  var inputA = document.querySelector(".input3");
  inputA.addEventListener("change", function () {
    total3();
  });
  const tamtinh = document.querySelector(".text-row2");
  const tong1 = document.querySelector(".tong1 span").innerHTML;
  const tongcong = document.querySelector(".tongcong");
  const tong2 = document.querySelector(".tong2 span").innerHTML;
  const tong3 = document.querySelector(".tong3 span").innerHTML;
  tamtinh.innerHTML = parseInt(tong1) + parseInt(tong2) + parseInt(tong3);
  tongcong.innerHTML = parseInt(tong1) + parseInt(tong2) + parseInt(tong3);
}

const provinceEl = document.getElementById("province");
const districtEl = document.getElementById("district");
const wardEl = document.getElementById("commune");
var code = document.getElementById("code");
const name = document.querySelector(".name");
async function getProvince() {
  try {
    let res = await axios.get("https://provinces.open-api.vn/api/p/");
    console.log(res);

    //render:

    renderProvince(res.data);
  } catch (err) {
    console.log(err);
  }
}
function renderProvince(arr) {
  arr.forEach((ele) => {
    provinceEl.innerHTML += `<option value="${ele.code}">${ele.name}</option>`;
  });
}
provinceEl.addEventListener("change", async function () {
  try {
    let provinceCode = provinceEl.value;
    let res = await axios.get(
      `https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`
    );
    console.log(res);
    districtEl.innerHTML = `<option value="none">Chọn Quận/Huyện</option>`;
    wardEl.innerHTML = `<option value="none">Chọn Phường/Xã</option>`;
    renderDistrict(res.data.districts);
    console.log(provinceEl.options[provinceEl.selectedIndex].text);
  } catch (err) {}
});
function renderDistrict(arr) {
  arr.forEach((ele) => {
    districtEl.innerHTML += `<option value="${ele.code}">${ele.name}</option>`;
  });
}
districtEl.addEventListener("change", async function () {
  try {
    let districtCode = districtEl.value;
    let res = await axios.get(
      `https://provinces.open-api.vn/api/d/${districtCode}?depth=2`
    );
    console.log(res.data.wards);
    wardEl.innerHTML = `<option value="none">Chọn Phường/Xã</option>`;
    renderWards(res.data.wards);
  } catch (err) {}
});

function renderWards(arr) {
  arr.forEach((ele) => {
    wardEl.innerHTML += `<option value="${ele.code}">${ele.name}</option>`;
  });
}

getProvince();
const cancel = document.querySelector(".cancel");

const confirm1 = document.querySelector(".confirm");

const telephone = document.querySelector(".telephone");
const address = document.querySelector(".address");
const nameInfo = document.querySelector(".name-info");
const nameErr = document.getElementById("name-error");
const diachinhanhang = document.querySelector(".diachi");
const diachiErr = document.getElementById("diachi-error");
const phoneEl = document.querySelector(".phone-number");
const phoneErr = document.getElementById("phone-error");
const tinh = document.querySelector("#province option");
const tinhErr = document.getElementById("province-error");
const huyen = document.querySelector("#district option");
const huyenErr = document.getElementById("district-error");
const xa = document.querySelector("#commune option");
const xaErr = document.getElementById("commune-error");
const btnDathang2 = document.querySelector(".btn-dathang2");
const infoTt = document.querySelector(".info-thanhtoan");
console.log(btnDathang2);
btnDathang2.addEventListener("click", function () {
  infoTt.style.display = "block";
});

function validatePhone(phoneEl) {
  var phoneNumb = /^\d{10}$/;
  return phoneEl.value.match(phoneNumb);
}
cancel.addEventListener("click", function () {
  infoTt.style.display = "none";
  overlayOpen.style.display = "none";
  closeDialog();
});

confirm1.addEventListener("click", async function () {
  const isValidPhone = validatePhone(phoneEl);
  try {
    nameErr.innerText = "";
    diachiErr.innerText = "";
    phoneErr.innerText = "";
    tinhErr.innerText = "";
    huyenErr.innerText = "";
    xaErr.innerText = "";
    if (
      nameInfo.value == "" ||
      diachinhanhang.value == "" ||
      !isValidPhone ||
      provinceEl.options[provinceEl.selectedIndex].text ==
        "Chọn Tỉnh/Thành phố" ||
      districtEl.options[districtEl.selectedIndex].text == "Chọn Quận/Huyện" ||
      wardEl.options[wardEl.selectedIndex].text == "Chọn Phường/Xã"
    ) {
      if (nameInfo.value == "") {
        nameErr.innerText = "Không được để trống thông tin";
      }
      if (diachinhanhang.value == "") {
        diachiErr.innerText = "Không được để trống thông tin";
      }
      if (!isValidPhone) {
        phoneErr.innerText = "Số điện thoại phải có 10 chữ số";
      }
      if (
        provinceEl.options[provinceEl.selectedIndex].text ==
        "Chọn Tỉnh/Thành phố"
      ) {
        tinhErr.innerText = "Không được để trống thông tin";
      }
      if (
        districtEl.options[districtEl.selectedIndex].text == "Chọn Quận/Huyện"
      ) {
        huyenErr.innerText = "Không được để trống thông tin";
      }
      if (wardEl.options[wardEl.selectedIndex].text == "Chọn Phường/Xã") {
        xaErr.innerText = "Không được để trống thông tin";
      }
      return;
    }
  } catch (err) {}
  confirm1.addEventListener("click", function () {
    infoTt.style.display = "none";

    btnDathang2.innerHTML = "Thay Đổi Thông Tin";
    alert("Bạn Đã Đặt Hàng Thành Công.Xin Cảm Ơn");
    overlayOpen.style.display = "none";
    closeDialog()
  });
});

var cartProduct = document.querySelectorAll(".cart-item-thanhtoan");
var btnDelete = document.querySelectorAll(".fa-trash-can");
for (i = 0; i < cartProduct.length; i++) {
  var btnDelete = document.querySelectorAll(".fa-trash-can");
  btnDelete[i].addEventListener("click", function (event) {
    var ItemDelete = event.target;
    var ItemDeleteA =
      ItemDelete.parentElement.parentElement.parentElement.parentElement;

    const popupDel = document.querySelector(".popup-delete-thanhtoan");
    popupDel.style.display = "block";
    const Ok = document.querySelector(".co");
    const No = document.querySelector(".khong");
    Ok.addEventListener("click", function () {
      ItemDeleteA.remove();
      popupDel.style.display = "none";
      total1();
    });
    No.addEventListener("click", function () {
      popupDel.style.display = "none";
    });
  });
}
const overlayOpen = document.querySelector(".overlay-thanhtoan");

btnDathang2.addEventListener("click", function () {
  overlayOpen.style.display = "block";
  
});
overlayOpen.addEventListener("click", function () {
  infoTt.style.display = "none";
  overlayOpen.style.display = "none";
  closeDialog();
});
const showDialog = () => {
  document.getElementById('dialog').classList.add('show')
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
};
const closeDialog = () => {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  document.getElementById('dialog').classList.remove('show');
}
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
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

overlayOpen.addEventListener("click", function () {
   
  overlayOpen.style.display = "none";
 
  document.querySelector(".cart-side").style.right = "-100%";
 
});

