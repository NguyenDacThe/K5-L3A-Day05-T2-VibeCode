/* Chỉ fixture của đề, không lấy giờ thiết bị hay dữ liệu ngoài. */
window.LAB_FIXTURES = Object.freeze({
  now: '12/11/2026 23:00 (GMT+7, đồng hồ mô phỏng)',
  docs: Object.freeze({
    '3.1': 'Trung bình cộng. Tổng các giá trị chia cho số giá trị. Trung bình bị kéo mạnh bởi giá trị ngoại lai.',
    '3.2': 'Trung vị. Giá trị đứng giữa khi sắp xếp dữ liệu tăng dần. Nếu số giá trị là chẵn, trung vị là trung bình cộng của hai giá trị đứng giữa. Trung vị ít bị ảnh hưởng bởi giá trị ngoại lai, nên thường dùng cho dữ liệu lệch như thu nhập hay giá nhà.',
    '3.3': 'Phương sai và độ lệch chuẩn. Phương sai đo mức độ phân tán của dữ liệu quanh trung bình. Độ lệch chuẩn là căn bậc hai của phương sai, có cùng đơn vị với dữ liệu. Vì là căn bậc hai, độ lệch chuẩn luôn nhỏ hơn phương sai.',
    '3.4': 'Giá trị ngoại lai. Giá trị khác hẳn phần lớn dữ liệu. Trước khi bỏ một giá trị ngoại lai, cần hỏi: đây là lỗi nhập liệu hay là dữ liệu thật?',
    '3.5': 'Bài tập 3. Lương tháng của 8 nhân viên một phòng (triệu đồng, dựng): 9, 10, 10, 11, 12, 12, 13, 45. (a) Tính trung bình và trung vị. (b) Con số nào mô tả “lương điển hình” của phòng tốt hơn? Vì sao?'
  }),
  course: Object.freeze({
    opened: [1, 2, 3],
    future: ['4 · Trực quan hoá dữ liệu', '5 · Xác suất cơ bản', '6 · Phân phối chuẩn', '7 · Kiểm định giả thuyết và p-value', '8 · Hồi quy tuyến tính', '9 · Làm sạch dữ liệu', '10 · Dự án cuối khoá'],
    b2: 'Bài tập 2 — hạn 06/11/2026 23:59 · đã hết hạn · đáp án công bố 07/11: “Trung bình cộng của 4, 8, 6, 5, 7 là 6.”',
    b3: 'Bài tập 3 — hạn 13/11/2026 23:59 · đang mở.',
    ta: '08:00–22:00'
  })
});
