import { AppProvider } from "@toolpad/core/AppProvider";
import "./App.css";
import DashboardLayoutBasic from "./components/Dashboard/Dashboard";
import { DashboardLayout, PageContainer } from "@toolpad/core";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useDemoRouter } from "@toolpad/core/internal";
import { createTheme, Typography } from "@mui/material";

const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "orders",
    title: "Orders",
    icon: <BarChartIcon />,
  },
];

function App() {
  const router = useDemoRouter("/dashboard");
  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={createTheme({
        colorSchemes: { light: true },
      })}
      branding={{
        title: "ABC Corporation",
      }}
    >
      <DashboardLayout>
        <PageContainer>
          {router.pathname === "/dashboard" && <DashboardLayoutBasic />}
          {router.pathname === "/orders" && <Typography variant="h2">Reports</Typography>}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
    // <DashboardLayoutBasic />
  );
}

export default App;
