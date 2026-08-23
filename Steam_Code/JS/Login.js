// ===== Trang Login =====

// Bật/tắt checkbox "Remember me" (click cả vào label cũng được)
const rememberBox = document.querySelector('.login-form__remember');
const rememberCheckbox = document.querySelector('.remember-checkbox');
rememberBox.addEventListener('click', () => {
  const checked = rememberCheckbox.classList.toggle('remember-checkbox--checked');
  rememberCheckbox.setAttribute('aria-checked', checked);
});

// Xử lý đăng nhập
document.querySelector('.login-form').addEventListener('submit', (event) => {
  event.preventDefault(); // chặn submit thật lên Steam

  const username = document.getElementById('login-form__username-input').value.trim();
  const password = document.getElementById('login-form__password-input').value.trim();
  const rememberMe = rememberCheckbox.classList.contains('remember-checkbox--checked');

  const account = new Account();
  if (account.login(username, password, rememberMe)) {
    location.href = 'Steam-User.html'; // accountId đã lưu vào storage
  } else {
    showLoginError('Đăng nhập thất bại. Kiểm tra lại tên đăng nhập và mật khẩu.');
  }
});

// Hiện thông báo lỗi (tự tạo, không cần sửa CSS)
function showLoginError(message) {
  let errorBox = document.querySelector('.login-form__error');
  if (!errorBox) {
    errorBox = document.createElement('div');
    errorBox.className = 'login-form__error';
    errorBox.style.cssText = 'color:#c93f3f;font-size:12px;text-align:center;margin:4px 0;';
    document.querySelector('.login-form__submit-container').before(errorBox);
  }
  errorBox.textContent = message;
}
