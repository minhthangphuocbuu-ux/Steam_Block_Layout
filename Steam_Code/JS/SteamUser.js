// ===== Trang User Profile =====

// Helper tạo element nhanh: el('div', 'class-name', 'text')
function el(tagName, className, text = '') {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

// Khóa lưu bình luận trên localStorage (mỗi profile một chuỗi riêng)
const COMMENTS_KEY = 'comments_' + (sessionStorage.getItem('accountId') ?? localStorage.getItem('accountId') ?? '');

// ---------- Đổ thông tin user lên header + banner + sidebar ----------
function renderHeader() {
  const name = user.displayName;

  document.querySelector('.header-nav__page--active').textContent = name;
  document.querySelector('.header-actions__dropbox').textContent = name + ' ▾';
  document.querySelector('.header-actions__avatar').src = user.avatarUrl;

  document.querySelector('.user-avatar__frame img').src = user.avatarUrl;
  document.querySelector('.user-title').textContent = name + ' ▾';
  document.querySelector('.user-level__badge').textContent = user.level;
  document.querySelector('.xp-badge__title').textContent = user.yearsOfService + ' Years of Service';
  document.querySelector('.xp-badge__val').textContent = user.xp + ' XP';
  document.querySelector('.user__profile--redirect').href = 'https://steamcommunity.com/' + user.profileUrl;

  document.querySelector('.user-right__current-status').textContent =
    user.isOnline() ? 'Currently Online' : 'Currently Offline';
  document.querySelector('.user-right__last-status').textContent = user.lastOnline;
  document.querySelector('.user-right__number').textContent = user.badgesCount;

  const gamesCount = document.querySelector('.user-right__title-link span');
  if (gamesCount) gamesCount.textContent = user.gamesCount;
  document.querySelector('.user-right__friend-number').textContent = user.friendsCount;
}

// ---------- Render danh sách game gần đây ----------
function renderGames() {
  const container = document.querySelector('.user__game-container');
  container.innerHTML = '';

  user.games.forEach((game) => {
    const percent = game.achievementsTotal > 0
      ? Math.round((game.achievementsUnlocked / game.achievementsTotal) * 100)
      : 0;

    const card = el('div', 'game-1__container');

    // Header: thumbnail + tên game + giờ chơi
    const header = el('div', 'game__header-container--one');
    const thumb = el('div', 'game-1__thumbnail-frame');
    const img = document.createElement('img');
    img.src = game.imageUrl;
    img.alt = game.name;
    thumb.appendChild(img);

    const info = el('div', 'game-1__info-group');
    const nameLink = el('a', 'game-1__name--redirect', game.name);
    nameLink.href = '#';
    const meta = el('div', 'game-1__meta');
    meta.innerHTML = `${game.hoursOnRecord} hrs on record<br>last played on ${game.lastPlayed}`;
    info.append(nameLink, meta);

    header.append(thumb, info);
    card.appendChild(header);

    // Footer: tiến trình achievement + thanh phần trăm
    const footer = el('div', 'game-1__footer-container');
    const footerLeft = el('div', 'game__footer-subcontainer--left');
    const wrapper = el('div', 'game-1__wrapper');
    const progressLink = el('a', 'game-1__redirect--link', 'Achievement Progress');
    progressLink.href = '#';
    const number = el('span', 'game-1__title-number',
      `${game.achievementsUnlocked} of ${game.achievementsTotal}`);
    wrapper.append(progressLink, number);

    const bar = el('div', 'game-1__progress-bar');
    const fill = el('div', 'game-1__progress-fill');
    fill.style.width = percent + '%';
    bar.appendChild(fill);

    footerLeft.append(wrapper, bar);
    footer.appendChild(footerLeft);

    // Cụm phải: huy hiệu game (game-1__badge) lấy từ seed data
    const footerRight = el('div', 'game__footer-subcontainer--right');
    (game.badges ?? []).forEach((badgeUrl) => {
      const badgeImg = document.createElement('img');
      badgeImg.className = 'game-1__badge';
      badgeImg.src = badgeUrl;
      badgeImg.alt = 'badge';
      footerRight.appendChild(badgeImg);
    });
    footer.appendChild(footerRight);

    card.appendChild(footer);

    container.appendChild(card)
  });
}

// ---------- Render danh sách badges ----------
function renderBadges() {
  const list = document.querySelector('.user-right__badge-list');
  list.innerHTML = '';

  user.badges.forEach((badge) => {
    const img = document.createElement('img');
    img.className = 'user-right__badge';
    img.src = badge.imageUrl;
    img.alt = badge.name;
    img.title = badge.name;
    list.appendChild(img);
  });
}

// ---------- Render danh sách bạn bè ----------
function renderFriends() {
  const wrapper = document.querySelector('.user-right__friend-wrapper');
  wrapper.innerHTML = '';

  user.friends.forEach((friend) => {
    const card = el('div', 'user-right__friend-card');

    const avatar = document.createElement('img');
    avatar.className = 'user-right__friend-avatar';
    avatar.src = friend.avatarUrl;
    avatar.alt = friend.name;

    const info = el('div', 'user-right__friend-info');
    const name = el('div', 'user-right__friend-name', friend.name);
    const status = el('div', 'user-right__friend-status');

    if (friend.status === 'online') {
      name.classList.add('user-right__friend-status--online');
      status.textContent = 'Online';
      status.classList.add('user-right__friend-status--online');
    } else {
      status.textContent = friend.lastOnline;
    }

    info.append(name, status);

    // Viền đỏ khi level >= 10, viền vàng khi level >= 30
    const level = el('div', 'user-right__badge-number', String(friend.level));
    if (friend.level >= 30) level.classList.add('user-right__circle-above-30');
    else if (friend.level >= 10) level.classList.add('user-right__circle-above-10');

    card.append(avatar, info, level);
    wrapper.appendChild(card);
  });
}

// ---------- Comments: lưu vào localStorage ----------
function getComments() {
  try {
    return JSON.parse(localStorage.getItem(COMMENTS_KEY)) ?? [];
  } catch (error) {
    return [];
  }
}

function saveComments(comments) {
  localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments));
}

// Lần đầu mở thì seed vài bình luận mẫu
function seedComments() {
  if (localStorage.getItem(COMMENTS_KEY) !== null) return;
  saveComments([
    {
      author: 'Emo Shaggy',
      avatarUrl: (user.friends[0] && user.friends[0].avatarUrl) || '',
      text: 'Welcome to Steam! 🎮',
      createdAt: Date.now() - 2 * 86400000,
    },
    {
      author: 'Zon Uich',
      avatarUrl: (user.friends[1] && user.friends[1].avatarUrl) || '',
      text: 'Nice profile!',
      createdAt: Date.now() - 86400000,
    },
  ]);
}

function renderComments() {
  let list = document.querySelector('.feed__comment-list');
  if (!list) {
    list = el('div', 'feed__comment-list');
    document.querySelector('.feed__footer-container').before(list);
  }
  list.innerHTML = '';

  const comments = getComments();
  if (comments.length === 0) {
    list.innerHTML = '<div class="feed__comment-empty">Chưa có bình luận nào. Hãy là người đầu tiên!</div>';
    return;
  }

  comments.forEach((comment) => {
    const item = el('div', 'feed__comment-item');

    const avatar = document.createElement('img');
    avatar.className = 'feed__comment-avatar';
    avatar.src = comment.avatarUrl;
    avatar.alt = comment.author;

    const body = el('div', 'feed__comment-body');
    const meta = el('div', 'feed__comment-meta',
      comment.author + ' • ' + new Date(comment.createdAt).toLocaleString('vi-VN'));
    const text = el('div', 'feed__comment-text', comment.text);

    body.append(meta, text);
    item.append(avatar, body);
    list.appendChild(item);
  });
}

// ---------- Khởi chạy ----------
const user = new User();
if (!user.loadUserData()) {
  location.href = 'Login.html'; // chưa đăng nhập thì quay về trang login
} else {
  seedComments();
  renderHeader();
  renderGames();
  renderBadges();
  renderFriends();
  renderComments();
}

// Gắn sự kiện gửi bình luận + seed dữ liệu mẫu (chỉ khi đã đăng nhập)
if (user.accountId) {
  const commentInput = document.querySelector('.feed__comment-space input');
  if (commentInput) {
    commentInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && commentInput.value.trim()) {
        const comments = getComments();
        comments.push({
          author: user.displayName,
          avatarUrl: user.avatarUrl,
          text: commentInput.value.trim(),
          createdAt: Date.now(),
        });
        saveComments(comments);
        commentInput.value = '';
        renderComments();
      }
    });
  }

}
