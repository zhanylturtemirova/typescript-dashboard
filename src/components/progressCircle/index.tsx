import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";
interface ProgressCircleProps {
  progress?: string;
  size?: string;
}
const ProgressCircle: React.FC<ProgressCircleProps> = ({
  progress = "0.75",
  size = "40",
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = parseInt(progress) * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55% transparent 56%),
        conic-gradien(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
        ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    ></Box>
  );
};