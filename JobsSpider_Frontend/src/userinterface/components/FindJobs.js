import { Button, Paper } from "@mui/material";
import { useState } from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function FindJobs() {
  const [showAll, setShowAll] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const jobcity1 = [
    " Jobs in Agra",
    " Jobs in Ahmedabad",
    " Jobs in Ahmednagar",
    "Jobs in Aligarh",
    "Jobs in Ajmer",
    "Jobs in Amritsar",
    "Jobs in Asansol",
    "Jobs in Aurangabad",
    "Jobs in Bareilly",
    "Jobs in Belagavi",
    "Jobs in Bengaluru",
    "Jobs in Bhavnagar",
    "Jobs in Bhilai",
    "Jobs in Bhopal",
    "Jobs in Bhubaneswar",
    "Jobs in Bikaner",
    "Jobs in Chandigarh",
    "Jobs in Chennai",
    "Jobs in Coimbatore",
    "Jobs in Cuttack",
    "Jobs in Dehradun",
    "Jobs in Delhi-NCR",
    "Jobs in Dhanbad",
    "Jobs in Goa",
    "Jobs in Gorakhpur",
  ];
  const jobcity2 = [
    "Jobs in Guntur",
    "Jobs in Guwahati",
    "Jobs in Gwalior",
    "Jobs in Hubli",
    "Jobs in Hyderabad",
    "Jobs in Indore",
    "Jobs in Jabalpur",
    "Jobs in Jaipur",
    "Jobs in Jalandhar",
    "Jobs in Jamnagar",
    "Jobs in Jamshedpur",
    "Jobs in Jodhpur",
    "Jobs in Kannur",
    "Jobs in Kanpur",
    "Jobs in Kochi",
    "Jobs in Kolhapur",
    "Jobs in Kolkata",
    "Jobs in Kota",
    "Jobs in Lucknow",
    "Jobs in Ludhiana",
    "Jobs in Madurai",
    "Jobs in Malappuram",
    "Jobs in Mangalore",
    "Jobs in Meerut",
    "Jobs in Mumbai",
  ];

  const jobcity3 = [
    "Jobs in Mysuru",
    "Jobs in Nagpur",
    "Jobs in Nashik",
    "Jobs in Panipat",
    "Jobs in Patna",
    "Jobs in Prayagraj",
    "Jobs in Puducherry",
    "Jobs in Pune",
    "Jobs in Raipur",
    "Jobs in Rajkot",
    "Jobs in Ranchi",
    "Jobs in Saharanpur",
    "Jobs in Salem",
    "Jobs in Solapur",
    "Jobs in Surat",
    "Jobs in Thiruvananthapuram",
    "Jobs in Trichy",
    "Jobs in Udaipur",
    "Jobs in Ujjain",
    "Jobs in Vadodara",
    "Jobs in Varanasi",
    "Jobs in Vijayawada",
    "Jobs in Visakhapatnam",
    "Jobs in Warangal",
  ];

  const visibleJob1 = showAll ? jobcity1 : jobcity1.slice(0, 4);
  const visibleJob2 = showAll ? jobcity2 : jobcity2.slice(0, 4);
  const visibleJob3 = showAll ? jobcity3 : jobcity3.slice(0, 4);

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
          height: "70%"
        }}
      >
        <div style={{width: matches?'45%':"30%",height: "80%" }}>
        <div
        style={{
          fontSize: 18,
          fontWeight: "bolder",
          margin:15,
          marginLeft:5 
        }}
      >
        Find Jobs
      </div>
          {visibleJob1.map((city, index) => (
            <div style={{margin:5}}>
              {city}
            </div>
          ))}
        </div>
        <div style={{width: matches?'45%':"30%", height: "80%" ,marginTop:45}}>
          {visibleJob2.map((city, index) => (
            <div style={{margin:5}}>
              {city}
            </div>
          ))}
        </div>
        {matches?<></>:
        <div style={{ width: "30%", height: "80%",marginTop:45 }}>
          {visibleJob3.map((city, index) => (
            <div style={{margin:5}}>
              {city}
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
