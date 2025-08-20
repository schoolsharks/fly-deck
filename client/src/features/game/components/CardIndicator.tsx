import { motion } from "framer-motion";
import { Box } from "@mui/material";

interface CardIndicatorProps {
  totalCards: number;
  currentIndex: number;
}

const CardIndicator = ({ totalCards, currentIndex }: CardIndicatorProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "8px",
      }}
    >
      {Array.from({ length: totalCards }, (_, index) => (
        <motion.div
          key={index}
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor:
              index === currentIndex ? "white" : "rgba(255, 255, 255, 0.3)",
            transition: "background-color 0.3s ease",
          }}
          animate={{
            scale: index === currentIndex ? 1.2 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      ))}
    </Box>
  );
};

export default CardIndicator;
