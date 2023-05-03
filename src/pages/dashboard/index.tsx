import Box from "@mui/material/Box";
import Header from "../../components/header/header";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title={"DASHBOARD"} subtitle={"Welcome to the Dashboard"} />
      </Box>
    </Box>
  );
};

export default Dashboard;
