import React from "react";
import { ColorModeContext, useMode } from "./theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./pages/shared/topbar/Topbar";
import Dashboard from "./pages/dashboard";
import Team from "./pages/team";
import Invoices from "./pages/invoices";
import Contacts from "./pages/contacts";
import Form from "./pages/form";
import Line from "./pages/line";
import Bar from "./pages/bar";
import Pie from "./pages/pie";
import FAQ from "./pages/faq";
import Geography from "./pages/georgraphy";
import Calendar from "./pages/calendar";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./pages/shared/sidebar/Sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ProSidebarProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ProSidebarProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
