// Bài 1:

// Viết function truyền vào 1 số bất kỳ và thực hiện kiểm tra

// Nếu số đó chia hết cho 3 và 5 thì in ra “FizzBuzz”
// Nếu số đó chia hêt cho 3 thì in ra “Fizz”
// Nếu số đó chia hêt cho 5 thì in ra “Buzz”

function num(a) {
    if ( a % 3 === 0 && a % 5 === 0 ) {
        console.log(`"FizzBuzz`)
    }
    if ( a%3===0 && a%5!=0){
        console.log(`"Fizz"`)
    }
    if ( a%5===0 && a%3!=0){
        console.log(`"Buzz"`)
    }

}
num(5)
num(9)
num(15)
// Bài 2:

// Viết function giải phương trình bậc nhất (ax + b= 0)

// Cần kiểm tra trường hợp a = 0 và a != 0
// In ra kết quả
function num2(a, b) {
    if (a==0){
        if (b==0){
            console.log(`Phương trình vô số nghiệm`)
        } else{
            console.log(`Phương trình vô nghiệm`)
        }
    }
    else{
        console.log(`x= ` + (-b/a))
    }
}
num2(2, 1)
num2(0, 0)
num2(0, 1)
// Bài 3:

// Viết function giải phương trình bậc 2 (ax^2 + bx + c = 0)

// Cần kiểm tra trường hợp a = 0 và a != 0
// In ra kết quả
function num3(a, b ,c){
if(a==0){
    if (b==0){
        if (c==0){
            console.log(`Phương trình vô số nghiệm`)
        } else{
            console.log(`Phương trình vô nghiệm`)
        }
    }
    else{
        console.log(`x= ` + (-c/b))
    }
}
else{
    if(a!=0){
        delta = b*b - 4*a*c;
        if(delta == 0){
            x = -b/(2*a);
            console.log('Phương trình có nghiệm kép là:');
            console.log('x = ' + x);
        }
        else
        {
            x1 =  (-b + Math.sqrt(delta))/(2*a);
            x2 =  (-b - Math.sqrt(delta))/(2*a);
            console.log('Phương trình có hai nghiệm phân biệt là:');
            console.log('x1 = ' + x1);
            console.log('x2 = ' + x2);
        }
    }
}
}
num3(0,0,0)
num3(0,0,5)
num3(0,1,4)
num3(1,2,1)
num3(1,6,8)
// Bài 4:

// Viết function truyền vào 1 năm bất kỳ. Kiểm tra xem năm đó có là năm nhuận hay không?

// Nếu có là năm nhuận in ra kết quả “Là năm nhuận”
// Nếu không in ra kết quả “Không la năm nhuận”
function kiem_tra_nam_nhuan(nam)
{    if (nam % 100 == 0)
    {if (nam % 400 == 0){
            console.log(`“Là năm nhuận”`)
        }
        else {
            console.log(`“Không la năm nhuận”`)
        }
    }
    else if (nam % 4 == 0){
        console.log(`“Là năm nhuận”`)
    }
    else { 
        console.log(`“Không la năm nhuận”`)
    }
}
kiem_tra_nam_nhuan(1800)
// Bai 5 :
// Viết function truyền vào 2 giá trị, đại diện cho cân nặng và chiều cao. Tính chỉ số BMI tương ứng

// Sử dụng return
function can_nang_chieu_cao(a, b) {
    return a /(b*b/10000);
}

let data = can_nang_chieu_cao(58, 165);
console.log(`BMI = ` + data);
// Bài 6:

// Viết function truyền vào giá trị độ C. Tính giá trị độ F tương ứng

// Sử dụng return
function do_C(a) {
    console.log(`giá trị độ C = ` + a);
    return 1.8*a + 32;
    
}

let data1 = do_C(40);

console.log(`giá trị độ F tương ứng = ` + data1);