import { motion, PanInfo } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { Question } from "./GameLayout";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import WIcon from "../../../assets/Game/W.png";

interface CardsMainProps {
  questions: Question[];
  currentIndex: number;
  onSwipe: (direction: "left" | "right") => void;
}

const CardsMain = ({ questions, currentIndex, onSwipe }: CardsMainProps) => {
  const handleDragEnd = (_event: any, info: PanInfo) => {
    const swipeThreshold = 100;

    console.log(
      "Drag ended - Offset X:",
      info.offset.x,
      "Velocity X:",
      info.velocity.x,
      "Current Index:",
      currentIndex
    );

    if (info.offset.x > swipeThreshold) {
      // Swiped right - option 2
      console.log("Swipe RIGHT detected");
      onSwipe("right");
    } else if (info.offset.x < -swipeThreshold) {
      // Swiped left - option 1
      console.log("Swipe LEFT detected");
      onSwipe("left");
    } else {
      console.log("No swipe detected - threshold not met");
    }
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
      // Left card (previous)
      return {
        opacity: 0.3,
        scale: 0.85,
        x: -120,
        zIndex: 1,
        display: "block",
      };
    } else if (diff === 1) {
      // Right card (next)
      return {
        opacity: 0.3,
        scale: 0.85,
        x: 120,
        zIndex: 1,
        display: "block",
      };
    } else {
      // Current card
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
        maxWidth: "92%",
        margin: "0 auto",
        height: "484px",
      }}
    >
      {questions.map((question, index) => {
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
            drag={index === currentIndex ? "x" : false}
            dragConstraints={{ left: -200, right: 200 }}
            dragElastic={0.2}
            onDragEnd={index === currentIndex ? handleDragEnd : undefined}
          >
            <Box
              sx={{
                background: "white",
                borderRadius: "16px",
                // boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                padding: "36px",
                border: "2px solid #eee",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background gradient */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "#ffffff",
                }}
              />

              {/* Content */}
              <Box sx={{ position: "relative", zIndex: 10 }}>
                <Box sx={{ textAlign: "center", marginBottom: "30px" , paddingTop:"9px" }}>
                  <Typography
                    sx={{
                      color: "#000000",
                      fontSize: "16px",
                      lineHeight: "22px",
                      fontWeight: 700,
                      textAlign: "left",
                    }}
                  >
                    {question.description}
                  </Typography>
                </Box>

                {/* Options */}
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Box>
                      <KeyboardDoubleArrowLeftIcon
                        sx={{
                          color: "#000000",
                          fontSize: "30px",
                          marginRight: "18px",
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        color: "#000000",
                        fontWeight: "500",
                        fontSize: "14px",
                        lineHeight: "20px",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {question.option1.text}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#000000",
                        fontWeight: "500",
                        fontSize: "14px",
                        lineHeight: "20px",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {question.option2.text}
                    </Typography>
                    <Box>
                      <KeyboardDoubleArrowRightIcon
                        sx={{
                          color: "#000000",
                          fontSize: "30px",
                          marginLeft: "18px",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box>
              <Box
                sx={{
                  backgroundColor: "#000000",
                  zIndex: 1,
                  width: "98.8%",
                  height: "100px",
                  position: "absolute",
                  marginTop:"-100px",
                  bottom: 2,
                  left: 2,
                  right: 1,
                  // padding: "0 !important",
                  // margin: "0",
                  borderBottomLeftRadius: "16px",
                  borderBottomRightRadius: "16px",
                  // display:"flex",
                  // mx: "auto",
                  // alignItems: "center",
                }}
              >
                <img
                  src={WIcon}
                  alt="W Icon"
                  style={{ width: "100%", height: "20px", marginTop: "-12px" }}
                />
              </Box>
              {/* Swipe instruction */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 10,
                  textAlign: "center",
                  marginTop: "-52px",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "12px",
                    fontFamily:"Inter, sans-serif"
                  }}
                >
                  IDFC FIRST Bank - Product Features
                </Typography>
              </Box>
            </Box>
          </motion.div>
        );
      })}
    </Box>
  );
};

export default CardsMain;
