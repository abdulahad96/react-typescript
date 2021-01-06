/* eslint-disable max-len */


export const landingStrings = {
  createAccount: 'Create account',
  eula: 'EULA',
  helpAndContact: 'Help & Contact Us',
  privacyPolicy: 'Privacy Policy',
  seeAllGames: 'See all games',
  signIn: 'Sign in',
  termsAndConditions: 'Terms & Conditions',
  playForFree: 'Play for free'
};

export const common = {
  loadMore: 'Load More'
};

export const createAccountStrings = {
  alreadyMember: 'Already a member?',
  and: 'and',
  chooseYourUsername: 'Choose your username...',
  continueWithGoogle: 'Continue with Google',
  completeAccount: 'Complete account',
  continueWithApple: 'Continue with Apple',
  continueWithFacebook: 'Continue with Facebook',
  iAgreeTo: 'I agree to the',
  nameTaken: 'This name is already taken! Please try another',
  nickNameTooLong: 'Nickname must be less than 13 characters'
};

export const signInStrings = {
  notUser: 'Not a user?',
  signInWithApple: 'Sign in with Apple',
  signInWithFacebook: 'Sign in with Facebook',
  signInWithGoogle: 'Sign in with Google'
};

export const gamePlayStrings = {
  buyTokens: 'Buy Tokens',
  errorMessage: "Looks like this game isn't active right now. Try one of our other games.",
  getReady: 'Get ready!',
  live: 'Live',
  playing: 'Playing'
};

export const gameRoomStrings = {
  backToGameRoom: 'Back to Game Room',
  becomeVip: 'Become a VIP',
  free: 'FREE!',
  gameRoom: 'Game Room',
  inUse: 'In use',
  lastWin: 'Last win:',
  logOut: 'Log Out',
  open: 'Open',
  orWin: 'or win',
  play: 'Play',
  tickets: 'tickets!',
  vip: 'VIP',
  SwipePrize: 'Swipe to select a category',
  bottomSearchPlaceHolder: 'Search game type or prize type...',
};

export const accountProfileStrings = {
  guest: 'Guest',
  awesome: 'Awesome!',
  changePhoto: 'Change Photo',
  emptyLeaderboardMessage: 'Keep playing while we update the leaderboard!',
  fillYourVault: 'Fill your vault by winning some prizes!',
  freeTokensLevelUp: (number: any) => `Free ${number} tokens on level up`,
  history: 'History',
  lastUpdated: (time: any) => `Last updated: ${time} ago`,
  leaderboard: 'Leaderboard',
  maxLevelReached: 'Max level reached!',
  myPrizes: 'My Prizes',
  music: 'Music',
  freeTokensVipLevel: 'Free tokens on level up',
  TokenPurchasebonusVipLevel: "Token Purchase % Bonus",
  TicketBonusVipLevel: "Ticket Conversion Bonus",
  payment: 'Payment',
  pointsAwayFromLevel: (points: any, level: any) => `Only ${points} away from level ${level}`,
  prizeVault: 'Prize Vault',
  sfx: 'SFX',
  shipping: 'Shipping',
  subscriptions: 'Subscriptions',
  ticketConversionBonus: (percent: any) => `Ticket conversion ${percent}% bonus`,
  tokenPurchaseBonus: (percent: any) => `Token purchase ${percent}% bonus`,
  viewAll: 'View all',
  viewFullBoard: 'View full board',
  viewGames: 'View games',
  vip: 'VIP',
  weekly: 'Weekly',
  winnersCircle: "Winner's Circle",
  redeem: 'Redeem',
  cancel: 'Cancel'
};
export const newsRoomStrings = {
  readMore: 'Read More',
  hide: 'Hide',
  news: 'News',
  latest: "Latest",
  old: 'Old',
  expired: 'Expired'

};

export const gameResultScreenStrings = {
  betterLuckNextTime: 'Better luck next time.',
  inLine: 'in line',
  pickYourReward: 'Pick your reward:',
  playAgain: 'Play again',
  prizeWaitingInVault: 'Your prize will be waiting in your prize vault!',
  soClose: 'So close!',
  takePrizeAndFindNewGame: 'Take prize and find a new game',
  takeTicketsAndFindNewGame: 'Take tickets and find a new game',
  tryAgainForAnotherChance: 'Try again for another chance to win!',
  youDidntWinThisTime: "You didn't win... this time"
};

export const popUpStrings = {
  tokenRefillDeal: 'TOKEN REFILL DEAL!',
  purchasePrompt: (tokens: any) => `You're running low on tokens. Buy a quick refill pack right now and get ${tokens} FREE tokens!`,
  takeMeToGameRoom: 'Take me to Game Room',
  referringRewardOne: (tokens: any) => `You've earned ${tokens} free tokens!`,
  referringRewardTwo: 'Thank You for inviting friends',
  referringRewardThree: 'Be sure to thank your friend!',
  referringRewardFour: 'Want to earn more free tokens?',
  referringRewardFive: 'Start referring friends now!',
  referFriendsNow: 'Refer Friends Now!',
  referMoreFriends: 'Refer More Friends!',
  CONGRATS: 'CONGRATS!',
  referAFriend: 'Refer A Friend',
  facebook: 'facebook',
  twitter: 'twitter',
  email: 'Email',
  more: 'More',
  sms: 'SMS',
  youveEarnedTokens: (tokens: any) => `You've earned ${tokens} tokens!`,
  lineOneDailyBonus: (days: number) => `Your login streak is ${days} ${days > 1 ? 'days.' : 'day.'} Come`,
  lineTwoDailyBonus: 'back tomorrow to extend your',
  lineThreeDailyBonus: 'streak and earn more tokens!',
  gotIt: 'Got it!',
  Buy: 'Buy',
  addTokensWithExclamationMark: 'Add Tokens!',
  backToGameRoom: 'Back to Game Room',
  noThanksWithExclamationMark: 'No Thanks!',
  piggyBank: 'Piggy Bank',
  HeadingOnePiggyBankAddToken: (tokens: any) => `You have ${tokens} tokens!`,
  lineOnePiggyBankAddToken: 'Unlock your piggy bank tokens at',
  lineTwoPiggyBankAddToken: 'anytime. Tokens are added every',
  lineThreePiggyBankAddToken: 'your bank is full and get an',
  lineFourPiggyBankAddToken: (tokens: any) => `additional ${tokens} tokens!`,
  lineFivePiggyBankAddToken: (tokens: number) => tokens > 0 ? `Only ${tokens} tokens away from full!` : `Your bank is full!`,
  lineSixPiggyBankAddToken: 'time you play. The more you play',
  lineSevenPiggyBankAddToken: 'the better the savings!',
  lineOnePiggyBank: 'Unlock your Piggy Bank and receive',
  lineTwoPiggyBank: (numberOfTokens: any) => `${numberOfTokens}% tokens back for every play.`,
  Unlock: (price: any) => `Unlock for ${price}`,
  price: 'Price',
  noThankLowerCase: 'No thanks!',
  noThanks: 'No Thanks!',
  dealOfTheDayTextOne: (token: any) => `Get ${token} tokens right`,
  dealOfTheDayTextTwo: (price: any) => `now for only ${price}`,
  dealOfTheDayTextThree: (tokens: any) => `That's an extra ${tokens}`,
  dealOfTheDayTextFour: `free tokens!`,
  referFriendOne: 'Refer friends and earn free tokens!',
  referFriendTwo: `For every friend you refer, you'll get`,
  referFriendThree: 'free tokens and your',
  referFriendFour: `friend will too!`,
  awesome: 'Awesome!',
  achievementUnlockedOne: (points: any) => `You unlocked an achievement and earned ${points} points.`,
  achievementUnlockedMultiple: (points: any) => `${points} points have been added to your account.`,
  rewardTxt: 'You have been rewarded',
  rewardTokenTxt: (tokens: any) => ` ${tokens}`,
  freeTokenTxt: ' free tokens.',
  // eslint-disable-next-line max-len
  claimedMessageTwo: (day: number, tokens: any) => `Your login streak is ${day} ${day === 1 ? 'day' : 'days'}, and ${tokens} tokens have been added to your account.`,
  claimedMessageThree: `Come back tomorrow to receive more free tokens!`,
  claimedMessageOne: 'Congrats on earning your daily bonus!',
  claimsyourtokennow: 'Claim your tokens now!',
  dailyBonus: 'Daily Bonus!',
  freeTokenAward: (tokens: any) => `You have been awarded ${tokens} free tokens!`,
  stackEmReward: (tokens: any, games: any) => `You have earned ${tokens} Stack Em tokens for winning ${games} games!`,
  minPiggybank: (minToken: any) => `For unlock your Piggy Bank you should have minimum ${minToken} tokens in your account.`,
  newAccountBonus: 'Bonus',
  newAccountBonusMessage: 'Create an account today and',
  newAccountTokenBonusMessage: (tokens: any) => `Get ${tokens} FREE tokens!`,
  claim: 'Claim',
  notificationButtonText: 'Enable',
  enableNotifications: 'Enable Notifications',
  enableNotificationsMessage:
    'You will recieve our latest specials, personalized offer, new prize announcements, and so much more!',
  areYouSure: 'Are you sure?',
  mayBeLater: 'Maybe Later',
  backToMyPrizes: 'Back to my Prizes',
  becomeVip: 'Become A VIP',
  buyTokens: `Buy tokens`,
  buyTokensMessage: 'Buy any token pack to play any machine and get free shipping!',
  buyTokenToContinuePlay: 'Buy more tokens from the store to continue playing',
  cancel: 'Cancel',
  cancelAndKeepPrize: 'Cancel and keep prize',
  cancelAndSaveForLater: 'Cancel and save for later',
  createAccountToHoldYourPrizes: 'Create an account to hold your prizes, collect tickets, and keep playing!',
  chooseAnother: 'Choose another',
  congratulations: 'congratulations!',
  contactSupport: 'Contact support',
  dontWantToShip: "I don't want to ship my prize yet",
  freeShipping: 'Free Shipping!',
  forTickets: 'for tickets?',
  gameNotActive: "Looks like this game isn't active right now.",
  givingUp: 'Giving Up?',
  goBack: 'Go back',
  getReadyForYourPrize: 'Get ready for your prize!',
  goToGameRoom: 'Go to Game Room',
  goToStore: 'Go to store',
  info: 'Info',
  ok: 'OK',
  leaveAndRefund: "If you leave now we'll refund you, but you'll lose your spot in line.",
  leaveAndForfeit: "If you leave now you'll forfeit and lose your spot in line.",
  leavingSoSoon: 'Leaving so soon?',
  leaveInQueue: "If you leave now, you'll lose your spot in line.",
  locationError: 'Location error',
  locationCannotIdentified: 'Sorry, we cannot identify your current location which is required to meet regulations.',
  networkError: 'Network Error',
  // eslint-disable-next-line max-len
  networkErrorBody: `To keep playing, please check your internet connection and try again. \n\nAccess to Winner Winner may be restricted until your connection is established.`,
  noPlayHistory: 'No Play History',
  noPlayHistoryMessage: "You haven't played any games yet. Head to the Game Room to start playing!",
  outOfToken: 'Out of tokens',
  oops: 'Oops',
  oopsWithExclaimination: 'Oops!',
  pleaseContactSupport: 'Please contact support.',
  pleaseContactSupportForDetails: 'Please contact support for more details',
  regionNotSupported: 'Sorry, your current region does not allow you to play these games.',
  ship: 'Ship',
  shippingNotAvailableState: 'Shipping is not available in this state.',
  shipNow: 'Ship now',
  success: 'Success!',
  swapForNumberTickets: (number: any) => `Swap for ${number} tickets`,
  swap: 'Swap',
  unavailable: 'Unavailable',
  unlockedAchievements: (number: any) => `You unlocked ${number} achievements!`,
  unsupportedRegion: 'Unsupported region',
  wow: 'wow',
  xPoints: (points: any) => `x${points}`,
  videoUnavailableText: 'Sorry, this video replay is unavailable.',
  viewAchievements: 'View achievements',
  viewTokenPacks: 'View token packs',
  yesLeave: 'Yes, leave',
  willGet: 'You Will',
  getText: 'Get',
  ticketsValueText: (tickets: any) => ` ${tickets} tickets`,
  plusText: ' plus',
  extraTicketText: (extraTickets: any) => ` ${extraTickets} extra tickets`,
  forVipLevel: ' for your VIP level',
  lineOnePurchasePrompt: `Looks like you're almost out of tokens,`,
  lineTwoPurchasePrompt: `but we've got you covered! Get`,
  lineThreePurchasePrompt: (tokens: any) => `${tokens} FREE TOKENS`,
  lineFourPurchasePrompt: `with a quick refill pack now!`
};

export const achievementsString = {
  achievements: 'Achievements',
  comeBack: 'Come back tomorrow!',
  earnedTimeStamp: (date: any) => `Earned ${date}`,
  oneMoreTicketNeeded: `1 more ticket needed!`,
  oneMoreWinNeeded: `1 more win needed!`,
  playAgain: 'Play again tomorrow!',
  ticketsNeeded: (number: any) => `${number} more tickets needed!`,
  winsNeeded: (number: any) => `${number} more wins needed!`
};

export const gameCardReloadStrings = {
  applied: 'applied!',
  bestValue: 'BEST VALUE!',
  buyPrice: (price: any) => `Buy ${price}`,
  buyTokenUnit: (token: any, unit: any) => `Buy ${token}${unit}`,
  code: 'Code',
  congratulations: 'Congratulations!',
  enterCouponCode: 'Enter your coupon code here...',
  inValidCode: 'Invalid code. Please try another.',
  isAlreadyApplied: 'is already applied',
  monthlyDiscount: 'Monthly token deposit at a great discount.',
  monthlyTokens: 'Monthly Tokens',
  packs: 'Tokens',
  TokenPacks: 'Token Store',
  bonuses: 'Bonuses',
  popular: 'POPULAR',
  dailyBonus: 'DAILY BONUS',
  referAFreind: 'REFER A FRIEND',
  piggyBank: 'PIGGY BANK',
  stackEm: "STACK 'EM",
  inviteAFriendDetail: 'Invite your friends to play and you’ll both get 500 free tokens!',
  piggyBankDetail: 'Unlock your Piggy Bank now!',
  claim: 'Claim',
  invite: 'Invite',
  stackEmDetail: (maxGames: any, token: any) => `Win ${maxGames} games and get ${token} tokens.`,
  vipBonus: (percentage: any) => `VIP Bonus: ${percentage}%`,
  restorePurchases: 'Restore purchases',
  restoreSuccessful: 'Restore Successful',
  restoreSuccessfulMessage: 'You successfully restored your purchases',
  sale: 'Sale!',
  subscriptionPack: 'Subscription Pack',
  subscriptionBonus: (percentage: any) =>
    // eslint-disable-next-line max-len
    `All subscriptions include a ${percentage}% token purchase bonus, where you get additional tokens on purchasing any token pack.`,
  subscriptionIncludes: 'Every subscription includes:',
  subscriptions: 'Subscriptions',
  subscriptionTerms:
    // eslint-disable-next-line max-len
    `Payment will be charged to your Google Play/Apple ID account at the confirmation of purchase. Subscription automatically renews unless it is cancelled at least 24 hours before the end of the current period.`,
  tokenStore: 'token store',
  tokensToday: 'Tokens Today',
  tokenPurchaseBonus: (amount: any, bonusAmount: any) => `If you buy ${amount} tokens you will get ${bonusAmount} tokens.`,
  unitTokens: (unit: any) => `${unit} tokens`,
  unitTokenTotal: (unit: any) => `${unit} token total:`,
  vipStatus: 'VIP status includes free shipping and access to VIP exclusive games!',
  youAreVIPAnnouncement: "You're a VIP! You'll now get free shipping and access to VIP games!",
  BaseToken: "Base Tokens",
  BonusToken: "Your Bonus",
  BonusText: (amount: any) => `${amount} Tokens`,
  TotalToken: "Total:"
};

export const winnersCircleStrings = {
  timesOne: 'x1',
  timesNumber: (number: any) => `x${number}`,
  popular: 'Popular',
  redeem: 'Redeem',
  redeemFor: 'Redeem for',
  redeemForTickets: (title: any, value: any) => `Redeem ${title} for ${value} tickets?`
};

export const prizeVaultStrings = {
  allPrizes: 'All prizes',
  new: 'New',
  packed: 'Packed',
  packingUp: 'Packing up',
  pending: 'Pending',
  shipped: 'Shipped',
  shipNow: 'Ship now',
  swapped: 'Swapped',
  swapFor: 'Swap for',
  numberTickets: (number: any) => `${number} tickets`,
  redeemed: 'Redeemed',
  won: 'Won'
};

export const commonStrings = {
  available: 'Available:',
  all: 'All',
  allTickets: 'All Tickets',
  cancel: 'Cancel',
  close: 'Close',
  done: 'Done',
  error: 'Error',
  // eslint-disable-next-line max-len
  noData: 'There are currently no available prizes to play for in this category.  You can visit the Winner’s Circle to view prizes available for ticket redemption, or find more games in the game room.',
  loading: 'Loading',
  next: 'Next',
  ok: 'Ok',
  skip: 'Skip',
  sortBy: 'Sort By',
  sortingCategory: 'Categories',
  sortingTicketCost: 'Ticket Cost',
  day: 'Day'
};

export const playHistoryStrings = {
  playHistory: 'Play History',
  tokens: 'Tokens',
  reportIssue: 'Report issue',
  videoShareMessage:
    // eslint-disable-next-line max-len
    'I’m playing real claw machines and winning real prizes on my phone. Check out these awesome games from Winner Winner. https://bit.ly/2WEi5bO'
};

export const shippingStrings = {
  city: 'City',
  cityPlaceholder: 'E.G. New York',
  contactInformation: 'Contact information',
  email: 'Email',
  emailPlaceholder: 'E.G. winner@winner.com',
  firstName: 'First name',
  firstNamePlaceholder: 'E.G. John',
  fillOutForm: 'Fill out the form to ship your prize!',
  lastName: 'Last name',
  lastNamePlaceholder: 'E.G. Smith',
  oopsCorrectErrors: 'Oops! Correct the errors',
  phone: 'Phone',
  phonePlaceholder: '(---)--- ----',
  shipping: 'Shipping',
  shippingAddress: 'Shipping address',
  state: 'State',
  statePlaceholder: 'E.G. New York',
  streetAddress: 'Street address',
  streetAddressPlaceholder: 'E.G. 1st Ave',
  streetAddress2: 'Street address 2',
  streetAddress2Placeholder: 'E.G. Apt #',
  submitShip: 'Submit and ship',
  yourPrizeAwaits: 'Your prize awaits!',
  zipCode: 'Zip code',
  zipCodePlaceholder: 'E.G. 90210'
};

export const stateStrings = {
  alabama: 'Alabama',
  alaska: 'Alaska',
  arizona: 'Arizona',
  arkansas: 'Arkansas',
  california: 'California',
  colorado: 'Colorado',
  connecticut: 'Connecticut',
  delaware: 'Delaware',
  florida: 'Florida',
  georgia: 'Georgia',
  guam: 'Guam',
  hawaii: 'Hawaii',
  idaho: 'Idaho',
  illinois: 'Illinois',
  indiana: 'Indiana',
  iowa: 'Iowa',
  kansas: 'Kansas',
  kentucky: 'Kentucky',
  louisiana: 'Louisiana',
  maine: 'Maine',
  maryland: 'Maryland',
  massachusetts: 'Massachusetts',
  michigan: 'Michigan',
  minnesota: 'Minnesota',
  mississippi: 'Mississippi',
  missouri: 'Missouri',
  montana: 'Montana',
  nebraska: 'Nebraska',
  nevada: 'Nevada',
  newHampshire: 'New Hampshire',
  newJersey: 'New Jersey',
  newMexico: 'New Mexico',
  newYork: 'New York',
  northCarolina: 'North Carolina',
  northDakota: 'North Dakota',
  ohio: 'Ohio',
  oklahoma: 'Oklahoma',
  oregon: 'Oregon',
  pennsylvania: 'Pennsylvania',
  puertoRico: 'Puerto Rico',
  rhodeIsland: 'Rhode Island',
  southCarolina: 'South Carolina',
  southDakota: 'South Dakota',
  tennessee: 'Tennessee',
  texas: 'Texas',
  utah: 'Utah',
  vermont: 'Vermont',
  virginia: 'Virginia',
  washington: 'Washington',
  westVirginia: 'West Virginia',
  wisconsin: 'Wisconsin',
  wyoming: 'Wyoming'
};

export const reportIssueStrings = {
  dateOfPlay: 'Date of Play',
  lose: 'lose',
  prizeName: 'Prize Name',
  playerName: 'Player Name',
  playerId: 'Player ID',
  status: 'Status',
  timeOfPlay: 'Time of Play',
  gamePlayVideo: 'Gameplay Video',
  gameRoundId: 'Game Round ID',
  subject: 'Report Issue',
  videoNotAvailable: 'Video Not Available',
  win: 'Win',
  machineId: 'Machine ID',
  tokensCost: 'Tokens Cost'
};

export const onboardingStrings = {
  becomeVip: 'Become a VIP',
  earnBetterPrizes: 'Earn bigger and better prizes',
  exclusiveGames: 'Get access to exclusive games',
  findOutOffers: 'Find out about new prizes, games, and special offers!',
  freeShipping: 'Get free shipping on all prizes',
  getNews: 'Get news',
  notifyMe: 'Notify me',
  playRealGames: 'Play real arcade games on your device',
  prizesEveryWin: 'Get a prize for every win, or convert to tickets and save up for a premium prize!',
  watchWhileWaiting: 'Watch others play while you wait',
  welcome: 'Welcome!',
  winRealPrizes: 'Win real prizes',
  winRealPrizesMailedDirect: 'Win real prizes, mailed direct to you'
};

export const leaderboardStrings = {
  lastWon: 'Last won',
  leaderboard: 'Leaderboard',
  totalWins: (wins: any) => `Total wins: ${wins}`,
  viewMachine: 'View machine'
};
