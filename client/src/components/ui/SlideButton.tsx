import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import AirplaneIcon from "../../assets/Home/Airplane.webp";

interface SlideButtonProps {
  text: string;
  onSlideComplete: () => void;
}

const SlideButton: React.FC<SlideButtonProps> = ({ text, onSlideComplete }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragPosition, setDragPosition] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const rect = e.currentTarget.getBoundingClientRect();
      const containerWidth = rect.width;
      const newPosition = Math.min(
        Math.max(0, e.clientX - rect.left - 28), // 28 is half of the slider width (56/2)
        containerWidth - 56 // 56 is the slider width
      );
      setDragPosition(newPosition);

      // Check if dragged to the end (80% of the way)
      if (newPosition >= (containerWidth - 56) * 0.8) {
        setIsCompleted(true);
        setIsDragging(false);
        onSlideComplete();
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      const touch = e.touches[0];
      const rect = e.currentTarget.getBoundingClientRect();
      const containerWidth = rect.width;
      const newPosition = Math.min(
        Math.max(0, touch.clientX - rect.left - 28), // 28 is half of the slider width (56/2)
        containerWidth - 56 // 56 is the slider width
      );
      setDragPosition(newPosition);

      // Check if dragged to the end (80% of the way)
      if (newPosition >= (containerWidth - 56) * 0.8) {
        setIsCompleted(true);
        setIsDragging(false);
        onSlideComplete();
      }
    }
  };

  const handleMouseUp = () => {
    if (isDragging && !isCompleted) {
      setIsDragging(false);
      // Snap back to start if not completed
      setDragPosition(0);
    }
  };

  const handleTouchEnd = () => {
    if (isDragging && !isCompleted) {
      setIsDragging(false);
      // Snap back to start if not completed
      setDragPosition(0);
    }
  };

  return (
    <Box
      sx={{
        padding: "1px",
        width: "100%",
        borderRadius: "50px",
        background: `
          radial-gradient(ellipse at top right, 
            rgba(217, 217, 217, 1) 0%, 
            rgba(175, 175, 175, 0.3) 40%, 
            rgba(164, 164, 164, 0.18) 70%, 
            rgba(115, 115, 115, 1) 100%
          ), 
          radial-gradient(ellipse at bottom left, 
            rgba(255, 255, 255, 0.8) 0%, 
            rgba(200, 200, 200, 0.4) 30%, 
            transparent 60%
          )
        `,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "82px",
          borderRadius: "49px", // Slightly smaller radius to account for gradient border
          boxShadow: "0px 4px 4px 0px #00000040",
          background: "#730206", // Solid color instead of transparent
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          cursor: "pointer",
          userSelect: "none",
        }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background Rectangle */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "49px", // Match the parent container
            backdropFilter: "blur(3px)",

            background: "#730206", // Match the container background
            zIndex: 1,
          }}
        />

        {/* Text in Center */}
        <Typography
          sx={{
            position: "absolute",
            width: "100%",
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: "26px",
            letterSpacing: "0%",
            textAlign: "center",
            color: "#ffffff",
            marginLeft: text.length > 20 ? "28px" : "0",
            zIndex: 2,
            pointerEvents: "none",
            opacity: isDragging ? 0 : 1, // Hide text when dragging
            transition: "opacity 0.2s ease-in-out", // Smooth fade transition
          }}
        >
          {text}
        </Typography>

        {/* Draggable Airplane Box */}
        <Box
          sx={{
            position: "absolute",
            left: `${dragPosition + 13}px`, // 13px margin from edge
            top: "50%",
            transform: `translateY(-50%) scale(${isDragging ? 1.1 : 1})`, // Add scaling effect when dragging
            width: "56px",
            height: "56px",
            backgroundColor: "#ffffff",
            borderRadius: "50%", // Make it perfectly circular
            boxShadow: "-5px 4px 4px 0px #00000040",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 3,
            cursor: "grab",
            transition: isDragging
              ? "transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)" // Smooth scale transition during drag
              : "left 0.3s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)", // Smooth transitions when not dragging
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          style={{
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          <img
            src={AirplaneIcon}
            alt="Airplane"
            style={{
              width: "32px", // Slightly larger airplane
              height: "auto",
              pointerEvents: "none",
              rotate: "90deg",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SlideButton;
