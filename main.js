function validateForm() {
    var hoTen = document.getElementById("hoTen").value;
    var dienThoai = document.getElementById("dienThoai").value;
    if (hoTen.length <= 10) {
        alert("Bạn phải nhập đầy đủ họ tên.");
        return false;
    }
    if (isNaN(dienThoai) || dienThoai.length < 9) {
        alert("Điện thoại nhập chưa đúng.");
        return false;
    }
    alert("Cám ơn bạn đã liên hệ với chúng tôi.");
    return true;
}
