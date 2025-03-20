import { Button, Paper } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function LinksComponent() {
  const [showAll, setShowAll] = useState(false);
  const Links = [
    "Download Apna App",
   "Free Job Alerts",
    "Careers",
    "Contact Us",
    "Vulnerability Disclosure Policy",
    "International Jobs",
  ];
  const Legal= [
    "Privacy Policy",
    "User Terms & Conditions",
    "Employer Terms of Service",
    "Employer FAQs",
    ]
  const Resources = [
   "Blog",
"Sitemap",


  ];


  const visibleJob1 = showAll
    ? Links
    : Links.slice(0, 4);
  const visibleJob2 = showAll
    ? Legal
    : Legal.slice(0, 4);
  const visibleJob3 = showAll
    ? Resources
    : Resources.slice(0, 4);

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
        <div style={{ width: "30%", height: "80%" }}>
        <div
        style={{
          fontSize: 18,
          fontWeight: "bolder",
          margin:15,
          marginLeft:5
        }}
      >
        Links
      </div>
          {visibleJob1.map((Links, index) => (
            <div style={{margin:5}}>
              {Links}
            </div>
          ))}
        </div>
        <div style={{ width: "30%", height: "80%" }}>
        <div
        style={{
          fontSize: 18,
          fontWeight: "bolder",
          margin:15,
          marginLeft:5
        }}
      >
        Legal
      </div>
          {visibleJob2.map((Legal, index) => (
            <div style={{margin:5}}>
              {Legal}
            </div>
          ))}
        </div>
        <div style={{ width: "30%", height: "80%" }}>
        <div
        style={{
          fontSize: 18,
          fontWeight: "bolder",
          margin:15,
          marginLeft:5
        }}
      >
        Resources
      </div>
          
          {visibleJob3.map((Resources, index) => (
            <div style={{margin:5}}>
              {Resources}
            </div>
          ))}
        </div>
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
