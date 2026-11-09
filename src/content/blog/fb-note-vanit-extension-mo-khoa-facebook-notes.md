---
title: "FB NOTE - VanIT: Extension Mở Khóa Toàn Bộ Giới Hạn Của Facebook Notes Trên PC & Android"
description: "Công cụ mã nguồn mở do Nguyễn Đình Văn (VanIT) phát triển giúp viết ghi chú Facebook dài 600 ký tự, cắt nhạc 30s trực quan với sóng âm, hẹn giờ đăng tự động, đăng lại nhiều lần và gửi tin nhắn ẩn mã hóa Unicode tàng hình an toàn 100% không lo checkpoint."
pubDate: "2026-11-10"
category: "tools"
categoryLabel: "Công cụ & Extension"
readingTime: "5 phút đọc"
tags: ["FB NOTE - VanIT", "Chrome Extension", "Facebook Notes", "React", "TypeScript", "Mã nguồn mở", "VanIT"]
featured: true
---

> Bạn muốn viết một đoạn tâm sự hay trích dẫn dài hơn nhưng Facebook chỉ cho phép vỏn vẹn **60 ký tự**? Bạn muốn hẹn giờ đăng note vào lúc nửa đêm chúc mừng sinh nhật, hoặc tự động đăng lại bài hát yêu thích suốt cả tuần? **FB NOTE - VanIT** chính là giải pháp sinh ra dành cho bạn!

Facebook Notes (Ghi chú Messenger) là một tính năng cực kỳ thú vị giúp bạn chia sẻ nhanh suy nghĩ, cảm xúc và bài hát tâm đắc với bạn bè ngay trên đầu danh sách chat. Tuy nhiên, phiên bản mặc định của Meta lại có quá nhiều giới hạn gây ức chế: chỉ cho gõ 60 chữ, không thể cắt nhạc trực quan trên máy tính, và bắt buộc biến mất sau đúng 24 giờ.

Để giải quyết triệt để những rào cản này, mình đã phát triển extension **FB NOTE - VanIT (v2.0.0)** – một công cụ mã nguồn mở hoàn toàn miễn phí, giúp bạn làm chủ 100% trải nghiệm ghi chú trên cả máy tính lẫn điện thoại Android.

<figure>
  <img src="/images/projects/fb-note/fb-note-composer.png" alt="Giao diện soạn thảo hiện đại của extension FB NOTE - VanIT" />
  <figcaption>Giao diện soạn thảo hiện đại của FB NOTE - VanIT (v2.0.0) với khung xem trước bong bóng ghi chú theo thời gian thực, đếm 600 ký tự, cắt nhạc và tin nhắn bí mật.</figcaption>
</figure>

---

## 🌟 Bảng So Sánh: Facebook Mặc Định vs FB NOTE - VanIT

| Tính năng | Facebook Mặc Định | FB NOTE - VanIT |
| :--- | :--- | :--- |
| **Độ dài ghi chú** | Bị giới hạn **60 ký tự** | Viết thoải mái lên tới **600 ký tự** (gấp 10 lần) |
| **Hẹn giờ đăng (Schedule)** | Không hỗ trợ | Có, hẹn giờ đăng tự động qua Chrome Alarms API |
| **Tự động đăng lại (Auto-repost)** | Không hỗ trợ | Tự động đăng lại từ **1 đến 10 lần** khi note hết hạn |
| **Thời hạn hiển thị (Duration)** | Cố định chỉ 24 giờ | Tùy biến từ **30 phút đến 8 ngày** (30m, 1h, 3h, 6h, 12h, 24h, 3d, 7d...) |
| **Kho nhạc & Cắt nhạc trên PC** | Chỉ chọn bài, rất khó cắt đoạn ưng ý | Tìm kiếm kho bản quyền FB, nghe thử & kéo sóng âm cắt chuẩn 30s |
| **Tin nhắn bí mật (Hidden Notes)** | Không có | Giấu nội dung mật bằng ký tự tàng hình (Unicode Steganography) |
| **Quản lý đối tượng người xem** | Phải chọn thủ công từng người | Lưu sẵn nhóm bạn bè (*Bạn thân*, *Crush*, *Gia đình*,...) chọn 1 click |
| **Lịch sử ghi chú** | Mất khi hết hạn | Lưu toàn bộ lịch sử, 1 click nạp lại toàn bộ cấu hình cũ |

---

## 🚀 Những Tính Năng Đột Phá Đáng Chú Ý

### 1. 📝 Viết ghi chú dài tới 600 ký tự (Gấp 10 lần mặc định)
Không còn phải cắt xén câu từ hay viết tắt khó chịu. Giờ đây bạn có thể chia sẻ cả một đoạn trích dẫn sách, lời bài hát đầy đủ hay một câu chuyện ngắn với dung lượng lên đến **600 ký tự** mà Facebook vẫn hiển thị mượt mà.

### 2. 🎵 Cắt nhạc 30s trực quan với sóng âm (Waveform) ngay trên PC
Trên máy tính, Facebook không hỗ trợ giao diện cắt nhạc trực quan. Extension tích hợp sẵn kho nhạc bản quyền của Facebook: bạn có thể tìm kiếm bất kỳ bài hát nào, nghe thử trực tiếp và kéo thanh sóng nhạc để chọn chính xác 30 giây điệp khúc mà bạn ưng ý nhất.

### 3. ⏰ Hẹn giờ đăng note & Tự động đăng lại (Auto-repost)
* **Hẹn giờ đăng:** Soạn sẵn note và hẹn giờ đăng vào lúc 0h sáng hoặc một khung giờ vàng bất kỳ mà bạn muốn.
* **Auto-repost:** Note của Facebook sẽ tự biến mất sau một khoảng thời gian. Với tính năng Tự động đăng lại, extension sẽ tự động đăng lại ghi chú của bạn từ **1 đến 10 lần** mà bạn không cần phải thao tác lại bằng tay.

<div class="article-photo-grid">
  <figure>
    <img src="/images/projects/fb-note/fb-note-history.png" alt="Lịch sử ghi chú đã đăng trên FB NOTE - VanIT" />
    <figcaption>Lịch sử lưu lại các ghi chú cũ, dễ dàng bấm "Dùng lại" để nạp nguyên văn bản và bài hát.</figcaption>
  </figure>
  <figure>
    <img src="/images/projects/fb-note/fb-note-schedule.png" alt="Giao diện quản lý lịch hẹn đăng note tự động" />
    <figcaption>Quản lý lịch hẹn đăng và cơ chế Auto-repost tự động chạy ngầm qua Chrome Alarms.</figcaption>
  </figure>
</div>

### 4. 🔒 Độc quyền: Tính năng "Tin nhắn ẩn" (Secret Note)
Bạn muốn nhắn gửi một thông điệp bí mật mà chỉ những người bạn đặc biệt mới đọc được? Tính năng mã hóa bằng ký tự Unicode tàng hình (*Unicode Steganography*) sẽ giấu nội dung mật bên trong ghi chú. Người bình thường nhìn vào chỉ thấy dòng note thông thường, nhưng những ai có cài extension sẽ tự động giải mã được nội dung ẩn với biểu tượng 🔒 tím nổi bật!

### 5. 👥 Quản lý nhóm bạn bè thân thiết
Tạo sẵn các nhóm đối tượng như *Bạn thân*, *Crush*, *Đồng nghiệp* để chọn người xem nhanh chóng chỉ với 1 cú click chuột, không cần phải tìm và tích chọn từng người mỗi lần đăng.

---

## 🛡️ Dùng Công Cụ Này Có Sợ Bị Khóa Nick (Checkpoint) Không?

<div class="article-infobox">
  <h4>CAM KẾT AN TOÀN & BẢO MẬT 100%</h4>
  <ul>
    <li><strong>100% Client-Side:</strong> Extension chỉ đóng vai trò gửi yêu cầu trực tiếp từ trình duyệt của bạn đến máy chủ Facebook thông qua phiên đăng nhập sẵn có.</li>
    <li><strong>Không yêu cầu tài khoản hay mật khẩu:</strong> Tuyệt đối không bao giờ hỏi mật khẩu Facebook hay cookie của bạn.</li>
    <li><strong>Không gửi dữ liệu ra ngoài:</strong> Không có server trung gian, không thu thập bất kỳ thông tin cá nhân nào.</li>
    <li><strong>Không lo Checkpoint IP:</strong> Vì lệnh gửi đi trực tiếp từ địa chỉ IP mạng máy tính của chính bạn, Facebook nhận diện đó là thao tác hợp lệ của chính chủ.</li>
  </ul>
</div>

---

## 💻 Hướng Dẫn Cài Đặt Nhanh Trong 1 Phút

### Cách 1: Cài đặt trên Máy tính (Chrome, Edge, Brave, Cốc Cốc)
1. Tải mã nguồn dự án tại: [GitHub Repository: FB-NOTE-VanIT](https://github.com/DinhVen/FB-NOTE-VanIT) (Bấm nút xanh **Code -> Download ZIP** và giải nén ra thư mục).
2. Mở trình duyệt và truy cập đường dẫn: `chrome://extensions/`
3. Gạt công tắc bật **Chế độ dành cho nhà phát triển (Developer mode)** ở góc trên bên phải.
4. Bấm nút **Tải bản giải nén (Load unpacked)** và trỏ vào thư mục `dist` (hoặc thư mục dự án vừa giải nén).
5. Ghim extension lên thanh công cụ, mở tab Facebook và bắt đầu sáng tạo ghi chú!

### Cách 2: Sử dụng trên Điện thoại Android (Qua Kiwi Browser)
1. Lên CH Play tải trình duyệt **Kiwi Browser** (trình duyệt Android hỗ trợ cài tiện ích Chrome mở rộng).
2. Tải file ZIP của extension về điện thoại.
3. Mở Kiwi Browser, vào biểu tượng 3 chấm `⋮` -> chọn **Extensions** -> bật **Developer mode** -> bấm **+(from .zip / .crx / .user.js)** và chọn file vừa tải.
4. Đăng nhập Facebook trên Kiwi Browser và sử dụng đầy đủ các tính năng như trên PC!

---

## 💬 Lời Kết & Mã Nguồn Mở

Dự án **FB NOTE - VanIT** được mình xây dựng với công nghệ **React 18, TypeScript, Vite, Tailwind CSS và Chrome Manifest V3**, hoàn toàn phi lợi nhuận với mong muốn mang lại trải nghiệm tiện lợi và thú vị hơn cho cộng đồng người dùng Facebook tại Việt Nam.

Toàn bộ mã nguồn đã được mình công khai minh bạch tại GitHub:
👉 **[https://github.com/DinhVen/FB-NOTE-VanIT](https://github.com/DinhVen/FB-NOTE-VanIT)**

Nếu bạn thấy công cụ này hữu ích, hãy ghé thăm kho lưu trữ và tặng mình **1 ⭐️ Star trên GitHub** để ủng hộ tác giả tiếp tục phát triển thêm nhiều công cụ hay nữa nhé!
