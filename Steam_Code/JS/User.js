class User extends AUser {
  constructor(userId = '', accountId = '', displayName = '', profile = {}) {
    super();
    this._userId = userId;
    this._accountId = accountId;
    this._displayName = displayName;

    // Thuộc tính mở rộng từ trang Steam-User.html
    this._avatarUrl = profile.avatarUrl ?? '';
    this._profileUrl = profile.profileUrl ?? '';
    this._level = profile.level ?? 0;
    this._xp = profile.xp ?? 0;
    this._yearsOfService = profile.yearsOfService ?? 0;
    this._status = profile.status ?? 'offline';
    this._lastOnline = profile.lastOnline ?? '';
    this._badges = profile.badges ?? [];
    this._games = profile.games ?? [];
    this._friends = profile.friends ?? [];
  }

  get userId() { return this._userId; }
  set userId(value) { this._userId = value; }

  get accountId() { return this._accountId; }
  set accountId(value) { this._accountId = value; }

  get displayName() { return this._displayName; }
  set displayName(value) { this._displayName = value; }

  get avatarUrl() { return this._avatarUrl; }
  set avatarUrl(value) { this._avatarUrl = value; }

  get profileUrl() { return this._profileUrl; }
  set profileUrl(value) { this._profileUrl = value; }

  get level() { return this._level; }
  set level(value) { this._level = value; }

  get xp() { return this._xp; }
  set xp(value) { this._xp = value; }

  get yearsOfService() { return this._yearsOfService; }
  set yearsOfService(value) { this._yearsOfService = value; }

  get status() { return this._status; }
  set status(value) { this._status = value; }

  get lastOnline() { return this._lastOnline; }
  set lastOnline(value) { this._lastOnline = value; }

  get badges() { return this._badges; }
  set badges(value) { this._badges = value; }

  get games() { return this._games; }
  set games(value) { this._games = value; }

  get friends() { return this._friends; }
  set friends(value) { this._friends = value; }

  // Số lượng tự tính từ mảng (tương ứng "Games 7", "Friends 10", "Badges 3" trên trang)
  get badgesCount() { return this._badges.length; }
  get gamesCount() { return this._games.length; }
  get friendsCount() { return this._friends.length; }

  isOnline() {
    return this._status === 'online';
  }

  loadUserData() {
    const storedId = sessionStorage.getItem('accountId') ?? localStorage.getItem('accountId');
    if (storedId === null) return null;

    const record = SEED_USERS.find((u) => u.id === storedId);
    if (!record) return null;

    this._userId = `user-${record.id}`;
    this._accountId = record.id;
    this._displayName = record.displayName;
    this._avatarUrl = record.avatarUrl ?? '';
    this._profileUrl = record.profileUrl ?? '';
    this._level = record.level ?? 0;
    this._xp = record.xp ?? 0;
    this._yearsOfService = record.yearsOfService ?? 0;
    this._status = record.status ?? 'offline';
    this._lastOnline = record.lastOnline ?? '';
    this._badges = record.badges ?? [];
    this._games = record.games ?? [];
    this._friends = record.friends ?? [];

    return record;
  }
}
