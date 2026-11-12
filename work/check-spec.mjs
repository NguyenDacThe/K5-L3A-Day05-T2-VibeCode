// Kiểm tính toàn vẹn bài nộp và fixture; không thay thế rà ngữ nghĩa/đồng thuận nhóm.
import assert from 'node:assert/strict';
import {readFile,access,writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import vm from 'node:vm';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=relative=>readFile(path.join(root,relative),'utf8');
const spec=await read('spec.md');
const guide=await read('HUONG-DAN-LAB5-T2-NHOM-3-NGUOI.md');
const html=await read('prototype/index.html');
const app=await read('prototype/app.js');
const report=JSON.parse(await read('work/test-results.json'));
const results=[];
async function check(id,description,fn) {
  try { await fn();results.push({id,description,result:'Pass'});console.log('PASS '+id+' '+description); }
  catch(error) { results.push({id,description,result:'Fail',error:error.message});console.log('FAIL '+id+' '+error.message); }
}
const sections=spec.split(/^## §\d\./m);
await check('SPEC-STRUCTURE','Đủ duy nhất §1–§7 đúng thứ tự',()=>assert.deepEqual([...spec.matchAll(/^## §(\d)\./gm)].map(m=>Number(m[1])),[1,2,3,4,5,6,7]));
await check('METADATA','L3A, Zone 1 và tên/mã Người 3 đúng thông tin người dùng',()=>{
  assert.match(spec,/\*\*Lớp:\*\* L3A · \*\*Bàn \/ zone:\*\* 1/);
  assert.match(spec,/\| Nguyễn Đắc Thể \| 2A202603529 \|/);
});
await check('SLICE','Giữ nguyên lát cắt T2 của đề',()=>{
  const slice=guide.split('\n').find(line=>line.startsWith('> Trong **trợ lý học bài'));
  assert.ok(slice);assert.ok(spec.includes(slice.trimEnd()));
});
await check('SCENARIOS','Có S01–S10 duy nhất trong bảng §2, phủ bốn lớp rủi ro',()=>{
  const scenarios=[...sections[2].matchAll(/^\| (S\d{2}) \|/gm)].map(m=>m[1]);
  assert.deepEqual(scenarios,Array.from({length:10},(_,i)=>'S'+String(i+1).padStart(2,'0')));
  for(const label of ['①','②','③','④']) assert.ok(sections[2].includes(label));
});
await check('TOOLS','Ma trận §4 có đúng bốn tool gốc; implementation dùng cùng mã',()=>{
  const names=['tra_cuu_tai_lieu','goi_y_bai_tap','chuyen_TA','dang_FAQ'];
  assert.deepEqual([...sections[4].matchAll(/^\| `([^`]+)` \|/gm)].map(m=>m[1]),names);
  for(const name of names) assert.ok(app.includes("log('"+name+"'"));
});
await check('CRITERIA','Giữ đúng ba tiêu chí C1/C2/C3 và đủ sáu ô chấm hai ca',()=>{
  assert.deepEqual([...sections[6].matchAll(/^\| (C\d) \|/gm)].map(m=>m[1]),['C1','C2','C3']);
  assert.deepEqual([...sections[6].matchAll(/^\| (S0[35]) \| (C[123]) \|/gm)].map(m=>`${m[1]}-${m[2]}`),['S05-C1','S05-C2','S05-C3','S03-C1','S03-C2','S03-C3']);
});
await check('FIXTURES','Toàn bộ §3.1–§3.5 khớp nguyên dữ liệu hướng dẫn, kể cả câu sai',async()=>{
  const sandbox={window:{}};vm.runInNewContext(await read('prototype/fixtures.js'),sandbox);
  const fixtures=sandbox.window.LAB_FIXTURES;
  for(const match of guide.matchAll(/^- \*\*§(3\.[1-5]) ([^*]+)\*\* (.+)$/gm)) assert.equal(fixtures.docs[match[1]],(match[2]+' '+match[3]).trimEnd(),match[1]);
  assert.equal(Object.keys(fixtures.docs).length,5);
  assert.match(fixtures.docs['3.3'],/Vì là căn bậc hai, độ lệch chuẩn luôn nhỏ hơn phương sai\./);
  assert.match(fixtures.course.b3,/13\/11\/2026 23:59 · đang mở/);
  assert.match(fixtures.course.b2,/đã hết hạn · đáp án công bố 07\/11/);
  assert.equal(fixtures.course.ta,'08:00–22:00');
});
await check('UX-MARKERS','Bốn số UX01–UX04 tồn tại trên HTML và được giải thích ở §5',()=>{
  for(let i=1;i<=4;i++) { const id='UX0'+i;assert.equal(html.split(`id="${id}"`).length-1,1);assert.ok(sections[5].includes(id)); }
  for(const id of ['G10','G11','G9']) assert.ok(sections[3].includes(id) && sections[5].includes(id));
});
await check('IMAGES','Chính xác hai ảnh được nhúng ở §5, file PNG thật 1440×1500',async()=>{
  const links=[...sections[5].matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)].map(m=>m[1]);assert.equal(links.length,2);
  for(const link of links) {const png=await readFile(path.join(root,link));assert.equal(png.subarray(1,4).toString(),'PNG');assert.equal(png.readUInt32BE(16),1440);assert.equal(png.readUInt32BE(20),1500);}
});
await check('LINKS','Mọi liên kết Markdown nội bộ của bài và bàn giao tồn tại',async()=>{
  for(const file of ['spec.md','prototype/README.md','work/nguoi-3.md','work/kiem-tra-spec.md']) {
    const markdown=await read(file);
    for(const match of markdown.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)) {
      const link=match[1];if(/^[a-z]+:|^#/i.test(link)) continue;
      const target=path.resolve(root,path.dirname(file),decodeURIComponent(link.split('#')[0]));
      assert.ok(target.startsWith(root+path.sep),file+': '+link);await access(target);
    }
  }
});
await check('BROWSER-EVIDENCE','Bảng Pass được hỗ trợ bởi log trình duyệt đủ nhánh',()=>{
  assert.equal(report.results.length,15);assert.ok(report.results.every(item=>item.result==='Pass'));assert.deepEqual(report.errors,[]);
  for(const id of ['S05-C1','S05-C2','S05-C3-TA','S05-C3-FAQ','S03-C1','S03-C2','S03-C3','NORMAL']) assert.ok(report.results.some(item=>item.id===id));
});
await check('INTEGRATION','Không dấu conflict Git, không ghi trạng thái chưa có prototype đã lỗi thời',()=>{
  assert.doesNotMatch(spec,/^(<<<<<<<|=======|>>>>>>>)\s*$/m);
  assert.doesNotMatch(spec,/chưa có prototype|chưa có ảnh|kế hoạch kiểm chưa thực hiện|CẦN NGƯỜI 3 BỔ SUNG/);
  assert.doesNotMatch(spec,/[A-Z]:[\\/]/);
  assert.match(sections[7],/Chưa demo/);
  assert.match(spec,/chưa được nhóm chốt|Chưa có dữ liệu nhóm (?:họp )?chốt/);
  const choices=sections[4].split('### Lựa chọn quyền của nhóm')[1].split('### Thử quyền')[0];
  assert.doesNotMatch(choices,/CẦN NHÓM ĐIỀN/);
  for(const member of ['Lê Nhật Linh — 2A202603514','Trần Quốc Đông — 2A202603643','Nguyễn Đắc Thể — 2A202603529']) assert.ok(choices.includes(member));
  assert.match(choices,/phương án đề xuất cho từng thành viên/);
});
const output={executedAt:new Date().toISOString(),timezone:'Asia/Saigon',scope:'Kiểm cấu trúc, liên kết, fixture và dẫn chứng; không chứng minh ngữ nghĩa toàn bộ spec hay sự kiện nhóm.',results};
await writeFile(path.join(root,'work/spec-check-results.json'),JSON.stringify(output,null,2)+'\n');
console.log(`${results.filter(r=>r.result==='Pass').length}/${results.length} checks passed`);
if(results.some(r=>r.result==='Fail')) process.exitCode=1;
