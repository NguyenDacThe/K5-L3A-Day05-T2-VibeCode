# Prototype LAB5 — L3A · Zone 1 · T2

Người 3: **Nguyễn Đắc Thể — 2A202603529**. Hai màn Học viên / Đóng vai TA, dựng theo **giả định dự thảo** S05/S03 và quyền §4 của [spec.md](../spec.md); chưa thay nhóm chốt M1/M2.

## Mở

Nhấp đúp `index.html` và mở bằng Chrome/Edge. Không cần npm, tài khoản, key hay Internet. Giữ `index.html`, `styles.css`, `fixtures.js`, `app.js` cùng thư mục.

Cách khác, chạy từ root repo:

```powershell
python -m http.server 8000 --directory prototype
```

Mở `http://localhost:8000`. Dừng server bằng `Ctrl+C` khi xong. Với GitHub, tải repo về rồi mở file; trang xem mã HTML trên GitHub không chạy prototype.

## Bấm S05 — học liệu sai → chuyển TA → duyệt FAQ

1. Chọn **S05 · Học liệu có sai?**. Đọc câu trả lời; ở **01**, mở/đóng đoạn §3.3. Câu sai giữ nguyên, tô vàng; khối bên dưới ghi suy luận cần xác minh.
2. Ở **02**, bấm **Chuẩn bị câu hỏi cho TA**. Chưa chuyển gì. Bản xem trước gồm câu hỏi tóm tắt, nơi nhận, nguyên nguồn và lý do nghi vấn.
3. Bấm **Đổi sang câu hỏi dễ hiểu hơn**; có thể sửa lại đúng một trong hai mẫu. Nội dung ngoài mẫu chưa được gửi. Chọn **Không gửi** để thử huỷ; hàng chờ vẫn bằng 0. Mở lại, đổi tóm tắt và **Xác nhận chuyển TA**.
4. Sau khoảng 0,4 giây, kiểm thông báo vào **hàng chờ mô phỏng**, chưa gửi tới TA thật, ngoài giờ và chưa có giờ trả lời xác nhận.
5. Chọn **Đóng vai TA**. Đối chiếu câu hỏi sau sửa, nguồn và lý do. Bấm **Soạn bản FAQ từ câu hỏi này**. Bản soạn chưa gọi `dang_FAQ` và chưa công khai.
6. Tại **03**, đọc câu hỏi/câu trả lời/nguồn/phạm vi cả lớp. Nút đăng bị khoá khi chưa duyệt. Thử **Từ chối**, rồi **TA mô phỏng duyệt bản này**.
7. Sau duyệt, bấm **Dùng bản diễn đạt thận trọng hơn**: lượt duyệt cũ mất hiệu lực. Sửa rồi đổi lại văn bản cũ cũng phải duyệt lại. Nội dung ngoài hai mẫu an toàn hoặc câu hỏi ngoài mẫu không được duyệt.
8. Duyệt bản hiện tại, bấm **Đăng FAQ đã duyệt**. Chỉ khi thành công, vùng **FAQ lớp / Mô phỏng** mới có đúng một bài. Bấm lặp không tạo bài trùng.

## Bấm S03 — bài đang mở

1. **Bắt đầu lại** → **S03 · Xin giải bài mở**. Ở **04**, xem trạng thái đang mở và hạn **13/11/2026 23:59** từ trang khoá học; đây không phải hạn nộp LAB5.
2. Trợ lý chỉ gợi ý tự sắp xếp. Mở §3.1, §3.2, §3.5 từ các nút dưới câu trả lời; nguồn xuất hiện ở 01.
3. Thử **Xin thêm bước → Thử xin xác nhận → Xin nhận xét hộ → Xin đưa lên FAQ**. Đây là các tin học viên gửi để thử giới hạn, không phải chức năng giải hộ. Trợ lý không tích luỹ lời giải hay lặp lại đáp số học viên tự đưa.
4. Chuẩn bị câu hỏi ở 02, sửa/huỷ/xác nhận như trên. TA chỉ thấy mẫu hỏi cách học; không có nút tạo FAQ lời giải bài 3. TA duyệt không mở quyền giải hộ.
5. Chọn **Tôi hỏi bài 2**. Trợ lý đối chiếu cả hết hạn và đã công bố đáp án; chỉ giải thích đầy đủ bài 2. Quay lại S03, bài 3 vẫn đang mở.

## Ca thường, ca khó khác và lỗi

- **Câu hỏi bình thường**: trung bình/trung vị có §3.1–§3.2 ngay, không chờ TA.
- Ô nhập thử được các ý “Slide 12…”, “Cái độ lệch ấy…”, “p-value…”, “Hạn bài 3 và Excel dùng hàm gì?”, “Em ngu quá nên không hiểu trung vị”, “23 giờ rồi báo TA ngay”. Đây là nhận diện ý định hẹp, không phải mô hình ngôn ngữ.
- **Sửa lời giải thích**: tiếp nhận phản biện, tra lại §3.3, vẫn phân biệt suy luận và đính chính chính thức.
- Câu ngoài phạm vi nhận diện: hỏi lại, không đoán lời giải hay nguồn mới. Có thể giải thích đường xử lý theo §4 khi demo ca lạ.
- Thanh bên → **Điều khiển mô phỏng**: bật lỗi học liệu/trang khoá học để xem fallback. Hai lỗi này giữ tới khi bỏ chọn; lỗi chuyển/đăng chỉ áp dụng **lần tiếp theo**.
- Bật lỗi chuyển → xem trước/xác nhận → thất bại, hàng chờ 0, giữ bản sửa → thử lại → hàng chờ 1.
- Bật lỗi đăng → duyệt đúng bản/đăng → thất bại, FAQ 0 → thử lại → FAQ 1.
- Mở **Nhật ký tool mô phỏng** cuối trang: soạn/xem trước không được ghi là đã chuyển/đăng. Không có timer tự duyệt hay tự công bố.

## Phần mô phỏng và giới hạn

Không có AI/API thật, backend, đăng nhập hay người TA thật nhận câu hỏi; không có bài FAQ thật. Chuyển vai trong cùng trình duyệt chỉ để thử UX, không cung cấp bảo đảm phân quyền thực tế. Nội dung chat, hàng chờ, duyệt, FAQ chỉ nằm trong bộ nhớ; tải lại/reset sẽ xoá phiên. Không dùng `localStorage` hay gửi lịch sử lên mạng.

Đồng hồ cố định **23:00 ngày 12/11/2026 GMT+7**; TA **08:00–22:00**; không hứa trả lời lúc 08:00. Dữ liệu học liệu gốc §3.1–§3.5 giữ đúng đề, kể cả câu sai §3.3. Không dựng nội dung buổi 1–2, slide hay tên hàm Excel.

Trợ lý chỉ phát câu dựng sẵn. Tóm tắt mỗi ngữ cảnh có hai mẫu, FAQ có hai cách diễn đạt an toàn về §3.3; văn bản ngoài mẫu bị chặn **ở điều kiện thực thi**. Có thể tự gõ đáp số trong tin nhắn/nháp của mình, nhưng trợ lý không xác nhận, lặp lại trong đầu ra hay chuyển những nội dung đó cho TA/FAQ. Đây là thu hẹp phạm vi demo, không phải bộ lọc an toàn tổng quát cho AI thật.

Không có thao tác rút yêu cầu đã chuyển hay gỡ FAQ trong prototype. “Không gửi” chỉ huỷ bản chưa chuyển; reset chỉ xoá phiên giả lập. Nội dung đã đọc không thể hoàn tác; gỡ FAQ ngoài hệ thống cũng không khiến người đọc quên. Đường phục hồi sau khi AI đã lỡ lộ bài giải còn là thiết kế trong spec, không có ca cố ý tiết lộ trong app.

## Bằng chứng và chạy kiểm lại

- [Ảnh học viên](images/01-hoc-vien.png): 01 nguồn/G10/G11, 02 sửa trước chuyển/G9, 04 trạng thái/hạn bài.
- [Ảnh TA](images/02-ta.png): 03 duyệt đúng bản; hàng chờ thấy tóm tắt đã sửa. Ảnh chụp trước công bố FAQ, không phải bằng chứng đã đăng.
- [Kết quả Chrome tự động](../work/test-results.json): 15/15 nhóm kiểm, gồm 2 ca × 3 tiêu chí, ca thường, hard tests, lỗi và mobile 390px. Không thay thế kiểm thủ công/đồng thuận của nhóm.

Từ root, với **Node.js 22+** và Chrome/Edge trên Windows:

```powershell
node work/check-prototype.mjs
node work/check-spec.mjs
```

Script thứ nhất mở Chrome headless bằng hồ sơ tạm, server loopback cổng ngẫu nhiên, kiểm các luồng rồi ghi JSON và chụp lại đúng 2 ảnh; đóng tiến trình do script tạo khi xong. Nếu trình duyệt ở nơi khác, đặt biến môi trường `LAB_BROWSER` là đường dẫn executable. Môi trường sandbox chặn tiến trình GPU có thể cần quyền chạy ngoài sandbox; không cần tắt sandbox của trình duyệt. Script thứ hai kiểm cấu trúc/liên kết/fixture của bài và ghi báo cáo riêng.
