let selectedValue = null;
let timer = null;
let startTime = null;

const options = document.querySelectorAll('.option');
const grid = document.getElementById('grid');

// 点击选项时的处理
options.forEach(option => {
  option.addEventListener('click', () => {
    options.forEach(opt => opt.classList.remove('selected'));
    option.classList.add('selected');
    selectedValue = parseInt(option.dataset.value);
    generateGrid(selectedValue);
  });
});

// 生成 n x n 的表格
function generateGrid(n) {
  grid.innerHTML = '';
  grid.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  const cellSize = 50; // 设置单元格的大小
  grid.style.width = `${cellSize * n + (n - 1) * 5}px`; // 计算网格宽度
  grid.style.height = `${cellSize * n + (n - 1) * 5}px`; // 计算网格高度
  for (let i = 1; i <= n * n; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = i;
    cell.style.width = `${cellSize}px`; // 设置单元格宽度
    cell.style.height = `${cellSize}px`; // 设置单元格高度
    grid.appendChild(cell);
  }
}

// 打乱数组
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// 处理空格键
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space' && selectedValue) {
    event.preventDefault();
    const cells = Array.from(grid.children);
    if (!timer) {
      document.getElementById("score").innerText = "已开始";
      // 开始计时
      startTime = new Date();
      timer = setInterval(() => {
        // 计时功能，不需要实际显示
      }, 1000);
      shuffleCells(cells);
    } else {
      // 停止计时并显示耗时
      clearInterval(timer);
      timer = null;
      const endTime = new Date();
      const timeTaken = Math.floor((endTime - startTime) / 1000);
      document.getElementById("score").innerText = `耗时: ${timeTaken}秒`;
      generateGrid(selectedValue);
    }
  }
});

// 打乱表格中的单元格
function shuffleCells(cells) {
  const numbers = cells.map(cell => parseInt(cell.textContent));
  const shuffledNumbers = shuffle(numbers);
  cells.forEach((cell, index) => {
    cell.textContent = shuffledNumbers[index];
  });
}

// 初始化时选中5并生成5x5表格
document.addEventListener('DOMContentLoaded', () => {
  const defaultOption = options[2]; // 选择索引为2的选项（数字5）
  defaultOption.classList.add('selected');
  selectedValue = 5;
  generateGrid(selectedValue);
});