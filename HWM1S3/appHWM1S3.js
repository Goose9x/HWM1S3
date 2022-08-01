// 1. Sử dụng vòng lặp để đếm từ 1 đến 100. 
// Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.

// for ( var i = 0; i < 100; i= i + 1){
//     console.log(i);
// }if (i = 99){
//     console.log("Hoàn thành");
// }

// 2. Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
// let a = 0
// let b = 1
//     for (var i = 1; i <= 20 ; i = i + 1){
//         console.log(a);
//         let c = a + b
//         a = b
//         b = c
//     }

// 3. Bài 3: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5. 
// let a = 0
// let b = 1
// let state = true
// while (state){
//     let c = a + b
//     a = b
//     b = c
//     if ( a % 5 === 0){
//         state = false;
//     }console.log(`${a}`)
// }
    
//4 Bài 4: Tính tổng của 20 số đầu tiên trong dãy fibonacci.
// let a = 0
// let b = 1
// let tong = 0
//     for (var i = 1; i <= 20 ; i = i + 1){
      
//         let c = a + b
//         a = b
//         b = c
//         tong = tong + a
//     }console.log(tong);

// Bài 5: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.
let count = 30

// Bài 6:
// for ( var i = 1; i <= 100; i= i + 1){
//     if ( i % 3 == 0 && i % 5 !== 0){
//         console.log(i + "Fizz");
//     }else if (i % 5 == 0 && i % 3 !== 0){
//         console.log(i + "Buzz");
//     }else if (i % 3 ===0 & i % 5 === 0){
//         console.log(i + "FizzBuzz");
//     }else console.log(i);
// }

// Bài 7: Tính giai thừa của một số nguyên dương

let n = Number(prompt("nhap vao so n!:"));
let unknown = 1
if ((n > 0 && Number.isInteger(n))){
    for ( var i = 1; i <= n ; i = i + 1){
    unknown = unknown * i;
}console.log(unknown);
}