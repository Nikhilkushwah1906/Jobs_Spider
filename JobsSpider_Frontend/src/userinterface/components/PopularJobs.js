import { Button, Paper } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function PopularJobs() {
  const [showAll, setShowAll] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  
  const popularjobs1 = [
    "Delivery Person Jobs",
    "Accounts / Finance Jobs",
    "Sales (Field Work)",
    "Human Resource",
    "Backoffice Jobs",
  ];
  const popularjobs2 = [
    "Business Development ",
    " Telecaller / BPO",
    " Work from Home Jobs",
    "Part Time Jobs",
    "Full Time Jobs",
  ];
  const popularjobs3 = [
    "Night Shift Jobs",
    "Freshers Jobs",
    "Jobs for Women",
    "Jobs for 10th pass",
    "Jobs for 12th pass",
  ];

  const visibleJob1 = showAll ? popularjobs1 : popularjobs1.slice(0, 4);
  const visibleJob2 = showAll ? popularjobs2 : popularjobs2.slice(0, 4);
  const visibleJob3 = showAll ? popularjobs3 : popularjobs3.slice(0, 4);

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
          alignItems: "center",
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
        Popular Jobs
      </div>
          {visibleJob1.map((jobs, index) => (
            <div style={{margin:5}}>
              {jobs}
            </div>
          ))}
        </div>
        <div style={{ width: matches?'45%':"30%", height: "80%" ,marginTop:45}}>
          {visibleJob2.map((jobs, index) => (
            <div style={{margin:5}}>
              {jobs}
            </div>
          ))}
        </div>
        {matches?<></>:
        <div style={{ width: "30%", height: "80%" ,marginTop:45}}>
          {visibleJob3.map((jobs, index) => (
            <div style={{margin:5}}>
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
