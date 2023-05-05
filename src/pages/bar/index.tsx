import BarChart from "../../components/barChart";
import { Box } from "@mui/material";
import Header from "../../components/header/header";
const Bar: React.FC = () => {
  return (
    <Box m="20px">
      <Header title={"Bar Chart"} subtitle={"Bar Chart Page"} />
      <Box height={"75vh"}>
        <BarChart isDashboard />
      </Box>
    </Box>
  );
};
export default Bar;
