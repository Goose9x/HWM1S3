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
// let str = String()
// if ((n > 0 && Number.isInteger(n))){
//     for (var i = 1; i <= n ; i = i + 1){
//         let c = a + b
//         a = b
//         b = c
//     }console.log()
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
let n = Number(prompt("nhap vao so n:"));
let mot = n % 1
let hai = n % n
if ((n > 0 && Number.isInteger(n))){
    if(n=1){
        console.log("Không phải là số nguyên tô");
    }else if ( mot === 0 && hai === 0){
        console.log("Là số nguyên tố");
    }
}else alert("Nhập lại")