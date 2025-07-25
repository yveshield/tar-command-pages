const s = ['NUL', 'SOH', 'STX', 'ETX', 'EOT', 'ENQ', 'ACK', 'BEL', 'BS', 'HT', 'LF', 'VT', 'FF', 'CR', 'SO', 'SI', 'DLE', 'DC1', 'DC2', 'DC3', 'DC4', 'NAK', 'SYN', 'ETB', 'CAN', 'EM', 'SUB', 'ESC', 'FS', 'GS', 'RS', 'US'];

const l = [
  ['0000-007F', '基本拉丁字母'],
  ['0080-00FF', '拉丁字母补充-1'],
  ['0100-017F', '拉丁字母扩展-A'],
  ['0180-024F', '拉丁字母扩展-B'],
  ['0250-02AF', '国际音标扩展'],
  ['02B0-02FF', '占位修饰符号（Phonetic Extensions）'],
  ['0300-036F', '结合附加符号'],
  ['0370-03FF', '希腊字母及科普特字母'],
  ['0400-04FF', '西里尔字母'],
  ['0500-052F', '西里尔字母补充'],
  ['0530-058F', '亚美尼亚字母'],
  ['0590-05FF', '希伯来字母'],
  ['0600-06FF', '阿拉伯字母'],
  ['0700-074F', '叙利亚字母'],
  ['0750-077F', '阿拉伯文补充'],
  ['0780-07BF', '西非书面文字'],
  ['07C0-07FF', '占位修饰符号补充（Nko 等）'],
  ['0800-083F', '撒玛利亚字母'],
  ['0840-085F', '曼达文字'],
  ['0860-086F', '叙利亚文补充'],
  ['0870-089F', '阿拉伯文扩展-B'],
  ['08A0-08FF', '阿拉伯文扩展-A'],
  ['0900-097F', '天城文'],
  ['0980-09FF', '孟加拉文'],
  ['0A00-0A7F', '古木基文'],
  ['0A80-0AFF', '古吉拉特文'],
  ['0B00-0B7F', '奥里亚文'],
  ['0B80-0BFF', '泰米尔文'],
  ['0C00-0C7F', '泰卢固文'],
  ['0C80-0CFF', '卡纳达文'],
  ['0D00-0D7F', '马拉雅拉姆文'],
  ['0D80-0DFF', '僧伽罗文'],
  ['0E00-0E7F', '泰文'],
  ['0E80-0EFF', '老傣文（寮文）'],
  ['0F00-0FFF', '藏文'],
  ['1000-109F', '缅甸文'],
  ['10A0-10FF', '格鲁吉亚字母'],
  ['1100-11FF', '谚文字母'],
  ['1200-137F', '吉兹字母'],
  ['1380-139F', '吉兹补充'],
  ['13A0-13FF', '切罗基字母'],
  ['1400-167F', '统一加拿大原住民音节文字'],
  ['1680-169F', '欧甘字母'],
  ['16A0-16FF', '卢恩字母'],
  ['1700-171F', '他加禄字母'],
  ['1720-173F', '哈努诺文'],
  ['1740-175F', '布希德文'],
  ['1760-177F', '塔格巴努亚文'],
  ['1780-17FF', '高棉文'],
  ['1800-18AF', '蒙古文'],
  ['18B0-18FF', '加拿大原住民音节扩展'],
  ['1900-194F', '林布文'],
  ['1950-197F', '德宏傣文'],
  ['1980-19DF', '新傣仂文'],
  ['19E0-19FF', '高棉文符号'],
  ['1A00-1A1F', '布吉文'],
  ['1A20-1AAF', '老傣文'],
  ['1AB0-1AFF', '组合变音标记扩展'],
  ['1B00-1B7F', '巴厘字母'],
  ['1B80-1BBF', '巽他字母'],
  ['1BC0-1BFF', '巴塔克文'],
  ['1C00-1C4F', '绒巴文'],
  ['1C50-1C7F', '桑塔利文'],
  ['1C80-1C8F', '西里尔字母扩展-C'],
  ['1C90-1CBF', '格鲁吉亚字母扩展'],
  ['1CC0-1CCF', '巽他补充'],
  ['1CD0-1CFF', '梵文吠陀扩展'],
  ['1D00-1D7F', '音标扩展'],
  ['1D80-1DBF', '音标扩展补充'],
  ['1DC0-1DFF', '结合附加符号补充'],
  ['1E00-1EFF', '拉丁文扩展附加'],
  ['1F00-1FFF', '希腊字母扩展'],
  ['2000-206F', '常用标点'],
  ['2070-209F', '上标及下标'],
  ['20A0-20CF', '货币符号'],
  ['20D0-20FF', '组合用记号'],
  ['2100-214F', '字母式符号'],
  ['2150-218F', '数字形式'],
  ['2190-21FF', '箭头'],
  ['2200-22FF', '数学运算子'],
  ['2300-23FF', '杂项工业符号'],
  ['2400-243F', '控制图片'],
  ['2440-245F', '光学识别符'],
  ['2460-24FF', '带圈字母和数字'],
  ['2500-257F', '制表符'],
  ['2580-259F', '方块元素'],
  ['25A0-25FF', '几何图形'],
  ['2600-26FF', '杂项符号'],
  ['2700-27BF', '装饰符号'],
  ['27C0-27EF', '杂项数学符号-A'],
  ['27F0-27FF', '追加箭头-A'],
  ['2800-28FF', '盲文点字模型'],
  ['2900-297F', '追加箭头-B'],
  ['2980-29FF', '杂项数学符号-B'],
  ['2A00-2AFF', '追加数学运算子'],
  ['2B00-2BFF', '杂项符号和箭头'],
  ['2C00-2C5F', '格拉哥里字母'],
  ['2C60-2C7F', '拉丁文扩展-C'],
  ['2C80-2CFF', '科普特字母'],
  ['2D00-2D2F', '格鲁吉亚补充'],
  ['2D30-2D7F', '提非纳文'],
  ['2D80-2DDF', '吉兹扩展'],
  ['2DE0-2DFF', '西里尔字母扩展-A'],
  ['2E00-2E7F', '追加标点'],
  ['2E80-2EFF', '中日韩汉字部首补充'],
  ['2F00-2FDF', '康熙部首'],
  ['2FF0-2FFF', '表意文字描述字符'],
  ['3000-303F', '中日韩符号和标点'],
  ['3040-309F', '平假名'],
  ['30A0-30FF', '片假名'],
  ['3100-312F', '注音符号'],
  ['3130-318F', '谚文兼容字母'],
  ['3190-319F', '汉文训读'],
  ['31A0-31BF', '注音符号扩展'],
  ['31C0-31EF', '中日韩笔画'],
  ['31F0-31FF', '片假名拼音扩展'],
  ['3200-32FF', '中日韩围绕字元及月份'],
  ['3300-33FF', '中日韩兼容字元'],
  ['3400-4DBF', '中日韩统一表意文字扩展A'],
  ['4DC0-4DFF', '易经六十四卦符号'],
  ['4E00-9FFF', '中日韩统一表意文字'],
  ['A000-A48F', '彝文音节'],
  ['A490-A4CF', '彝文字根'],
  ['A4D0-A4FF', '老傈僳文'],
  ['A500-A63F', '瓦伊文'],
  ['A640-A69F', '西里尔扩展-B'],
  ['A6A0-A6FF', '巴姆穆文字'],
  ['A700-A71F', '修饰用声调符号'],
  ['A720-A7FF', '拉丁文扩展-D'],
  ['A800-A82F', '锡尔赫特文'],
  ['A830-A83F', '通用印度数字格式'],
  ['A840-A87F', '八思巴字'],
  ['A880-A8DF', '索拉什特拉文'],
  ['A8E0-A8FF', '天城文扩展'],
  ['A900-A92F', '克耶里字母'],
  ['A930-A95F', '勒姜字母'],
  ['A960-A97F', '谚文扩展-A'],
  ['A980-A9DF', '爪哇字母'],
  ['A9E0-A9FF', '缅甸文扩展-B'],
  ['AA00-AA5F', '占语字母'],
  ['AA60-AA7F', '缅甸文扩展-A'],
  ['AA80-AADF', '越南傣文'],
  ['AAE0-AAFF', '曼尼普尔文扩展'],
  ['AB00-AB2F', '吉兹扩展-A'],
  ['AB30-AB6F', '拉丁文扩展-E'],
  ['AB70-ABBF', '切罗基补充'],
  ['ABC0-ABFF', '曼尼普尔文'],
  ['AC00-D7AF', '谚文音节'],
  ['D7B0-D7FF', '谚文扩展-B'],
  ['D800-DB7F', '高半区'],
  ['DB80-DBFF', '高私用区'],
  ['DC00-DFFF', '低私用区'],
  ['E000-F8FF', '私用区'],
  ['F900-FAFF', '中日韩兼容表意文字'],
  ['FB00-FB4F', '字母表达形式'],
  ['FB50-FDFF', '阿拉伯表达形式-A'],
  ['FE00-FE0F', '变体选择符号'],
  ['FE10-FE1F', '竖排形式'],
  ['FE20-FE2F', '组合用半符号'],
  ['FE30-FE4F', '中日韩兼容形式'],
  ['FE50-FFEF', '小写变体形式'],
  ['FF00-FFEF', '半形及全形字元'],
  ['FFF0-FFFF', '特殊'],
];
;

const d = function (a, b, c) {
  let title = a + '-' + b + ': ' + c;
  a = parseInt(a, 16);
  let x = Math.floor(a / 16);
  b = parseInt(b, 16);
  let y = Math.ceil(b / 16);

  let container = document.querySelector('.container');
  let table = document.createElement('table');
  table.setAttribute('class', "w-full min-w-full table-auto text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400");

  let caption = document.createElement('caption');
  caption.setAttribute('class', 'text-sm');
  caption.innerText = title;
  table.appendChild(caption);

  let thead = document.getElementById('ut').getElementsByTagName('thead')[0];
  // let clone = thead.cloneNode(true);
  table.appendChild(thead);

  let tbody = document.createElement('tbody');
  for (let i = x; i < y; i++) {
    let row = tbody.insertRow(-1);
    row.setAttribute("class", "bg-white border-b dark:bg-gray-800 dark:border-gray-700");
    let th = document.createElement("TH");
    th.setAttribute("scope", "row");
    th.setAttribute("class", "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white");
    let k = (i * 16).toString(16).toUpperCase().padStart(4, '0').replace(/0$/, '_');
    th.innerHTML = k;
    row.appendChild(th);
    for (let j = 0; j < 16; j++) {
      let cell = row.insertCell(j + 1);
      cell.setAttribute("class", "px-6 py-4 font-medium");
      let k = i * 16 + j;
      if (k <= 31) {
        cell.innerHTML = s[k];
      } else if (k == 127) {
        cell.innerHTML = 'DEL';
      } else {
        cell.innerHTML = '&#' + k + ';';
      }
    }
  }
  table.appendChild(tbody);
  container.appendChild(table);
}

const e = function (p) {
  for (let i = 0, h = l.length; i < h; i++) {
    let link = '/unicode.html?q=' + l[i][0];
    if (p == 'Q=' + l[i][0]) {
      let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      let a = l[i][0].split('-')[0];
      let b = l[i][0].split('-')[1];
      d(a, b, l[i][1]);
      window.scrollTo(0, scrollHeight - 10);
      continue;
    }
    let container = document.querySelector('.container');
    let div = document.createElement('div');
    div.setAttribute('class', 'mx-auto');
    let a = document.createElement('a');
    a.setAttribute('href', link);
    a.setAttribute('class', 'text-sm')
    a.innerText = l[i][0] + ': ' + l[i][1];
    div.appendChild(a);
    container.appendChild(div);
  }
}
let p = window.location.search.slice(1).toUpperCase();
const match = p.match(/Q=([0-9A-F]+)-([0-9A-F]+)/);

let q = 'Q=0000-007F';
if (match) {
  const a = parseInt(match[1], 16);
  const b = parseInt(match[2], 16);
  if (a >= 0 && b <= 0xFFFF && a < b) {
    q = p;
  }
}

e(q);

const preview = document.getElementById('unicode-preview');

document.querySelectorAll('td').forEach(td => {
  td.addEventListener('mouseenter', (e) => {
    const char = e.target.textContent.trim();
    if (char.length === 1) {
      preview.textContent = char;
      preview.style.display = 'block';
    }
  });

  td.addEventListener('mousemove', (e) => {
    preview.style.left = e.pageX + 12 + 'px';
    preview.style.top = e.pageY + 12 + 'px';
  });

  td.addEventListener('mouseleave', () => {
    preview.style.display = 'none';
  });
});