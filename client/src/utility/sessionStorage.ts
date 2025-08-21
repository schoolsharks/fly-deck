// Session Storage utility functions for Fly Deck app
export interface GameData {
  answers: string[];
  currentIndex: number;
  totalQuestions: number;
  completedAt: string;
}

export interface AnswerToUnlockData {
  startupBrandName: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
  termsAccepted: boolean;
  completedAt: string;
}

export interface AccessFullGameData {
  action: 'claim' | 'skip';
  completedAt: string;
}

export interface RewardQuestion {
  id: number;
  title: string;
  description: string;
  options: {
    id: string;
    text: string;
    value: any;
  }[];
}

export interface RewardQuestionsData {
  answers: any[];
  completedAt: string;
}

export interface SubmissionData {
  address: {
    houseNumber: string;
    areaLocality: string;
    cityState: string;
    pincode: string;
  };
  completedAt: string;
}

export interface FlyDeckSessionData {
  gameData?: GameData;
  answerToUnlockData?: AnswerToUnlockData;
  accessFullGameData?: AccessFullGameData;
  rewardQuestionsData?: RewardQuestionsData;
  submissionData?: SubmissionData;
}

// Session Storage Keys
const SESSION_KEYS = {
  GAME_DATA: 'flyDeck_gameData',
  ANSWER_TO_UNLOCK: 'flyDeck_answerToUnlock',
  ACCESS_FULL_GAME: 'flyDeck_accessFullGame',
  REWARD_QUESTIONS: 'flyDeck_rewardQuestions',
  SUBMISSION: 'flyDeck_submission',
  ALL_DATA: 'flyDeck_allData'
} as const;

// Generic session storage functions
export const setSessionData = <T>(key: string, data: T): void => {
  try {
    sessionStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to session storage:', error);
  }
};

export const getSessionData = <T>(key: string): T | null => {
  try {
    const data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error reading from session storage:', error);
    return null;
  }
};

export const removeSessionData = (key: string): void => {
  try {
    sessionStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from session storage:', error);
  }
};

export const clearAllFlyDeckData = (): void => {
  Object.values(SESSION_KEYS).forEach(key => {
    removeSessionData(key);
  });
};

// Specific functions for each data type
export const saveGameData = (data: GameData): void => {
  setSessionData(SESSION_KEYS.GAME_DATA, data);
  updateAllData();
};

export const getGameData = (): GameData | null => {
  return getSessionData<GameData>(SESSION_KEYS.GAME_DATA);
};

export const saveAnswerToUnlockData = (data: AnswerToUnlockData): void => {
  setSessionData(SESSION_KEYS.ANSWER_TO_UNLOCK, data);
  updateAllData();
};

export const getAnswerToUnlockData = (): AnswerToUnlockData | null => {
  return getSessionData<AnswerToUnlockData>(SESSION_KEYS.ANSWER_TO_UNLOCK);
};

export const saveAccessFullGameData = (data: AccessFullGameData): void => {
  setSessionData(SESSION_KEYS.ACCESS_FULL_GAME, data);
  updateAllData();
};

export const getAccessFullGameData = (): AccessFullGameData | null => {
  return getSessionData<AccessFullGameData>(SESSION_KEYS.ACCESS_FULL_GAME);
};

export const saveRewardQuestionsData = (data: RewardQuestionsData): void => {
  setSessionData(SESSION_KEYS.REWARD_QUESTIONS, data);
  updateAllData();
};

export const getRewardQuestionsData = (): RewardQuestionsData | null => {
  return getSessionData<RewardQuestionsData>(SESSION_KEYS.REWARD_QUESTIONS);
};

export const saveSubmissionData = (data: SubmissionData): void => {
  setSessionData(SESSION_KEYS.SUBMISSION, data);
  updateAllData();
};

export const getSubmissionData = (): SubmissionData | null => {
  return getSessionData<SubmissionData>(SESSION_KEYS.SUBMISSION);
};

// Function to update consolidated data
const updateAllData = (): void => {
  const allData: FlyDeckSessionData = {};
  
  const gameData = getGameData();
  const answerToUnlockData = getAnswerToUnlockData();
  const accessFullGameData = getAccessFullGameData();
  const rewardQuestionsData = getRewardQuestionsData();
  const submissionData = getSubmissionData();
  
  if (gameData) allData.gameData = gameData;
  if (answerToUnlockData) allData.answerToUnlockData = answerToUnlockData;
  if (accessFullGameData) allData.accessFullGameData = accessFullGameData;
  if (rewardQuestionsData) allData.rewardQuestionsData = rewardQuestionsData;
  if (submissionData) allData.submissionData = submissionData;
  
  setSessionData(SESSION_KEYS.ALL_DATA, allData);
};

export const getAllFlyDeckData = (): FlyDeckSessionData | null => {
  return getSessionData<FlyDeckSessionData>(SESSION_KEYS.ALL_DATA);
};

// Debug function to log all stored data
export const logAllStoredData = (): void => {
  console.log('=== FlyDeck Session Storage Data ===');
  console.log('Game Data:', getGameData());
  console.log('Answer to Unlock Data:', getAnswerToUnlockData());
  console.log('Access Full Game Data:', getAccessFullGameData());
  console.log('Reward Questions Data:', getRewardQuestionsData());
  console.log('Submission Data:', getSubmissionData());
  console.log('All Data Combined:', getAllFlyDeckData());
};
