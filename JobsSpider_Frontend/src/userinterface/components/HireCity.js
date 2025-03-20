import { Button, Paper } from "@mui/material";
import { useState } from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function HireCity() {
  const [showAll, setShowAll] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const hirecity1 = [
    " Hire in Agra",
    " Hire in Ahmedabad",
    " Hire in Ahmednagar",
    "Hire in Aligarh",
    "Hire in Ajmer",
    "Hire in Amritsar",
    "Hire in Asansol",
    "Hire in Aurangabad",
    "Hire in Bareilly",
    "Hire in Belagavi",
    "Hire in Bengaluru",
    "Hire in Bhavnagar",
    "Hire in Bhilai",
    "Hire in Bhopal",
    "Hire in Bhubaneswar",
    "Hire in Bikaner",
    "Hire in Chandigarh",
    "Hire in Chennai",
    "Hire in Coimbatore",
    "Hire in Cuttack",
    "Hire in Dehradun",
    "Hire in Delhi-NCR",
    "Hire in Dhanbad",
    "Hire in Goa",
    "Hire in Gorakhpur",
  ];
  const hirecity2 = [
    "Hire in Guntur",
    "Hire in Guwahati",
    "Hire in Gwalior",
    "Hire in Hubli",
    "Hire in Hyderabad",
    "Hire in Indore",
    "Hire in Jabalpur",
    "Hire in Jaipur",
    "Hire in Jalandhar",
    "Hire in Jamnagar",
    "Hire in Jamshedpur",
    "Hire in Jodhpur",
    "Hire in Kannur",
    "Hire in Kanpur",
    "Hire in Kochi",
    "Hire in Kolhapur",
    "Hire in Kolkata",
    "Hire in Kota",
    "Hire in Lucknow",
    "Hire in Ludhiana",
    "Hire in Madurai",
    "Hire in Malappuram",
    "Hire in Mangalore",
    "Hire in Meerut",
    "Hire in Mumbai",
  ];
  const hirecity3 = [
    "Hire in Mysuru",
    "Hire in Nagpur",
    "Hire in Nashik",
    "Hire in Panipat",
    "Hire in Patna",
    "Hire in Prayagraj",
    "Hire in Puducherry",
    "Hire in Pune",
    "Hire in Raipur",
    "Hire in Rajkot",
    "Hire in Ranchi",
    "Hire in Saharanpur",
    "Hire in Salem",
    "Hire in Solapur",
    "Hire in Surat",
    "Hire in Thiruvananthapuram",
    "Hire in Trichy",
    "Hire in Udaipur",
    "Hire in Ujjain",
    "Hire in Vadodara",
    "Hire in Varanasi",
    "Hire in Vijayawada",
    "Hire in Visakhapatnam",
    "Hire in Warangal",
  ];

  const visibleJob1 = showAll ? hirecity1 : hirecity1.slice(0, 4);
  const visibleJob2 = showAll ? hirecity2 : hirecity2.slice(0, 4);
  const visibleJob3 = showAll ? hirecity3 : hirecity3.slice(0, 4);

  return (
    <Paper
      style={{
        width: "95%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        background:'rgb(244 242 246)',
        margin:20,
        borderRadius:15
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
        <div style={{width: matches?'45%':"30%", height: "80%" }}>
        <div
        style={{
          fontSize: 18,
          fontWeight: "bolder",
          margin:15,
          marginLeft:5 
        }}
      >
        Start Hiring
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
        <div style={{ width: "30%", height: "80%" ,marginTop:45}}>
          {visibleJob3.map((city, index) => (
            <div style={{margin:5}}>
              {city}
            </div>
          ))}
        </div>
        }
      </div>

      <div style={{
          fontWeight: "bolder",
          height: "15%",
          display:'flex',
          justifyContent:'center',
          margin:20}}>
        <Button
          variant="text"
          onClick={() => setShowAll(!showAll)}
          style={{color:"black"}}
        >
          {showAll ? "View Less" : "View More"}
          {showAll ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </Button>
      </div>
    </Paper>
  );
}
