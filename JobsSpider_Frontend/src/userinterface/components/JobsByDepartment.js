import { Button, Paper } from "@mui/material";
import { useState } from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function JobsByDepartment() {
  const [showAll, setShowAll] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const jobsByDepartment1 = [
    "Admin / Back Office / Computer Operator Jobs",
    "Advertising / Communication Jobs",
    "Aviation & Aerospace Jobs",
    "Banking / Insurance / Financial Services Jobs",
    "Beauty, Fitness & Personal Care Jobs",
    "Construction & Site Engineering Jobs",
    "Consulting Jobs",
    "Content, Editorial & Journalism Jobs",
    "CSR & Social Service Jobs",
    "Customer Support Jobs",
    "Data Science & Analytics Jobs",
    "Delivery / Driver / Logistics Jobs",
    "Domestic Worker Jobs",
    "Energy & Mining Jobs",
    "Engineering - Hardware & Networks Jobs",
  ];
  const jobsByDepartment2 = [
    "Environment Health & Safety Jobs",
    "Facility Management Jobs",
    "Finance & Accounting Jobs",
    "Healthcare / Doctor / Hospital Staff Jobs",
    "Human Resources Jobs",
    "IT & Information Security Jobs",
    "Legal & Regulatory Jobs",
    "Maintenance Services Jobs",
    "Marketing / Brand / Digital Marketing Jobs",
    "Media Production & Entertainment Jobs",
    "Operations Jobs",
    "Production / Manufacturing / Engineering Jobs",
    "Product Management Jobs",
    "Project & Program Management Jobs",
    "Purchase & Supply Chain Jobs",
  ];
  const jobsByDepartment3 = [
    " Quality Assurance Jobs",
    " Research & Development Jobs",
    " Restaurant / Hospitality / Tourism Jobs",
    " Retail & eCommerce Jobs",
    " Risk Management & Compliance Jobs",
    " Sales & BD Jobs",
    " Security Services Jobs",
    " Shipping & Maritime Jobs",
    " Software Engineering Jobs",
    " Strategic & Top Management Jobs",
    " Tailoring, Apparel & Home Furnishing Jobs",
    " Teaching & Training Jobs",
    " UX, Design & Architecture Jobs",
  ];

  const visibleJob1 = showAll
    ? jobsByDepartment1
    : jobsByDepartment1.slice(0, 4);
  const visibleJob2 = showAll
    ? jobsByDepartment2
    : jobsByDepartment2.slice(0, 4);
  const visibleJob3 = showAll
    ? jobsByDepartment3
    : jobsByDepartment3.slice(0, 4);

  return (
    <Paper
      style={{
        width: "95%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        background: "rgb(244 242 246)",
        margin: 20,
        borderRadius: 15,
      }}
      elevation={2}
    >
     

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          height: "70%",
        }}
      >
        <div style={{ width: matches?'45%':"30%", height: "80%" }}>
        <div
        style={{
          fontSize: 18,
          fontWeight: "bolder",
          margin:15,
          marginLeft:5 
        }}
      >
        Jobs By Department
      </div>
          {visibleJob1.map((jobs, index) => (
            <div style={{margin:8}}>
              {jobs}
            </div>
          ))}
        </div>
        <div style={{ width: matches?'45%':"30%", height: "80%" ,marginTop:45}}>
          {visibleJob2.map((jobs, index) => (
            <div style={{margin:8}}>
              {jobs}
            </div>
          ))}
        </div>
        {matches?<></>:
        <div style={{ width: "30%", height: "80%" ,marginTop:45 }}>
          {visibleJob3.map((jobs, index) => (
            <div style={{margin:8}}>
              {jobs}
            </div>
          ))}
        </div>
        }
      </div>

      <div
        style={{
          fontWeight: "bolder",
          height: "15%",
          display: "flex",
          justifyContent: "center",
          margin: 20,
        }}
      >
        <Button
          variant="text"
          onClick={() => setShowAll(!showAll)}
          style={{ color: "black" }}
        >
          {showAll ? "View Less" : "View More"}
          {showAll ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </Button>
      </div>
    </Paper>
  );
}
