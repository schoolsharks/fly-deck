import Home from "./components/Home";
import HowToPlay from "./components/HowToPlay";
import { useNavigate } from "react-router-dom";

export const pageMapper = (page: number) => {
  const navigate = useNavigate();

  const handleNextPage = () => {
    if (page < 2) {
      navigate(`/user/onboarding/${page + 1}`);
    } else {
      navigate("/user/game"); // Navigate to game instead of login
    }
  };

  if (page === 1) {
    return <Home handleNextPage={handleNextPage} />;
  }
  if (page === 2) {
    return <HowToPlay handleNextPage={handleNextPage} />;
  }
};
