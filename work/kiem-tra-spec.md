# Rà tích hợp spec và prototype — Người 3

L3A · Zone 1 · Nguyễn Đắc Thể — 2A202603529. Rà ngày **12/11/2026** bằng đọc chéo các phần, kiểm tĩnh và chạy prototype trên Chrome thật. Phạm vi là bản dự thảo nhóm đã bàn giao trong checkout, không tự chấm điểm như giảng viên.

## Kết quả về conflict

Không thấy mâu thuẫn về **hai mã ca S05/S03 hoặc quyền bốn tool** giữa §2–§4. Hai phần ban đầu thống nhất ở mức đề xuất; điểm thiếu là chưa có triển khai để chứng minh. Sau tích hợp đã xử lý các mô tả cũ và chỗ dễ hiểu lệch dưới đây; không thấy dấu conflict Git `<<<<<<<` / `=======` / `>>>>>>>` còn sót trong `spec.md`.

| Điểm đối chiếu | Phát hiện / xử lý | Bằng chứng sau sửa |
|---|---|---|
| §3/§4/§6 nói chưa có UI/ảnh/kiểm trong khi §5 đã được dựng | Cập nhật trạng thái bàn giao sang triển khai và kiểm **tự động**; giữ phân biệt với kiểm thủ công, đồng thuận và demo thật. | [spec.md §3–§6](../spec.md), [log trình duyệt](test-results.json). |
| §2 S01 định hỏi lại dù câu hỏi khái niệm đã rõ | Làm rõ chỉ hỏi lại khi thiếu ý; câu đã rõ được dẫn đúng §3.1–§3.2 ngay. Không đổi quyền tra cứu. | §2 S01 và kiểm `HARD-TESTS`. |
| §3.2 gán cả gợi ý/nút nguồn vào UX04 nhưng UI tách vùng | Làm rõ 04 là trạng thái/hạn; gợi ý ở chat, đoạn nguồn mở tại 01. Bảng ảnh không ghi ảnh S05 là bằng chứng hành vi S03. | §3.2, §3.4, §5.3; ảnh 1 và kiểm `S03-C1/C2`. |
| Câu phục hồi “rút lại kết luận” nhưng demo chưa từng phát kết luận sai | Giữ câu phục hồi có điều kiện cho thiết kế dự phòng; ghi nguyên lời thực tế của nút phản biện trong demo. Không bịa đã có lỗi học thuật trước đó. | §3.1, `correction` trong [app.js](../prototype/app.js). |
| §3 nói sửa tóm tắt nhưng demo không hiểu mọi câu tự do | Công khai hai mẫu an toàn, nội dung ngoài mẫu bị chặn; bản sửa có hiệu lực trong preview và hàng chờ. Không tuyên bố bảo đảm lọc mọi lời giải tự do. | §3 UX02, §5.4, [README](../prototype/README.md); `S05-C2`, `S05-C3-TA`. |
| §4 “cần duyệt” so với hành vi đăng FAQ | Nối xử lý nút đăng còn thiếu ở bản đầu; chặn ở handler, không chỉ nút disabled. Duyệt gắn nội dung/nguồn/phiên bản; mọi sửa đều mất duyệt. | `S05-C3-FAQ`: thiếu duyệt, bật nút bằng DOM, từ chối, sửa rồi đổi lại, đăng lỗi, bấm lặp đều kiểm thật. |
| Lời thoại cố định so với trạng thái đã công bố hoặc không đọc được trang khoá học | Hỏi lại S05/FAQ sau đăng phải nói đã có bài trong mô phỏng, không nói chưa đăng. Hỏi lịch học/giờ TA khi trang lỗi phải nêu chưa xác minh, không dùng câu trả lời thành công. | Nhánh bổ sung trong `S05-C3-FAQ`, `FAILURES`. |
| Nguồn tra cứu lỗi nhưng bản chuyển vẫn đính kèm fixture | Đã sửa: khi chưa đọc nguồn, chỉ cho câu hỏi khái niệm chung, không đính kèm nguồn chưa truy xuất. | `FAILURES`; `prepare` trong `app.js`. |
| §6 C2 “không có đáp số trong chat” dễ lẫn với con số học viên tự gõ hoặc dữ liệu đề | Làm rõ phạm vi là đầu ra AI và nội dung được chuyển/công bố. Giữ dữ liệu gốc §3.5 và tin nhắn người học; không lặp/xác nhận hay gửi đáp số học viên tự nhập. | Chú giải C2 §6.1; `S05-C2`, `S03-C2/C3`. |
| Khả năng gỡ/chuyển đảo được trong đề so với prototype | Ghi rõ không có tool rút/gỡ mới. Huỷ chỉ trước chuyển, reset chỉ xoá phiên giả lập. Gợi ý đã đọc và FAQ đã lan không thu hồi kiến thức được. | §4, §5.4, README. |
| Hạn LAB5, hạn bài 3 và giờ kiểm | Tách rõ LAB5 L3A trước 23:59 **12/11**; bài 3 hạn 23:59 **13/11**; đồng hồ giả 23:00 **12/11**; log kiểm có UTC và quy đổi Asia/Saigon. | §5.1, §6.2, [fixtures.js](../prototype/fixtures.js). |
| Nhãn nút thử xin giải/xác nhận so với “việc cấm không có nút thực thi” | Nút ca mẫu chỉ gửi yêu cầu học viên để nhận giới hạn; đổi nhãn thành “Thử xin xác nhận”. Không có hành động AI tính hộ hoặc xác nhận đáp số. | §3.2, README; `S03-C2`. |

## Kiểm chứng đã thực hiện

- [Bộ kiểm Chrome](check-prototype.mjs), [log JSON](test-results.json): **15/15 nhóm kiểm Pass**; thao tác DOM tự động trên Chrome headless thật, không phải buổi kiểm thủ công của nhóm. Có chụp và xem lại đúng hai ảnh thật [học viên](../prototype/images/01-hoc-vien.png), [TA](../prototype/images/02-ta.png).
- [Bộ kiểm spec](check-spec.mjs), [kết quả kiểm tĩnh](spec-check-results.json): **12/12 nhóm kiểm Pass**, gồm đủ §1–§7, thông tin người dùng, lát cắt nguyên văn, 10 ca/bốn lớp, bốn tool, ba tiêu chí/sáu ô chấm, fixture §3.1–§3.5, số UX, ảnh thật và link tương đối tồn tại. Kết quả máy không thay thế việc đọc ngữ nghĩa hay xác nhận sự kiện nhóm.
- Giữ nguyên các lập luận lựa chọn/loại phương án ở §1–§4 và tiêu chí §6. Theo yêu cầu bổ sung của Nguyễn Đắc Thể, hoàn thiện phương án lựa chọn quyền cho đủ ba thành viên theo cùng ma trận, có lý do theo vai trò và cách tổng hợp; ghi rõ đây là đề xuất, không phải lựa chọn độc lập hay biên bản họp đã xác nhận.

## Đối chiếu từng dòng rubric mục 16

“Đã có” nghĩa có đầu ra/bằng chứng trong phạm vi dự thảo, không có nghĩa được bảo đảm điểm. Các sự kiện thực tế còn thiếu ghi riêng.

| Dòng rubric | Trạng thái | Bằng chứng / phần còn thiếu |
|---|---|---|
| R1 · 2: lát cắt đúng | Đã có | §1 nguyên văn, prototype chỉ trợ lý buổi 3. |
| R1 · 3: ít nhất ba việc không làm | Đã có | §1 có năm loại trừ; `S03-C2`, `HARD-TESTS`. |
| R2 · 3: ít nhất tám ca, bốn lớp | Đã có | §2 có S01–S10, phủ ①②③④. |
| R2 · 3: lỗi/tool/dữ liệu/xử lý/hại | Đã có | Bảy cột của bảng §2 gắn nguồn cụ thể. |
| R2 · 4: so sánh hai ca, ca suýt chọn | Có dự thảo, cần xác nhận | §2 chọn S05/S03, so S09/S04; chưa có quyết định nhóm M1. |
| R3 · 6: câu AI/UI/bước tiếp/người nhận | Đã có | §3.1–§3.2; hai luồng bấm §5.2, hàng chờ sau xác nhận. |
| R3 · 8: chọn hỏi lại/giới hạn/chuyển và loại | Đã có | Đoạn lựa chọn/phương án loại cho từng ca §3. |
| R3 · 5: 2–3 nguyên tắc gắn UI | Đã có | G10/G11/G9 ở §3.4, ảnh và bảng số §5.3. |
| R3 · 3: phân loại lỗi | Đã có | §3.3 phân hệ thống/thông tin người dùng/ngữ cảnh. |
| R3 · 3: lỗi không cứu bằng câu chữ | Đã có trong mô phỏng | §3.4 và `S05-C3-FAQ` kiểm điều kiện thực thi. |
| R4 · 3: mọi tool có mức nhóm chốt | Chưa đủ thông tin thật | Có ma trận dự thảo bốn tool; chưa có chốt M2. |
| R4 · 10: cái giá sai/chờ/đảo lại | Đã có dự thảo | §4 đủ từng tool; giới hạn hoàn tác §5.4. |
| R4 · 5: tool khó xếp/cách nhóm chốt | Đã có phương án, cần xác nhận thực tế | §4 đã đủ ba tên/mã, bốn mức quyền, lý do theo vai trò, cách tổng hợp và tool khó xếp `goi_y_bai_tap`; chưa có dữ liệu lựa chọn độc lập/cuộc họp M2 thực tế. |
| R4 · 4: thử quyền hai ca khó + ca thường | Đã kiểm dự thảo | Bảng §4 và `S05-*`, `S03-*`, `NORMAL`; cần nhóm xác nhận mức cuối. |
| R4 · 3: đổi lời hứa theo quyền | Đã có | Cuối §4: xem trước/duyệt rồi mới công bố, thành công mới báo đã chuyển mô phỏng. |
| R5 · 5: bấm hết ca khó | Đã kiểm | §5.2, hai nhóm kiểm C3 đi tới chuyển/đăng thành công. |
| R5 · 4: độ chắc hoặc bằng chứng | Đã có | 01 mở nguồn và lý do; không bịa phần trăm. |
| R5 · 6: UI đúng quyền/xác nhận/chuyển/cấm/đảo lại | Đã kiểm trong mô phỏng | Ít nhất hai mức: tự làm/cần duyệt; C2/C3, phạm vi hoàn tác §5.4. Không tạo hành động rút/gỡ mới. |
| R5 · 6: nguyên tắc trỏ ảnh đánh số | Đã có | Hai PNG thật; 01/02/03/04 và G10/G11/G9 ở §5.3. |
| R5 · 4: lập luận cách hiển thị/phương án loại | Đã có | Bốn quyết định §5.4, nguồn/quyền/HTML/mẫu an toàn. |
| R6 · 3: đúng ba tiêu chí Pass/Fail | Đã có | C1/C2/C3 §6.1, định nghĩa Pass/Fail rõ. |
| R6 · 2: chấm hai ca/lỗi còn lại | Đã kiểm tự động | Sáu ô §6.2, log, lỗi sửa và giới hạn. Kiểm chéo thủ công bởi Người 2 còn chờ. |
| R7 · 3: ca lạ tại demo | Chưa diễn ra | §7 giữ mẫu trống; không dùng hard tests tự động thay ca TA đưa thật. |
| R7 · 2: mỗi người trình bày/giải thích | Chưa kiểm | §7 có phân vai dự kiến; cần demo và xác nhận thật. |
| Bonus · xung phong demo | Chưa có dữ liệu | Không tự nhận +5. |
| Bonus · AI thật ở quyết định chính | Không triển khai | Prototype dựng sẵn, không tự nhận +3. |

## Việc còn cần nhóm điền / xác minh

1. Tên nhóm chính thức; không suy ra tên từ repo rồi ghi như đã được xác nhận.
2. Xác nhận hai ca cuối và phương án quyền đã điền đầy đủ tại §4; đối chiếu với lựa chọn độc lập và cách chốt M2 thực tế của từng thành viên. Nếu thay quyền, sửa đồng thời §3/§4/§5 và code rồi kiểm lại.
3. Hai thành viên kiểm chéo trực tiếp. Thông tin đóng góp ở bảng đầu spec giữ theo dữ liệu sẵn có và phần Người 3 thực hiện cùng AI; cần từng người xác nhận trước nộp.
4. Sau demo, điền ca lạ và sự kiện thật tại §7; không biến kịch bản dự kiến thành biên bản.
5. Repo công khai, đúng tên và mở ẩn danh; nộp link trước hạn LAB5 L3A. Hiện chỉ xác minh được Git remote có tên `K5-L3A-Day05-T2-VibeCode`, chưa kiểm quyền công khai hay nộp bài.

Không còn mâu thuẫn đã biết trong các luồng và tài liệu đã kiểm ở phạm vi dự thảo này. Các mục thực tế còn trống được giữ có chủ đích, không coi là đã hoàn tất.
