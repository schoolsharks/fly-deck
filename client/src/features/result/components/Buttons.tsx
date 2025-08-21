import { Box } from "@mui/material";
import SlideButton from "../../../components/ui/SlideButton";
import { useNavigate } from "react-router-dom";

interface ButtonsProps {
  userAction?: "claim" | "skip" | null;
}

const Buttons = ({ userAction }: ButtonsProps) => {
  const navigate = useNavigate();

  const handleClaim = () => {
    // Logic to navigate to the next page
    navigate("/user/game/reward-questions");
  };

  const handleInviteFriends = () => {
    // Logic to invite friends
    console.log("Invite friends");
  };

  const handlePlayAgain = () => {
    // Logic to play again
    console.log("Play again");
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
        {/* Conditional rendering based on userAction */}
        {userAction === "skip" ? (
          // If user clicked 'skip' - show "Claim" and "Play Again" buttons
          <>
            <SlideButton text="Claim" onSlideComplete={handleClaim} />
            <SlideButton text="Play Again" onSlideComplete={handlePlayAgain} />
          </>
        ) : userAction === "claim" ? (
          // If user clicked 'claim' - show "Play Again" and "Invite Friends" buttons
          <>
            <SlideButton text="Play Again" onSlideComplete={handlePlayAgain} />
            <SlideButton
              text="Invite Friends"
              onSlideComplete={handleInviteFriends}
            />
          </>
        ) : (
          // Fallback - show all buttons if userAction is null or undefined
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
