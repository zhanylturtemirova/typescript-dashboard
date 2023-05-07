import { ReactNode, useState } from "react";
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  useProSidebar,
} from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link, To } from "react-router-dom";
import { tokens } from "../../../theme/theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

type ItemProps = {
  title: string;
  to: To;
  icon: ReactNode;
  selected: string;
  setSelected: (arg: string) => void;
};
type SidebarProps = {
  isCollapsed: boolean;
  iconShape: string;
  onToggle: (collapsed: boolean) => void;
  children: React.ReactNode;
};

const Item = ({ title, to, icon, selected, setSelected }: ItemProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    // <Box
    // sx={{
    //   "& .pro-sidebar-inner": {
    //     background: `${colors.primary[400]} !important`,
    //   },
    //   "& .pro-icon-wrapper": {
    //     backgroundColor: "transparent !important",
    //   },
    //   "& .pro-inner-item": {
    //     padding: "5px 35px 5px 20px !important",
    //   },
    //   "& .pro-inner-item:hover": {
    //     color: "#868dfb !important",
    //   },
    //   "& .pro-menu-item.active": {
    //     color: "#6870fa !important",
    //   },
    // }}
    // sx={{
    //   width: `${!isCollapsed ? "100%" : "30%"} !important`,
    // }}
    // sx={{
    //   "& .MuiBox-root": {
    //     width: `${!isCollapsed ? "100%" : "7%"} !important`,
    //   },
    // }}
    //   "& .pro-icon-wrapper": {
    //     backgroundColor: "transparent !important",
    //   },
    //   // "& .css-1l8icbj": {
    //   //   paddingLeft: "0px",
    //   // },
    //   // "& .pro-inner-item": {
    //   //   padding: "5px 35px 5px 20px !important",
    //   // },
    //   "& .ps-menu-button:hover": {
    //     color: "#868dfb !important",
    //   },
    //   "& .ps-active": {
    //     color: "#6870fa !important",
    //   },
    //   "& .css-13ea65y": {
    //     width: "10%",
    //   },
    // }}
    // >
    <ProSidebar
      width={`${!isCollapsed ? "20%" : "5%"} !important`}
      rootStyles={{
        background: `${colors.primary[400]} !important`,
        border: "none",
      }}
    >
      <Menu>
        <MenuItem
          onClick={() => setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
          style={{
            margin: "10px 0 20px 0",
            color: colors.grey[100],
          }}
        >
          {!isCollapsed && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="15px"
            >
              <Typography variant="h3" color={colors.grey[100]}>
                ADMINS
              </Typography>
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          )}
        </MenuItem>

        {!isCollapsed && (
          <Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={`../../assets/user.png`}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                User Name
              </Typography>
              <Typography variant="h5" color={colors.greenAccent[500]}>
                UserAdmin
              </Typography>
            </Box>
          </Box>
        )}
        <Box data-testid="BoxWrapper" paddingLeft={isCollapsed ? "0px" : "10%"}>
          <Item
            title={isCollapsed ? "" : "Dashboard"}
            to="/"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Data
          </Typography>
          <Item
            title={isCollapsed ? "" : "Manage Team"}
            to="/team"
            icon={<PeopleOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title={isCollapsed ? "" : "Contacts Information"}
            to="/contacts"
            icon={<ContactsOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title={isCollapsed ? "" : "Invoices Balances"}
            to="/invoices"
            icon={<ReceiptOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Pages
          </Typography>
          <Item
            title={isCollapsed ? "" : "Profile Form"}
            to="/form"
            icon={<PersonOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title={isCollapsed ? "" : "Calendar"}
            to="/calendar"
            icon={<CalendarTodayOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title={isCollapsed ? "" : "FAQ Page"}
            to="/faq"
            icon={<HelpOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Charts
          </Typography>
          <Item
            title={isCollapsed ? "" : "Bar Chart"}
            to="/bar"
            icon={<BarChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title={isCollapsed ? "" : "Pie Chart"}
            to="/pie"
            icon={<PieChartOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title={isCollapsed ? "" : "Line Chart"}
            to="/line"
            icon={<TimelineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title={isCollapsed ? "" : "Geography Chart"}
            to="/geography"
            icon={<MapOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
      </Menu>
    </ProSidebar>
    // </Box>
  );
};

export default Sidebar;
