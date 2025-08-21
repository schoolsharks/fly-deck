import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import CardIndicator from "./CardIndicator";
import CardsMain from "./CardsMain";
import LogoHeader from "../../../components/ui/LogoHeader";
import {
  saveGameData,
  getGameData,
  type GameData,
} from "../../../utility/sessionStorage";

// Static game data
export interface Question {
  id: number;
  title: string;
  description: string;
  option1: {
    text: string;
    value: any;
  };
  option2: {
    text: string;
    value: any;
  };
}

const gameQuestions: Question[] = [
  {
    id: 1,
    title: "Every swipe gets you closer to the win!",
    description:
      "Customer complaints about customer support are increasing. What’d your move?",
    option1: {
      text: "Quickly expand the support team to address complaints faster, prioritizing speed over training.",
      value: "luxury",
    },
    option2: {
      text: "Invest in training for the current team and implement processes to ensure consistent quality.",
      value: "adventure",
    },
  },
  {
    id: 2,
    title: "You’re crushing it! Don’t stop now!",
    description: "You have two amazing job offers. Which one do you choose?",
    option1: {
      text: "High salary at a big corporation",
      value: "corporate",
    },
    option2: {
      text: "Creative freedom at a startup",
      value: "startup",
    },
  },
  {
    id: 3,
    title: "Keep going, your archetype’s waiting.",
    description: "It's Friday evening. How do you want to spend your weekend?",
    option1: {
      text: "Netflix and chill at home",
      value: "relax",
    },
    option2: {
      text: "Go out and explore the city",
      value: "explore",
    },
  },
  {
    id: 4,
    title: "Food Choice",
    description: "You're at a restaurant. What sounds more appealing?",
    option1: {
      text: "Try something completely new",
      value: "adventurous",
    },
    option2: {
      text: "Order your favorite dish",
      value: "familiar",
    },
  },
  {
    id: 5,
    title: "Final Decision",
    description: "Last question! What matters most to you in life?",
    option1: {
      text: "Security and stability",
      value: "security",
    },
    option2: {
      text: "Growth and new experiences",
      value: "growth",
    },
  },
];

const GameLayout = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const navigate = useNavigate();

  // Load existing game data on component mount
  useEffect(() => {
    const existingGameData = getGameData();
    if (existingGameData) {
      setCurrentIndex(existingGameData.currentIndex);
      setAnswers(existingGameData.answers);
    }
  }, []);

  // Save game data whenever answers or currentIndex changes
  useEffect(() => {
    if (answers.length > 0 || currentIndex > 0) {
      const gameData: GameData = {
        answers,
        currentIndex,
        totalQuestions: gameQuestions.length,
        completedAt: new Date().toISOString(),
      };
      saveGameData(gameData);
    }
  }, [answers, currentIndex]);

  const handleSwipe = (direction: "left" | "right") => {
    console.log(
      "Swipe detected:",
      direction,
      "Current index:",
      currentIndex,
      "Total questions:",
      gameQuestions.length
    );

    const currentQuestion = gameQuestions[currentIndex];
    const selectedAnswer =
      direction === "left"
        ? currentQuestion.option1.value
        : currentQuestion.option2.value;

    // Save answer
    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
    console.log("Updated answers:", newAnswers);

    // Move to next question or finish game
    if (currentIndex < gameQuestions.length - 1) {
      console.log("Moving to next question:", currentIndex + 1);
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Game finished - save final data and navigate to AlmostThere page
      const finalGameData: GameData = {
        answers: newAnswers,
        currentIndex: currentIndex + 1,
        totalQuestions: gameQuestions.length,
        completedAt: new Date().toISOString(),
      };
      saveGameData(finalGameData);
      console.log("Game finished! Navigating to AlmostThere page...");
      navigate("/user/game/almost-there");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
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
          maxWidth: "90%",
          display: "flex",
          alignItems: "center",
          mx: "auto",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Helvetica Neue, sans-serif",

            fontSize: "30px",
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: "35px",
            // marginBottom: "8px",
          }}
        >
          {gameQuestions[currentIndex].title}
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardsMain
          questions={gameQuestions}
          currentIndex={currentIndex}
          onSwipe={handleSwipe}
        />
      </Box>
      <Box sx={{ paddingBottom: "32px" }}>
        <CardIndicator
          totalCards={gameQuestions.length}
          currentIndex={currentIndex}
        />
      </Box>
    </Box>
  );
};

export default GameLayout;
