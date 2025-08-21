import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import OnboardingPage from "./OnboardingPage";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "../../components/layout/AnimatedPage";
import AlmostThere from "../../features/registeration/components/AlmostThere";
import GamePage from "./GamePage";
import AnswerToUnlock from "../../features/registeration/components/AnswerToUnlock";
import AccessFullGame from "../../features/registeration/components/AccessFullGame";

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
                <AnswerToUnlock />
              </AnimatedPage>
            }
          />
          <Route
            path="/game/Access-Full-Game"
            element={
              <AnimatedPage>
                <AccessFullGame />
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
