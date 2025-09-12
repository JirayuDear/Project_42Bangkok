document.getElementById("menu-toggle")?.addEventListener("click", () => {
  document.getElementById("main-nav").classList.toggle("open");
});

// ปุ่มสุ่มสี
document.getElementById("random-color-btn")?.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.documentElement.style.setProperty("--accent", randomColor);

  // เพิ่ม alpha สำหรับสีเข้ม
  let darkColor = randomColor + "cc";
  document.documentElement.style.setProperty("--accent-dark", darkColor);
});