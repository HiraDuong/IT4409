function check()
{
    var username = document.getElementById('Name').value;
    var phone = document.getElementById('Phone').value;
    var email = document.getElementById('Email').value;

    
    if (username.trim() === '') {
        alert('Vui lòng nhập họ tên.');
        return false;
    }

    if (!/^\d{10,11}$/.test(phone)) {
        alert('Số điện thoại không hợp lệ. Phải là 10 hoặc 11 số.');
        return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Email không hợp lệ.');
        return false;
    }

    // Nếu mọi điều kiện đều đúng, cho phép đăng ký
    alert('Đăng ký thành công!');
    return true;


}