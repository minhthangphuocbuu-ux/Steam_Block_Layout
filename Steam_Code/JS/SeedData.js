// Seed data đóng vai trò như database giả lập cho trang web (không có tính năng đăng ký).
// Các trường bắt buộc: id (accountId), username, password, role, displayName.
// Các trường còn lại tương ứng với dữ liệu hiển thị trên trang Steam-User.html.

// Huy hiệu của từng game (tương ứng các img game-1__badge trong HTML tĩnh)
const WALLPAPER_ENGINE_BADGES = [
  'https://shared.akamai.steamstatic.com/community_assets/images/apps/431960/53c2189431308f46ef77d0c5eb1ecac697d703a6.jpg',
  'https://shared.akamai.steamstatic.com/community_assets/images/apps/431960/09f51531c6243518225293fcdc81c8894ba7def6.jpg',
  'https://shared.akamai.steamstatic.com/community_assets/images/apps/431960/4f48b4262e14e6b25f09d7df1e00392b8c65d0f2.jpg',
  'https://shared.akamai.steamstatic.com/community_assets/images/apps/431960/1c2250cab3953159e542b9ff4bd5be9ec75c9f61.jpg',
];
const UMAMUSUME_BADGES = [
  'https://shared.akamai.steamstatic.com/community_assets/images/apps/3224770/0239d87a92fdebb9abc77768b223cb07720bd4d1.jpg',
  'https://shared.akamai.steamstatic.com/community_assets/images/apps/3224770/0239d87a92fdebb9abc77768b223cb07720bd4d1.jpg',
  'https://shared.akamai.steamstatic.com/community_assets/images/apps/3224770/0239d87a92fdebb9abc77768b223cb07720bd4d1.jpg',
  'https://shared.akamai.steamstatic.com/community_assets/images/apps/3224770/0239d87a92fdebb9abc77768b223cb07720bd4d1.jpg',
  'https://shared.akamai.steamstatic.com/community_assets/images/apps/3224770/0239d87a92fdebb9abc77768b223cb07720bd4d1.jpg',
];

const SEED_USERS = [
  {
    id: 'acc-100001',
    username: 'gaben',
    password: 'steam123',
    role: 'admin',
    displayName: 'Gabe Newell',
    avatarUrl: 'https://avatars.akamai.steamstatic.com/86e1885d7676eb983c8d2ad22979c130719298c6_full.jpg',
    profileUrl: 'id/gaben',
    level: 10,
    xp: 1250,
    yearsOfService: 5,
    status: 'online',
    lastOnline: '',
    badges: [
      { name: 'Game Collector', imageUrl: 'https://community.akamai.steamstatic.com/public/images/badges/13_gamecollector/5_80.png?v=4' },
      { name: 'Years of Service', imageUrl: 'https://community.akamai.steamstatic.com/public/images/badges/02_years/steamyears5_80.png' },
      { name: 'Community Leader', imageUrl: 'https://community.cloudflare.steamstatic.com/public/images/badges/01_community/communityleader_80.png' },
    ],
    games: [
      {
        name: 'Wallpaper Engine',
        imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/431960/capsule_184x69.jpg?t=1779452230',
        hoursOnRecord: 15.8,
        lastPlayed: '5 Aug',
        achievementsUnlocked: 4,
        achievementsTotal: 17,
        badges: WALLPAPER_ENGINE_BADGES,
      },
      {
        name: 'Umamusume: Pretty Derby',
        imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3224770/8ec1b9ecbdf9af10a1c21aaf1b2a2f3be58bf097/capsule_184x69.jpg?t=1773306345',
        hoursOnRecord: 31,
        lastPlayed: '26 Jul',
        achievementsUnlocked: 7,
        achievementsTotal: 20,
        badges: UMAMUSUME_BADGES,
      },
    ],
    friends: [
      { name: 'Emo Shaggy', avatarUrl: 'https://avatars.akamai.steamstatic.com/4bb2e86fb0bd57fc5e707f5fc2117e61599b40e8_full.jpg', status: 'offline', lastOnline: '5 hrs, 31 mins ago', level: 39 },
      { name: '멍멍이', avatarUrl: 'https://shared.akamai.steamstatic.com/community_assets/images/items/1329510/f1b3a58047cdc91c0d2b2f8e11b46bb4f6df1764.gif', status: 'online', lastOnline: 'Online', level: 8 },
      { name: 'Zon Uich', avatarUrl: 'https://avatars.akamai.steamstatic.com/6ee40e7748665c2d73ff951ba387f9f439e1ff5c_full.jpg', status: 'online', lastOnline: 'Online', level: 5 },
    ],
  },
  {
    id: 'acc-100002',
    username: 'cswizard',
    password: 'hl2forever',
    role: 'member',
    displayName: 'CS Wizard',
    avatarUrl: 'https://avatars.akamai.steamstatic.com/4bb2e86fb0bd57fc5e707f5fc2117e61599b40e8_full.jpg',
    profileUrl: 'id/cswizard',
    level: 4,
    xp: 250,
    yearsOfService: 5,
    status: 'offline',
    lastOnline: 'Last Online 82 days ago',
    badges: [
      { name: 'Years of Service', imageUrl: 'https://community.akamai.steamstatic.com/public/images/badges/02_years/steamyears5_80.png' },
      { name: 'Community Leader', imageUrl: 'https://community.cloudflare.steamstatic.com/public/images/badges/01_community/communityleader_80.png' },
    ],
    games: [
      {
        name: 'Wallpaper Engine',
        imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/431960/capsule_184x69.jpg?t=1779452230',
        hoursOnRecord: 15.8,
        lastPlayed: '5 Aug',
        achievementsUnlocked: 4,
        achievementsTotal: 17,
        badges: WALLPAPER_ENGINE_BADGES,
      },
    ],
    friends: [
      { name: 'Emo Shaggy', avatarUrl: 'https://avatars.akamai.steamstatic.com/4bb2e86fb0bd57fc5e707f5fc2117e61599b40e8_full.jpg', status: 'offline', lastOnline: '5 hrs, 31 mins ago', level: 39 },
      { name: 'Tori', avatarUrl: 'https://avatars.akamai.steamstatic.com/6341c9710276263ca9e9bfbaeeba2fca75d3cc1f_full.jpg', status: 'offline', lastOnline: 'Last Online 3 days ago', level: 10 },
      { name: 'dukcc', avatarUrl: 'https://avatars.akamai.steamstatic.com/db062cd23e13aa95a02bf25c476902ee4ba91a6d_full.jpg', status: 'offline', lastOnline: 'Last Online 3 days ago', level: 12 },
    ],
  },
  {
    id: 'acc-100003',
    username: 'doomfan',
    password: 'ripandtear',
    role: 'member',
    displayName: 'Doom Fan',
    avatarUrl: 'https://avatars.akamai.steamstatic.com/6341c9710276263ca9e9bfbaeeba2fca75d3cc1f_full.jpg',
    profileUrl: 'id/doomfan',
    level: 7,
    xp: 640,
    yearsOfService: 3,
    status: 'online',
    lastOnline: '',
    badges: [
      { name: 'Game Collector', imageUrl: 'https://community.akamai.steamstatic.com/public/images/badges/13_gamecollector/5_80.png?v=4' },
      { name: 'Years of Service', imageUrl: 'https://community.akamai.steamstatic.com/public/images/badges/02_years/steamyears5_80.png' },
    ],
    games: [
      {
        name: 'Umamusume: Pretty Derby',
        imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3224770/8ec1b9ecbdf9af10a1c21aaf1b2a2f3be58bf097/capsule_184x69.jpg?t=1773306345',
        hoursOnRecord: 31,
        lastPlayed: '26 Jul',
        achievementsUnlocked: 7,
        achievementsTotal: 20,
        badges: UMAMUSUME_BADGES,
      },
    ],
    friends: [
      { name: 'Soldier who yells at 2fort tire', avatarUrl: 'https://avatars.akamai.steamstatic.com/157166555d7b1d430002e50a7785d07396adb6b1_full.jpg', status: 'offline', lastOnline: 'Last Online 3 days ago', level: 9 },
      { name: 'dukcc', avatarUrl: 'https://avatars.akamai.steamstatic.com/db062cd23e13aa95a02bf25c476902ee4ba91a6d_full.jpg', status: 'offline', lastOnline: 'Last Online 3 days ago', level: 12 },
    ],
  },
  {
    id: 'acc-100004',
    username: 'pcmaster',
    password: 'framerate',
    role: 'member',
    displayName: 'PC Master Race',
    avatarUrl: 'https://avatars.akamai.steamstatic.com/6ee40e7748665c2d73ff951ba387f9f439e1ff5c_full.jpg',
    profileUrl: 'id/pcmaster',
    level: 12,
    xp: 1900,
    yearsOfService: 8,
    status: 'offline',
    lastOnline: 'Last Online 1 week ago',
    badges: [
      { name: 'Years of Service', imageUrl: 'https://community.akamai.steamstatic.com/public/images/badges/02_years/steamyears5_80.png' },
      { name: 'Game Collector', imageUrl: 'https://community.akamai.steamstatic.com/public/images/badges/13_gamecollector/5_80.png?v=4' },
    ],
    games: [
      {
        name: 'Wallpaper Engine',
        imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/431960/capsule_184x69.jpg?t=1779452230',
        hoursOnRecord: 8.2,
        lastPlayed: '2 Aug',
        achievementsUnlocked: 1,
        achievementsTotal: 17,
        badges: WALLPAPER_ENGINE_BADGES,
      },
    ],
    friends: [
      { name: 'Tori', avatarUrl: 'https://avatars.akamai.steamstatic.com/6341c9710276263ca9e9bfbaeeba2fca75d3cc1f_full.jpg', status: 'offline', lastOnline: 'Last Online 3 days ago', level: 10 },
      { name: 'Zon Uich', avatarUrl: 'https://avatars.akamai.steamstatic.com/6ee40e7748665c2d73ff951ba387f9f439e1ff5c_full.jpg', status: 'online', lastOnline: 'Online', level: 5 },
      { name: '멍멍이', avatarUrl: 'https://shared.akamai.steamstatic.com/community_assets/images/items/1329510/f1b3a58047cdc91c0d2b2f8e11b46bb4f6df1764.gif', status: 'online', lastOnline: 'Online', level: 8 },
    ],
  },
];
