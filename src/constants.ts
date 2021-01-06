/* istanbul ignore file */
// import Config from 'react-native-config';

// const { WW_API, ZENDESK_BASE_URL } = Config;
export const APP_URL_SCHEME = 'winnerwinnerapp://';


export const CHANNELS = {
  more: 'nativeshare',
  facebook: 'facebook',
  email: 'email',
  twitter: 'twitter',
  sms: 'sms'
};

export const PRODUCTS_ID = {
  refillBasic:'ww_beta_token_pack_refill_basic',
  refillStarter:'ww_beta_token_pack_refill_starter'
}

export const SCREENS = {
  ACCOUNT_PROFILE: 'ACCOUNT_PROFILE',
  ACHIEVEMENTS: 'ACHIEVEMENTS',
  APP_WEB_VIEW: 'APP_WEB_VIEW',
  CREATE_ACCOUNT: 'CREATE_ACCOUNT',
  GAME_CARD_RELOAD: 'GAME_CARD_RELOAD',
  GAME_PLAY: 'GAME_PLAY',
  GAME_ROOM: 'GAME_ROOM',
  LANDING_PAGE: 'LANDING_PAGE',
  LEADERBOARD: 'LEADERBOARD',
  PLAY_HISTORY: 'PLAY_HISTORY',
  PRIZE_VAULT: 'PRIZE_VAULT',
  SHIPPING: 'SHIPPING',
  SIGN_IN: 'SIGN_IN',
  WINNERS_CIRCLE: 'WINNERS_CIRCLE',
  NEWS_ROOM :'NEWS_ROOM'
};

export const HEADER = {
  Request_Origin: 'request-origin'
}

export const AUTH0_CONNECTIONS = {
  // TODO: correct apple connection code when apple account is set up
  APPLE: 'apple',
  FACEBOOK: 'facebook',
  GOOGLE: 'google-oauth2'
};

export const WW_BANNER_API_LOCATIONS = {
  GAME_ROOM: 'gameroom',
  TOKEN_STORE: 'tokenstore'
};

// export const WW_API_ENDPOINTS = {
//   UNLOCK_PIGGY_BANK: `${WW_API}/PiggyBank/UnlockPiggyBank`,
//   CHECK_PIGGY_BANK: `${WW_API}/PiggyBank/CheckPiggyBank`,
//   CHECK_DEAL_OF_THE_DAY: `${WW_API}/DealOfDay/CheckDealOfDay`,
//   GRANT_FREE_TOKENS: `${WW_API}/TokenGrant/CheckTokenGrant`,
//   AVAIL_FREE_TOKENS: (tokenGrantId: any) => `${WW_API}/TokenGrant/AvailTokenGrant?tokenGrantId=${tokenGrantId}`,
//   UPDATE_DAILY_REWARDS: `${WW_API}/PlayerDailyRewards/UpdateDailyRewards`,
//   CLAIM_DAILY_REWARDS: `${WW_API}/PlayerDailyRewards/ClaimDailyRewards`,
//   ACTIVE_PLAYER: `${WW_API}/me/achievements/ActivePlayer`,
//   BONUS_SCREEN: `${WW_API}/Me/GetBonusScreenValues`,
//   ADD_STACK_EM: `${WW_API}/StackEm/AddStackEmTokens`,
//   BANNER: (location: any) => `${WW_API}/banner/location/${location}`,
//   CUSTOMER_IO_TRACKING: (event: any, id: any) => `${WW_API}/customerio/${event}/${id}`,
//   CUSTOMER_IO_NOTIFICATION_TRACKING: `${WW_API}/CustomerIo/PushNotificationOpened`,
//   DEVICES: `${WW_API}/devices`,
//   ADD_REFERRAL_TOKENS: (tokens: any) =>`${WW_API}/me/AddReferralTokens?tokens=${tokens}`,
//   GAME_ROOM: `${WW_API}/Machines`,
//   MACHINE_DETAILS: (machineId: any, prizeId: any) => `${WW_API}/Machines/${machineId}/${prizeId}`,
//   GAME_ROUNDS: (machineId: any, prizeId: any) => `${WW_API}/GameRounds?machineId=${machineId}&prizeId=${prizeId}`,
//   IAP_TRANSACTION: `${WW_API}/IAPTransaction`,
//   IAP_TRANSACTION_ANDROID: `${WW_API}/IAPTransaction/AndroidIAP`,
//   LEADERBOARD_WEEKLY: `${WW_API}/leaderboard/weekly`,
//   MACHINE_VIEWER: (machineId: any) => `${WW_API}/machines/${machineId}/viewers`,
//   ME_DETAILS: `${WW_API}/me/details`,
//   ME: `${WW_API}/me`,
//   ME_WITH_INCENTIVIZE: (isIncentivize: any) => `${WW_API}/me?isIncentivize=${isIncentivize}`,
//   POINTS: `${WW_API}/me/points`,
//   PLAYER_HISTORY: (pageNumber: any, pageSize: any) => `${WW_API}/me/gamerounds?pageNumber=${pageNumber}&pageSize=${pageSize}`,
//   PRIZE_VAULT: (pageNumber: any, pageSize: any) => `${WW_API}/me/prizevault?pageNumber=${pageNumber}&pageSize=${pageSize}`,
//   PROMO_CODE: `${WW_API}/promocodes/verify`,
//   GET_COUPON_CODE_ENABLE_DISABLE: `${WW_API}/me/GetCouponCodeEnableDisable`,
//   REDEEM_TICKETS: (PRIZE_ID: any) => `${WW_API}/me/prizes/${PRIZE_ID}/redeem`,
//   SUBSCRIPTION_PACKS: `${WW_API}/SubscriptionPack`,
//   SWAP_TICKETS: (PLAYER_PRIZE_ID: any, SOURCE: any) => `${WW_API}/me/playerprizes/${PLAYER_PRIZE_ID}/swap?source=${SOURCE}`,
//   SHIP_PRIZE: (PLAYER_PRIZE_ID: any) => `${WW_API}/me/playerprizes/${PLAYER_PRIZE_ID}/ship`,
//   TOKEN_PACKS: `${WW_API}/tokenpacks`,
//   TOKEN: `${WW_API}/token`,
//   VERIFY_GEO_RESTRICTION: (PLAYER_PRIZE_ID: any) => `${WW_API}/me/PlayerPrizes/${PLAYER_PRIZE_ID}/ship/VerifyGeoRestrictions`,
//   VIDEO_SHARE_ACHIEVEMENT: `${WW_API}/me/achievements/SocialShare`,
//   WINNERS_CIRCLE: `${WW_API}/prizes?isWinnerCircle=true`,
//   WINNERS_CIRCLE_FILTERS: `${WW_API}/prizes/filters`,
//   PURCHASE_PROMPT: `${WW_API}/me/UserRunningWithLowTokens`,
//   DEAL_OF_THE_DAY_RESPONCE_LOG: `${WW_API}/DealOfDayResponseLog`,
//   GET_INCENTIVISE_VALUES: `${WW_API}/Me/GetIncentiviseValues`,
//   CHECK_PLAYER_NEWS_FEED : `${WW_API}/NewsFeed/CheckPlayerNewsFeed`,
//   GET_PLAYER_NEWS_FEED : `${WW_API}/NewsFeed/GetPlayerNewsFeed`,
//   POST_PLAYER_NEWS_FEED : `${WW_API}/NewsFeed/PostPlayerNewsFeed`,
//   SYSTEM_SETTING: `${WW_API}/me/CheckClearIAPRestoreTranExistingTran` 
// };

// const WINNER_WINNER_BASE = 'https://www.winnerwinner.com';

// export const REPORT_ISSUE_EMAIL_TO = 'support@winnerwinner.com';

// export const URLS = {
//   EULA: `${WINNER_WINNER_BASE}/terms/#license`,
//   HELP: `${ZENDESK_BASE_URL}/hc/en-us`,
//   TERMS: `${WINNER_WINNER_BASE}/terms/`,
//   PRIVACY: `${WINNER_WINNER_BASE}/privacy/`
// };

export const NAVIGATORS = {
  LOGGED_IN: 'loggedIn',
  LOGGED_OUT: 'loggedOut',
  ONBOARDING: 'onboarding',
  NEW_REGISTER_LOGGED_IN: 'newRegisterLoggedIn',
};

export const PRIZE_STATUS = {
  ALL_PRIZES: 'All prizes',
  NEW: 'New',
  PACKING: 'Packing',
  SHIPPED: 'Shipped',
  SWAPPED: 'Swapped'
};

export const PRIZE_ACTION_TYPE = {
  SHIP: 'SHIP',
  SWAP: 'SWAP'
};

export const API_CALL_CONSTANTS = {
  CLIENT_CREDENTIALS: 'client_credentials',
  GAME_ROUND: 'gameround',
  PRICE_VAULT: 'prizevault'
};

export const STATES = {
  ALABAMA: 'AL',
  ALASKA: 'AK',
  ARIZONA: 'AZ',
  ARKANSAS: 'AR',
  CALIFORNIA: 'CA',
  COLORADO: 'CO',
  CONNECTICUT: 'CT',
  DELAWARE: 'DE',
  FLORIDA: 'FL',
  GEORGIA: 'GA',
  GUAM: 'GU',
  HAWAII: 'HI',
  IDAHO: 'ID',
  ILLINOIS: 'IL',
  INDIANA: 'IN',
  IOWA: 'IA',
  KANSAS: 'KS',
  KENTUCKY: 'KY',
  LOUISIANA: 'LA',
  MAINE: 'ME',
  MARYLAND: 'MD',
  MASSACHUSETTS: 'MA',
  MICHIGAN: 'MI',
  MINNESOTA: 'MN',
  MISSISSIPPI: 'MS',
  MISSOURI: 'MO',
  MONTANA: 'MT',
  NEBRASKA: 'NE',
  NEVADA: 'NV',
  NEW_HAMPSHIRE: 'NH',
  NEW_JERSEY: 'NJ',
  NEW_MEXICO: 'NM',
  NEW_YORK: 'NY',
  NORTH_CAROLINA: 'NC',
  NORTH_DAKOTA: 'ND',
  OHIO: 'OH',
  OKLAHOMA: 'OK',
  OREGON: 'OR',
  PENNSYLVANIA: 'PA',
  PUERTO_RICO: 'PR',
  RHODE_ISLAND: 'RI',
  SOUTH_CAROLINA: 'SC',
  SOUTH_DAKOTA: 'SD',
  TENNESSEE: 'TN',
  TEXAS: 'TX',
  UTAH: 'UT',
  VERMONT: 'VT',
  VIRGINIA: 'VA',
  WASHINGTON: 'WA',
  WEST_VIRGINIA: 'WV',
  WISCONSIN: 'WI',
  WYOMING: 'WY'
};

export const OPEN_PROMO_LOCATIONS = {
  GAME_ROOM_HEADER: 'Game Room - Header',
  GAME_ROOM_LIST: 'Game Room - In List',
  TOKEN_STORE_HEADER: 'Token Store - Header'
};

export const ANALYTICS_EVENTS = {
  ACHIEVEMENT_COMPLETED: 'Achievement Completed',
  APP_OPENED: 'App Opened',
  APP_CLOSED: 'App Closed',
  ACCOUNT_CREATED: 'Account Created',
  ENTERED_MACHINE_QUEUE: 'Entered Machine Queue',
  GAME_LOST: 'Game Lost',
  GAME_PLAYED: 'Game Played',
  GAME_WON: 'Game Won',
  KEEP_PRIZE: 'Keep Prize',
  LEFT_MACHINE_QUEUE: 'Left Machine Queue',
  LOGIN: 'Login',
  OPENED_PROMO: 'Opened Promo',
  REDEMPTION_REQUEST: 'Redemption Request',
  SHARED_GAME_PLAY: 'Shared Game Play',
  SHIPPING_REQUEST: 'Shipping Request',
  SKIPPED_TO_SEE_GAMES: 'Skipped to See Games',
  SUBSCRIPTION_SIGNED_UP: 'Subscription Signed Up',
  SWAP_FOR_TICKETS_IN_PRIZE_VAULT: 'Swap for Tickets in Prize Vault',
  SWAP_TICKETS_AFTER_WIN: 'Swap for Tickets after Win',
  TOKENS_PURCHASED: 'Tokens Purchased',
  WATCHED_GAME_PLAY: 'Watched Game Play',
  VISITED_WINNER_CIRCLE: "Visited Winner's Circle",
  Token_Store_Visit: "Token Store Visit ",
  Coupon_Code_Applied: "Coupon Code Applied",
  Promo_Code_Purchase: "Promo Code Purchase"
};

export const ANALYTICS_PROPERTIES = {
  ACHIEVEMENT_NAME: 'Achievement Name',
  APPLE_SEARCH_ADS: 'Apple Search Ads',
  ANONYMOUS_STATUS: 'Anonymous Status',
  DEVICE_ID: 'Device ID',
  DOLLAR_VALUE: '$DollarValue',
  FIRST_NAME: 'First Name',
  GAME_ROUND_ID: 'GameRound ID',
  GAME_TOKEN_COST: 'Game Token Cost',
  LAST_NAME: 'Last Name',
  LAST_USED_PLAYER_STATE: 'Last Used Player State',
  LAST_USED_SHIPPING_ADDRESS: 'Last Used Shipping Address',
  LAST_USED_PLAYER_CITY: 'Last Used Player City',
  LAST_USED_PLAYER_COUNTRY: 'Last Used Player Country',
  MACHINE_ID: 'Machine ID',
  USER_NAME: 'User Name',
  PLAYER_EMAIL: 'Player Email',
  PLAYER_ID: 'Player ID',
  PLAYER_LOSE_COUNT: 'Player Lose Count',
  PLAYER_PLAY_COUNT: 'Player Play Count',
  PLAYER_TOKEN_AMOUNT: 'Player Token Amount',
  PLAYER_TICKET_AMOUNT: 'Player Ticket Amount',
  PLAYER_WINS_COUNT: 'Player Wins Count',
  PLAYER_WON_PRIZES_COUNT: 'Player Won Prizes Count',
  POINTS_COUNT: 'Points Count',
  PRIZE_ID: 'Prize Id',
  PRIZE_NAME: 'Prize Name',
  PRIZE_VALUE: 'Prize Value',
  PROMO_ID: 'Promo ID',
  PROMO_LOCATION: 'Promo Location',
  REDEEMED_PRIZES: 'Redeemed Prizes',
  SHIPPING_ADDRESS: 'Shipping Address',
  SHIPPED_PRIZES: 'Shipped Prizes',
  SUBSCRIPTION_PACK_NAME: 'Subscription Pack Name',
  SUBSCRIPTION_TYPE: 'Subscription Type',
  TICKET_COST: 'Ticket Cost',
  TICKETS_DISPENSED: 'Tickets Dispensed',
  TOKEN_PACK_NAME: 'Token Pack Name',
  TOKEN_VALUE: 'Token Value',
  VIP_STATUS: 'VIP Status'
};

export const ANALYTICS_BRANCH_EVENTS = {
  ACCOUNT_CREATED: 'ACCOUNT_CREATED',
  PURCHASE_TOKEN: 'PURCHASE_TOKEN',
  PURCHASE_SUBSCRIPTION: 'PURCHASE_SUBSCRIPTION'
};

export const SOUND_CATEGORY = {
  AMBIENT: 'Ambient',
  PLAY_AND_RECORD: 'PlayAndRecord',
  PLAY_BACK: 'Playback'
};

export const PLAYER_STATUS = {
  WATCHING: 'WATCHING',
  IN_QUEUE: 'IN_QUEUE',
  NEXT_PLAYER: 'NEXT_PLAYER',
  PLAYING: 'PLAYING',
  GAME_ENDED: 'GAME_ENDED'
};

export const STREAMING_MESSAGE_TYPE = {
  EVENT: 'event',
  RESPONSE: 'response'
};

export const LOCAL_STORAGE_NAME = {
  ACHIEVEMENTS: 'ACHIEVEMENTS',
  ONBOARDING: 'ONBOARDING',
  SOUND_PREFERENCES: 'SOUND PREFERENCES',
  SESSION_COUNT: 'SESSION COUNT',
  NOTIFICAtION_PROMPT_STATUS: 'NOTIFICAtION PROMPT STATUS',
  NOTIFICAtION_SHOW_BEFORE: 'NOTIFICAtION SHOW BEFORE',
  DAILY_BONUS: 'DAILY BONUS',
  FREE_TOKEN_GIFT:"FREE TOKEN GIFT",
  PIGGY_BANK_STATUS:"PIGGY BANK STATUS",
  DEAL_OF_THE_DAY: 'DEAL OF THE DAY',
  DEAL_OF_THE_DAY_PUCRHASE_UID:'DEAL_OF_THE_DAY_PUCRHASE_UID',
  REFERRER_DATA: 'REFERRER_DATA',
  PURCHASE_PROMPT: 'PURCHASE_PROMPT'
};

export const GET_SOCIAL_CONSTANT = {
  USER: 'user',
  USER_INSTALL_REFERRER: 'user_install_referrer',
  USER_TOKENS : 'user_tokens',
  USER_INSTALL_TOKENS : 'user_install_tokens',
  IN_APP_PURCHASED: 'IN_APP_PURCHASED',
  USER_ID: 'USER_ID',
  TYPE: 'TYPE',
  DATA: 'DATA'

}

export const CUSTOMER_IO_EVENTS = {
  APP_OPENED: 'appopened',
  PRIZE_KEPT: 'prizekept'
};

export const PATHS = {
  GAME_ROOM: 'game-room',
  PRIZE_VAULT: 'prize-vault',
  TOKEN_STORE: 'token-store',
  WINNERS_CIRCLE: 'winners-circle',
  NEWS_ROOM:'news-room',
  LEADERBORAD:'leaderborad'
};

export const ERROR_STATUS_CODE = {
  USER_LOCATION_RESTRICTED: 451,
  USER_LOCATION_UNDETERMINED: 551
};

export const NETWORK_ERROR = 'Network Error';

export const GAME_PLAY_EVENT_TIME_OUT = {
  ROOM_ENTERED: 10000,
  GAME_START: 10000,
  START_PLAYING_TO_GAME_RESULT: 40000,
  GRAB_TO_GAME_RESULT: 20000
};

export const WC_FILTER_OPTION_TYPE = {
  COST: 'Cost',
  CATEGORY: 'Category'
};

export const ACHIEVEMENT_ENUMS = {
  DAY: 1,
  WIN: 2,
  TICKET: 3,
  DAILY_LOGIN: 4,
  DAILY_WIN: 5
};

export const FREE_TOKEN_ENUMS = {
success: 'success'
}

export const APP_STATE = {
  ACTIVE: 'active',
  BACKGROUND: 'background',
  INACTIVE: 'inactive'
};

export const API_RESPONSE_ENUMS = {
  NOT_FOUND:'Not Found'
}
