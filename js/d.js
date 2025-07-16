// 格式化日期时间为 'YYYY-MM-DDTHH:MM:SS'，使用本地时间
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
};

const datetime1 = document.getElementById('datetime1');
const datetime2 = document.getElementById('datetime2');
const dayDifference = document.getElementById('dayDifference');
const timeDifference = document.getElementById('timeDifference');
const calendarDiv = document.getElementById('calendar');

let lastChanged = "datetime1";  // 默认固定开始日期

// 更新最后修改的日期框标记
datetime1.addEventListener('input', () => { lastChanged = "datetime1"; });
datetime2.addEventListener('input', () => { lastChanged = "datetime2"; });

function calculateDifference() {
  if (!datetime1.value || !datetime2.value) {
    dayDifference.value = ""; // 清空天数差值显示
    timeDifference.value = ""; // 清空时间差值显示
    return;
  }
  // 将日期框的值转换为 Date 对象
  const date1 = new Date(datetime1.value);
  const date2 = new Date(datetime2.value);
  // 将日期转化为标准的 UTC 格式来避免时区问题
  const utcDate1 = new Date(Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate(), date1.getHours(), date1.getMinutes(), date1.getSeconds()));
  const utcDate2 = new Date(Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate(), date2.getHours(), date2.getMinutes(), date2.getSeconds()));

  // 计算天数差和时间差
  const dateDifferences = Math.floor((utcDate2 - utcDate1) / (1000 * 60 * 60 * 24));
  const timeDifferenceMs = (utcDate2 - utcDate1) % (1000 * 60 * 60 * 24);

  // 计算小时和分钟差
  const hours = Math.floor(timeDifferenceMs / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifferenceMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifferenceMs % (1000 * 60)) / 1000);

  // 组合输出格式
  dayDifference.value = `${dateDifferences}`;
  timeDifference.value = `${String(Math.abs(hours)).padStart(2, '0')}:${String(Math.abs(minutes)).padStart(2, '0')}:${String(Math.abs(seconds)).padStart(2, '0')}`;

  generateCalendar();
}

// 监听两个日期框的变化事件
datetime1.addEventListener('input', calculateDifference);
datetime2.addEventListener('input', calculateDifference);

function parseDifference() {
  const date1 = new Date(datetime1.value);
  const date2 = new Date(datetime2.value);

  if (dayDifference.value && timeDifference.value) {
    const days = parseInt(dayDifference.value.match(/-?\d+/)[0], 10);
    const [hours, minutes, seconds] = timeDifference.value.split(":").map(Number);

    if (lastChanged === "datetime1") {
      // 固定 datetime1，计算 datetime2
      const newDate = new Date(date1);
      newDate.setDate(newDate.getDate() + days);
      newDate.setHours(newDate.getHours() + hours);
      newDate.setMinutes(newDate.getMinutes() + minutes);
      newDate.setSeconds(newDate.getSeconds() + seconds);
      datetime2.value = formatDate(newDate);
    } else if (lastChanged === "datetime2") {
      // 固定 datetime2，计算 datetime1
      const newDate = new Date(date2);
      newDate.setDate(newDate.getDate() - days);
      newDate.setHours(newDate.getHours() - hours);
      newDate.setMinutes(newDate.getMinutes() - minutes);
      newDate.setSeconds(newDate.getSeconds() - seconds);
      datetime1.value = formatDate(newDate);
    }
  }
  generateCalendar();
}

dayDifference.addEventListener('input', parseDifference);
timeDifference.addEventListener('input', parseDifference);

// 设置第一个日期框为当天，第二个日期框为一个月后
function setInitialDates() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const oneMonthLater = new Date(today);
  oneMonthLater.setMonth(today.getMonth() + 3);

  datetime1.value = formatDate(today);
  datetime2.value = formatDate(oneMonthLater);

  // 更新差值显示
  calculateDifference();
}

setInitialDates();

function getMonthYearString(date) {
  // 获取浏览器的默认语言环境
  const locale = navigator.language || 'en-US';

  // 使用Intl.DateTimeFormat格式化月份和年份
  const formatter = new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long' });
  return formatter.format(date);
}

function generateCalendar() {
  // 清空之前的日历
  calendarDiv.innerHTML = '';

  let startDate = new Date(datetime1.value);
  let endDate = new Date(datetime2.value);

  if (startDate > endDate) {
    [startDate, endDate] = [endDate, startDate];
  }

  const yearDifference = endDate.getFullYear() - startDate.getFullYear();
  const monthDifference = endDate.getMonth() - startDate.getMonth();
  if (yearDifference > 10 || (yearDifference === 10 && monthDifference > 0)) {
    //alert('日期区间不能超过10年。');
    return;
  }

  // 从开始日期到结束日期逐月生成日历
  let currentDate = new Date(startDate);

  let workDays = 0;
  let hasWomenDay = false;
  let hasYouthDay = false;
  let hasArmyDay = false;

  // 获取用户的浏览器语言
  const userLang = navigator.language || navigator.userLanguage;

  // 根据语言设置星期名称
  let dayNames;
  if (userLang.startsWith('zh')) {
    // 中文星期名称
    dayNames = ['日', '一', '二', '三', '四', '五', '六'];
  } else if (userLang.startsWith('es')) {
    // 西班牙语星期名称
    dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  } else if (userLang.startsWith('fr')) {
    // 法语星期名称
    dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
  } else if (userLang.startsWith('de')) {
    // 德语星期名称
    dayNames = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
  } else if (userLang.startsWith('ja')) {
    // 日语星期名称
    dayNames = ['日', '月', '火', '水', '木', '金', '土'];
  } else {
    // 默认英文星期名称
    dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  }

  while (currentDate <= endDate) {
    const monthDiv = document.createElement('div');
    monthDiv.className = 'month';

    //const monthYear = `${currentDate.getFullYear()}年${currentDate.getMonth() + 1}月`;
    const monthYear = getMonthYearString(currentDate);
    const monthHeader = document.createElement('h3');
    monthHeader.textContent = monthYear;
    monthDiv.appendChild(monthHeader);

    // 添加星期的标题行
    const weekdaysDiv = document.createElement('div');
    weekdaysDiv.className = 'weekdays';
    //const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
    dayNames.forEach(day => {
      const dayDiv = document.createElement('div');
      dayDiv.textContent = day;
      weekdaysDiv.appendChild(dayDiv);
    });
    monthDiv.appendChild(weekdaysDiv);

    const daysDiv = document.createElement('div');
    daysDiv.className = 'days';

    // 获取当前月的第一天和最后一天
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    // 填充上一个月的空白
    for (let i = 0; i < firstDay.getDay(); i++) {
      const emptyDay = document.createElement('div');
      emptyDay.className = 'day';
      daysDiv.appendChild(emptyDay);
    }

    // 填充当前月的天数
    for (let day = 1; day <= lastDay.getDate(); day++) {

      const dayDiv = document.createElement('div');
      dayDiv.className = 'day';
      dayDiv.textContent = day;

      // 检查当前日期是否在 startDate 和 endDate 之间
      const currentDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      if (currentDay >= startDate && currentDay <= endDate) {
        let isWorkDay = true;
        let month = currentDay.getMonth(); //一月为0
        dayDiv.classList.add('highlight');
        // 如果是周末（星期六或星期天），添加 'weekend' 类
        if (currentDay.getDay() === 0 || currentDay.getDay() === 6) {
          //dayDiv.classList.add('weekend');
          isWorkDay = false;
        }
        //https://zh.wikipedia.org/wiki/中华人民共和国节日与公众假期
        // 元旦、劳动节
        if ((month === 0 && day === 1) || (month === 4 && day === 1)) {
          isWorkDay = false;
        }
        if (month === 2 && day === 8) {
          hasWomenDay = true;
        }
        if (month === 4 && day === 4) {
          hasYouthDay = true;
        }
        if (month === 7 && day === 1) {
          hasArmyDay = true;
        }
        //国庆
        if (month === 9 && day >= 1 && day <= 3) {
          isWorkDay = false;
        }
        if (isWorkDay) {
          workDays = workDays + 1;
        }
      }

      daysDiv.appendChild(dayDiv);
    }

    monthDiv.appendChild(daysDiv);
    calendarDiv.appendChild(monthDiv);

    // 转到下一个月初
    currentDate.setDate(1);
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  //console.info(workDays);
}