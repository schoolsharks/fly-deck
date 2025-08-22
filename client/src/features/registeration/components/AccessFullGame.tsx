import { Box, Typography } from "@mui/material";
import LogoHeader from "../../../components/ui/LogoHeader";
import AccessFullGameImage from "../../../assets/Registration/AccessFullGame.webp";
import SlideButton from "../../../components/ui/SlideButton";
import { useNavigate } from "react-router-dom";
import {
  saveAccessFullGameData,
  type AccessFullGameData,
} from "../../../utility/sessionStorage";

const AccessFullGame = () => {
  const navigate = useNavigate();

  const handleNextPage = () => {
    // Save claim action to session storage
    const accessData: AccessFullGameData = {
      action: "claim",
      completedAt: new Date().toISOString(),
    };
    saveAccessFullGameData(accessData);

    // Logic to navigate to the next page
    navigate("/user/game/reward-questions");
  };

  const handleSkip = () => {
    // Save skip action to session storage
    const accessData: AccessFullGameData = {
      action: "skip",
      completedAt: new Date().toISOString(),
    };
    saveAccessFullGameData(accessData);

    // Logic to skip to the next page
    navigate("/user/game/result-page");
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(180deg, #110200 48.86%, #730206 100%)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Box sx={{ paddingTop: "40px" }}>
          <LogoHeader />
        </Box>
        <Box
          sx={{
            textAlign: "center",
            marginTop: "34px",
            maxWidth: "80%",
            mx: "auto",
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "30px",
              lineHeight: "35px",
              textAlign: "center",
              mb: "32px",
            }}
          >
            Want to access the full game?
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // height: "100%",
            width: "100%",
            mx: "auto",
          }}
        >
          <img
            src={AccessFullGameImage}
            alt="Access Full Game"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>

        <Box
          sx={{
            textAlign: "center",
            marginTop: "44px",
            maxWidth: "80%",
            mx: "auto",
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "35px",
              textAlign: "center",
              mb: "32px",
            }}
          >
            All you need to do is stay with us for a few more seconds...
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            mt: "30px",
            mb: "10px",
            px: "20px", // Add horizontal padding
          }}
        >
          <SlideButton text="Claim" onSlideComplete={handleNextPage} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            // mt: "30px",
            mb: "30px",
            px: "20px", // Add horizontal padding
          }}
        >
          <button
            style={{
              backgroundColor: "transparent",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "8px",
              padding: "10px 20px",
              cursor: "pointer",
              fontSize: "16px",
              marginLeft: "10px",
              fontFamily: "Inter",
              opacity: "50%",
            }}
            onClick={handleSkip}
          >
            Skip
          </button>
        </Box>
      </Box>
    </>
  );
};

export default AccessFullGame;
