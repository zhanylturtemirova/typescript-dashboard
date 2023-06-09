import PieChart from "../../components/pieChart";
import { Box } from "@mui/material";
import Header from "../../components/header/header";
const Pie: React.FC = () => {
  return (
    <Box m="20px">
      <Header title={"Pie Chart"} subtitle={"Pie Chart Page"} />
      <Box height={"75vh"}>
        <PieChart />
      </Box>
    </Box>
  );
};
export default Pie;
