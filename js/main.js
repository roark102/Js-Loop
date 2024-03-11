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