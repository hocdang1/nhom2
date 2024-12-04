const mysql = require('mysql2');

// Cấu hình kết nối
const connection = mysql.createConnection({
  host: 'localhost',      // Địa chỉ máy chủ (localhost nếu dùng cục bộ)
  user: 'root',           // Tên người dùng MySQL
  password: 'your_password', // Mật khẩu MySQL
  database: 'your_database'  // Tên database
});

// Kiểm tra kết nối
connection.connect((err) => {
  if (err) {
    console.error('Kết nối MySQL thất bại:', err.message);
    return;
  }
  console.log('Kết nối MySQL thành công!');
});

// Xuất kết nối để sử dụng trong các file khác
module.exports = connection;
