import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import category from "../../assets/category.png";
import subcategory from "../../assets/subcategory.png";
import skills from "../../assets/skills.png";
import verification from "../../assets/verification.png";
import logout from "../../assets/shutdown.png";
import reports from "../../assets/reports.png";
import company from "../../assets/company.png";
import Category from "../category/Category";
import Dashboard from "../../assets/dashboard.png";
import DisplayAllCategory from "../category/DisplayAllCategory";
import SubCategory from "../subcategory/SubCategory";
import DisplayAllSubCategory from "../subcategory/DisplayAllSubCategory";
import DisplayAllRequiredskills from "../requiredskills/DisplayAllRequiredSkills";
import RequiredSkills from "../requiredskills/RequiredSkills";
import Companies from "../company/Companies";
import CompanyVerifiaction from "../company/CompanyVerification";
import DisplayAllCompanies from "../company/DisplayAllCompanies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { serverURL } from "../../services/FetchNodeServices";

export default function DashboardAdmin() {
  const navigate = useNavigate();
  var adminData = JSON.parse(localStorage.getItem("ADMIN"))

  const menuList = () => {
    return (
      <Box
        sx={{
          margin: "35px 2px 0px 25px",
          padding: 1,
          width: "100%",
          maxWidth: 360,
          border: "1px #dfe6e9 solid",
          borderRadius: 8,
        }}
      >
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => navigate("/dashboardadmin/anylictis")}
              >
                <ListItemIcon>
                  <img src={Dashboard} alt="Dashboard" style={{ width: 28 }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <span style={{ fontFamily: "Ubuntu" }}>Dashboard</span>
                  }
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => navigate("/dashboardadmin/displayallcategory")}
              >
                <ListItemIcon>
                  <img
                    src={category}
                    alt="All Category"
                    style={{ width: 28 }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <span style={{ fontFamily: "Ubuntu" }}>All Category</span>
                  }
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() =>
                  navigate("/dashboardadmin/displayallsubcategory")
                }
              >
                <ListItemIcon>
                  <img
                    src={subcategory}
                    alt="Sub-Category"
                    style={{ width: 25 }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <span style={{ fontFamily: "Ubuntu" }}>
                      All Sub-Category
                    </span>
                  }
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() =>
                  navigate("/dashboardadmin/displayallrequiredskills")
                }
              >
                <ListItemIcon>
                  <img src={skills} alt="All skills" style={{ width: 25 }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <span style={{ fontFamily: "Ubuntu" }}>All Job Skills</span>
                  }
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton  onClick={() => navigate("/dashboardadmin/companyverification")}>
                <ListItemIcon>
                  <img
                    src={verification}
                    alt="Company Verification"
                    style={{ width: 25 }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <span style={{ fontFamily: "Ubuntu" }}>
                      Company Verification
                    </span>
                  }
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => navigate("/dashboardadmin/displayallcompanies")}
              >
                <ListItemIcon>
                  <img src={company} alt="Company List" style={{ width: 25 }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <span style={{ fontFamily: "Ubuntu" }}>Company List</span>
                  }
                />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={logout} alt="Log out" style={{ width: 25 }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <span style={{ fontFamily: "Ubuntu" }}>Log Out</span>
                  }
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={reports} alt="Log out" style={{ width: 25 }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <span style={{ fontFamily: "Ubuntu" }}>Reports</span>
                  }
                />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <div style={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <div style={{ marginLeft: 5, marginTop: 5 }}>
                <img src="/spider.png" alt="Logo" style={{ width: 43 }} />
              </div>
              <div style={{ fontWeight: 700, marginLeft: 8, fontSize: 24 }}>
                JobsSpider
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", marginRight: 8 ,fontSize:22}}>
                
               {adminData.firstname}
              </div>
              <Avatar alt="Nikhil" src={`${serverURL}/images/${adminData.picture}`} />
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container spacing={16}>
        <Grid item xs={4}>
          {menuList()}
        </Grid>
        <Grid item xs={8}>
          <Routes>
            <Route
              element={<DisplayAllCategory />}
              path={"displayallcategory"}
            />
            <Route element={<Category />} path={"category"} />
            <Route
              element={<DisplayAllSubCategory />}
              path={"displayallsubcategory"}
            />
            <Route element={<SubCategory />} path={"subcategory"} />
            <Route
              element={<DisplayAllRequiredskills />}
              path={"displayallrequiredskills"}
            />
            <Route element={<RequiredSkills />} path={"requiredskills"} />
            <Route
              element={<DisplayAllCompanies />}
              path={"displayallcompanies"}
            />
            <Route
              element={<CompanyVerifiaction />}
              path={"companyverification"}
            />
            <Route element={<Companies />} path={"companies"} />
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
}
