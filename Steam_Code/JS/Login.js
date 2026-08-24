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
    showLoginError('Please check your password and account name and try again.');
    document.querySelectorAll('.login-form__username-input, .login-form__password-input').forEach((input) => {
      input.classList.add('login-form__input--error');
    });
  }
});

// Hiện thông báo lỗi nằm dưới nút Sign in
function showLoginError(message) {
  let errorBox = document.querySelector('.login-form__error');
  if (!errorBox) {
    errorBox = document.createElement('div');
    errorBox.className = 'login-form__error';
    errorBox.style.cssText = 'color:#c93f3f;font-size:12px;text-align:center;margin:4px 0;';
    document.querySelector('.login-form__submit-container').after(errorBox);
  }
  errorBox.textContent = message;
}

// Người dùng gõ lại thì viền đỏ và thông báo lỗi biến mất
document.querySelectorAll('.login-form__username-input, .login-form__password-input').forEach((input) => {
  input.addEventListener('input', () => {
    input.classList.remove('login-form__input--error');
    const errorBox = document.querySelector('.login-form__error');
    if (errorBox) errorBox.remove();
  });
});
