// Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false

function checkStringExist(chuoibandau, chuoicankiemtra) {
    console.log(chuoibandau.includes(chuoicankiemtra))
}
checkStringExist('i love you', 'you')
checkStringExist('i love you', 'hate')

// Bài 2. Viết function truyền vào 1 chuỗi, hãy rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. Nếu chuỗi có độ dài <= 8 ký tự thì giữ nguyên

function shortenString(str) {
    if (str.length > 8) {
        return str.slice(0, 8) + "..."
    } else {
        return str.slice(0, 5) + ""
    }
}
console.log(shortenString("Xin chào các bạn"))
console.log(shortenString("hello"))

// Bài 3. Viết function truyền vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false.

function kiemTraChuoiDoiXung(str) {

    arr = str.toLowerCase().split(" ").join("");
    arr = str.split("");
    for (i = 0; i < arr.length / 2; i++) {
        if (arr[i] == arr[arr.length - 1 - i]) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(kiemTraChuoiDoiXung('race car'))
console.log(kiemTraChuoiDoiXung('hello word'))


// Bài 4. Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).

function arrange(number) {
    let convertToArray = number.toString().split('')

    let newNumber = convertToArray.sort()
    if (newNumber[0] === '0') {
        for (let i = 1; i < newNumber.length; i++) {
            if (newNumber[i] !== '0') {
                [newNumber[0], newNumber[i]] = [newNumber[i], newNumber[0]]
                break;
            }
        }
    }
    return newNumber.join('')
}

console.log(arrange(53751))
console.log(arrange(14350))
console.log(arrange(203950))
console.log(arrange(19072003))
// Bài 5. Viết function truyền vào 1 chuỗi bất kỳ gồm nhiều từ. Hãy chuyển chuỗi đó thành dạng snake_case và viết thường
function snakeCase(key) {
    let result = key.replace(/([a-])/g, " $1");
    return result.split(' ').join('_').toLowerCase();
}
console.log(snakeCase('HELLO world'))
console.log(snakeCase('Xin Chào Các BẠN'))