import { motion } from "framer-motion";
import { Box, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import RewardCardImg from "../../../assets/Rewards/RewardCardImg.webp";

// Sample questions data - you can replace with actual data
export interface RewardQuestion {
  id: number;
  title: string;
  description: string;
  options: {
    id: string;
    text: string;
    value: any;
  }[];
}

const rewardQuestions: RewardQuestion[] = [
  {
    id: 1,
    title: "Are you an existing IDFC FIRST Bank customer ?",
    description:
      "Do you prefer safe, steady returns over high-risk investments?",
    options: [
      { id: "a", text: "Yes", value: "yes" },
      { id: "b", text: "No", value: "no" },
    ],
  },
  {
    id: 2,
    title: "Help with Share Capital account opening",
    description: "Is building an emergency fund your primary financial goal?",
    options: [
      { id: "a", text: "Yes", value: "yes" },
      { id: "b", text: "No", value: "no" },
    ],
  },
  //   {
  //     id: 3,
  //     title: "Risk Tolerance",
  //     description: "Are you comfortable with high market volatility?",
  //     options: [
  //       { id: "a", text: "Yes", value: "yes" },
  //       { id: "b", text: "No", value: "no" },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     title: "Time Horizon",
  //     description: "Do you need access to your investments within 1-2 years?",
  //     options: [
  //       { id: "a", text: "Yes", value: "yes" },
  //       { id: "b", text: "No", value: "no" },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     title: "Investment Experience",
  //     description: "Are you just starting out with investments?",
  //     options: [
  //       { id: "a", text: "Yes", value: "yes" },
  //       { id: "b", text: "No", value: "no" },
  //     ],
  //   },
];

interface RewardQuestionsCardProps {
  onComplete?: (answers: any[]) => void;
  onFinalCard?: (isFinalCard: boolean) => void;
}

const RewardQuestionsCard = ({
  onComplete,
  onFinalCard,
}: RewardQuestionsCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isInterestedSelected, setIsInterestedSelected] = useState(false);

  // Total cards = questions + 1 final image card
  const totalCards = rewardQuestions.length + 1;
  const isOnFinalCard = currentIndex === rewardQuestions.length;

  // Notify parent when we reach the final card
  useEffect(() => {
    if (onFinalCard) {
      onFinalCard(isOnFinalCard);
    }
  }, [isOnFinalCard, onFinalCard]);

  const handleOptionClick = (optionValue: any, optionId: string) => {
    console.log("Option clicked:", optionValue, "Current index:", currentIndex);

    // Set selected option for visual feedback
    setSelectedOption(optionId);

    // Add a small delay for visual feedback before advancing
    setTimeout(() => {
      // Save answer
      const newAnswers = [...answers, optionValue];
      setAnswers(newAnswers);

      // Move to next question or show final card
      if (currentIndex < rewardQuestions.length) {
        console.log("Moving to next question:", currentIndex + 1);
        setCurrentIndex((prev) => prev + 1);
        setSelectedOption(null); // Reset selection for next question

        // Check if we're moving to the final card
        if (currentIndex + 1 === rewardQuestions.length) {
          onFinalCard?.(true);
        }
      } else {
        // All questions completed
        console.log("All questions completed! Final answers:", newAnswers);
        onComplete?.(newAnswers);
      }
    }, 100);
  };

  const handleInterestedClick = () => {
    console.log("Interested clicked!");
    setIsInterestedSelected(true);

    // Add a small delay for visual feedback like other options
    setTimeout(() => {
      // Handle completion or any other action needed
      console.log("Interested selection completed");
    }, 300);
  };

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;

    // Hide cards that are more than 1 position away
    if (Math.abs(diff) > 1) {
      return {
        opacity: 0,
        scale: 0.8,
        x: diff > 0 ? 200 : -200,
        zIndex: 0,
        display: "none",
      };
    }

    if (diff === -1) {
      // Left card (previous) - partial visibility
      return {
        opacity: 0.3,
        scale: 0.85,
        x: -120,
        zIndex: 1,
        display: "block",
      };
    } else if (diff === 1) {
      // Right card (next) - partial visibility
      return {
        opacity: 0.3,
        scale: 0.85,
        x: 120,
        zIndex: 1,
        display: "block",
      };
    } else {
      // Current card - centered and fully visible
      return {
        opacity: 1,
        scale: 1,
        x: 0,
        zIndex: 2,
        display: "block",
      };
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "86%",
        margin: "0 auto",
        height: "484px",
      }}
    >
      {/* Question Cards */}
      {rewardQuestions.map((question, index) => {
        const style = getCardStyle(index);

        return (
          <motion.div
            key={question.id}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              display: style.display,
            }}
            initial={false}
            animate={{
              opacity: style.opacity,
              scale: style.scale,
              x: style.x,
              zIndex: style.zIndex,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Box
              sx={{
                background: "#FFFFFE",
                borderRadius: "28px",
                height: "484px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                padding: "32px 24px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
              }}
            >
              {/* Question Content */}
              <Box sx={{ position: "relative", zIndex: 10 }}>
                <Box sx={{ textAlign: "center", marginBottom: "24px" }}>
                  <Typography
                    sx={{
                      color: "#000000",
                      fontSize: "16px",
                      lineHeight: "22px",
                      fontWeight: 700,
                      textAlign: "left",
                      //   marginY: "48px",
                      padding: "30px 16px",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {question.title}
                  </Typography>
                  {/* <Typography
                    sx={{
                      color: "#000000",
                      fontSize: "16px",
                      lineHeight: "22px",
                      fontWeight: 500,
                      textAlign: "center",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {question.description}
                  </Typography> */}
                </Box>

                {/* Options */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    marginTop: "40px",
                  }}
                >
                  {question.options.map((option) => {
                    const isSelected = selectedOption === option.id;

                    return (
                      <Button
                        key={option.id}
                        onClick={() =>
                          handleOptionClick(option.value, option.id)
                        }
                        sx={{
                          backgroundColor: "transparent",
                          border: "1px solid #00000040",
                          borderRadius: "10px",
                          padding: "23px 20px",
                          color: "#000000",
                          fontWeight: 500,
                          fontSize: "16px",
                          lineHeight: "20px",
                          fontFamily: "Inter, sans-serif",
                          textTransform: "none",
                          transition: "all 0.3s ease",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: "16px",
                          "&:hover": {
                            backgroundColor: "rgba(115, 2, 6, 0.05)",
                          },
                          "&:active": {
                            transform: "translateY(0px)",
                          },
                        }}
                      >
                        {/* Circle indicator */}
                        <Box
                          sx={{
                            width: "15px",
                            height: "15px",
                            borderRadius: "50%",
                            border: "2px solid #730206",
                            backgroundColor: isSelected
                              ? "#730206"
                              : "transparent",
                            transition: "all 0.3s ease",
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          sx={{
                            color: "#000000",
                            fontWeight: 700,
                            fontSize: "16px",
                            lineHeight: "22px",
                            fontFamily: "Inter, sans-serif",
                            textAlign: "left",
                          }}
                        >
                          {option.text}
                        </Typography>
                      </Button>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </motion.div>
        );
      })}

      {/* Final Image Card */}
      {(() => {
        const finalCardIndex = rewardQuestions.length;
        const style = getCardStyle(finalCardIndex);

        return (
          <motion.div
            key="final-card"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              display: style.display,
            }}
            initial={false}
            animate={{
              opacity: style.opacity,
              scale: style.scale,
              x: style.x,
              zIndex: style.zIndex,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Box
              sx={{
                background: "#FFFFFE",
                borderRadius: "28px",
                height: "484px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                padding: "32px 24px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "32px",
                }}
              >
                <img
                  src={RewardCardImg}
                  alt="Reward Card"
                  style={{
                    // maxWidth: "100%",
                    height: "283px",
                    objectFit: "contain",
                  }}
                />
              </Box>

              {/* Interested Button - styled like options */}
              <Button
                onClick={handleInterestedClick}
                sx={{
                  backgroundColor: "transparent",
                  border: "1px solid #00000040",
                  borderRadius: "10px",
                  padding: "16px 20px",
                  color: "#000000",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontFamily: "Inter, sans-serif",
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                  width: "auto",
                  "&:hover": {
                    backgroundColor: "rgba(115, 2, 6, 0.05)",
                  },
                  "&:active": {
                    transform: "translateY(0px)",
                  },
                }}
              >
                {/* Circle indicator */}
                <Box
                  sx={{
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                    border: "1.5px solid #730206",
                    backgroundColor: isInterestedSelected
                      ? "#730206"
                      : "transparent",
                    transition: "all 0.3s ease",
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    color: "#000000",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "20px",
                    fontFamily: "Inter, sans-serif",
                    textAlign: "left",
                    padding:"6px 48px"
                  }}
                >
                  Interested
                </Typography>
              </Button>
              <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "18px",
              }}>
                <Typography
                  sx={{
                    color: "#000000",
                    fontWeight: 400,
                    fontSize: "10px",
                    lineHeight: "20px",
                    fontFamily: "Inter, sans-serif",
                    textAlign: "center",
                    opacity:"50%"
                  }}
                >
                  If interested, check the box
                </Typography>
              </Box>
            </Box>
          </motion.div>
        );
      })()}
    </Box>
  );
};

export default RewardQuestionsCard;
