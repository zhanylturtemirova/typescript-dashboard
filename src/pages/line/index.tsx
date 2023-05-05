import LineChart from "../../components/lineChart";
import { Box } from "@mui/material";
import Header from "../../components/header/header";
const Line: React.FC = () => {
  return (
    <Box m="20px">
      <Header title={"Line Chart"} subtitle={"Line Chart Page"} />
      <Box height={"75vh"}>
        <LineChart />
      </Box>
    </Box>
  );
};
export default Line;
