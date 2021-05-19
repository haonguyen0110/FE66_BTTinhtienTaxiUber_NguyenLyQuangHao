
document.querySelector('#btnTinhTien').onclick = function () {
    var thanhTien = document.querySelector('#divThanhTien');
    var xuatTien = document.querySelector('#xuatTien');
    var soKM = parseFloat(document.querySelector('#soKM').value);
    var thoiGianCho = parseFloat(document.querySelector('#thoiGianCho').value);
    var tienThoiGian;
    var tienKM;
    thanhTien.style.display = 'block';
   
    var loaiXe = '';

    // var arrRadio = document.getElementsByName('selector');

    var arrRadio = document.querySelectorAll('input[type=radio]');

    for (var i = 0; i < arrRadio.length; i++) {
        //Láº¥y ra tá»«ng tag radio
        var tagRadio = arrRadio[i];
        if (tagRadio.checked === true) {
            loaiXe = tagRadio.id;
        }
    }
    
    if (loaiXe === 'uberX') {
        if (soKM <= 1) {
            tienKM = soKM * 8000;
        } else if (soKM > 1 && soKM <= 20) {
            tienKM = 8000 + (soKM - 1) * 12000;
        } else if (soKM > 20){
            tienKM = 8000 + 19 * 12000 + (soKM - 20 ) * 10000;
        }
    }

    if (loaiXe === 'uberSUV') {
        if (soKM <= 1) {
            tienKM = soKM * 9000;
        } else if (soKM > 1 && soKM <= 20) {
            tienKM = 9000 + (soKM - 1) * 14000;
        } else if (soKM > 20){
            tienKM = 9000 + 19 * 14000 + (soKM - 20 ) * 12000;
        }
    }

    if (loaiXe === 'uberBlack') {
        if (soKM <= 1) {
            tienKM = soKM * 10000;
        } else if (soKM > 1 && soKM <= 20) {
            tienKM = 10000 + (soKM - 1) * 16000;
        } else if (soKM > 20){
            tienKM = 10000 + 19 * 16000 + (soKM - 20 ) * 14000;
        }
    }


    tienThoiGian = thoiGianCho * 2000;

    xuatTien.innerHTML = tienKM + tienThoiGian;

}

document.querySelector('#btnXuatHoaDon').onclick = function () {
    var soKM = document.querySelector('#soKM').value;
    var thoiGianCho = parseFloat( document.querySelector('#thoiGianCho').value);
    var soKMGiua = parseFloat(soKM) - 1;  
    var soKMCuoi = parseFloat(soKM) -20;
   
    var loaiXe = '';

    // var arrRadio = document.getElementsByName('selector');

    var arrRadio = document.querySelectorAll('input[type=radio]');

    for (var i = 0; i < arrRadio.length; i++) {
        //Láº¥y ra tá»«ng tag radio
        var tagRadio = arrRadio[i];
        if (tagRadio.checked === true) {
            loaiXe = tagRadio.id;
        }
    }
     

    if (soKM <= 1 ){
        soKMCuoi = 0;
        soKMGiua =0;
    } else if (soKM > 1 && soKM <=20){
        soKMCuoi =0;
    }else if (soKM > 20){
        soKMGiua = 19;
        soKMCuoi = soKM -20;
    };
    if (loaiXe === 'uberX'){
        alert("Số KM: " + soKM + "KM" +"\n" +
        "1 KM Đầu: 8000 VNĐ" +"\n" + 
        
        soKMGiua + " KM Tiếp theo: "+ soKMGiua * 12000 + " VNĐ" + "\n"+
        soKMCuoi + "KM Cuối: " + soKMCuoi * 10000 + " VNĐ" +"\n"+
        "Thời gian chờ: " + thoiGianCho +" phút"+"\n"+
        "Số tiền chờ: " + parseFloat(thoiGianCho) * 2000 + " VNĐ" + "\n" + 
        "Tổng tiền: " + (8000 + (soKMGiua * 12000) + (soKMCuoi * 10000) + thoiGianCho * 2000 ) + " VNĐ");
    }
   
    if (loaiXe === 'uberSUV'){
        alert("Số KM: " + soKM + "KM" +"\n" +
        "1 KM Đầu: 9000 VNĐ" +"\n" + 
        
        soKMGiua + " KM Tiếp theo: "+ soKMGiua * 14000 + " VNĐ" + "\n"+
        soKMCuoi + "KM Cuối: " + soKMCuoi * 12000 + " VNĐ" +"\n"+
        "Thời gian chờ: " + thoiGianCho +" phút"+"\n"+
        "Số tiền chờ: " + parseFloat(thoiGianCho) * 2000 + " VNĐ" + "\n" + 
        "Tổng tiền: " + (9000 + (soKMGiua * 14000) + (soKMCuoi * 12000) + thoiGianCho * 2000 ) + " VNĐ");
    }

    if (loaiXe === 'uberBlack'){
        alert("Số KM: " + soKM + "KM" +"\n" +
        "1 KM Đầu: 10000 VNĐ" +"\n" + 
        
        soKMGiua + " KM Tiếp theo: "+ soKMGiua * 16000 + " VNĐ" + "\n"+
        soKMCuoi + "KM Cuối: " + soKMCuoi * 14000 + " VNĐ" +"\n"+
        "Thời gian chờ: " + thoiGianCho +" phút"+"\n"+
        "Số tiền chờ: " + parseFloat(thoiGianCho) * 2000 + " VNĐ" + "\n" + 
        "Tổng tiền: " + (10000 + (soKMGiua * 16000) + (soKMCuoi * 14000) + thoiGianCho * 2000 ) + " VNĐ");
    }
}
