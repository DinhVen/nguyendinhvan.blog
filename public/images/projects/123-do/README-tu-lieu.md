# Tư liệu dự án "1, 2, 3 DÔ!" (thu thập từ D:\game)

- Repo: https://github.com/DinhVen/123-do-game (nhánh `main`, commit `0868ed8` — "TikTok Live Interactive Game v2.0 - Quán Nhậu Chibi 7 Bàn 28 Ghế")
- Mô tả: game pixel/chibi tương tác TikTok Live, khung dọc 9:16 (360x640 logic, scale 3x -> 1080x1920), chạy qua OBS Browser Source / TikTok LIVE Studio.
- Công nghệ: Node.js, Express, Socket.io, tiktok-live-connector 2.5.0 (backend, nguồn trạng thái duy nhất); Phaser 3, Vite, Web Audio API (frontend).
- Chế độ: MOCK (giả lập, có bảng điều khiển /mock) và LIVE (kết nối phòng TikTok qua TIKTOK_UNIQUE_ID, không cần mật khẩu/cookie).
- v2.0: 7 bàn tròn (6 thường + 1 VIP) x 4 ghế = 28 ghế; nhân vật chibi đi bộ, đổi bàn, cụng ly, say, bị vợ kéo về; Chủ quán (đổi được ảnh), thực đơn 7 món theo xu, 2 BXH (Thần Cồn, Thần Diệt Mồi), hũ tim.
- Luật chính: lệnh chat VAO / BIA / DZO / BAN 1-6 / VIP; hàng chờ tối đa 30 (VIP trước, FIFO); độ say 0-100% (SOBER/TIPSY/DRUNK/KO); mỗi 30s cả bàn "1, 2, 3 DÔ!" +5% say; mỗi 100 tim +1%.
- Độ bền: snapshot trạng thái mỗi 3s (ghi nguyên tử), tự khôi phục trong 15 phút; tự reconnect (exponential backoff + jitter); che dữ liệu nhạy cảm trong log.
- Kiểm thử: 24 file test (tests/test-1.1 ... test-5.4, test-v2-*); stress test Playwright WebGL ~95-139 FPS (theo PROJECT_STATUS.md). Nghiệm thu OBS 60 phút: ghi chú "chờ nghiệm thu thủ công".
- Tài liệu gốc: README.md, GAME_DESIGN.md, TECHNICAL_ARCHITECTURE.md, PROJECT_MASTER_PLAN.md, MASTER_PLAN_V2.md, IMPLEMENTATION_PLAN.md, OBS_GUIDE.md, PROJECT_STATUS.md.

Ảnh: game-empty.png, game-full-table.png, game-cheers.png, mock-dashboard.png, mock-dashboard-live.png, assets/ (nhân vật, chủ quán, bàn, món ăn).
Lưu ý: ảnh chụp dùng 28 người chơi mô phỏng (bot MOCK), không phải dữ liệu người xem thật.
