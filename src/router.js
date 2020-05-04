// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
// core components/views for layout
import Dashboard from "./pages/DashBoard";
import UserProfile from "./pages/UserProfile";
import TableDemo from "./pages/TableDemo";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    component: Dashboard,
  },
  { 
    path: "/user",
    name: "User Profile",
    icon: PeopleIcon,
    component: UserProfile,
  },
  {
    path: "/table",
    name: "Report",
    icon: BarChartIcon,
    component: TableDemo,
  }
];

export default dashboardRoutes;
