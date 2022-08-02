// 1  A = 0 + 1 + 2 + … + n
// let n = Number(prompt("Nhập vào số n"));
// let tong = 0
// if (n > 0 && Number.isInteger(n)){
//     for (var i = 0; i <= n ; i = i + 1){
//         tong = tong + i;
//     }alert(tong);
// }else alert('Vui lòng nhập lại');


// 2 B = 1 x 2 x 3 x … x n
// let n = Number(prompt("Nhập vào số n"));
// let tich = 1
// if (n > 0 && Number.isInteger(n)){
//     for (var i = 1; i <= n ; i = i + 1){
//         tich = tich * i;
//     }alert(tich);
// }else alert('Vui lòng nhập lại');

// 3 C = 1 + ½ + ⅓ + … + 1/n 
// let n = Number(prompt("Nhập vào số n"));
// let C = 0
// if (n > 0 && Number.isInteger(n)){
//     for (var i = 1; i <= n ; i = i + 1){
//         C = 0 + 1/i;
//     }alert(C);
// }else alert('Vui lòng nhập lại');

// 4 D = 1 x ½  + ½ x ⅓  + ⅓ x ¼  + … + 1/(n-1) x 1/n
// let n = Number(prompt("Nhập vào số n"));
// let D = 0.5
// if ((n > 0 && Number.isInteger(n))){
//     for (var i = 3; i <= n ; i = i + 1){
//         D = D + 1/(i-1)*1/i;
//     }alert(D);
// }else alert('Vui lòng nhập lại');


// 5 In bảng cửu chương 1--10 của số n
// let n = Number(prompt("Nhập vào số n"));
// if ((n > 0 && Number.isInteger(n))){
//     for (var i = 1; i <= 10 ; i = i + 1)
//     console.log(`${n}*${i} là ${n*i}`)
// } 

// 6 fibonacci n phần tử
// let n = Number(prompt("Nhập vào số nguyên dương n"));
// let a = 0
// let b = 1
// let str = String("")
// if ((n > 0 && Number.isInteger(n))){
//     for (var i = 1; i <= n ; i = i + 1){
//         str = str + `${a},`;
//         let c = a + b
//         a = b
//         b = c
//     }
//     console.log(str);
// }


//7. Nhập số n, tiến hành in ra màn hình console 0-n theo dạng số chẵn lẻ

// let n = Number(prompt("nhap vao so n:"));
// if ((n > 0 && Number.isInteger(n))){
// for (var i = 0; i <= n ;i= i + 1){
//     if (i % 2 === 0){
//         console.log(`${i}-chẵn`);
//     }else {
//         console.log(`${i}-lẻ`);
//     }
// }
// }      

// 8. Như bài 7, in số chẵn trước, số lẻ sau


// let a = Number(prompt("cho người dungf nhập "));

// if(a>0 && Number.isInteger(a)){
//     for(var i = 0; i<=a ; i= i + 1){

//         if( i%2 ===0) {

//         console.log(`${i}-chẵn`);
// }
//     }for(var i = 0; i<=a ; i= i + 1){
//         if( i%2 > 0){
//         console.log(`${i}-lẻ`);
//         }
//     }
// }

// 9. Nhập n, ktra xem có phải số nguyên tố không,
// let n = Number(prompt("nhap vao so n:"));
// let state = true
// if ((n > 1 && Number.isInteger(n))){
//     for (var i = 2; i < n; i++){
//         if (n % i === 0){
//             state = false;
//             break;
//         }   
//     }
//     if (state){
//         console.log("đây là số nguyên tố"); 
//     } else {  
//         console.log("đây không phải là sô nguyên tố");
//     }
// }



// 10 .Viết một đoạn mã cho phép người dùng nhập vào một số nguyên dương n. 
// Tiến hành kiểm tra xem đó có phải là một số hợp lệ hay không. 
// Nếu đó là số hợp lệ, tiến hành in ra màn hình console 
// a,Một tam giác vuông như sau:
// 	Input: n = 4
// 	Expected output:
// *
// * *
// * * *
// * * * * (Js repeat string)
// c1 
// let n = Number(prompt("nhap vao so n:"));
// for (let i = 0; i <= n; i = i + 1){
//     let text = "*"
//     console.log(text.repeat(i));
// }

// c2:
// let n = Number(prompt("nhap vao so n:"));
// let b = ""
// for (let i = 0; i <= n; i = i + 1){
//     b = b + "*"
//     console.log(b);
// }

// b. * * * *
// * * *
// * *
// *
// c1 
// let n = Number(prompt("nhap vao so n:"));
// for (let i = n; i >= 0; i = i - 1){
//     let text = "*"
//     console.log(text.repeat(i));
// }

// c2:
// let number=Number(prompt('Nhập vào một số nguyên dương'));

// if (Number.isInteger(number)) {
//     alert('number true');
//     for (let i = number; i >= 0; i--){
//         let a = " ";
//         for (let j = 1; j <= i; j++){
//             a = a + " * "
//         }
//     console.log(a);
//     }
// }else {
//     alert('number false')
// }


// BAI TAP TEST testtttttttttttt
// 1
// 1 2
// 1 2 3
// 1 2 3 4

// let n = Number(prompt("nhap vao so n:"));
// let b = " "
// for (let i = 1; i <= n; i = i + 1){
//     b = b + " " + i
//     console.log(b);
// }


// 4321
// 432
// 43
// 4
// let n =Number(prompt('Nhập vào một số nguyên dương'));
// let b = " "
// if (n > 0 && Number.isInteger(n)) {
//     alert('Hợp lệ');
//     for (let i = 1; i <= n; i++){
//         for (let j = n-i; j >= 0; j--){
//             b = b + " " + (i + j)
//         }
//         b = b + `\n`
//     }
//     console.log(`${b}`);
// }else {
//     alert('Không hợp lệ')
// }

// Cách 2:
// let n = Number(prompt('nhập số n'));
// if (Number.isInteger(n)) {
//     alert('n hợp lệ');
//     for (let i = n; i > 0; i --){
//         let a = "";
//         for (let j = n; j > n-i; j--){
//             a = a + " " + j;
//         }
//     console.log(a);
//     }
// }else {
//     alert('n ko hợp lệ')
// }


// THƠ
// Bài 11:

// alert("Bài toán chuẩn bị được giải này:")
// for (i = 0; i < 100; i ++){
//     if((i/3 + (100-i)/10 === 17)){
//         alert(`Có ${i} người yêu nhau và ${100-i} người ghét nhau`)
//     }
// }

// Bài 12:
// Vừa gà vừa chó, bó lại cho tròn

// alert('Giai bai toan dan gian');
// for(i = 0; i < 40; i++){
//     if((i * 2 + (36-i)*4) === 100){
//         alert('Số gà là: ' + i + '; Số chó là: '+(36-i));
//     }
// }

// Bài 13 Trâu đứng ăn năm. 
// Trâu nằm ăn ba. 
// Lụm khụm trâu già, 
// Ba con một bó. 
// Trăm trâu ăn cỏ. 
// Trăm bó no nê. 
// Hỏi đến giảng đề,
// Ngô nghê như điếc 

// trâu đứng = a
// trâu nằm = b
// trâu già = c
// 5a + 3b + c/3 = 100  --> 15a + 9b + c = 300 --> c = 300 - 15a - 9b
// a + b + c = 100      --> a + b + c    = 100 --> c = 100 - a - b
//                             --> 300 - 15a - 9b = 100 - a - b                                
//                             --> -14a = -200 + 8b --> 14a = 200 -8b --> a = (200 - 8b)/14

// alert('Giai bai toan dan gian');
// for(i = 0; i < 100; i++){
//     let a = (200 - 8 * i)/14
//     let b = i
//     let c = (100 - a - b)
//     if((a + b + c ) === 100 && Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)){
//         console.log(`${a}, ${b}, ${c} `);
//     }
// } 



// 14.Viết một đoạn mã mô phỏng máy ATM. Cho người dùng nhập vào số tiền cần rút
// Sau đó in ra tổng số tờ tiền mà người dùng nhận được với từng loại mệnh giá.
// Biết máy ATM chỉ rút được 3 loại mệnh giá là 500.000, 200.000, 100.000, 50.000.
// Biết số tiền tối thiểu rút một lần là 50.000

// Math.floor( chia lấy phần nguyên)

// let a = Number(prompt("Nhập số tiền muốn rút:"));
// if (a > 50000) {
//     if (a % 500000 === 0) {
//         console.log(`Cần rút ${a / 500000} tờ 500k`);
//     }
//     else if (a % 500000 !== 0) {
//         if ((a % 500000) % 200000 === 0) {
//             console.log(`Cần rút ${Math.floor(a / 500000)} tờ 500k`);
//             console.log(`Cần rút ${Math.floor(a % 500000) / 200000} tờ 200k`);
//         }
//         else if ((a % 500000) % 200000 !== 0) {
//             if (((a % 500000) % 200000) % 100000 === 0) {
//                 console.log(`Cần rút ${Math.floor(a / 500000)} tờ 500k`);
//                 console.log(`Cần rút ${Math.floor((a % 500000) / 200000)} tờ 200k`);
//                 console.log(`Cần rút ${Math.floor((a % 500000) % 200000) / 100000} tờ 100k`);
//             }
//             else if (((a % 500000) % 200000) % 100000 !== 0) {
//                 if (((a % 500000) % 200000) % 100000 % 50000 === 0) {
//                     console.log(`Cần rút ${Math.floor(a / 500000)} tờ 500k`);
//                     console.log(`Cần rút ${Math.floor((a % 500000) / 200000)} tờ 200k`);
//                     console.log(`Cần rút ${Math.floor(((a % 500000) % 200000) / 100000)} tờ 100k`);
//                     console.log(`Cần rút ${Math.floor((a % 500000) % 200000) % 100000 / 50000} tờ 50k`);
//                 }
//                 else console.log("Vui lòng nhập lại số tiền là bội của 50000");
//             }
//         }
//     }
// }
// else console.log("Vui lòng nhập lại số tiền là bội của 50000");



// Cách 2:
// let a = Number(prompt('nhập số tiền'));
// let x1 = 0;
// let x2 = 0;
// let x3 = 0;
// let x4 = 0;
// while (a >= 0) {
//     if (a >= 500000) {
//         a=a-500000;
//         x1++;
//     } else if (a >= 200000) {
//         a=a-200000;
//         x2++;
//     } else if (a >= 100000) {
//         a=a-100000;
//         x3++;
//     } else if (a >= 50000) {
//         a=a-50000;
//         x4++;
//     } else if (a < 50000) {
//         break;
//     }
// }
// console.log(`500000 - ${x1}`);
// console.log(`200000 - ${x2}`);
// console.log(`100000 - ${x3}`);
// console.log(`50000 - ${x4}`);



