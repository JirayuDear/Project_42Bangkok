
document.getElementById("random-color-btn")?.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.documentElement.style.setProperty("--accent", randomColor);


  let darkColor = randomColor + "cc";
  document.documentElement.style.setProperty("--accent-dark", darkColor);
});