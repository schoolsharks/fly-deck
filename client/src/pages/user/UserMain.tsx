import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import OnboardingPage from "./OnboardingPage";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "../../components/layout/AnimatedPage";
import GameLayout from "../../features/game/components/GameLayout";
import AlmostThere from "../../features/game/components/AlmostThere";

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
                <GameLayout />
              </AnimatedPage>
            }
          />
          <Route
            path="/game/almost-there"
            element={
              <AnimatedPage>
                <AlmostThere   />
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
