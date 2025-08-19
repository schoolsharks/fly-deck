import MeetOthers from "./components/MeetOthers";
import WhatSherryWants from "./components/WhatSherryWants";
import MeetSherry from "./components/MeetSherry";
import useNavigateWithSound from "../sound/hooks/useNavigateWithSound";
import SplashScreen from "./components/SplashScreen";
import HowToPlay from "./components/HowToPlay";

export const pageMapper = (page: number) => {
  const navigateWithSound = useNavigateWithSound();

  const handleNextPage = () => {
    if (page < 2) {
      navigateWithSound(`/user/onboarding/${page + 1}`);
    } else {
      navigateWithSound("/user/login");
    }
  };

  if (page === 1) {
    return <SplashScreen handleNextPage={handleNextPage} />;
  }
  if (page === 2) {
    return <HowToPlay handleNextPage={handleNextPage} />;
  }
};
