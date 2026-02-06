# ❤️ Love Counter - Trang Web Đếm Thời Gian Yêu Nhau

Một trang web đơn giản và đẹp mắt để đếm và hiển thị thời gian hai người đã ở bên nhau.

## 📋 Mô Tả

Đây là một trang web tĩnh được xây dựng bằng HTML, CSS và JavaScript thuần, hiển thị:
- Thông tin của hai người yêu nhau
- Số ngày đã ở bên nhau
- Thời gian chi tiết (giờ, phút, giây)
- Animation trái tim đập nhẹ nhàng

## 🎨 Tính Năng

- ⏱️ **Đếm thời gian thực**: Tự động cập nhật mỗi giây
- 💖 **Animation trái tim**: Hiệu ứng trái tim đập với CSS animation
- 📱 **Responsive Design**: Tự động điều chỉnh giao diện trên mọi thiết bị
- 🎨 **Giao diện đẹp mắt**: Gradient background và card design hiện đại

## 🛠️ Công Nghệ Sử Dụng

- **HTML5**: Cấu trúc trang web
- **CSS3**: Styling và animation
- **JavaScript (Vanilla)**: Logic tính toán thời gian
- **Google Fonts**: Font Roboto với hỗ trợ tiếng Việt

## 📁 Cấu Trúc Project

```
d2luu.github.io/
├── index.html      # File HTML chính
├── style.css       # File CSS styling
├── main.js         # File JavaScript xử lý logic
├── luu.jpg         # Ảnh đại diện người thứ nhất
├── hoa.jpg         # Ảnh đại diện người thứ hai
├── heart.svg       # Icon trái tim
└── README.md       # File documentation này
```

## 🚀 Cách Sử Dụng

1. Clone hoặc download project về máy
2. Mở file `index.html` bằng trình duyệt web
3. Trang web sẽ tự động bắt đầu đếm thời gian từ ngày bắt đầu đã được cấu hình

## ⚙️ Cấu Hình

Ngày bắt đầu được cấu hình trong file `main.js`:

```javascript
var startDate = new Date(2016, 11, 20, 21, 00, 00);
```

Để thay đổi ngày bắt đầu, chỉnh sửa giá trị này trong file `main.js`.

**Lưu ý**: Tháng trong JavaScript bắt đầu từ 0 (0 = tháng 1, 11 = tháng 12), nên `11` tương ứng với tháng 12.

## 📱 Responsive Design

Trang web được tối ưu hóa cho:
- Desktop (width > 997px)
- Tablet và Mobile (width ≤ 997px)

Trên mobile, layout sẽ tự động chuyển sang dạng cột dọc để dễ xem hơn.

## 🎯 Tính Năng Chi Tiết

### Đếm Thời Gian
- Tính toán số ngày đã trôi qua từ ngày bắt đầu
- Hiển thị thời gian chi tiết: giờ, phút, giây trong ngày hiện tại
- Tự động cập nhật mỗi giây

### Animation
- Trái tim đập với hiệu ứng `heartBeat` animation
- Gradient background đẹp mắt
- Smooth transitions

## 📝 Thông Tin

- **Dao Danh Luu**: 26.10.1994
- **Nguyen Thi Hoa**: 29.10.1995
- **Ngày bắt đầu**: 20/12/2016, 21:00:00

## 📄 License

Project này được tạo cho mục đích cá nhân.

---

Made with ❤️
