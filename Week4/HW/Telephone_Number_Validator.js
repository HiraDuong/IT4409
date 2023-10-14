function telephoneCheck(str) {
    // Sử dụng biểu thức chính quy để kiểm tra định dạng số điện thoại
    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([-\s]?)(\d{3})([-\s]?)(\d{4})$/;
  
    // Kiểm tra xem chuỗi khớp với biểu thức chính quy không
    return phoneRegex.test(str);
  }
  
  // Test với các ví dụ
  console.log(telephoneCheck("555-555-5555"));      // true
  console.log(telephoneCheck("(555)555-5555"));    // true
  console.log(telephoneCheck("(555) 555-5555"));   // true
  console.log(telephoneCheck("555 555 5555"));     // true
  console.log(telephoneCheck("5555555555"));       // true
  console.log(telephoneCheck("1 555 555 5555"));   // true
  console.log(telephoneCheck("800-692-7753"));      // true
  console.log(telephoneCheck("8oo-six427676"));    // false
  