// Bài 1: Tìm số lớn nhất trong mảng

function getMax(numbers) {
    let max = 0
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i]
      }
    }
    return max
  }
  console.log(getMax([19, 7, 2, 4, 3]))
  
  
  
  // Bài 2: Tìm số nhỏ nhất trong mảng
  
  function getMin(number) {
    let min = number.sort(function (a, b) {
      return a - b
    });
    return min[0];
  }
  console.log(getMin([19, 7, 10, 12, 15]))
  
  
  // Bài 3: Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
  
  function number(arr) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
      let a = arr[i] % 2
      newArray.push(a)
    }
    return newArray
  }
  console.log(number([19, 7, 2, 4, 3]))
  
  // Bài 4: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần
  
  function copyNumber(arr) {
    let newArray = []
    for (let i = 0; i < 10; i++) {
      newArray.push(arr)
    }
    return newArray.join('')
  }
  console.log(copyNumber('a'))
  
  // Bài 5: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.
  
  function copyNumber1(arr) {
    let newArray = []
    for (let i = 0; i < 10; i++) {
      newArray.push(arr)
    }
    return newArray.join('-')
  }
  console.log(copyNumber1('a'))