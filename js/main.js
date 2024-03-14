function getEle(id) {
    return document.getElementById(id);
  }
// Bài 1 
getEle("timN").onclick =function() {
    var i=0;
    var sum=0;
    while(sum<10000){
        i+=1;
        sum+=i;
    }
    getEle("result1").innerHTML =`Số nhỏ nhất n thỏa mãn điều kiện là: ${i}` ;
}

// Bài 2

function tinhTong() {
    var n = +getEle("soN").value ;
    var x = +getEle("soX").value ;
    var tong2 = 0;
    for(var i =0;i<=n;i++) {
        tong2 += Math.pow(x,i);

    }

    getEle("result2").innerHTML = ` Kết quả là: ${tong2}`

}

getEle("tinhTong").onclick = function(){
    tinhTong();
}

// Bài 3
function tinhGiaiThua() {
    var n =+getEle("soNBai3").value ;
    var tongGiaiThua = 1;
    for(var i=1; i<n+1;i++) {
        tongGiaiThua *=i ;
    }
    getEle("result3").innerHTML =`Giai thừa của ${n} là ${tongGiaiThua}`;
}

getEle("tinhGiaiThua").onclick = function() {
    tinhGiaiThua();
}

// bài 4 
function inTheDiv() {
    var div = document.createElement("div");
    var result4 = getEle("result4");

    for(var i=1; i<11;i++) {
        if (i%2===0){
            var div = document.createElement("div");
            div.classList.add("even-div");
            result4.appendChild(div);

        } else {
            var div = document.createElement("div");
            div.classList.add("odd-div");
            result4.appendChild(div);

        }
    }


}

getEle("inTheDiv").onclick = function() {
    inTheDiv()
}

// Bài 5
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function timSoNguyenTo() {
    var soNguyen = +getEle("soNguyen").value;
    var soNguyenTo = "";
    var note = "";

    if (soNguyen < 1) {
        note = "Không có số nguyên tố nào";
    } else {
        for (var i = 1; i <= soNguyen; i++) {
            if (isPrime(i)) {
                soNguyenTo += `${i} `;
            }
        }
        note = `Các số nguyên tố từ 1 tới ${soNguyen} là: ${soNguyenTo}`;
    }

    getEle("result5").innerHTML = note;
}

getEle("timSoNguyenTo").onclick = function () {
    timSoNguyenTo();
}
