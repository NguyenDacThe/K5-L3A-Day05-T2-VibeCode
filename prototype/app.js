/* Demo khép kín, không gọi mạng/AI. Không có đầu ra tự do ngoài kịch bản. */
(() => {
  'use strict';
  const F = window.LAB_FIXTURES;
  const $ = id => document.getElementById(id);
  const make = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  };
  const QUOTE = 'Vì là căn bậc hai, độ lệch chuẩn luôn nhỏ hơn phương sai.';
  const REASON = 'Kiểm tra suy luận của trợ lý — chờ xác minh: căn bậc hai của 0,25 là 0,5, nên mệnh đề “luôn nhỏ hơn” cần xem lại. Đây là ví dụ số dựng, chưa phải đính chính chính thức; hai đại lượng khác đơn vị.';
  const TEXT = Object.freeze({
    S05: 'Câu ‘độ lệch chuẩn luôn nhỏ hơn phương sai’ ở §3.3 cần được kiểm tra lại. Theo định nghĩa ngay trong mục này, căn bậc hai của 0,25 là 0,5, nên kết luận ‘luôn nhỏ hơn’ không đúng trong mọi trường hợp. Đây là ví dụ số dựng để kiểm tra mệnh đề, không phải đáp án bài 3 hay đính chính chính thức của giảng viên. Phương sai và độ lệch chuẩn khác đơn vị, nên không nên so sánh độ lớn một cách chung chung. Bạn nên báo giảng viên; tôi có thể giúp chuẩn bị câu hỏi để bạn xem và xác nhận chuyển TA. Nội dung chưa được đăng lên FAQ; TA cần kiểm tra và duyệt trước khi công bố.',
    S03: 'Bài 3 đang mở, hạn nộp là 13/11/2026 lúc 23:59 theo trang khoá học. Tôi có thể giúp bạn bắt đầu, nhưng không giải hộ, đưa hoặc xác nhận đáp số, hay viết phần nhận xét để nộp. Bước đầu: bạn hãy tự sắp xếp các giá trị lương trong §3.5 theo thứ tự tăng dần. Bạn có thể xem lại định nghĩa trung bình ở §3.1 và trung vị ở §3.2.',
    limit: 'Tôi không xác nhận đúng/sai hay cung cấp thêm phép tính để hoàn tất bài đang mở. Bạn có thể xem lại định nghĩa ở §3.1–§3.2 hoặc chuẩn bị câu hỏi về cách học cho TA.',
    faqLimit: 'Đổi sang FAQ không thay đổi giới hạn của bài đang mở. Tôi không chuẩn bị hay đăng lời giải hoặc xác nhận đáp số bài 3.',
    unknownCourse: 'Tôi chưa kiểm tra được trạng thái bài từ trang khoá học, nên chưa thể cung cấp lời giải hay xác nhận đáp số. Bạn đang hỏi bài nào?',
    missing: 'Tôi chưa đọc được học liệu nên chưa kiểm chứng được nội dung. Tôi không dựng trích dẫn hay kết luận thay thế. Bạn có thể chuẩn bị câu hỏi về cách học để xem và xác nhận chuyển TA.',
    transferPending: 'Đang chuyển trong mô phỏng; chưa có xác nhận thành công.',
    transferSuccess: 'Câu hỏi đã vào hàng chờ mô phỏng, chưa gửi tới TA thật. Giờ trực TA là 08:00–22:00; chưa có giờ trả lời được xác nhận.',
    transferError: 'Chưa chuyển được trong mô phỏng; câu hỏi chưa vào hàng chờ. Bạn có thể thử lại hoặc giữ bản tóm tắt để tự hỏi giảng viên.',
    faqSuccess: 'FAQ đã được công bố trong mô phỏng sau khi TA mô phỏng duyệt; không có bài đăng thật.'
  });
  // Chỉ các mẫu này được chuyển/đăng. Không có bộ lọc từ khoá giả làm bảo đảm cho văn bản tuỳ ý.
  const SUMMARIES = Object.freeze({
    S05: ['Xin TA kiểm tra mệnh đề “độ lệch chuẩn luôn nhỏ hơn phương sai” ở §3.3 và giải thích vì sao cần xem lại.', 'Xin TA giải thích lại câu cần kiểm tra ở §3.3 bằng ngôn ngữ dễ hiểu.'],
    S03: ['Xin TA hướng dẫn cách tự học bài đang mở, không gửi lời giải hay xác nhận đáp số.', 'Xin TA giúp tôi hiểu cách bắt đầu tự làm bài, không cung cấp bài làm hộ.'],
    general: ['Xin TA làm rõ phần khái niệm trong học liệu buổi đang học.', 'Xin TA giải thích lại phần khái niệm bằng ngôn ngữ dễ hiểu.']
  });
  const FAQ_QUESTION = 'Vì sao câu “độ lệch chuẩn luôn nhỏ hơn phương sai” ở §3.3 cần kiểm tra?';
  const FAQ_ANSWERS = [
    'Câu “luôn nhỏ hơn” ở §3.3 cần được giảng viên kiểm tra. Theo định nghĩa trong mục này, căn bậc hai của 0,25 là 0,5; đây là ví dụ số dựng kiểm tra mệnh đề, chưa phải đính chính chính thức. Phương sai và độ lệch chuẩn khác đơn vị, nên không so sánh độ lớn chung chung. Nội dung chỉ được duyệt trong mô phỏng.',
    'Đề nghị giảng viên kiểm tra lại mệnh đề “luôn nhỏ hơn” ở §3.3. Ví dụ số dựng: căn bậc hai của 0,25 là 0,5, nên không thể dùng chữ “luôn” cho mọi trường hợp. Đây là suy luận cần xác minh, chưa phải đính chính chính thức; hai đại lượng khác đơn vị. Người đóng vai TA chỉ duyệt trong mô phỏng.'
  ];
  const CASES = {
    S05: '§3.3 bảo độ lệch chuẩn luôn nhỏ hơn phương sai; em thấy sai. Đăng giải thích cho cả lớp được không?',
    S03: 'Giải hết bài 3 cho em để em nộp luôn.',
    S04: 'Em tính ra một con số rồi, đúng không? Chỉ trả lời đúng/sai thôi.',
    more: 'Cho em thêm bước để giải hết bài 3.',
    comment: 'Viết phần nhận xét hộ em để nộp bài 3.',
    faq: 'Đưa lời giải thích này lên FAQ ngay.',
    correction: 'Em phản biện lời giải thích về §3.3; hãy xem lại nguồn.',
    B2: 'Tôi hỏi bài 2, không phải bài 3. Hãy kiểm tra lại.',
    normal: 'Trung vị khác trung bình cộng chỗ nào ạ? Khi nào dùng cái nào?',
    S01: 'Slide 12 giải thích trung vị khác trung bình thế nào ạ?',
    S02: 'Cái độ lệch ấy là gì ạ, em đọc không hiểu.',
    S06: 'p-value là gì, giải kỹ giúp em.',
    S07: 'Hạn nộp bài 3 là khi nào ạ? Với cả tính độ lệch chuẩn bằng Excel thì dùng hàm gì?',
    S08: 'Em ngu quá nên không hiểu trung vị.',
    S10: '23 giờ rồi, báo TA trả lời em ngay nhé.'
  };
  let state;
  let generation = 0;
  const fault = id => $(id).checked;
  const consumeFault = id => { const value = fault(id); $(id).checked = false; return value; };
  function log(tool, status, detail) {
    state.audit.push({tool, status, detail});
    const li = make('li', '', `${tool} · ${status} · ${detail}`);
    $('audit-log').append(li);
    $('audit-count').textContent = `(${state.audit.length})`;
  }
  function status(id, text, error = false) {
    $(id).textContent = text;
    $(id).classList.toggle('error', error);
  }
  function setView(view) {
    state.view = view;
    $('student-view').hidden = view !== 'student';
    $('ta-view').hidden = view !== 'ta';
    for (const name of ['student', 'ta']) {
      $(`${name}-tab`).classList.toggle('active', view === name);
      $(`${name}-tab`).setAttribute('aria-pressed', String(view === name));
    }
    renderApproval();
  }
  function reset() {
    generation++;
    state = {view:'student', context:'general', hintGiven:false, messages:[], queue:[], audit:[], preview:null, transferBusy:false, faq:null, publicFAQ:[], verifiedSources:[]};
    $('messages').replaceChildren(make('div','welcome',''));
    $('messages').firstChild.append(make('strong','','Chỗ nào bạn còn vướng?'), make('p','','Chọn một ca để thử cách trợ lý tra nguồn, giữ giới hạn và chuyển người.'));
    $('chat-input').value = '';
    $('summary').value = ''; $('faq-question').value = ''; $('faq-answer').value = '';
    $('transfer-preview').hidden = true;
    $('audit-log').replaceChildren();
    $('audit-count').textContent = '(0)';
    for (const id of ['fail-source','fail-course','fail-transfer','fail-publish']) $(id).checked = false;
    status('transfer-status','');
    status('faq-status','');
    $('faq-empty').hidden = false;
    $('faq-editor').hidden = true;
    $('faq-question').disabled = false;
    $('faq-answer').disabled = false;
    $('rewrite-faq').disabled = false;
    $('prepare').disabled = false;
    renderSources([]);
    renderQueue(); renderPublic(); setView('student');
  }
  function sourceButton(key) {
    const button = make('button','',key === 'course' ? 'Trang khoá học ↗' : `Xem §${key} ↗`);
    button.type = 'button';
    button.dataset.source = key;
    return button;
  }
  function renderSources(keys) {
    $('source-content').replaceChildren();
    if (!keys.length) {
      $('source-content').append(make('p','muted small','Khi tra cứu thành công, đoạn gốc và mục nguồn xuất hiện ở đây. Không có slide đánh số trong fixture.'));
      return;
    }
    for (const key of keys) {
      const details = make('details','source-card');
      details.open = true;
      details.append(make('summary','',key === 'course' ? 'Trang khoá học · Dữ liệu B' : `Học liệu buổi 3 · §${key}`));
      const quote = make('blockquote');
      if (key === 'course') quote.textContent = `${F.course.b3}\n${F.course.b2}\nTA: ${F.course.ta}.`;
      else if (key === '3.3') {
        quote.append(document.createTextNode(F.docs[key].replace(QUOTE,'')), make('mark','',QUOTE));
      } else quote.textContent = F.docs[key];
      details.append(quote); $('source-content').append(details);
    }
    if (keys.includes('3.3')) {
      $('source-content').append(make('div','reason','Kiểm tra suy luận của trợ lý — chờ xác minh\n0,25 → căn bậc hai 0,5 là ví dụ số dựng kiểm tra chữ “luôn”. Đây chưa phải đính chính chính thức. Giữ nguyên học liệu gốc.'));
    }
  }
  function lookup(keys) {
    const failed = fault('fail-source');
    log('tra_cuu_tai_lieu', failed ? 'thất bại' : 'chỉ đọc', failed ? 'Chưa đọc được nguồn.' : keys.map(k=>`§${k}`).join(', '));
    state.verifiedSources = failed ? [] : [...keys];
    if (failed) { renderSources([]); return false; }
    renderSources(keys); return true;
  }
  function courseAvailable() {
    if (fault('fail-course')) {
      renderSources([]);
      return false;
    }
    return true;
  }
  function message(role, text, sources = [], tag = '') {
    if (!state.messages.length) $('messages').replaceChildren();
    state.messages.push({role,text});
    const article = make('article',`message ${role}`);
    article.append(make('span','speaker',role === 'user' ? 'BẠN · DỮ LIỆU DỰNG' : '✦ TRỢ LÝ · MÔ PHỎNG'));
    if (tag) article.append(make('span','tag',tag));
    article.append(make('p','',text));
    if (sources.length) {
      const buttons = make('div','source-buttons');
      sources.forEach(key=>buttons.append(sourceButton(key))); article.append(buttons);
    }
    $('messages').append(article);
    $('messages').scrollTop = $('messages').scrollHeight;
  }
  function clearUnsentPreview() {
    if (state.transferBusy) return;
    state.preview = null;
    $('transfer-preview').hidden = true;
    status('transfer-status','');
  }
  function setContext(context) { state.context = context; clearUnsentPreview(); }
  function answer(id, userText) {
    setView('student');
    message('user', userText || CASES[id] || 'Câu hỏi mới');
    if (['S03','S04','more','comment'].includes(id)) {
      setContext('S03');
      if (!courseAvailable()) return message('assistant',TEXT.unknownCourse,[],'CHƯA KIỂM ĐƯỢC TRẠNG THÁI');
      if (!lookup(['3.1','3.2','3.5'])) return message('assistant',TEXT.missing);
      if (id === 'S03' && !state.hintGiven) {
        state.hintGiven = true;
        log('goi_y_bai_tap','tự làm có giới hạn','Chỉ gợi ý sắp xếp, không phép tính/đáp số.');
        message('assistant',TEXT.S03,['course','3.1','3.2','3.5'],'BÀI ĐANG MỞ · CHỈ BƯỚC ĐẦU');
      } else message('assistant',TEXT.limit,['course','3.1','3.2'],'GIỮ GIỚI HẠN NHIỀU LƯỢT');
      return;
    }
    if (id === 'faq') {
      if (state.context !== 'S05') return message('assistant',TEXT.faqLimit,[],'CHƯA TẠO BẢN FAQ');
      if (state.publicFAQ.length) return message('assistant','FAQ cùng mẫu đã được công bố trong mô phỏng, không có bài đăng thật. Yêu cầu này không tự tạo thêm bài hay bỏ qua bước duyệt. Bạn có thể xem FAQ lớp bên dưới.',['3.3'],'KHÔNG ĐĂNG LẶP');
      return message('assistant','FAQ chưa được công bố. Bạn có thể chuẩn bị câu hỏi, sửa tóm tắt và xác nhận chuyển TA. Người đóng vai TA cần kiểm tra nguồn và duyệt đúng bản trước khi đăng mô phỏng.',['3.3'],'CẦN TA DUYỆT');
    }
    if (id === 'S05' || id === 'correction') {
      setContext('S05');
      if (!lookup(['3.3'])) return message('assistant',TEXT.missing);
      const current = state.publicFAQ.length ? TEXT.S05.replace('Nội dung chưa được đăng lên FAQ; TA cần kiểm tra và duyệt trước khi công bố.','FAQ cùng mẫu đã được công bố trong mô phỏng sau duyệt, không có bài đăng thật. Lượt hỏi mới này không tạo thêm bài FAQ.') : TEXT.S05;
      const text = id === 'correction' ? 'Cảm ơn bạn đã phản biện. Tôi kiểm tra lại câu gốc ở §3.3 và giữ phân biệt giữa suy luận của trợ lý với đính chính chính thức.\n\n' + current : current;
      return message('assistant',text,['3.3'],'HỌC LIỆU CẦN KIỂM TRA · G10 / G11');
    }
    if (id === 'B2') {
      setContext('general');
      if (!courseAvailable()) return message('assistant',TEXT.unknownCourse);
      renderSources(['course']);
      return message('assistant','Cảm ơn bạn đã làm rõ. Tôi đã kiểm tra lại trang khoá học: bài 2 đã hết hạn 06/11/2026 23:59 và đã công bố đáp án ngày 07/11. Trung bình cộng của 4, 8, 6, 5, 7 là 6: tổng các giá trị là 30, chia cho 5 giá trị được 6. Đây là đáp án bài 2 đã công bố, không phải bài 3.',['course','3.1']);
    }
    if (id === 'S07') {
      setContext('general');
      if (!courseAvailable()) return message('assistant',TEXT.unknownCourse);
      renderSources(['course']);
      return message('assistant','Theo trang khoá học, hạn bài 3 là 13/11/2026 23:59, bài đang mở. Học liệu được cấp không có tên hàm Excel tính độ lệch chuẩn. Bạn nên hỏi TA/giảng viên hoặc cung cấp nguồn được duyệt; tôi không đoán tên hàm.',['course']);
    }
    if (id === 'S02') { setContext('general'); return message('assistant','Bạn đang hỏi độ lệch chuẩn hay giá trị ngoại lai? Hãy nói rõ mục bạn muốn hiểu; tôi chưa thực hiện chuyển TA hay công bố gì.'); }
    if (id === 'S06' || id === 'S10') {
      setContext('general');
      if (!courseAvailable()) return message('assistant','Tôi chưa đọc được trang khoá học nên chưa xác minh được lịch học hoặc giờ TA. Bạn có thể chuẩn bị câu hỏi để xem và xác nhận chuyển TA.');
      if (id === 'S06') return message('assistant','Chủ đề “Kiểm định giả thuyết và p-value” sẽ học ở buổi 7 theo đề cương trang khoá học; hiện chưa có nội dung buổi đó để giảng sâu.',['course']);
      return message('assistant','TA trực 08:00–22:00 theo trang khoá học. Bây giờ là 23:00 trong mô phỏng, ngoài giờ trực. Bạn có thể xem trước và xác nhận câu hỏi gửi TA; chỉ sau khi chuyển thành công mới có hàng chờ mô phỏng, chưa có giờ trả lời được xác nhận.',['course']);
    }
    if (['normal','S01','S08','outlier'].includes(id)) {
      setContext('general');
      const keys = id === 'outlier' ? ['3.4'] : ['3.1','3.2'];
      if (!lookup(keys)) return message('assistant',TEXT.missing);
      let text = 'Theo §3.1, trung bình cộng là tổng các giá trị chia cho số giá trị, dễ bị kéo bởi ngoại lai. Theo §3.2, trung vị là giá trị giữa sau khi sắp xếp; nếu số giá trị chẵn thì lấy trung bình cộng của hai giá trị giữa. Trung vị ít bị ảnh hưởng bởi ngoại lai, thường dùng cho dữ liệu lệch như thu nhập hoặc giá nhà.';
      if (id === 'S01') text = 'Fixture không có slide 12, chỉ có §3.1–§3.5. Với câu hỏi trung bình và trung vị, tôi có thể dẫn đúng §3.1–§3.2.\n\n' + text;
      if (id === 'S08') text = 'Bạn muốn làm rõ phần nào trong định nghĩa trung vị: sắp xếp hay vị trí ở giữa? Ta có thể xem lại từng ý trong §3.2.\n\n' + text;
      if (id === 'outlier') text = 'Theo §3.4: ' + F.docs['3.4'];
      return message('assistant',text,keys,'TRA CỨU TỰ LÀM · KHÔNG CHỜ TA');
    }
    setContext('general');
    message('assistant','Demo chưa nhận diện được ý định này. Bạn đang hỏi mục nào trong buổi 3, hay bài tập nào? Tôi chưa có căn cứ để giải hoặc xác nhận đáp số. Bạn có thể chọn ca mẫu hoặc chuẩn bị câu hỏi về cách học cho TA.');
  }
  // Nhận diện hẹp; mọi đầu ra vẫn là mẫu cố định, không dùng văn bản tự nhập để tạo lời giải/FAQ.
  function classify(text) {
    const t = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d');
    const risk = /giai het|giai ho|dap so|dap an|dung.sai|dung khong|nhan xet|tinh ra|them buoc|loi giai|de nop/.test(t);
    if (/bai\s*3/.test(t) && risk) return /faq/.test(t) ? 'blockedFAQ' : 'S03';
    if (risk && state.context === 'S03') return /faq/.test(t) ? 'blockedFAQ' : 'S04';
    if (/bai\s*2/.test(t) && !/bai\s*3/.test(t)) return 'B2';
    if (risk) return 'S04';
    if (/slide\s*12/.test(t)) return 'S01';
    if (/faq/.test(t) && !/3[.,]3|phuong sai|luon nho/.test(t)) return 'faq';
    if (/3[.,]3|phuong sai|luon nho|do lech chuan/.test(t) && !/excel|ham/.test(t)) return 'S05';
    if (/excel|han nop|han bai/.test(t)) return 'S07';
    if (/p.value|buoi\s*7/.test(t)) return 'S06';
    if (/do lech/.test(t)) return 'S02';
    if (/ngu qua|kem qua/.test(t)) return 'S08';
    if (/ngoai lai/.test(t)) return 'outlier';
    if (/trung vi|trung binh/.test(t)) return 'normal';
    if (/ta.*ngay|23 gio|bao ta/.test(t)) return 'S10';
    return 'unknown';
  }
  function sendText(text) {
    if (!text.trim()) return;
    const id = classify(text);
    if (id === 'blockedFAQ') { setContext('S03'); answer('faq',text); }
    else answer(id,text);
  }
  function summaryGroup() { return SUMMARIES[state.preview?.context] || SUMMARIES.general; }
  function validSummary() { return Boolean(state.preview && summaryGroup().includes($('summary').value)); }
  function renderSummaryValidation() {
    const valid = validSummary();
    $('summary-validation').textContent = valid ? '' : 'Nội dung ngoài mẫu demo: chưa gửi. Dùng nút đổi câu hỏi để chọn bản an toàn; không chuyển đáp số hay lời giải tự nhập.';
    $('confirm-transfer').disabled = !valid || state.transferBusy;
    $('summary').disabled = state.transferBusy;
    $('rewrite').disabled = state.transferBusy;
    $('cancel-transfer').disabled = state.transferBusy;
  }
  function prepare() {
    if (state.view !== 'student' || state.transferBusy) return;
    const context = fault('fail-source') || (state.context === 'S03' && fault('fail-course')) || (state.context === 'S05' && !state.verifiedSources.includes('3.3')) ? 'general' : state.context;
    state.preview = {context, sources: context === 'S05' ? ['3.3'] : context === 'S03' ? ['3.1','3.2','3.5','course'] : [], reason:context === 'S05' ? REASON : ''};
    $('summary').value = summaryGroup()[0];
    $('transfer-preview').hidden = false;
    $('transfer-sources').textContent = [...state.preview.sources.map(key=> key === 'course' ? F.course.b3 : `§${key}: ${F.docs[key]}`),state.preview.reason].filter(Boolean).join('\n\n');
    renderSummaryValidation();
    status('transfer-status','Bản xem trước riêng. Chưa gọi chuyen_TA; chưa ai được báo.');
  }
  function transfer() {
    if (state.view !== 'student' || state.transferBusy || !validSummary()) return;
    const snapshot = {context:state.preview.context, summary:$('summary').value, sources:[...state.preview.sources],reason:state.preview.reason};
    const duplicate = state.queue.some(ticket=>ticket.context === snapshot.context && ticket.summary === snapshot.summary);
    if (duplicate) return status('transfer-status','Bản này đã có trong hàng chờ mô phỏng; không tạo bản trùng.');
    state.transferBusy = true;
    $('prepare').disabled = true;
    renderSummaryValidation();
    status('transfer-status',TEXT.transferPending);
    log('chuyen_TA','đang chuyển','Học viên vừa xác nhận bản xem trước.');
    const token = generation;
    const failed = consumeFault('fail-transfer');
    setTimeout(()=>{
      if (generation !== token) return;
      state.transferBusy = false; $('prepare').disabled = false; renderSummaryValidation();
      if (failed) { log('chuyen_TA','thất bại','Không tạo mục hàng chờ.'); status('transfer-status',TEXT.transferError,true); return; }
      state.queue.push({...snapshot,id:state.queue.length + 1});
      log('chuyen_TA','thành công mô phỏng',`Hàng chờ #${state.queue.length}; chưa có TA thật nhận.`);
      status('transfer-status',TEXT.transferSuccess); renderQueue();
      $('transfer-preview').hidden = true; state.preview = null;
    },400);
  }
  function renderQueue() {
    $('queue-count').textContent = String(state.queue.length);
    $('queue').replaceChildren();
    if (!state.queue.length) { $('queue').append(make('p','empty','Chưa có câu hỏi nào được học viên xác nhận chuyển thành công.')); return; }
    state.queue.forEach(ticket=>{
      const article = make('article','ticket');
      article.append(make('strong','',`#${ticket.id} · ${ticket.context === 'general' ? 'Khái niệm' : ticket.context} · Hàng chờ mô phỏng`), make('p','ticket-summary',ticket.summary), make('p','tiny','Ngoài giờ trực · chưa có giờ trả lời được xác nhận.'));
      for (const key of ticket.sources) article.append(make('blockquote','',key === 'course' ? F.course.b3 : `§${key}: ${F.docs[key]}`));
      if (ticket.reason) article.append(make('p','reason',ticket.reason));
      if (ticket.context === 'S05') {
        const button = make('button','secondary','Soạn bản FAQ từ câu hỏi này'); button.dataset.ticket = String(ticket.id); article.append(button);
      } else article.append(make('p','tiny','Không tạo FAQ lời giải bài đang mở. TA duyệt cũng không mở quyền giải hộ.'));
      $('queue').append(article);
    });
  }
  const faqFingerprint = faq => JSON.stringify([faq.question,faq.answer,faq.source,faq.revision]);
  function faqValid() { return Boolean(state.faq && state.faq.question === FAQ_QUESTION && FAQ_ANSWERS.includes(state.faq.answer) && state.faq.source === F.docs['3.3']); }
  function approved() { return Boolean(state.faq && state.faq.approval === faqFingerprint(state.faq)); }
  function createFAQ(id) {
    if (state.view !== 'ta' || !state.queue.some(ticket=>ticket.id === id && ticket.context === 'S05')) return;
    // Không xoá một lượt đăng đang chạy hoặc khởi tạo lại để lặp công bố.
    if (state.faq?.publishing || state.faq?.published) return;
    state.faq = {question:FAQ_QUESTION,answer:FAQ_ANSWERS[0],source:F.docs['3.3'],revision:1,approval:null,rejected:false,publishing:false,published:false};
    $('faq-empty').hidden = true; $('faq-editor').hidden = false;
    $('faq-question').value = state.faq.question; $('faq-answer').value = state.faq.answer;
    $('faq-source').textContent = state.faq.source;
    status('faq-status','FAQ chưa được công bố. Bản xem trước không gọi dang_FAQ.'); renderApproval();
  }
  function editFAQ() {
    if (state.view !== 'ta' || !state.faq || state.faq.publishing || state.faq.published) return;
    state.faq.question = $('faq-question').value;
    state.faq.answer = $('faq-answer').value;
    state.faq.revision++;
    state.faq.approval = null;
    state.faq.rejected = false;
    status('faq-status','Nội dung đã đổi; lượt duyệt cũ không còn hiệu lực. FAQ chưa được công bố.');
    renderApproval();
  }
  function renderApproval() {
    const faq = state.faq;
    const valid = faqValid();
    const locked = Boolean(faq?.publishing || faq?.published);
    const isTA = state.view === 'ta';
    $('faq-validation').textContent = faq && !valid ? 'Ngoài mẫu an toàn của demo: không được duyệt/đăng. Không chuyển lời giải hay đáp số tự nhập sang FAQ.' : '';
    $('approval-state').textContent = faq ? `Bản v${faq.revision} · ${faq.published ? 'Đã công bố mô phỏng' : faq.rejected ? 'Bị từ chối — chưa công khai' : approved() ? 'Đã được TA mô phỏng duyệt đúng bản' : 'Chưa công khai — cần TA duyệt'}` : '';
    $('approve').disabled = !isTA || !valid || locked;
    $('reject').disabled = !isTA || !faq || locked;
    $('publish').disabled = !isTA || !valid || !approved() || locked;
    $('faq-question').disabled = locked; $('faq-answer').disabled = locked; $('rewrite-faq').disabled = locked;
  }
  function publish() {
    if (state.view !== 'ta' || !faqValid() || !approved() || state.faq.publishing || state.faq.published) return;
    const faq = state.faq;
    const snapshot = {question:faq.question,answer:faq.answer,source:faq.source,revision:faq.revision};
    faq.publishing = true; renderApproval();
    status('faq-status','Đang đăng trong mô phỏng; chưa công bố thành công.');
    log('dang_FAQ','đang đăng',`TA mô phỏng đã duyệt bản v${faq.revision}.`);
    const token = generation;
    const fingerprint = faqFingerprint(faq);
    const failed = consumeFault('fail-publish');
    setTimeout(()=>{
      if (generation !== token) return;
      faq.publishing = false;
      if (failed || state.faq !== faq || fingerprint !== faqFingerprint(faq) || !approved()) {
        log('dang_FAQ','thất bại','Không tạo FAQ công khai.'); status('faq-status','Chưa công bố được FAQ trong mô phỏng.',true); renderApproval(); return;
      }
      state.publicFAQ.push(snapshot); faq.published = true;
      log('dang_FAQ','thành công mô phỏng',`Công bố đúng bản v${snapshot.revision}.`);
      status('faq-status',TEXT.faqSuccess); renderApproval(); renderPublic();
    },400);
  }
  function renderPublic() {
    $('public-count').textContent = `${state.publicFAQ.length} bài công khai`;
    $('public-faq').replaceChildren();
    if (!state.publicFAQ.length) $('public-faq').textContent = 'Chưa có FAQ được công bố. Bản xem trước không hiển thị cho lớp.';
    state.publicFAQ.forEach(faq=>{
      const article = make('article','faq-item');
      article.append(make('h3','',faq.question),make('p','',faq.answer),make('p','tiny',`Nguồn: §3.3 · Bản v${faq.revision} · TA mô phỏng duyệt · Không có bài đăng thật.`));
      $('public-faq').append(article);
    });
  }
  document.addEventListener('click',event=>{
    const button = event.target.closest('button');
    if (!button || button.disabled) return;
    if (button.dataset.case) answer(button.dataset.case);
    if (button.dataset.source) {
      const key = button.dataset.source;
      if (key === 'course') { if (courseAvailable()) renderSources(['course']); else status('transfer-status','Chưa đọc được trang khoá học. Không suy đoán trạng thái bài.',true); }
      else if (!lookup([key])) message('assistant',TEXT.missing);
      $('UX01').scrollIntoView({block:'nearest'});
    }
    if (button.dataset.ticket) createFAQ(Number(button.dataset.ticket));
  });
  $('chat-form').addEventListener('submit',event=>{ event.preventDefault(); sendText($('chat-input').value); $('chat-input').value = ''; });
  $('student-tab').addEventListener('click',()=>setView('student'));
  $('ta-tab').addEventListener('click',()=>setView('ta'));
  $('reset').addEventListener('click',reset);
  $('prepare').addEventListener('click',prepare);
  $('summary').addEventListener('input',renderSummaryValidation);
  $('rewrite').addEventListener('click',()=>{ const values = summaryGroup(); $('summary').value = values[$('summary').value === values[0] ? 1 : 0]; renderSummaryValidation(); });
  $('cancel-transfer').addEventListener('click',()=>{ if (!state.transferBusy) { state.preview = null; $('transfer-preview').hidden = true; status('transfer-status','Không gửi. Chưa chuyển TA; cuộc trò chuyện được giữ nguyên.'); } });
  $('confirm-transfer').addEventListener('click',transfer);
  $('publish').addEventListener('click',publish);
  $('faq-question').addEventListener('input',editFAQ);
  $('faq-answer').addEventListener('input',editFAQ);
  $('rewrite-faq').addEventListener('click',()=>{ if (!state.faq || state.faq.published || state.faq.publishing) return; $('faq-question').value = FAQ_QUESTION; $('faq-answer').value = FAQ_ANSWERS[$('faq-answer').value === FAQ_ANSWERS[0] ? 1 : 0]; editFAQ(); });
  $('approve').addEventListener('click',()=>{ if (state.view !== 'ta' || !faqValid() || state.faq.published || state.faq.publishing) return; state.faq.rejected = false; state.faq.approval = faqFingerprint(state.faq); status('faq-status','Đã duyệt trong mô phỏng; vẫn chưa công bố. Cần thao tác đăng riêng.'); renderApproval(); });
  $('reject').addEventListener('click',()=>{ if (state.view !== 'ta' || !state.faq || state.faq.publishing || state.faq.published) return; state.faq.approval = null; state.faq.rejected = true; status('faq-status','FAQ chưa được công bố. Người đóng vai TA đã từ chối bản này.'); renderApproval(); });
  F.course.future.forEach(title=>$('future-list').append(make('p','',title)));
  reset();
})();
