import { Box, Typography } from "@mui/material";
import React from "react";
import FirstAirplaneFrame from "../../../assets/Home/FirstAirplaneFrame.webp";
import IDFCFirstBankLogo from "../../../assets/Logos/IDFCFirstBank.webp";
import FirstWingLogo from "../../../assets/Logos/FirstWing.webp";
import FLyDeck from "../../../assets/Home/FLY DECK.webp";
import Airplane from "../../../assets/Home/Airplane.webp";
import SlideButton from "../../../components/ui/SlideButton";
import FiyingAirplane from "../../../assets/Home/FlyingAirplane.webp";

interface HomeProps {
  handleNextPage: () => void;
}
const Home: React.FC<HomeProps> = ({ handleNextPage }) => {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #110200 48.86%, #730206 100%)",
        // minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${FirstAirplaneFrame})`,
          // backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          // backgroundRepeat: "no-repeat",
          // width: "100%",
          height: "370px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={IDFCFirstBankLogo}
            alt="IDFC First Bank Logo"
            style={{ width: "138px", height: "auto", marginTop: "41px" }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 370px)", // Account for the airplane frame height
          flexDirection: "column",
          pb: "20px", // Add padding bottom to ensure SlideButton is visible
        }}
      >
        <img
          src={FirstWingLogo}
          alt="First Wing Logo"
          style={{
            width: "228px",
            height: "auto",
            boxShadow: "0px 4px 4px 0px #00000040",
          }}
        />
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontStyle: "Regular",
            fontSize: "18px",
            lineHeight: "29px",
            letterSpacing: "0%",
            textAlign: "center",
            mt: "12px",
          }}
        >
          Presents
        </Typography>
        <img
          src={FLyDeck}
          alt="FLY DECK"
          style={{
            width: "228px",
            height: "auto",
            boxShadow: "0px 4px 4px 0px #00000040",
            marginTop: "30px",
          }}
        />
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontStyle: "Regular",
            fontSize: "18px",
            lineHeight: "25px",
            letterSpacing: "0%",
            textAlign: "center",
            mt: "12px",
            maxWidth: "60%",
          }}
        >
          A game to discover your Archetype.
        </Typography>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontStyle: "Regular",
            fontSize: "18px",
            lineHeight: "29px",
            letterSpacing: "0%",
            textAlign: "left",
            mt: "160px",
            maxWidth: "85%",
          }}
        >
          A fast-paced choice-making game where you pick between two options in
          each scenario.
        </Typography>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontStyle: "Regular",
            fontSize: "18px",
            lineHeight: "29px",
            letterSpacing: "0%",
            textAlign: "left",
            mt: "24px",
            maxWidth: "85%",
          }}
        >
          Your decisions reveal your unique flying archetype, from daring
          jet-setter to steady glider.
        </Typography>

        <Box
          sx={{
            height: "150px",
            width: "150px",
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            marginTop: "130px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={Airplane}
            alt="Airplane"
            style={{ width: "79px", height: "108px" }}
          />
        </Box>

        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 700,
            fontStyle: "Bold",
            fontSize: "35px",
            lineHeight: "36px",
            letterSpacing: "0%",
            textAlign: "center",
            mt: "40px",
            mb: "30px",
          }}
        >
          Turbo Jet
        </Typography>

        {/* Slide Button */}
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
          <SlideButton text="Lets Go" onSlideComplete={handleNextPage} />
        </Box>
        <img
          src={FiyingAirplane}
          alt="Flying Airplane"
          style={{
            width: "100%",
            height: "auto",
            position: "absolute",
            bottom: 0,
            left: 0,
            zIndex: 0,
          }}
        />
      </Box>
    </Box>
  );
};

export default Home;
