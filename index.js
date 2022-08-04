
let numbers = [];
function themSo() {
  let number = +document.getElementById("number").value;
  numbers.push(number);
  document.getElementById("alert0").innerHTML =
    "Dãy số được tạo là:" + "<br />" + numbers;
}

// bài 1: tính tổng
function tinhTong() {
  let total = numbers.reduce((total, value) => {
    return value >= 0 ? total + value : total;
  }, 0);
  document.getElementById("alert1").innerHTML =
    "Tổng các số dương là: " + total;
}

// bài 2: đếm số dương
function demSoDuong() {
  let count = numbers.reduce((count, value) => {
    return value > 0 ? count + 1 : count;
  }, 0);
  document.getElementById("alert2").innerHTML = "Có " + count + " số dương";
}

// bài 3: tìm số nhỏ nhất
function timSoNhoNhat() {
  let min = numbers[0];
  for (i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  document.getElementById("alert3").innerHTML = "Số nhỏ nhất là: " + min;
}

// bài 4: tìm số dương nhỏ nhất
function timSoDuongNhoNhat() {
  let soDuong = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      soDuong.push(numbers[i]);
    }
  }
  if (soDuong.length > 0) {
    min = soDuong[0];
    for (let i = 1; i < soDuong.length; i++) {
      if (soDuong[i] < min) {
        min = soDuong[i];
      }
    }
    document.getElementById("alert4").innerHTML =
      "Số dương nhỏ nhất là: " + min;
  } else {
    document.getElementById("alert4").innerHTML =
      "Không có số dương trong mảng";
  }
}

// bài 5: tìm số chẵn cuối cùng
function timSoChanCuoiCung() {
  let soChan = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      soChan.push(numbers[i]);
    }
  }
  if (soChan.length > 0) {
    thongBao = soChan[0];
    for (let i = 1; i < soChan.length; i++) {
        thongBao = soChan[i];
    }
    document.getElementById("alert5").innerHTML =
      "Số chẵn cuối cùng là: " + thongBao;
  } else {
    document.getElementById("alert5").innerHTML =
      "-1";
  }
}

// bài 6: chuyển đổi
function chuyenDoi(a, b) {
  let n = numbers[a];
  numbers[a] = numbers[b];
  numbers[b] = n;
}
function doiCho() {
  let index1 = +document.getElementById("index1").value;
  let index2 = +document.getElementById("index2").value;
  if (index1 >= numbers.length || index2 >= numbers.length) {
    document.getElementById("alert6").innerHTML =
      "Vị trí chuyển đổi không chính xác";
    return;
  }
  chuyenDoi(index1, index2);
  document.getElementById("alert6").innerHTML = numbers;
}

// bài 7: sắp xếp tăng dần
function sapXepTangDan(){
  numbers.sort((a,b) => a - b);
  document.getElementById("alert7").innerHTML = "Sắp xếp tăng dần là: " + numbers;
}

// bài 8: in số nguyên tố đầu tiên của mảng

function kiemTraSoNguyenTo(number){
  if (number < 2) return 0;
  for(let i=2; i<=Math.sqrt(number);i++){
    if (number%i===0){
      return 0;
    }
  }
  return 1;
}
function timSo(){
  let n = -1;
  for ( let i = 0; i< numbers.length; i++){
    if(kiemTraSoNguyenTo(numbers[i])){
      n = numbers[i];
      break;
    }
  }
  document.getElementById("alert8").innerHTML = "Số nguyên tố đầu tiên trong mảng: " + n;
}



let number2s = [];
function themSo2() {
  let number = +document.getElementById("num").value;
  number2s.push(number);
  document.getElementById("alert9").innerHTML =
    "Dãy số được tạo là:" + "<br />" + number2s;
}
// bài 9: đếm số nguyên

function demSoNguyen() {
  let count = number2s.reduce((count, value) => {
    return Number.isInteger(value) ? count + 1 : count;
  }, 0);
  document.getElementById("alert10").innerHTML = "Có " + count + " số nguyên";
}

// bài 10: So sánh số lượng số âm và số dương
function soSanh(){
  let soAm = 0;
  let soDuong = 0;
  for ( let i = 0; i < numbers.length; i++){
    if(numbers[i]>0){
      soDuong++
    } else if(numbers[i]<0){
      soAm++
    }
  }
  if(soAm === soDuong){
    document.getElementById("alert11").innerHTML ="Số dương bằng số âm"
  } else if(soAm>soDuong){
    document.getElementById("alert11").innerHTML ="Số dương nhỏ hơn số âm"
    
  }else{
    document.getElementById("alert11").innerHTML ="Số dương lớn hơn số âm"
  }
}
