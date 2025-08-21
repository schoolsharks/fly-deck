import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import OnboardingPage from "./OnboardingPage";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "../../components/layout/AnimatedPage";
import AlmostThere from "../../features/registeration/components/AlmostThere";
import GamePage from "./GamePage";
import AccessFullGame from "../../features/registeration/components/AccessFullGame";
import RewardQuestions from "../../features/rewards/components/RewardQuestions";
import Submission from "../../features/rewards/components/Submission";
import ResultPage from "./ResultPage";
import AnswerToUnlockPage from "./AnswerToUnlockPage";

const UserMain = () => {
  const location = useLocation();

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh" }}>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/onboarding/:page"
            element={
              <AnimatedPage>
                <OnboardingPage />
              </AnimatedPage>
            }
          />
          <Route
            path="/game"
            element={
              <AnimatedPage>
                <GamePage />
              </AnimatedPage>
            }
          />
          <Route
            path="/game/almost-there"
            element={
              <AnimatedPage>
                <AlmostThere />
              </AnimatedPage>
            }
          />
          <Route
            path="/game/answer-to-unlock"
            element={
              <AnimatedPage>
                <AnswerToUnlockPage />
              </AnimatedPage>
            }
          />
          <Route
            path="/game/access-full-game"
            element={
              <AnimatedPage>
                <AccessFullGame />
              </AnimatedPage>
            }
          />
          <Route
            path="/game/reward-questions"
            element={
              <AnimatedPage>
                <RewardQuestions />
              </AnimatedPage>
            }
          />
          <Route
            path="/game/submission"
            element={
              <AnimatedPage>
                <Submission />
              </AnimatedPage>
            }
          />
          <Route
            path="/game/result-page"
            element={
              <AnimatedPage>
                <ResultPage />
              </AnimatedPage>
            }
          />
          <Route path="*" element={<Navigate to="/user/onboarding/1" />} />
        </Routes>
      </AnimatePresence>

      
    </div>
  );
};

export default UserMain;
