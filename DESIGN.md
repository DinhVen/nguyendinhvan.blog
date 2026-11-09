# DESIGN.md — Hệ thống Thiết kế UI/UX (`nguyendinhvan.blog`)

Tài liệu đặc tả hệ thống thiết kế cho trang cá nhân, portfolio và nhật ký phóng sự ảnh của **Nguyễn Đình Văn** (`nguyendinhvan.blog`), tuân thủ nghiêm ngặt quy tắc của skill `ui-ux` (`evondevKit`).

## 1. Bố cục & Cấu trúc (Phương án A — Editorial Dọc + Apple Scrollytelling)
- **Khung điều hướng (Header `#1`):** Thanh kính mờ cố định (`height: 64px`, `backdrop-filter: blur(16px)`), gồm cụm thương hiệu bên trái (`avatar + Nguyễn Đình Văn`), thanh điều hướng 4 mục ở giữa (`Trang chủ`, `Đời sinh viên & Dự án`, `Nhật ký & Bài báo`, `Định hướng 2027`) trên màn `>= 1024px`, và cụm nút tiện ích bên phải (`Tìm nhanh Ctrl+K`, `Đổi Sáng/Tối`, `Menu di động` trên màn `< 1024px`).
- **Trang chủ (`/`):**
  - **Khối `#2` (Hero Hồ sơ):** Chân dung Nguyễn Đình Văn, huy hiệu trạng thái *"Hướng tới Nghĩa vụ Quân sự 2027"*, tóm tắt Cử nhân CNTT (ĐH Quy Nhơn) & Nhân viên Số hóa (Trung tâm Lưu trữ lịch sử tỉnh Gia Lai), dải liên hệ thật (`Email`, `SĐT`, `GitHub`), 2 nút hành động chính và 3 thẻ chỉ số cốt lõi (`2022–2026`, `TMA Solutions`, `Mục tiêu 2027`).
  - **Khối `#3` (Dự án Kỹ thuật — cột 5/12) & Khối `#4` (Phóng sự ảnh & Nhật ký — cột 7/12):** Đặt song song trên màn lớn để người xem đối chiếu ngay năng lực kỹ thuật (2 đồ án GitHub) và chiều sâu câu chuyện thật (4 bài phóng sự ảnh tiêu biểu kèm ảnh bìa).
  - **Khối `#5` (9 Cột mốc Học tập, Thực tập & Hoạt động):** Lưới 2 cột gọn gàng, mỗi thẻ tối đa 3 dòng thông tin + ảnh đại diện sự kiện + liên kết đọc bài báo.
  - **Khối `#6` (Định hướng 2027 & Châm ngôn sống):** Khối điểm nhấn khép lại trang chủ với lộ trình 3 giai đoạn hướng tới Quân đội Nhân dân Việt Nam.

## 2. Bảng màu & Token (`src/styles/global.css`)
- **Mặc định Nền Tối (Dark Mode — Apple Obsidian & Aurora):**
  - `--background`: `#090b10`
  - `--surface`: `#11141d`
  - `--surface-elevated`: `#171b26`
  - `--surface-hover`: `#1d2230`
  - `--foreground`: `#edf0f7`
  - `--text-secondary`: `#b0b8c9` (tương phản `> 7.5:1` trên nền `#11141d`)
  - `--muted`: `#949eb3` (tương phản `>= 5.2:1` trên cả `#11141d` và `#171b26`, vượt chuẩn WCAG AA `4.5:1`)
  - `--primary`: `#2dd4bf` (Teal sáng), `--primary-foreground`: `#041f1c`
- **Chế độ Nền Sáng (Light Mode — Clean Flat):**
  - `--background`: `#f4f5f7`
  - `--surface`: `#ffffff`
  - `--surface-elevated`: `#f0f2f5`
  - `--surface-hover`: `#e6e9ef`
  - `--foreground`: `#18181b`
  - `--text-secondary`: `#3f3f46`
  - `--muted`: `#52525b` (tương phản `> 5.8:1` trên nền sáng)
  - `--primary`: `#0f766e`, `--primary-foreground`: `#ffffff`

## 3. Thang chữ & Quy tắc Hiển thị
- **Font chữ:** `Inter` cho giao diện và nội dung, `JetBrains Mono` cho nhãn kỹ thuật/thời gian, `Newsreader` cho trích dẫn báo chí.
- **Kích thước tối thiểu:** Mọi chữ hiển thị trên web `>= 12px` (`0.75rem`). Không dùng cỡ chữ nhỏ hơn `12px`.
- **Chống chữ mồ côi & rớt dòng:**
  - Tiêu đề (`h1`, `h2`, `h3`) dùng `text-wrap: balance`.
  - Đoạn văn (`p`, `li`) dùng `text-wrap: pretty`.
  - Toàn bộ nút bấm, huy hiệu (`badge`), liên kết hành động và tab điều hướng dùng `white-space: nowrap` và chiều cao đồng nhất (`36px` hoặc `40px`).

## 4. Hiệu ứng Chuyển động Hiện đại (Apple Scrollytelling & Interactive Background)
- **Nền chuyển động đa tầng (Ambient Aurora + Interactive Data Canvas):**
  - Lớp cực quang 3 vầng sáng (`Teal`, `Cyan`, `Emerald`) trôi chậm phía sau mặt trang.
  - Lớp Canvas hạt dữ liệu & lưới tọa độ mảnh chuyển động nhẹ theo vị trí cuộn trang (Parallax), tự động giảm cường độ trên trang đọc bài báo dài và tự tắt khi bật `prefers-reduced-motion: reduce`.
- **Cuộn tới đâu hiện tới đó (Scroll-Reveal):**
  - Các khối `.reveal-on-scroll` và danh sách `.stagger-grid > *` hiện dần mượt mà (`opacity: 0 -> 1`, `translateY(24px -> 0)`, `scale(0.985 -> 1)`) với đường cong `cubic-bezier(0.16, 1, 0.3, 1)`.
  - Nếu phần tử đã nằm trong vùng nhìn đầu trang (above the fold) hoặc khi trình duyệt không cuộn, hiển thị ngay không gây trễ.
- **Tương tác thẻ (Spotlight & Image Zoom):**
  - Thẻ `.bento-card` có vầng sáng Spotlight chạy theo con trỏ chuột dọc mặt thẻ và viền `1px`.
  - Không nhấc toàn bộ thẻ lên khi rê chuột (`F22`); chỉ đổi màu nền/viền rõ nét và phóng nhẹ ảnh bên trong khung (`scale(1.03)`).
- **Thanh cuộn 4px tự ẩn:** Thanh cuộn mảnh `4px`, bình thường trong suốt, chỉ hiện khi rê chuột hoặc đang cuộn.
