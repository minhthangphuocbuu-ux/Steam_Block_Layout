class Account extends AAccount {
  constructor(accountId = '', username = '', password = '', role = 'member', rememberMe = false) {
    super();
    this._accountId = accountId;
    this._username = username;
    this._password = password;
    this._role = role;
    this._rememberMe = rememberMe;
  }

  get accountId() { return this._accountId; }
  set accountId(value) { this._accountId = value; }

  get username() { return this._username; }
  set username(value) { this._username = value; }

  get password() { return this._password; }
  set password(value) { this._password = value; }

  get role() { return this._role; }
  set role(value) { this._role = value; }

  get rememberMe() { return this._rememberMe; }
  set rememberMe(value) { this._rememberMe = value; }

  // Đọc accountId đang đăng nhập (sessionStorage, hoặc localStorage nếu "Remember me")
  _getStoredAccountId() {
    return sessionStorage.getItem('accountId') ?? localStorage.getItem('accountId');
  }

  login(username, password, rememberMe = false) {
    const user = SEED_USERS.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      return false;
    }

    this._accountId = user.id;
    this._username = user.username;
    this._password = user.password;
    this._role = user.role;
    this._rememberMe = rememberMe;

    // Giả lập session.txt; tick "Remember me" thì lưu lâu dài vào localStorage
    if (rememberMe) {
      localStorage.setItem('accountId', user.id);
      sessionStorage.removeItem('accountId');
    } else {
      sessionStorage.setItem('accountId', user.id);
      localStorage.removeItem('accountId');
    }

    return true;
  }

  isLogin() {
    return this._getStoredAccountId() !== null;
  }

  logout() {
    sessionStorage.removeItem('accountId');
    localStorage.removeItem('accountId');
    this._accountId = '';
    this._rememberMe = false;
  }
}
