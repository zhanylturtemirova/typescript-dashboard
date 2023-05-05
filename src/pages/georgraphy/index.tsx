import GeographyChart from "../../components/geographyChart";
import { Box } from "@mui/material";
import Header from "../../components/header/header";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const Geography: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title={"Geography Chart"} subtitle={"Geography Chart Page"} />
      <Box
        height={"75vh"}
        border={`1px solid ${colors.grey[100]}`}
        borderRadius={"4px"}
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};
export default Geography;
