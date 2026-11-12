# Hướng dẫn thực hiện LAB5 — T2 Giáo dục — Nhóm 3 người

> Tài liệu làm việc độc lập để mang sang repo mới và giao nhiệm vụ cho AI agent của từng thành viên. Đây là hướng dẫn thực hiện, **không phải bài nộp đã hoàn thành**.
>
> Đã đối chiếu với 6 file của đề: `README.md`, `01-challenge-brief.md`, `02-guide.md`, `03-spec-template.md`, `04-rubric.md`, `tracks/t2-education.md`. Các tên file này ghi xuất xứ; agent vẫn có thể làm việc nếu repo mới chỉ có hướng dẫn này. Nếu giảng viên cập nhật đề, đối chiếu bản cập nhật trước khi thực hiện.

## 1. Cách sử dụng và phân biệt yêu cầu với đề xuất

1. Tạo **repo GitHub mới hoàn toàn và trống**, không fork repo đề, không clone repo đề rồi push nguyên lên.
2. Mang file hướng dẫn này sang thư mục làm việc của repo mới. Không cần mang toàn bộ tài liệu đề hoặc prototype mẫu sang repo nộp.
3. Điền thông tin nhóm ở mục 2. Chuẩn bị tài khoản công cụ dựng prototype trước giờ lab nếu công cụ cần tài khoản.
4. Cả 3 người đọc mục 3–6; làm theo lịch ở mục 8 và nhiệm vụ ở mục 9–11.
5. Mỗi thành viên đưa **toàn bộ file này** cho AI agent, rồi dùng prompt đúng vai trò ở mục 15. Không chỉ gửi riêng prompt mà bỏ dữ liệu và yêu cầu.
6. Tổng hợp đầu ra thành `spec.md` và `prototype/`; đối chiếu mục 16–17 trước khi nộp.

Quy ước trong hướng dẫn:

- **[ĐỀ]**: yêu cầu, quy tắc, dữ liệu hoặc tiêu chí chấm từ tài liệu đề bài.
- **[ĐỀ XUẤT]**: cách chia việc, tên file nháp, kỹ thuật triển khai, ca mẫu hoặc quyết định thiết kế gợi ý trong hướng dẫn này. Nhóm được thay đổi nếu vẫn đáp ứng đề.
- **[CẦN NHÓM ĐIỀN]**: thông tin thực tế chưa biết. Agent được chuẩn bị bản nháp với chỗ trống, không tự bịa.

**[ĐỀ]** Bài chấm tư duy thiết kế sản phẩm AI khi sai và giới hạn tự chủ. Không bắt buộc xây chatbot/agent chạy thật, không cần API key. Được dùng AI agent để hỗ trợ viết và dựng prototype; thành viên vẫn phải hiểu, kiểm tra và giải thích phần có tên mình.

## 2. Thông tin nhóm và cấu trúc repo

### 2.1. Điền thông tin thực tế

**Lớp:** [L3A hoặc L3B] · **Bàn / zone:** [điền] · **Track:** T2 · **Tên nhóm:** [điền]

| Vai trò trong hướng dẫn | Họ và tên | Mã học viên | Trách nhiệm chính |
|---|---|---|---|
| Người 1 | [điền] | [điền] | Phạm vi, kịch bản, mức tự chủ; tổng hợp §1, §2, §4 |
| Người 2 | [điền] | [điền] | UX khi AI sai, nguyên tắc HAX/PAIR, đánh giá; tổng hợp §3, §6 |
| Người 3 | [điền] | [điền] | Prototype, ảnh, tích hợp bài nộp; tổng hợp §5, ghi §7 sau demo |

**[ĐỀ]** Nhóm đúng 3 người, cùng track, nộp một bài. Đầu `spec.md` phải có bảng **Họ và Tên | Mã Học Viên | Việc đã làm**. Bảng trên là kế hoạch; bảng trong bài nộp phải phản ánh công việc thực tế, không chỉ chép tên vai trò.

### 2.2. Tên repo và đầu ra

**[ĐỀ]** Tên repo: `K5-<lớp>-Day05-T2-<tên nhóm>`. Lớp là `L3A` hoặc `L3B`; tên nhóm viết liền, không dấu, không khoảng trắng. Repo công khai và mở được trong cửa sổ ẩn danh.

Ví dụ tên, không phải thông tin thật của nhóm: `K5-L3A-Day05-T2-HocDung`.

```text
<repo-moi>/
├── spec.md                       # Bài nộp chính, đủ §1–§7
└── prototype/
    ├── index.html                # Nếu chọn HTML
    ├── README.md                 # Hướng dẫn mở; hoặc chứa link Figma/công cụ khác
    └── images/
        ├── 01-hoc-vien.png        # Tên gợi ý; ảnh thật, đánh số vị trí
        └── 02-ta.png              # Tối đa 1–2 ảnh nộp; có thể chỉ cần một ảnh
```

**[ĐỀ]** Có `spec.md` theo mẫu và `prototype/` chứa file HTML **hoặc** README chứa link prototype, kèm 1–2 ảnh có đánh số. Cách chia file CSS/JS, tên ảnh và thư mục `images/` là **[ĐỀ XUẤT]**.

**[ĐỀ XUẤT]** Trong lúc làm có thể dùng `work/nguoi-1.md`, `work/nguoi-2.md`, `work/nguoi-3.md` và `work/quyet-dinh-chung.md`. Đây là bản nháp phối hợp, không thay thế `spec.md`. Người 3 tích hợp sau khi nhận nội dung của hai người còn lại. Hướng dẫn này và bản nháp không phải đầu ra bắt buộc của đề.

## 3. Bài toán T2 phải giữ nguyên

### 3.1. Lát cắt phát sẵn — chép vào §1

**[ĐỀ — nguyên văn lát cắt]**

> Trong **trợ lý học bài của trang khoá học (kiểu ChatGPT Study mode)**, khi **học viên** đang hỏi bài lúc tối muộn, khi không còn ai để hỏi, **AI giảng kèm trích tài liệu, hỏi lại cho rõ, gợi ý từng bước, hay nói thẳng "tài liệu không có, hỏi giảng viên"**, để học viên hiểu đúng bài mình đang học, không chép đáp án, không học sai mà không biết.

Không chuyển đề thành hệ thống quản lý khoá học, chấm bài, gia sư mọi môn hay chatbot kiến thức tổng quát. Không cần phỏng vấn hoặc khảo sát: lát cắt đã phát sẵn.

### 3.2. Bối cảnh sản phẩm nền theo đề

**[ĐỀ]** Sản phẩm tham khảo là Study mode: hỏi lại, gợi ý từng bước, kiểm tra hiểu bài thay vì cho đáp án ngay. Tài liệu đề mô tả sản phẩm nền không có TA/giảng viên đứng sau để chuyển câu hỏi. Bài lab yêu cầu tích hợp một trợ lý kiểu đó **vào trang khoá học** có tài liệu, lịch bài tập và TA.

Các mô tả này là bối cảnh trong đề, không phải kết quả nhóm tự thử sản phẩm. Không nói nhóm đã phỏng vấn, đăng nhập hoặc chat thử nếu không thực hiện; đề yêu cầu không chat với sản phẩm thật.

Nguồn tham khảo được track liệt kê: <https://help.openai.com/en/articles/11780217-using-study-mode-in-chatgpt>, <https://openai.com/index/chatgpt-study-mode/>, <https://chatgpt.com/plans/free/>. Không cần truy cập các link này để hoàn thành bài; không lấy nội dung ngoài thay thế dữ liệu dựng bên dưới.

### 3.3. Quy tắc chung

**[ĐỀ]**

- Chỉ dùng dữ liệu dựng trong track hoặc dữ liệu giả tự sinh; không dùng dữ liệu thật của người thật, không dán bài tập thật của AI20K hoặc trường khác.
- Không chat với sản phẩm thật, không tạo giao dịch hay thao tác thật để thử.
- Không commit API key; nếu có lời gọi AI thật, key ở biến môi trường và chỉ gửi dữ liệu dựng.
- Tình huống, lời người dùng, chính sách là dựng để học; khoá học không liên kết với sản phẩm được nhắc tới.
- Mỗi quyết định có 4 ý: **các phương án đã cân nhắc; chọn gì; vì sao chọn; vì sao loại phương án khác**. Có bằng chứng trỏ đến tool, dòng dữ liệu hoặc chỗ cụ thể trên prototype.
- Không ghi chung chung “AI có thể sai”. Nêu lỗi cụ thể như “AI dùng `dang_FAQ` đăng kết luận từ §3.3 chưa được kiểm tra cho cả lớp”.

## 4. Dữ liệu và tool T2 để dùng trong repo mới

### 4.1. Bốn tool nguyên gốc — đề chưa đặt mức tự chủ

| Tool | Làm gì theo đề | Đảo lại được không theo đề |
|---|---|---|
| `tra_cuu_tai_lieu` | Tìm trong tài liệu buổi học, trả đoạn kèm mã mục | Chỉ đọc |
| `goi_y_bai_tap` | Gửi gợi ý làm bài cho một học viên | Gợi ý quá tay thì học viên đã chép |
| `chuyen_TA` | Chuyển câu hỏi cho TA, báo giờ TA trả lời | Được |
| `dang_FAQ` | Đăng câu hỏi và trả lời vào FAQ cả lớp | Gỡ được, nhưng nhiều người đã đọc |

**[ĐỀ]** Nhóm tự xếp mức cho mọi tool. Tool không có trong bảng thì AI không làm được. Nếu thêm hoặc tách tool, phải ghi rõ làm gì, vì sao cần, mức tự chủ và cách thể hiện trên prototype. Không ngầm thêm quyền sửa tài liệu gốc, gia hạn bài, chấm điểm hoặc tự gửi email.

### 4.2. Dữ liệu A — Tài liệu buổi 3 “Thống kê mô tả”

**[ĐỀ — giữ nguyên dữ liệu, kể cả câu cần kiểm tra ở §3.3]**

Khoá **“Nhập môn phân tích dữ liệu”**, học viên đang học buổi 3.

- **§3.1 Trung bình cộng.** Tổng các giá trị chia cho số giá trị. Trung bình bị kéo mạnh bởi giá trị ngoại lai.
- **§3.2 Trung vị.** Giá trị đứng giữa khi sắp xếp dữ liệu tăng dần. Nếu số giá trị là chẵn, trung vị là trung bình cộng của hai giá trị đứng giữa. Trung vị ít bị ảnh hưởng bởi giá trị ngoại lai, nên thường dùng cho dữ liệu lệch như thu nhập hay giá nhà.
- **§3.3 Phương sai và độ lệch chuẩn.** Phương sai đo mức độ phân tán của dữ liệu quanh trung bình. Độ lệch chuẩn là căn bậc hai của phương sai, có cùng đơn vị với dữ liệu. Vì là căn bậc hai, độ lệch chuẩn luôn nhỏ hơn phương sai.
- **§3.4 Giá trị ngoại lai.** Giá trị khác hẳn phần lớn dữ liệu. Trước khi bỏ một giá trị ngoại lai, cần hỏi: đây là lỗi nhập liệu hay là dữ liệu thật?
- **§3.5 Bài tập 3.** Lương tháng của 8 nhân viên một phòng (triệu đồng, dựng): 9, 10, 10, 11, 12, 12, 13, 45. (a) Tính trung bình và trung vị. (b) Con số nào mô tả “lương điển hình” của phòng tốt hơn? Vì sao?

Tài liệu buổi 3 **không có slide đánh số**, chỉ có §3.1 đến §3.5.

### 4.3. Dữ liệu B — Trang khoá học

| Trường | Giá trị theo đề |
|---|---|
| Buổi đã mở | 1, 2, 3 |
| Đề cương buổi sau | 4 Trực quan hoá dữ liệu · 5 Xác suất cơ bản · 6 Phân phối chuẩn · 7 Kiểm định giả thuyết và p-value · 8 Hồi quy tuyến tính · 9 Làm sạch dữ liệu · 10 Dự án cuối khoá |
| Công cụ | Bài tập làm bằng bảng tính |
| Bài tập 2 | Hạn 06/11/2026 23:59 · đã hết hạn · đáp án công bố 07/11: “Trung bình cộng của 4, 8, 6, 5, 7 là **6**.” |
| Bài tập 3 | Hạn **13/11/2026 23:59** · **đang mở** |
| Giờ TA | **08:00–22:00** |

**Lưu ý chính xác dữ liệu:**

- “Buổi 1–3 đã mở” không có nghĩa agent được tự dựng tài liệu buổi 1–2 như thể đề đã cấp. Dữ liệu nội dung có trong hướng dẫn này là buổi 3.
- Giờ TA trực không phải SLA cam kết trả lời từng câu. Nếu nhóm thêm mốc dự kiến, phải ghi là **chính sách dựng do nhóm đặt**, không nói đó là dữ liệu gốc.
- Nếu demo sau ngày lab, giữ bối cảnh bài tập 3 đang mở bằng **đồng hồ mô phỏng**, không để ngày thật của thiết bị làm đổi trạng thái. Đây là lựa chọn triển khai để bảo toàn fixture, không phải thêm dữ liệu gốc.
- Không nhầm hạn bài tập 3 của khoá học dựng với hạn nộp LAB5 của nhóm.

### 4.4. Ba tin mồi nguyên gốc

1. “Trung vị khác trung bình cộng chỗ nào ạ? Khi nào dùng cái nào?”
2. “Cái độ lệch ấy là gì ạ, em đọc không hiểu.”
3. “Hạn nộp bài 3 là khi nào ạ? Với cả tính độ lệch chuẩn bằng Excel thì dùng hàm gì?”

Tin thứ 3 có hai yêu cầu: hạn nộp có dữ liệu; tên hàm Excel không có trong dữ liệu cấp. Không suy ra rằng agent được tự trả lời mọi kiến thức Excel từ bên ngoài.

## 5. Các quy tắc riêng T2 và ca khó phải xem xét

### 5.1. Quy tắc tự soát của track

**[ĐỀ]** Track gọi rubric riêng là tham khảo về một sản phẩm tốt; điểm chính thức chấm theo rubric chung. Thiết kế cần bám các quy tắc T2 sau:

1. Chỉ dùng tài liệu buổi đã học; câu về nội dung phải chỉ ra mục như §3.2.
2. Nội dung buổi sau: nói buổi nào sẽ học, giới thiệu tối đa một câu.
3. Bài đang mở: chỉ gợi ý bước đầu; không đưa đáp số, không xác nhận đáp số, không viết nhận xét hộ.
4. Bài đã hết hạn **và đã có đáp án**: được giải thích đầy đủ. Chỉ hết hạn chưa đủ để tự suy ra quyền công bố đáp án.
5. Hạn nộp chỉ lấy từ trang khoá học.
6. Tài liệu có thể sai: chỉ câu cần xem lại và vì sao, bảo người học báo giảng viên; không khẳng định tài liệu đúng khi chưa kiểm.
7. Không viện dẫn nguồn không có, không nói đã làm việc chưa làm được, ví dụ “đã báo TA” khi chưa có hành động chuyển thành công.
8. Không nhận xét năng lực người học.

**[ĐỀ — hard tests]** Nên có kịch bản cho: xin giải hộ bài đang mở; xin xác nhận đáp số bài đang mở; tài liệu có câu sai; nhắc nguồn không có như “slide 12”; học viên tự chê mình; hỏi nội dung buổi chưa học.

### 5.2. Xử lý câu sai ở §3.3

**[ĐỀ]** Phải giữ nguyên câu gốc trong fixture để thiết kế xử lý tài liệu sai, không âm thầm sửa fixture rồi tuyên bố đã giải quyết ca khó.

**[ĐỀ XUẤT — phân tích để nhóm kiểm tra]** Từ định nghĩa căn bậc hai đã có ở §3.3 có thể kiểm tra mệnh đề “luôn nhỏ hơn”: nếu phương sai là 0,25 thì căn bậc hai là 0,5. Đây là ví dụ số dựng để kiểm tra chính mệnh đề trong tài liệu, không phải đáp án bài tập 3, không phải nguồn học mới hoặc nội dung đã được giảng viên duyệt. Phương sai và độ lệch chuẩn còn khác đơn vị; tránh khái quát so sánh độ lớn của hai đại lượng mà không nêu điều kiện.

Câu chữ gợi ý, phải điều chỉnh theo thiết kế đã chốt:

> “Câu ‘độ lệch chuẩn luôn nhỏ hơn phương sai’ ở §3.3 cần được kiểm tra lại. Theo định nghĩa ngay trong mục này, căn bậc hai của 0,25 là 0,5 nên kết luận ‘luôn nhỏ hơn’ không đúng trong mọi trường hợp. Đây là kiểm tra toán học của trợ lý, chưa phải đính chính chính thức của giảng viên. Bạn có thể gửi câu hỏi kèm đoạn này tới TA.”

Không tự đăng đính chính cho cả lớp, không tự sửa học liệu gốc nếu không có quyền được nhóm thiết kế và ghi rõ. Nếu không dùng ví dụ trên, nhóm vẫn phải chỉ ra **vì sao** nghi vấn, không chỉ gắn nhãn “AI không chắc”.

## 6. Phân công và giao tiếp giữa 3 người

**[ĐỀ XUẤT — nhóm được đổi người nhưng giữ đủ đầu ra]**

| Người | Sở hữu nội dung | Đầu ra bàn giao | Phụ thuộc |
|---|---|---|---|
| 1 | §1, §2, §4 | Danh sách ca có mã; 2 ca được chọn; ma trận quyền tool; kết quả thử 3 ca | Cả nhóm chốt ca khó và quyền; cần góp ý UX của người 2 và khả năng dựng của người 3 |
| 2 | §3, §6; chú thích UX cho ảnh §5 | Câu AI nguyên văn; trạng thái màn hình; 2–3 nguyên tắc; 3 tiêu chí; kết quả chấm thực tế | Dùng đúng mã ca và quyền đã thống nhất với người 1 |
| 3 | `prototype/`, §5; tích hợp `spec.md`, ghi §7 | Prototype bấm được; 1–2 ảnh đánh số; hướng dẫn mở; bài tổng hợp | Dùng thiết kế và quyền chung; báo lại khi thiếu trạng thái hoặc không dựng được |

Quy tắc phối hợp:

1. Chặng 1–4 cùng thảo luận; người sở hữu nội dung tổng hợp, không tự quyết thay cả nhóm.
2. Dùng chung mã ca, ví dụ `S01`–`S10`, mã nguyên tắc `G10`, `G11`, `G9`. Không đổi mã giữa spec và prototype.
3. Sau M1 ghi hai ca nhóm đã chọn; sau M2 ghi mức quyền cuối cùng cho đủ 4 tool. AI có thể đề xuất trước, nhưng phải ghi là bản nháp đến khi thành viên quyết định.
4. Mỗi người tự xếp quyền 4 tool trong 5 phút trước khi so sánh. Ghi lựa chọn **thực tế** của từng người, không nhờ agent bịa một cuộc tranh luận đã xảy ra.
5. Nếu làm đồng thời, agent từng người chỉ sửa file nháp của vai trò mình; người 3 sở hữu code prototype và tích hợp `spec.md`. Không để 3 agent ghi đè cùng file.
6. Nếu mỗi người dùng một checkout/nhánh riêng, bàn giao bằng commit hoặc file; không chép đè toàn bộ thư mục người khác. Cách dùng nhánh không bắt buộc bởi đề.
7. Mỗi lần bàn giao ghi: đã hoàn thành gì; ca/tool nào liên quan; quyết định đã chốt hay còn đề xuất; file nào thay đổi; điều chưa kiểm chứng.
8. Thay quyền hoặc UX sau M2 phải cập nhật đồng thời §3, §4, §5 và prototype liên quan. Không để bài mô tả một quyền còn nút thực hiện quyền khác.

## 7. Khung nội dung `spec.md`

**[ĐỀ]** Đề hướng dẫn copy `03-spec-template.md` thành `spec.md`. Nếu chỉ mang hướng dẫn này sang repo mới, dùng khung tương đương bên dưới, giữ đủ §1–§7 và yêu cầu; không cần chép toàn bộ hướng dẫn thành bài nộp.

```markdown
# Bài nộp LAB5 — T2 Giáo dục · Nhóm [tên]

**Lớp:** [điền] · **Bàn / zone:** [điền] · **Track:** T2

| Họ và Tên | Mã Học Viên | Việc đã làm |
|---|---|---|
| [điền] | [điền] | [công việc thực tế] |
| [điền] | [điền] | [công việc thực tế] |
| [điền] | [điền] | [công việc thực tế] |

## §1. Lát cắt & phạm vi
- Chép nguyên văn lát cắt T2.
- Ít nhất 3 việc không làm, mỗi việc có lý do.

## §2. Kịch bản rủi ro
- Ít nhất 8 ca phủ ①②③④: tin người dùng, lớp, lỗi cụ thể gắn tool/dữ liệu,
  xử lý tốt, nhãn mức hại.
- Hai ca đắt nhất: lý do chọn, ca suýt chọn và vì sao loại.

## §3. Khi AI sai
- Với mỗi ca khó: câu AI nguyên văn; người dùng thấy gì; bước tiếp;
  ai được báo, khi nào, thấy gì; nếu người dùng không làm gì thì sao.
- Chọn hỏi lại / trả lời kèm giới hạn / chuyển người và lý do loại cách khác.
- Loại lỗi: hệ thống / người dùng / ngữ cảnh; cách nói và sửa theo loại.
- 2–3 nguyên tắc HAX/PAIR gắn vị trí cụ thể.
- Một lỗi sửa câu chữ không cứu được và cơ chế thiết kế xử lý lỗi đó.

## §4. Mức tự chủ
- Đủ 4 tool: mức, điều kiện, tác hại nếu sai, đảo lại được không,
  chờ người mất gì, phương án đã loại.
- Nếu cần duyệt: ai duyệt, xem gì, không duyệt kịp thì sao.
- Tool khó xếp nhất: lựa chọn thực tế từng người; cách nhóm chốt;
  cái giá mỗi phương án trỏ về ca ở §2.
- Thử trên 2 ca khó + 1 bình thường: chặn được lỗi chưa;
  còn làm khi phải hỏi không; ca bình thường có chờ vô ích không.
- Luật thêm hoặc tool tách bước, nếu có, và lý do.
- Một mức tự chủ làm đổi lời hứa nào với người dùng.

## §5. Prototype
- Link/file, cách mở, công cụ, phần mock, có AI thật hay không.
- 1–2 ảnh đánh số; mỗi số: thể hiện gì, nguyên tắc, mức tự chủ.
- Vì sao chọn cách hiện bằng chứng/độ chắc và điều khiển quyền;
  cách khác đã cân nhắc và vì sao loại.

## §6. Tốt là gì
- 3 tiêu chí Pass/Fail có thể chấm nhất quán.
- Kết quả chấm thực tế trên 2 ca khó; bằng chứng và lỗi còn lại.

## §7. Demo
- Trước demo: kịch bản dự kiến và phân vai (ghi rõ là dự kiến).
- Sau demo: ca lạ nhận được thực tế, cách prototype/nhóm xử lý,
  điều nhóm đổi ý hoặc chỉnh sửa sau ca đó.
```

## 8. Lịch 240 phút và ba mốc nghiệm thu

**[ĐỀ]** Thời lượng và mốc bên dưới theo guide; phút tính từ lúc bắt đầu buổi lab.

| Thời gian | Chặng | Việc cần xong và người giữ đầu ra |
|---|---|---|
| 0–10 | Đọc đề | Cả nhóm hiểu lát cắt, ai chịu hại, 3 việc không làm; người 1 ghi §1 |
| 10–45 | Kịch bản | ≥8 ca, phủ 4 lớp, mỗi ca có lỗi cụ thể và bằng chứng; chọn 2 ca; người 1 giữ §2 — **M1** |
| 45–90 | UX khi AI sai | Cả nhóm chốt 2 luồng khó; người 2 giữ §3; người 3 phác vị trí hiển thị |
| 90–125 | Mức tự chủ | 5 phút xếp độc lập, sau đó so sánh/chốt; thử 3 ca; người 1 giữ §4 — **M2** |
| 125–140 | Nghỉ | 15 phút |
| 140–200 | Prototype | Người 3 dựng; người 1 đối chiếu quyền; người 2 kiểm UX/ảnh — **M3** |
| 200–210 | Tốt là gì | Người 2 tổng hợp 3 tiêu chí và chấm trên 2 ca khó |
| 210–240 | Demo | Một khối 30 phút cho hoạt động demo; mỗi thành viên trình bày một phần; ghi ca lạ thật |

Mốc TA kiểm khoảng 1 phút/nhóm, không tính điểm riêng:

- **M1, phút 45:** ≥8 ca phủ 4 lớp; mỗi ca trỏ tool/dữ liệu; có lý do chọn 2 ca.
- **M2, phút 125:** đủ mức cho tool, lý do theo cái giá khi sai; tool khó xếp và cách chốt; thử trên 3 ca.
- **M3, phút 200:** bấm hết ca khó; thấy ≥2 mức tự chủ; nguyên tắc HAX/PAIR chỉ được trên màn hình.

**[ĐỀ]** Thiếu giờ: ưu tiên chặng 3–5; có thể bỏ chặng 6, mất tối đa 5 điểm của R6. README cũng cho giảm kịch bản khi thiếu giờ, nhưng rubric vẫn yêu cầu ≥8 để đạt đầy đủ phần tương ứng: không coi giảm dưới 8 là vẫn đáp ứng đủ bài. Kẹt kỹ thuật quá 20 phút thì gọi TA. Vẽ tay/chụp ảnh là phương án cứu bài, mất điểm bấm được, không tương đương prototype tương tác.

## 9. Người 1 — các bước thực hiện

### 9.1. §1: phạm vi

1. Chép lát cắt từ mục 3.1.
2. Ghi ai dùng, lúc nào, quyết định của AI và kết quả cần đạt.
3. Nêu ≥3 việc không làm, từng việc có lý do và được giữ nhất quán trong prototype.
4. Gợi ý phạm vi loại trừ: không làm/xác nhận đáp số bài đang mở; không tự sửa học liệu gốc; không tự thay hạn hoặc chấm điểm. Đây là **[ĐỀ XUẤT]**, nhóm cần diễn đạt và giải thích theo dữ liệu/quyền của T2.

### 9.2. §2: lập ≥8 kịch bản và chọn 2 ca khó

Dùng cấu trúc:

| Mã | Tin người dùng | Lớp ①②③④ | AI có thể sai thế nào | Tool/dữ liệu làm bằng chứng | Sản phẩm tốt nên làm gì | Mức hại |
|---|---|---|---|---|---|---|
| S01 | [tin cụ thể] | [ít nhất 1 lớp] | [hành vi sai cụ thể] | [tool/mục/dòng dữ liệu] | [hành vi mong đợi] | [nhẹ/sửa được/không chấp nhận được] |

**[ĐỀ]** Bốn lớp: ① nguồn sự thật; ② mơ hồ/thiếu thông tin; ③ ngoài phạm vi/thẩm quyền; ④ đặc thù domain. Mỗi lớp có ít nhất một ca. Nhãn mức hại theo hậu quả nếu lỗi xảy ra, không theo mức độ khó của tin nhắn.

**[ĐỀ XUẤT]** Có thể bắt đầu bằng 10 ý sau; chưa phải bảng ca hoàn chỉnh, phải bổ sung lỗi, bằng chứng, xử lý và nhãn:

| Ý ca | Câu nhắn gợi ý | Điểm cần kiểm tra |
|---|---|---|
| S01 | “Slide 12 bảo trung vị khác thế nào vậy?” | Không có slide 12; không giả vờ đã đọc |
| S02 | “Cái độ lệch ấy là gì?” | Hỏi lại để phân biệt ý định, không đoán |
| S03 | “Giải hết bài 3 cho em để em nộp luôn.” | Không giải hộ bài đang mở |
| S04 | “Em tính ra [đáp số học viên tự đưa], đúng không?” | Không xác nhận đúng/sai hoặc tiết lộ đáp số bằng lời từ chối |
| S05 | “§3.3 nói luôn nhỏ hơn, em thấy không đúng?” | Tài liệu sai; biết giới hạn của trích nguồn |
| S06 | “p-value là gì, giải kỹ giúp em.” | Đề cương đặt ở buổi 7, chưa có tài liệu buổi đó |
| S07 | “Hạn bài 3 là khi nào, Excel dùng hàm nào?” | Tách phần có căn cứ khỏi phần không có |
| S08 | “Em ngu quá nên không hiểu trung vị.” | Hỗ trợ học tập, không đánh giá năng lực |
| S09 | “Đăng ngay câu giải thích §3.3 này lên FAQ cả lớp.” | Sai cho cả lớp đắt hơn sai cho một người |
| S10 | “23 giờ rồi, báo TA trả lời em ngay nhé.” | Ngoài giờ, không hứa đang có người trực hay SLA không có |

Chọn đúng 2 ca rủi ro cao nhất để thiết kế sâu. Viết vì sao hậu quả của chúng lớn hơn các ca khác, ca nào suýt được chọn và vì sao không. Không chỉ viết “vì quan trọng”.

**[ĐỀ XUẤT]** Một phương án dễ nối thành demo: ca học liệu sai lan lên FAQ và ca xin/xác nhận đáp số bài đang mở. Ca khác vẫn được nếu nhóm có lập luận tốt. Ca FAQ cần gắn với học viên hỏi bài và tài liệu sai, không biến lát cắt thành hệ thống quản trị FAQ độc lập.

### 9.3. §4: quyền của 4 tool

1. Mỗi thành viên tự xếp đủ 4 tool, ghi lý do, trong 5 phút.
2. So sánh lựa chọn, ghi tranh luận thực tế, chốt một mức cho mỗi tool: **tự làm / cần người duyệt / cấm**.
3. Bổ sung điều kiện áp dụng; nếu cần duyệt ghi ai duyệt, nhìn thấy gì và không duyệt kịp thì sao.
4. Với mỗi tool ghi ai chịu gì nếu sai, có đảo lại được không, người nào sửa và tốn gì; chờ người gây tổn thất gì.
5. Nêu phương án đã loại, tool khó xếp nhất và lý do, trỏ mã ca §2.
6. Thử mức cuối cùng trên 2 ca khó và 1 bình thường, trả lời đủ ba câu: lỗi có bị chặn; còn làm khi lẽ ra phải hỏi; ca bình thường có chờ vô ích.
7. Nêu một lời hứa sản phẩm thay đổi theo quyền, ví dụ từ “AI tự công bố câu trả lời” sang “AI chuẩn bị, TA duyệt trước khi công bố”. Không hứa AI thực hiện việc ngoài tool.

Mẫu bảng làm việc:

| Tool | Mức đã chốt | Điều kiện/ai duyệt | Trước duyệt thấy gì | Nếu không duyệt kịp | Sai ai chịu gì | Khả năng đảo lại | Chờ mất gì | Phương án loại và lý do | Ca liên quan |
|---|---|---|---|---|---|---|---|---|---|

**[ĐỀ XUẤT — để thảo luận, không phải đáp án do đề đặt]**

- `tra_cuu_tai_lieu`: tự làm; chỉ đọc tài liệu thực có, hiển thị đoạn và mã mục. Tìm thấy nguồn không có nghĩa nội dung nguồn luôn đúng.
- `goi_y_bai_tap`: tự làm trong giới hạn gợi ý bước đầu của bài đang mở; nếu luồng có thể tiết lộ đáp số thì dừng/thu hẹp, không dùng nút “xác nhận đáp án” để lách giới hạn. Gợi ý đã đọc không thể làm học viên “quên”; không giả vờ nút hoàn tác xoá được hậu quả này.
- `chuyen_TA`: cần học viên xem tóm tắt và xác nhận trước khi chuyển. Có thể chọn mức khác nếu nhóm giải thích cái giá hai phía và dựng đúng.
- `dang_FAQ`: cần TA duyệt nội dung và nguồn trước khi công bố cho lớp. Nếu chưa duyệt thì giữ bản nháp, không tự đăng khi hết thời gian.

Nếu cần tách soạn nháp khỏi gửi/đăng, ghi rõ là **tool/bước bổ sung do nhóm thiết kế** trong §4, kèm lý do và quyền. Không mặc nhiên cho rằng `dang_FAQ` vốn chỉ soạn nháp: tool gốc là **đăng**.

### 9.4. Bàn giao

Gửi người 2 và người 3: §1, bảng ca cuối cùng, hai mã ca khó, bảng quyền, các trường dữ liệu/điều kiện cần có trên màn hình. Khi nhóm đổi quyết định, cập nhật bản chung và báo cả hai người.

## 10. Người 2 — các bước thực hiện

### 10.1. §3: thiết kế cho 2 ca khó

Với **từng ca**, ghi đủ:

1. Mã ca, tin người dùng, dữ liệu và bối cảnh liên quan.
2. Lúc AI không chắc: hỏi lại, trả lời kèm giới hạn hay dừng/chuyển người? Vì sao chọn, vì sao loại hai cách khác?
3. Câu AI nói nguyên văn, không chỉ mô tả ý.
4. Học viên thấy gì ngoài chữ: nguồn, đoạn nghi vấn, trạng thái, nút, cảnh báo, người duyệt.
5. Học viên làm gì tiếp; nếu không làm gì thì trạng thái nào giữ nguyên.
6. Ai được báo; sau bao lâu/ở sự kiện nào; người nhận thấy tóm tắt, câu hỏi và nguồn gì. Nếu không báo ai thì ghi rõ và giải thích.
7. Nếu ngoài giờ TA, đang chờ, chuyển thất bại hoặc người học huỷ thì hiển thị thế nào. Không đồng nhất lưu hàng chờ mô phỏng với người thật đã đọc.
8. Lỗi thuộc hệ thống, người dùng hay ngữ cảnh; giải thích cách nói và cách sửa tương ứng, tránh đổ lỗi người học khi họ chỉ thiếu thông tin.
9. Chỉ ra một lỗi không sửa được bằng đổi câu chữ và cơ chế ngăn/chữa lỗi đó. Ví dụ ngăn đăng FAQ chưa duyệt bằng điều kiện chuyển trạng thái, không chỉ viết “AI có thể sai”.

**[ĐỀ]** Cân nhắc đủ bốn đường trải nghiệm: bình thường; thiếu chắc chắn; thất bại/không có căn cứ; người dùng sửa AI. Không bắt buộc bốn màn hình riêng.

### 10.2. Chọn 2–3 nguyên tắc HAX/PAIR và gắn vào UI

Những nguyên tắc được guide nêu: G1 làm rõ khả năng; G2 làm rõ mức đáp ứng; G10 thu hẹp phạm vi khi nghi ngờ; G8 gạt bỏ dễ; G9 sửa dễ; G11 giải thích vì sao; G15 mời feedback chi tiết; PAIR Explainability + Trust, Errors + Graceful Failure.

**[ĐỀ XUẤT]** Chọn 3 nguyên tắc dễ thể hiện:

| Nguyên tắc | Chỗ cụ thể dự kiến | Bằng chứng cần có trong bài |
|---|---|---|
| G10 — Thu hẹp khi nghi ngờ | Câu hỏi làm rõ hoặc cảnh báo tài liệu cần kiểm tra; chỉ đưa gợi ý đầu cho bài mở | Câu nguyên văn ở §3 và số đánh dấu trên ảnh §5 |
| G11 — Giải thích vì sao | Thẻ đoạn §3.3, lý do nghi vấn; hoặc lý do chưa đăng FAQ | Đoạn nguồn thật, không chỉ nhãn “độ tin cậy cao” |
| G9 — Sửa dễ | Sửa tóm tắt trước chuyển TA, phản hồi chỉ ra câu sai | Thao tác có hiệu lực và trạng thái sau khi sửa |

Chọn 2 hoặc 3 đều được. Mỗi nguyên tắc đã chọn phải trỏ được vào vị trí cụ thể trên prototype; không chỉ liệt kê tên hoặc thêm nhãn G__ mà không có hành vi tương ứng.

### 10.3. §6: đúng 3 tiêu chí Pass/Fail và chấm thật

**[ĐỀ XUẤT]** Có thể dùng:

1. **Nguồn và giới hạn:** mọi phát biểu nội dung trong hai luồng khó trỏ đến mục thực có hoặc được ghi rõ là không đủ căn cứ/kiểm tra suy luận cần xác minh; không bịa nguồn và không khẳng định câu sai ở §3.3 là đúng.
2. **Bảo vệ bài đang mở:** không cung cấp hoặc xác nhận đáp số, không viết nhận xét hộ; không vòng qua giới hạn bằng yêu cầu đăng FAQ hoặc xác nhận lại.
3. **Đúng quyền, đúng trạng thái:** mọi thao tác chuyển/đăng trong hai luồng khó tuân thủ §4; khi chưa thành công không báo đã xong; ngoài giờ không hứa TA trả lời ngay; thiếu duyệt thì không tự đăng.

Chốt tiêu chí có cách quan sát rõ; ghi các bước kiểm tra. Dùng bảng 2 ca × 3 tiêu chí, có kết quả và bằng chứng. Tiêu chí không phát sinh trong ca nào thì nêu điều đã kiểm để xác nhận không bị kích hoạt sai; không cho Pass vô điều kiện.

Không ghi “đã kiểm, tất cả Pass” nếu chưa chạy thử. Trước khi chạy ghi **chưa kiểm**. Sau chạy ghi trạng thái thực tế, lỗi còn lại, sửa gì hoặc giới hạn nào chưa xử lý.

### 10.4. Bàn giao và kiểm tra chéo

Gửi người 3 câu chữ, trạng thái và bảng nguyên tắc; cùng đánh số ảnh. Đối chiếu từng nút với §4 của người 1. Chạy thử như người dùng, ghi lại lỗi cụ thể thay vì sửa mô tả cho khớp một prototype đang vi phạm quy tắc.

## 11. Người 3 — các bước thực hiện

### 11.1. Chọn cách dựng nhỏ nhất đáp ứng bài

**[ĐỀ]** Prototype 1–2 màn hình, dữ liệu giả, không đăng nhập, không backend theo phạm vi prototype cơ bản trong guide. Không cần đẹp. Được dùng HTML, Figma, Lovable, v0 hoặc coding agent; AI thật là bonus, không bắt buộc.

**[ĐỀ XUẤT]** Dùng HTML/CSS/JavaScript chạy cục bộ; một màn hình học viên và một màn hình TA mô phỏng. Đây là lựa chọn triển khai, không phải đề bắt buộc có màn TA. Nhiều trạng thái trong cùng màn hình không cần biến thành nhiều trang.

Không tự thêm hệ thống tài khoản, cơ sở dữ liệu, thanh toán, dashboard quản trị hoặc triển khai production. Nếu dùng công cụ cần publish để mở prototype, đảm bảo link người chấm xem được; repo công khai không tự làm link Figma riêng tư trở thành công khai.

### 11.2. Trình tự dựng

1. Đọc bản chốt §2–§4. Nếu chưa có, tạo khung giao diện và fixture; ghi rõ giả định dự thảo, chưa coi quyền là quyết định của nhóm.
2. Đặt dữ liệu mục 4 vào code đúng nội dung; giữ nguyên câu sai §3.3. Chọn thời điểm mô phỏng để thể hiện ngoài giờ nếu ca cần; ghi rõ thời điểm này là do nhóm dựng.
3. Tạo luồng bấm từ đầu đến cuối cho ca bài đang mở **hoặc** tài liệu sai, đúng demo bắt buộc của T2.
4. Thể hiện bằng chứng: mở được đoạn nguồn thật, mục đúng, ngày hạn đúng; không bịa phần trăm tự tin không có cơ sở. Đề cho phép hiện **độ chắc hoặc bằng chứng**, không bắt buộc con số xác suất.
5. Thể hiện ít nhất 2 mức tự chủ và đường chuyển người. Nếu cần duyệt, có người duyệt, nội dung xem trước và xác nhận thật trong mô phỏng; thiếu xác nhận thì thao tác chưa thực hiện.
6. Với thao tác tự làm có thay đổi trạng thái và đảo lại được, có cách hoàn tác theo thiết kế. Với tra cứu chỉ đọc không bịa một thay đổi để hoàn tác. Với nội dung đã đọc không tuyên bố xoá được kiến thức đã lộ; dùng giới hạn trước khi gửi. Giải thích phạm vi hoàn tác trong §5.
7. Việc cấm không có nút thực thi. Có thể giải thích giới hạn và đề xuất đường tiếp phù hợp, không hiện nút bị cấm rồi cho chạy bằng cách khác.
8. Nút chuyển TA: phân biệt soạn, xác nhận, chuyển thành công trong mô phỏng, chờ TA, lỗi chuyển. Nếu lưu bằng state/localStorage, ghi rõ chỉ mô phỏng, không phải TA thật đã nhận.
9. FAQ: nếu nhóm chọn cần TA duyệt, trạng thái chưa duyệt không được đăng, kể cả bấm lặp hoặc thử đường khác. Nội dung nhạy với bài đang mở vẫn bị chặn; duyệt không dùng để lách luật T2.
10. Có cách quay lại/reset để người xem thử; chạy lại ca khó không cần sửa code/chỉnh dữ liệu bằng tay giữa chừng.
11. Chuẩn bị xử lý ca lạ: dùng hành vi fallback trong phạm vi thiết kế hoặc giải thích đường đi phù hợp khi demo. Không bắt buộc mô hình hiểu mọi câu tự do; đừng giả vờ một demo kịch bản cố định là AI tổng quát.
12. Nhờ người 1 đối chiếu quyền, người 2 kiểm câu chữ và nguyên tắc; sửa lỗi rồi kiểm lại phần thay đổi.

**[ĐỀ XUẤT]** Nếu thêm huỷ chuyển TA hoặc gỡ FAQ, phải mô tả cơ chế và giới hạn là phần nhóm thiết kế. Gỡ FAQ không xoá được việc người khác đã đọc, và không được tuyên bố thu hồi được mọi ảnh hưởng.

### 11.3. Ảnh, §5 và tài liệu mở prototype

1. Chụp **1–2 ảnh thật** của prototype sau khi chạy, đánh số rõ các vị trí liên quan.
2. Nếu không có công cụ chụp ảnh, ghi việc thành viên cần làm; không tạo ảnh giả hoặc ghi link ảnh chưa tồn tại như bằng chứng đã có.
3. Trong §5, với mỗi số ghi: thể hiện gì, nguyên tắc nào, mức tự chủ nào, liên quan ca nào.
4. Nêu công cụ, file/link, cách mở, phần mock, có AI thật hay không. Không ghi có AI thật khi chỉ dùng câu trả lời có sẵn.
5. Giải thích vì sao chọn cách hiện bằng chứng/độ chắc và quyền; nêu cách khác đã nghĩ tới và vì sao loại.
6. Viết `prototype/README.md` đủ để người khác mở và bấm ca khó, không cần người tạo can thiệp.

### 11.4. Tích hợp bài

Ghép bản của người 1 và 2 vào đúng §, không thay lập luận bằng bản tóm tắt làm mất tiêu chí. Giữ thống nhất mã ca, quyền, câu chữ, ảnh và trạng thái. Hoàn thiện bảng thành viên theo việc thật. Để mục ca lạ là “chưa demo” trước buổi demo; sau demo ghi thông tin thật.

## 12. Luồng mẫu để thống nhất trước khi dựng

**[ĐỀ XUẤT]** Luồng dưới đây là phương án, không phải giải pháp duy nhất hoặc quyết định nhóm đã thực hiện.

### Luồng A — học liệu sai và nguy cơ lan lên FAQ

1. Học viên hỏi câu “luôn nhỏ hơn” trong §3.3 và muốn chia sẻ lời giải thích.
2. AI tra cứu, hiện đúng đoạn gốc; nói câu nào cần kiểm tra, vì sao; phân biệt suy luận kiểm tra với đính chính chính thức.
3. Học viên có thể xem nguồn, sửa nội dung tóm tắt, xác nhận chuyển TA hoặc tiếp tục học phần có căn cứ.
4. Ngoài giờ: sau khi chuyển mô phỏng thành công, hiện “đã vào hàng chờ mô phỏng”, giờ trực 08:00–22:00; không nói có TA đang đọc hoặc chắc chắn trả lời lúc 08:00.
5. Bản FAQ, nếu có bước soạn thêm, ở trạng thái nháp. TA xem câu hỏi, câu trả lời và nguồn trước khi duyệt; chưa duyệt thì không có bài công khai.
6. Nếu giả lập TA duyệt, ghi rõ đó là thao tác của người đóng vai TA trong demo, không giả vờ TA thật đã phê duyệt nội dung.

### Luồng B — xin đáp số bài đang mở

1. Học viên xin giải toàn bộ hoặc nhờ xác nhận đáp số bài 3.
2. AI dựa vào trạng thái “đang mở”, nói giới hạn, chỉ gợi ý bước đầu từ mục liên quan; không kèm đáp số trong câu từ chối.
3. Nếu học viên hỏi tiếp nhiều lần hoặc đổi cách hỏi để nhận lời giải hoàn chỉnh, không cộng dồn gợi ý thành bài làm hộ.
4. Khi hỏi hạn, lấy đúng trang khoá học, không lấy hạn LAB5.
5. Nếu chuyển TA theo quyền đã chọn, cho xem nội dung gửi và trạng thái đúng. Không hứa TA sẽ giải bài hộ.

### Luồng bình thường để thử mức quyền

Học viên hỏi sự khác nhau giữa trung vị và trung bình cộng: trả lời trong phạm vi §3.1–§3.2, có nguồn; không bắt chờ TA vô ích. Không tự dùng bài 3 đang mở để tính hộ và tiết lộ kết quả.

## 13. Kiểm tra thực tế và ca lạ

**[ĐỀ]** Chấm thử thiết kế trên 2 ca khó; thử mức quyền trên 2 ca khó + 1 ca bình thường. Ca lạ được đưa tại chỗ bởi TA/nhóm bạn/giảng viên, nhóm nói hoặc bấm được prototype sẽ làm gì theo mức quyền.

**[ĐỀ XUẤT]** Dùng checklist thủ công gọn sau; không cần dựng bộ kiểm thử phức tạp:

| Kiểm tra | Kỳ vọng quan sát |
|---|---|
| Xin giải/xác nhận đáp số bài 3 | Không đưa/xác nhận đáp số; chỉ gợi ý bước đầu |
| Hỏi bài 2 | Có thể giải thích đáp án đã công bố, không lẫn trạng thái bài 3 |
| Phản biện §3.3 | Hiện đúng câu cần kiểm; không tin mù quáng vì có nguồn |
| Nhắc “slide 12” | Không tạo trích dẫn hoặc nội dung slide không có |
| Hỏi p-value | Nêu ở buổi 7, giới thiệu tối đa một câu, không giảng toàn bộ |
| Tin mơ hồ | Có đường hỏi lại, không tự đoán để thực hiện hành động rủi ro |
| Chuyển TA ngoài giờ | Hiện hàng chờ/giờ trực theo thiết kế; không báo TA đã đọc |
| Chuyển thất bại trong mô phỏng | Không báo chuyển thành công, có đường thử lại phù hợp |
| Đăng FAQ thiếu duyệt | Không công bố; không có đường vòng qua xác nhận |
| Học viên tự chê mình | Hỗ trợ học tập, không đánh giá năng lực |
| Người dùng sửa AI | Có đường sửa/phản hồi thực hiện được |
| Reset và chạy lại | Bấm hết ca khó không cần sửa tay giữa chừng |

Ghi rõ đâu là ca đã bấm kiểm, đâu là kiểm bằng đọc thiết kế, đâu chưa làm. Nếu prototype chỉ hỗ trợ một số kịch bản, nêu giới hạn đó; ca lạ có thể trả lời bằng lập luận theo quyền, như đề cho phép.

## 14. Demo và trách nhiệm của từng thành viên

**[ĐỀ]** 30 phút cuối là một khối hoạt động demo của lớp/zone, **không có nghĩa mỗi nhóm được trình bày 30 phút**. Demo trong zone hoặc xung phong trước lớp. Mỗi thành viên trình bày một phần.

**[ĐỀ XUẤT]** Tập một lượt khoảng 4 phút để nói gọn; thời lượng thực tế theo giảng viên:

| Người | Nội dung |
|---|---|
| 1 | Khoảng 30 giây giới thiệu lát cắt; vì sao chọn ca khó; một tool khó xếp quyền và cái giá nếu sai |
| 2 | Giải thích câu AI nói, bằng chứng, bước tiếp và người nhận; chỉ một nguyên tắc HAX/PAIR trên màn hình |
| 3 | Bấm ca khó đầu–cuối, chỉ bước duyệt/chuyển/giới hạn; nói rõ phần mock |
| Cả nhóm | Nhận ca lạ; người phù hợp giải thích/bấm theo quyền đã chốt, ghi lại kết quả thật |

Tất cả phải trả lời được:

- “Hành động này sai thì ai mất gì, vì vậy ở mức nào?”
- “Lỗi nguy hiểm nhất là gì?”
- “Chỗ nào trên màn hình thể hiện G__?”
- “Phần bạn làm là gì? Vì sao chọn cách này và loại cách kia?”

**[ĐỀ]** Được dùng AI để build, nhưng không giải thích được phần có tên mình thì bị mất điểm theo vibe-coding rule. Không để người dựng code là người duy nhất hiểu luồng.

Sau demo, người 3 ghi §7 bằng sự kiện thật: câu ca lạ, hành vi đã thể hiện/nói, đúng hoặc chưa đúng ở đâu, nhóm đổi ý/chỉnh gì. Không viết trước một ca giả rồi ghi là TA đã đưa.

## 15. Prompt giao cho AI agent

### 15.1. Prompt chung — dùng cho mọi vai trò

```text
Đọc toàn bộ HUONG-DAN-LAB5-T2-NHOM-3-NGUOI.md trong repo này.
Đây là LAB5 T2, thiết kế trợ lý học bài tối muộn. Bám dữ liệu và yêu cầu
trong hướng dẫn; phân biệt [ĐỀ] với [ĐỀ XUẤT].

Hãy thực hiện đầu ra của vai trò tôi giao, không chỉ nêu kế hoạch.
Kiểm tra repo hiện có trước; giữ nguyên công việc của thành viên khác.
Không tự xây toàn bộ sản phẩm, không mở rộng thành hệ thống quản lý học tập.
Không tạo backend/đăng nhập/API thật nếu nhiệm vụ không yêu cầu.
Không dùng dữ liệu thật hoặc kiến thức ngoài thay cho fixture học liệu.
Không sửa mất câu sai §3.3; thiết kế phải xử lý được học liệu sai.

Mỗi quyết định nêu phương án cân nhắc, lựa chọn, lý do, phương án loại,
và bằng chứng tool/mục dữ liệu/vị trí UI. Dùng chung mã ca và mức quyền
nhóm đã chốt; chưa chốt thì ghi là đề xuất, không bịa nhóm đã đồng ý.
Không bịa tên, mã học viên, đóng góp, tranh luận, kết quả kiểm thử,
ảnh chụp, lời gọi AI thật, sự kiện demo hoặc phê duyệt của TA.
Thiếu thông tin thực tế: để [CẦN NHÓM ĐIỀN] và tiếp tục phần độc lập.

Cuối lượt báo ngắn: đã sửa file nào, đã kiểm gì, chưa kiểm gì,
điểm cần nhóm quyết định và dữ liệu cần bàn giao. Chỉ ghi hoàn tất
khi đầu ra đã tồn tại và được kiểm ở mức phù hợp.
```

### 15.2. Prompt người 1 — phạm vi, kịch bản, quyền

```text
Tôi là người 1 của nhóm. Áp dụng prompt chung và mục 9 trong hướng dẫn.
Đầu ra làm việc của bạn: work/nguoi-1.md, gồm nội dung để ghép vào §1, §2, §4.
Nếu nhóm chưa dùng thư mục work/, có thể tạo thư mục đó. Không sửa code
prototype hoặc ghi đè phần người khác trong spec.md.

1. Chép đúng lát cắt T2 và đề xuất ít nhất 3 việc không làm kèm lý do.
2. Viết ít nhất 8 ca thực tế, đủ 4 lớp ①②③④, mỗi ca gắn tool/dòng dữ liệu,
   xử lý tốt và mức hại. Xem đủ 6 loại hard tests T2.
3. Đề xuất 2 ca đắt nhất, lập luận so sánh và ca suýt được chọn.
4. Lập bảng quyền đủ 4 tool, có cái giá sai/chờ/đảo lại, ai duyệt,
   nhìn thấy gì, không duyệt kịp thì sao. Ghi rõ đây là dự thảo nếu chưa chốt.
5. Tạo chỗ ghi lựa chọn thật của từng thành viên và tool khó xếp nhất;
   không tự bịa người nào đã chọn mức gì.
6. Phân tích thử quyền trên 2 ca khó + 1 bình thường với ba câu của đề;
   phân biệt thử trên thiết kế với kiểm thử prototype thực tế.
7. Bàn giao mã ca, quyền, điều kiện và nội dung UI cần thiết cho người 2, 3.

Khi nhận quyết định nhóm thật, cập nhật bản nháp, giữ nhất quán mã ca.
Không chuyển mọi việc cho TA chỉ để tránh rủi ro: cần phân tích cả chi phí chờ.
```

### 15.3. Prompt người 2 — UX và đánh giá

```text
Tôi là người 2 của nhóm. Áp dụng prompt chung và mục 10 trong hướng dẫn.
Đọc work/nguoi-1.md, quyết định chung hoặc spec.md nếu đã có.
Đầu ra của bạn: work/nguoi-2.md, để ghép §3, §6 và chú thích UX của §5.
Không ghi đè code prototype hoặc nội dung thành viên khác.

1. Dùng đúng 2 ca khó nhóm đã chọn; nếu chưa chốt, chuẩn bị phương án dự thảo
   và ghi rõ, không coi lựa chọn đề xuất là quyết định thật.
2. Mỗi ca: câu AI nguyên văn, bằng chứng, nút/trạng thái, bước tiếp,
   nếu user không làm gì, ai được báo, khi nào và thấy gì; đủ phương án loại.
3. Phân loại lỗi hệ thống/người dùng/ngữ cảnh và cách nói, sửa tương ứng.
4. Chọn 2–3 nguyên tắc HAX/PAIR, gắn cụ thể vào câu chữ và vị trí UI dự kiến.
5. Chỉ một lỗi sửa lời nói không cứu được và thiết kế xử lý nó.
6. Viết đúng 3 tiêu chí Pass/Fail; lập bảng chấm 2 ca khó.
   Trước khi có prototype chạy thử, ghi chưa kiểm, không tự điền tất cả Pass.
7. Khi prototype có sẵn, chạy kiểm tra phù hợp hoặc hướng dẫn thành viên
   chạy nếu không có công cụ; ghi kết quả thật và lỗi còn lại.
8. Bàn giao câu chữ, trạng thái, nguyên tắc và vị trí cần đánh số cho người 3.

Đặc biệt kiểm: không lộ/xác nhận đáp số bài mở; không bịa slide;
không tin mù quáng §3.3; không hứa TA trả lời ngay ngoài giờ.
```

### 15.4. Prompt người 3 — prototype và tích hợp

```text
Tôi là người 3 của nhóm. Áp dụng prompt chung và mục 11 trong hướng dẫn.
Đọc đầu ra người 1, người 2 và quyết định nhóm trước khi triển khai quyền.
Bạn sở hữu prototype/, work/nguoi-3.md và việc tích hợp cuối vào spec.md.
Không sửa bản nháp người khác để che lỗi hoặc thay đổi quyền một phía.

1. Dựng prototype 1–2 màn hình cho ca bài đang mở hoặc tài liệu sai.
   Mặc định đề xuất HTML/CSS/JS cục bộ, dữ liệu giả, không backend/đăng nhập.
   Nếu chưa có quyết định chung, chỉ làm khung và ghi giả định dự thảo.
2. Hiện nguồn thực có, giới hạn, ít nhất 2 mức tự chủ; thao tác cần duyệt
   không chạy trước xác nhận; việc cấm không có đường thực thi.
3. Bấm được ca khó đầu–cuối, có reset, không can thiệp tay giữa luồng.
4. Chuyển TA và duyệt FAQ là mô phỏng có trạng thái đúng; không dùng
   thông báo thành công giả. Không giả vờ đã có TA thật hoặc AI thật.
5. Giữ nguyên fixture, bài 3 đang mở trong bối cảnh mô phỏng; không dùng
   ngày thiết bị để vô tình mở quyền giải hộ. Không bịa tài liệu buổi khác.
6. Kiểm tra hành vi cần thiết; ghi đã kiểm/chưa kiểm và giới hạn.
7. Viết prototype/README.md và §5 với công cụ, cách mở, phần mock,
   lựa chọn thiết kế và phương án loại. Chụp 1–2 ảnh thật có đánh số nếu
   công cụ hỗ trợ; nếu không, ghi rõ bước thành viên phải chụp, không bịa ảnh.
8. Ghép §1–§6 từ bản các thành viên vào spec.md, giữ đầy đủ lập luận.
   Chuẩn bị §7 là dự kiến/chưa demo, không bịa ca lạ hoặc kết quả.
9. Đối chiếu checklist rubric mục 16; sửa lỗi trong phạm vi mình,
   báo điểm cần hai thành viên bổ sung. Sau demo, cập nhật §7 từ dữ liệu thật.

Chỉ làm lời gọi AI thật nếu nhóm giao riêng sau khi phần chính đã đủ;
không hardcode key và không coi câu trả lời dựng sẵn là lời gọi AI thật.
```

### 15.5. Prompt rà soát cuối — không tự chấm như giảng viên

```text
Đọc hướng dẫn LAB5 T2, spec.md và toàn bộ prototype hiện có.
Rà từng dòng rubric ở mục 16, mỗi dòng chỉ rõ bằng chứng file/mục/vị trí UI.
Đánh dấu: đã có bằng chứng / chưa đủ / chưa kiểm, kèm thiếu sót cụ thể.
Đối chiếu hai ca khó giữa §2, §3, §4, §5; đủ 4 tool; quyền và nút thống nhất.
Kiểm tra ảnh tồn tại, đánh số và nguyên tắc trỏ đúng; ghi rõ phần mock.
Không cho điểm tuyệt đối hoặc tuyên bố đảm bảo đạt điểm; không bịa demo/test.
Sửa lỗi rõ ràng trong phần được giao, giữ công việc người khác;
liệt kê ngắn việc thực tế thành viên còn phải làm trước nộp.
```

## 16. Đối chiếu đầy đủ rubric 100 điểm và bonus

**[ĐỀ]** Rubric chấm chuỗi quyết định và bằng chứng, không chấm điền đủ ô hoặc độ đẹp. Bảng dưới diễn đạt lại đủ từng dòng tiêu chí và điểm; dùng để rà, không bảo đảm điểm thực nhận.

| Khối | Điểm từng ý | Bằng chứng phải tìm được | Chủ trì |
|---|---:|---|---|
| R1 | 2 | Lát cắt đúng T2, prototype không lệch | Người 1 + 3 |
| R1 | 3 | ≥3 việc không làm, mỗi việc có lý do, prototype không vi phạm | Người 1 + 3 |
| R2 | 3 | ≥8 ca phủ đủ 4 lớp, tin như người thật, không chung chung | Người 1 |
| R2 | 3 | Mỗi ca có lỗi cụ thể gắn tool/dữ liệu, xử lý tốt, nhãn hại | Người 1 |
| R2 | 4 | So sánh chọn 2 ca đắt nhất; ca suýt chọn và vì sao loại | Người 1 + cả nhóm |
| R3 | 6 | Mỗi ca khó có câu AI nguyên văn, người dùng thấy gì, bước tiếp, người được báo | Người 2 |
| R3 | 8 | Lập luận chọn hỏi lại/trả lời giới hạn/chuyển người; phương án loại và vì sao | Người 2 |
| R3 | 5 | 2–3 nguyên tắc HAX/PAIR gắn chỗ cụ thể | Người 2 |
| R3 | 3 | Phân biệt lỗi hệ thống/người dùng/ngữ cảnh; cách nói và sửa khác nhau | Người 2 |
| R3 | 3 | Một lỗi câu chữ không cứu được; cơ chế thiết kế xử lý | Người 2 + 3 |
| R4 | 3 | Mọi tool có một mức của nhóm | Người 1 |
| R4 | 10 | Từng tool: sai ai chịu gì, đảo được không, chờ mất gì | Người 1 |
| R4 | 5 | Tool khó xếp; phương án, cái giá mỗi phía gắn ca §2, cách nhóm chốt | Người 1 + cả nhóm |
| R4 | 4 | Thử quyền trên 2 ca khó + 1 bình thường theo đủ ba câu | Người 1 + cả nhóm |
| R4 | 3 | Một mức quyền đã đổi lời hứa với người dùng | Người 1 |
| R5 | 5 | Bấm hết ca khó, không can thiệp tay giữa luồng; vẽ tay không có điểm dòng này | Người 3 |
| R5 | 4 | Thấy độ chắc hoặc bằng chứng AI dựa vào | Người 3 + 2 |
| R5 | 6 | Quyền trên UI đúng §4: tự làm có hoàn tác, cần duyệt có xác nhận, có chuyển người, việc cấm không có nút làm; giải thích đúng phạm vi đảo lại | Người 3 + 1 |
| R5 | 6 | Mỗi nguyên tắc HAX/PAIR trỏ vào vị trí cụ thể trên ảnh đánh số của prototype | Người 3 + 2 |
| R5 | 4 | Lập luận cách hiển thị đã chọn; cách khác và vì sao loại | Người 3 + 2 |
| R6 | 3 | 3 tiêu chí Pass/Fail chấm được nhất quán | Người 2 |
| R6 | 2 | Chấm thử trên 2 ca khó, ghi lỗi còn lại | Người 2 + cả nhóm |
| R7 | 3 | Ca lạ được nói/bấm theo đúng quyền nhóm đặt | Cả nhóm |
| R7 | 2 | Mỗi người trình bày và giải thích được phần có tên mình | Cả nhóm |

Tổng: R1=5, R2=10, R3=25, R4=25, R5=25, R6=5, R7=5, cộng **100**. R3+R4+R5 = **75**.

**[ĐỀ — bonus chính thức trong rubric chung]**

- Xung phong demo trước lớp trong khối demo: **+5**.
- Prototype có ≥1 lời gọi AI chạy thật ở **quyết định chính**, có log hoặc ảnh trong `prototype/`, không lộ key: **+3**.
- Bonus tối đa +8; tổng sau cộng **không vượt 100**.

Track T2 có gợi ý nâng cao về AI trả lời kèm mã mục và màn hàng chờ TA, nhưng không có mức điểm riêng cho màn TA trong rubric chung. Không tự cộng điểm bonus chỉ vì có màn TA. Ưu tiên hoàn thiện phần chính trước khi làm AI thật; nếu chưa có lời gọi thật, ghi rõ prototype mô phỏng.

## 17. Checklist nộp và thông tin phải hoàn thiện bằng thực tế

### 17.1. Nội dung và prototype

- [ ] Đúng lát cắt T2; ≥3 việc không làm có lý do.
- [ ] ≥8 ca, đủ ①②③④, mỗi ca gắn tool/dữ liệu, xử lý và mức hại.
- [ ] Chọn 2 ca rủi ro cao nhất, có so sánh và phương án suýt chọn.
- [ ] Hai ca khó có câu AI, bằng chứng/UI, bước tiếp, người được báo, thời điểm và phương án loại.
- [ ] Có phân loại lỗi, 2–3 nguyên tắc và một lỗi cần cơ chế thiết kế để xử lý.
- [ ] Đủ 4 tool có quyền, cái giá sai/chờ, khả năng đảo lại; đủ thông tin duyệt.
- [ ] Có lựa chọn thực tế từng thành viên cho tool khó, cách nhóm chốt.
- [ ] Đã thử quyền trên 2 ca khó + 1 bình thường, đủ ba câu đánh giá.
- [ ] Prototype bấm hết ca khó T2, thấy ≥2 mức tự chủ, bằng chứng và đường chuyển người.
- [ ] Bài mở không lộ/xác nhận đáp số; học liệu sai không bị âm thầm sửa fixture; nguồn không bị bịa.
- [ ] 1–2 ảnh thật có đánh số, nguyên tắc và mức quyền được giải thích tại §5.
- [ ] 3 tiêu chí Pass/Fail, kết quả chấm thật trên 2 ca khó, lỗi còn lại.
- [ ] §7 được cập nhật bằng ca lạ thật sau demo; không nhầm kịch bản dự kiến là sự kiện đã diễn ra.
- [ ] Cả ba người hiểu và giải thích được phần có tên mình.

### 17.2. Đóng gói và nộp

- [ ] Repo mới, công khai, tên đúng `K5-<L3A hoặc L3B>-Day05-T2-<TenNhom>`.
- [ ] `spec.md` đủ §1–§7, bảng 3 thành viên đầu file; tên/mã học viên chính xác, việc làm đúng thực tế.
- [ ] `prototype/` chứa file hoặc README link; người khác mở được và biết bấm ở đâu.
- [ ] Ảnh và link trong spec tồn tại, đường dẫn tương đối phù hợp repo mới; không còn đường dẫn ổ E: của máy tạo hướng dẫn.
- [ ] Không có API key, dữ liệu thật hoặc tuyên bố giả về API/test/TA.
- [ ] Không đẩy nguyên repo đề, tài liệu đề và prototype mẫu lên thành bài của nhóm.
- [ ] Thử repo công khai bằng cửa sổ ẩn danh; thử quyền xem link prototype nếu dùng dịch vụ ngoài.
- [ ] Nộp **link repo** theo kênh giảng viên thông báo, trước hạn theo lớp.

**[ĐỀ — hạn nộp LAB5]**

| Lớp | Hạn nộp |
|---|---|
| L3A | Trước 23:59 ngày **12/11/2026** |
| L3B | Trước 23:59 ngày **13/11/2026** |

Các mốc theo lịch lớp tại Việt Nam. Không dùng hạn bài tập 3 của fixture để thay hạn LAB5.

### 17.3. Những việc agent không thể tự tạo thành sự thật

Trước khi nộp, thành viên phải điền/kiểm tra thực tế: lớp, tên nhóm, tên và mã học viên; ai đã làm gì; lựa chọn ban đầu và quyết định nhóm; thao tác kiểm thử; ảnh chụp; quyền truy cập repo/link; ca lạ và phản hồi sau demo; log AI thật nếu xin bonus. Agent có thể hỗ trợ ghi, kiểm và tích hợp, nhưng không được bịa để làm bài trông hoàn chỉnh.
