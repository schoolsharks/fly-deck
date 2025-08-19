import React from "react";

interface SplashScreenProps {
  handleNextPage: () => void;
}
const SplashScreen: React.FC<SplashScreenProps> = ({ handleNextPage }) => {
  useEffect(() => {
    setTimeout(() => {
      handleNextPage();
    }, 2000);
  }, []);
  return <div></div>;
};

export default SplashScreen;
