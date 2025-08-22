import { Box, Typography } from "@mui/material";
import LogoHeader from "../../../components/ui/LogoHeader";
import CardsImage from "../../../assets/HowToPlay/Cards.webp";
import Arrow from "../../../assets/HowToPlay/Arrow.png";
import SlideButton from "../../../components/ui/SlideButton";

interface HowToPlayProps {
  handleNextPage: () => void;
}

const HowToPlay: React.FC<HowToPlayProps> = ({ handleNextPage }) => {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #110200 48.86%, #730206 100%)",
        minHeight: "100vh ",
      }}
    >
      <Box sx={{ paddingTop: "40px" }}>
        <LogoHeader />
      </Box>

      <Typography
        sx={{
          fontFamily: "Helvetica Neue",
          fontWeight: 500,
          fontSize: "30px",
          lineHeight: "29px",
          letterSpacing: "0%",
          textAlign: "center",
          color: "#FFFFFF",
          mt: "50px",
        }}
      >
        How to Play!
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "40px",
          overflow: "hidden",
        }}
      >
        <img
          src={CardsImage}
          alt="How to Play Cards"
          style={{ height: "287px" }}
        />

        <Box
          sx={{
            position: "absolute",
            // bottom: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "0 20px",
            mt: "-40px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "29px",
              letterSpacing: "0%",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            Swipe Left for <br />
            first option
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "29px",
              letterSpacing: "0%",
              textAlign: "right",
              color: "#FFFFFF",
            }}
          >
            Swipe Right for <br />
            second option
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            // bottom: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "0 20px",
            mt: "70px",
            px: "30px",
          }}
        >
          <img
            src={Arrow}
            alt="Arrow"
            style={{ height: "22px", width: "67px" }}
          />
          <img
            src={Arrow}
            alt="Arrow"
            style={{ height: "22px", width: "67px", transform: "scaleX(-1)" }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          mt: "80px",
          px: "30px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: "29px",
            letterSpacing: "0%",
            textAlign: "left",
            color: "#FFFFFF",
            // pl:"10px"
            // maxWidth:"90%",
            mx:"auto"
          }}
        >
          Keep answering to unlock your Archetype.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          mt: "30px",
          mb: "30px",
          px: "20px", // Add horizontal padding
        }}
      >
        <SlideButton text="Play" onSlideComplete={handleNextPage} />
      </Box>
    </Box>
  );
};

export default HowToPlay;
