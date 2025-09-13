// ===== Toggle Dark Mode =====
const toggleBtn = document.getElementById("toggle-dark-mode");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // حفظ الاختيار في localStorage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }
});

// عند تحميل الصفحة: نتحقق من الوضع المحفوظ
window.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️";
  }
});

// ===== AOS Animation =====
AOS.init({
  duration: 1000, // سرعة الأنيميشن
  once: true      // تظهر مرة واحدة فقط
});

// ===== Toggle Menu =====
const menuBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
