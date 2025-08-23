import { Box } from "@mui/material";
import SlideButton from "../../../components/ui/SlideButton";
import { useNavigate } from "react-router-dom";
import { clearAllFlyDeckData } from "../../../utility/sessionStorage";

interface ButtonsProps {
  userAction?: "claim" | "skip" | null;
  hasCompletedRewardFlow?: boolean;
}

const Buttons = ({ hasCompletedRewardFlow }: ButtonsProps) => {
  const navigate = useNavigate();

  const handleClaim = () => {
    // Logic to navigate to the next page
    navigate("/user/game/reward-questions");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Fly Deck",
          url: window.location.origin,
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      navigator.clipboard
        .writeText(window.location.origin)
        .then(() => {
          alert("Link copied to clipboard! Share it with your friends.");
        })
        .catch(() => {
          alert("Unable to copy link. Please copy the URL manually.");
        });
    }
  };

  // const handlePlayAgain = () => {
  //   // Logic to play again
  //   console.log("Play again");
  //   navigate("/user/onboarding/1");
  // };

  const handlePlayAgain = () => {
    // Clear all FlyDeck session storage data before starting a new game
    clearAllFlyDeckData();
    console.log("Play again - All session data cleared, starting fresh game");
    navigate("/user/onboarding/1");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          mt: "30px",
          mb: "30px",
          px: "20px",
          gap: "20px",
        }}
      >
        {/* Conditional rendering based on completion status first, then userAction */}
        {hasCompletedRewardFlow ? (
          // If user completed both reward questions and submission - show "Play Again" and "Invite Friends" buttons
          <>
            <SlideButton text="Play Again" onSlideComplete={handlePlayAgain} />
            <SlideButton
              text="Invite Friends"
              onSlideComplete={handleShare}
            />
          </>
        ) : (
          // If user hasn't completed the reward flow - show "Claim" and "Play Again" buttons
          <>
            <SlideButton text="Claim" onSlideComplete={handleClaim} />
            <SlideButton text="Play Again" onSlideComplete={handlePlayAgain} />
          </>
        )}
      </Box>
    </>
  );
};

export default Buttons;
