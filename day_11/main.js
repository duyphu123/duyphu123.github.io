// Bài 1. Viết function truyền vào 1 chuỗi bất kỳ, hãy sao chép chuỗi đó lên 10 lần.

function string(a) {
    let totalstring = ''
    for (let i = 1; i <= 10; i++) {
        totalstring += a
    }
    return totalstring
}
console.log(string('a'))

// Bài 2. Viết function truyền vào 1 chuỗi bất kỳ, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.
function string1(a) {
    let totalstring1 = '';
    for (let i = 1; i <= 10; i++) {
        totalstring1 += a
        if (i !== 10) {
            totalstring1 += '-'
        }
    }
    return totalstring1
}
console.log(string1('a'))

// Bài 3. Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.
function repeatString(str, n) {
    let string = str
    for (i = 0; i < n - 1; i++) {
        string += `-${str}`
    }
    return string
}
console.log(repeatString('abc', 15))
// Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100
function numBer() {
    let total = 0
    for (let i = 1; i <= 100; i = i + 1) {
        if (i % 5 === 0) {
            total += i
        }
    }
    return total
}
console.log(numBer())

// Bài 5: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.

function globura(r) {
    console.log(4 / 3 * (3.145 * r * r * r))
}
globura(20)

// Bài 6: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng.
function sum(a, b) {
    let total = 0;
    if (a < b) {
        for (let i = a + 1; i < b; i++) {
            total += i;
        }
    }
    else {
        for (let i = b + 1; i < a; i++) {
            total += i;
        }
    }
    return total;
}
console.log(sum(3, 8))
console.log(sum(8, 3))



// Bài 7: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
function prime(x) {
    if (x < 2) {
        return false;
    }
    for (let i = 2; i <= x / 2; i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(prime(19))
console.log(prime(-7))

//Bài 8 : Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham
// số truyền vào.
function sumPrime(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        if (n >= 2) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumPrime(7))
console.log(sumPrime(5))


// Bài 9 : Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
function totalDivisor(n) {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        if (n % i == 0) {
            sum += i
        }
    }
    return sum;
}
console.log(totalDivisor(4))
console.log(totalDivisor(6))