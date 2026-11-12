# Bàn giao Người 3 — Nguyễn Đắc Thể · 2A202603529

**Lớp L3A · Zone 1 · Track T2.** Thực hiện cùng trợ lý AI ngày 12/11/2026; không đại diện việc cả nhóm đã họp, kiểm thủ công hay demo.

## Đã hoàn thành

- Dựng `prototype/index.html`, `styles.css`, `fixtures.js`, `app.js`: hai màn học viên/TA, S05 và S03 bấm đầu–cuối, nguồn mở được, bốn tool mô phỏng đúng quyền dự thảo §4, điều khiển lỗi và reset.
- Giữ nguyên fixture §3.3 có câu sai, bài 3 đang mở bằng đồng hồ mô phỏng cố định; không API/key/backend, không gọi sản phẩm thật.
- Chặn chuyển khi thiếu xác nhận; hàng chờ dùng đúng bản sau sửa; soạn/duyệt/đăng FAQ là ba trạng thái khác nhau. Mỗi lần sửa làm mất duyệt; chặn nội dung ngoài mẫu để không biến TA/FAQ thành đường nhận lời giải bài mở.
- Chụp đúng hai ảnh thật trong `prototype/images/`, số 01–04 gắn G10/G11/G9; viết `prototype/README.md` để thành viên khác tự mở và chạy lại.
- Tích hợp vào `spec.md`: điền lớp/zone/thông tin Người 3, hoàn thiện §5, kết quả tự động §6, kịch bản dự kiến và mẫu biên bản chưa demo §7. Giữ lập luận và mức quyền của người 1/2; chỉ sửa mô tả bàn giao cũ và làm rõ vị trí UI/lời thoại thực tế.
- Rà mâu thuẫn giữa spec, UI, fixture và yêu cầu; chi tiết `work/kiem-tra-spec.md`.

## Đã kiểm thật

`node work/check-prototype.mjs` chạy Chrome headless thật qua CDP, tương tác DOM tự động; **15/15 nhóm kiểm Pass**. Log có timestamp thật: `work/test-results.json`. Có kiểm cả S05/S03 × C1–C3, S04 nhiều lượt, câu hỏi thường, slide không có, mơ hồ, buổi sau, Excel không nguồn, tự chê, ngoài giờ, sửa AI, lỗi nguồn/trạng thái/chuyển/đăng, huỷ, bấm lặp, duyệt cũ, mở file trực tiếp và 390px.

Đã sửa lỗi thiếu nối xử lý nút đăng FAQ và đính kèm nguồn khi tra cứu lỗi; chạy lại toàn bộ bộ kiểm đạt. Sửa nhãn nút thử xin xác nhận để phân biệt tin nhắn học viên với chức năng AI bị cấm. Ảnh đã xem lại từ file PNG.

Rà cấu trúc/liên kết/fixture bằng `node work/check-spec.mjs`; báo cáo máy ở `work/spec-check-results.json`, báo cáo đối chiếu nội dung/rubric ở `work/kiem-tra-spec.md`. Kiểm máy không chứng minh ngữ nghĩa mọi câu hay bảo đảm điểm chấm.

## Giả định và giới hạn

- **Chưa có biên bản M1/M2:** triển khai dự thảo S05/S03 và ma trận §4 có sẵn. Theo yêu cầu bổ sung của Nguyễn Đắc Thể, đã điền phương án quyền cho đủ ba thành viên và cách tổng hợp ở §4; không ghi đó là lựa chọn độc lập hay đồng thuận thực tế đã được xác nhận.
- Prototype đóng theo kịch bản; không hiểu mọi câu tự do. Chuyển/FAQ chỉ chấp nhận các mẫu an toàn công khai. Không có phân quyền thật, lưu trữ thật hay SLA.
- Chưa chạy AI thật, chưa kiểm chống prompt injection trên mô hình thật; không có bonus API. Reset không phải thu hồi hành động thật.
- Chưa có kiểm chéo trực tiếp từ hai thành viên, chưa demo/nhận ca lạ thật; chưa xác minh repo công khai bằng cửa sổ ẩn danh.

## Bàn giao để nhóm hoàn thiện thông tin thật

1. Người 1: xác nhận tên nhóm (repo hiện tên `K5-L3A-Day05-T2-VibeCode`), chốt hai ca và đối chiếu phương án quyền đã điền cho ba thành viên tại §4. Bảng đã đủ tên/mã, bốn mức quyền, lý do và tool khó xếp; xác nhận lựa chọn độc lập/biên bản M2 vẫn cần dữ liệu thực tế.
2. Người 2: bấm hai luồng trong README; kiểm câu chữ G10/G11/G9, C1–C3 và ảnh. Bổ sung kết quả kiểm thủ công thật nếu đã làm, không thay thế thời điểm/log tự động bằng tên thành viên.
3. Nguyễn Đắc Thể: tập bấm demo, giải thích handler chặn trước khi thực thi và duyệt theo đúng bản; sau demo ghi §7 từ sự kiện thật.
4. Cả nhóm: kiểm quyền truy cập repo công khai/ẩn danh, nộp link theo hướng dẫn giảng viên. Hạn LAB5 lớp L3A **trước 23:59 ngày 12/11/2026**, khác hạn bài 3 của fixture **13/11/2026 23:59**.

Không commit/push/nộp bài hoặc công bố website từ phiên làm việc này; đầu ra nằm trong checkout để nhóm rà và sử dụng.
