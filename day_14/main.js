// Bài 1. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.
// sortStudents(['Nam', 'Hoa', 'Tuấn']) => ['Tuấn', 'Nam', 'Hoa']

function sortStudents(arr) {
    arr.sort()
    return arr.reverse()
}
console.log(sortStudents(['Nam', 'Hoa', 'Tuấn',]));

// Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
// shuffle([1,2,3,4,5]) => [2,3,4,1,5]
// shuffle([1,2,3,4,5]) => [4,2,3,5,1]
const list = [1, 2, 3, 4, 5]
const shuffled = list.sort(() => Math.random() - 0.5)
console.log(shuffled)



//Bài 3: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng
// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]
function symmetricDifference(arr1, arr2) {
    let newArr = []
    for (let element of arr1) {
        if(!arr2.includes(element)) {
            newArr.push(element)
        }
    }
    for (let element of arr2) {
        if(!arr1.includes(element)) {
            newArr.push(element)
        }
    }
    return newArr
}
console.log(symmetricDifference([1,2,3],[1,2,4]));

// Bài 4: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng
// union([1, 2, 3, 1], [4, 3, 2, 4]) => [1,2,3,4]
// union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]

function union(arr1, arr2) {
    var newArray = []
    var newArr = [...arr1, ...arr2]
    for (var i = 0; i < newArr.length; i++) {
      if (newArray.indexOf(newArr[i]) === -1) {
        newArray.push(newArr[i])
      }
    }
    return newArray
  }
  console.log(union([1, 2, 3, 1], [4, 3, 2, 4]))