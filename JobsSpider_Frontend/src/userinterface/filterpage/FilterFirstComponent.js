import { Paper } from "@mui/material";
import React from "react";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import {
  Button,
  Divider,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function FirstFilterComponent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Paper
        elevation={1}
        style={{
          backgroundColor: "#fff",
          padding: 10,
          width: "15vw",
          height: "auto",
          borderRadius: 10,
          // border: '0.5px solid',
          margin: 5,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            borderRadius: "10px",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center",}}
          >
            <FilterAltIcon style={{ width: 20, height: 20, marginRight: 3,marginLeft:7 }} />
            <div style={{ fontSize: 18 }}>Filters</div>
            {/* <Button
              variant="text"
              style={{
                marginLeft: "auto",
                color: "green",
                width: "5vw",
                height: "5vh",
                fontWeight: 600,
                fontSize: "12px",
                cursor: "pointer",
                textTransform: "none",
              }}
            >
              {" "}
              Clear all{" "}
            </Button> */}
          </div>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column",}}
        >
          <Accordion defaultExpanded  elevation={0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div>
                <Typography component="span">Experience</Typography>
                <Typography style={{ fontSize: "15px", color: "grey" ,marginTop:7}}>
                  Your work expirence
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ position: "relative", width: "100%" }}>
                <Slider
                  valueLabelDisplay="on"
                  min={0}
                  max={31}
                  valueLabelFormat={(value) => {
                    if (value === 0) return "Freshers";
                    if (value === 31) return "Any";
                    return value;
                  }}
                  sx={{
                    color: "#b03a84",
                    height: 6,
                    "& .MuiSlider-thumb": {
                      height: 18,
                      width: 18,
                      backgroundColor: "#b03a84",
                      border: "1px solid #fff",
                      boxShadow: "none",
                      "&:focus, &.Mui-active, &.Mui-inactive": {
                        backgroundColor: "#b03a84",
                        boxShadow: "none",
                      },
                    },
                    "& .MuiSlider-rail": {
                      opacity: 0.5,
                      backgroundColor: "#b03a84",
                    },
                    "& .MuiSlider-valueLabel": {
                      backgroundColor: "#b03a84",
                      color: "#fff",
                      borderRadius: "5px",
                      fontSize: "12px",
                      padding: "0.10rem 0.50rem",
                    },
                  }}
                />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography style={{ fontSize: "10px" }} color="grey">
                    0 years
                  </Typography>
                  <Typography style={{ fontSize: "10px" }} color="grey">
                    31 years
                  </Typography>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        
        <Divider
          style={{
            borderColor: "rgb(185, 187, 198)",
            borderTop: "0.2px  gray",
            width: "90%",
            justifySelf:'center'
          }}
        />

        <div
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Accordion defaultExpanded elevation={0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div>
                <Typography component="span">Date Posted</Typography>
                <Typography style={{ fontSize: "15px", color: "grey" ,marginTop:7}}>
                  Your work expirence
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name="postedIn"
                    style={{ accentColor: "#1F8268" }}
                    value="-1"
                    checked
                  />
                  <label style={{ cursor: "pointer" }}>All</label>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name="postedIn"
                    style={{ accentColor: "#1F8268" }}
                    value="24"
                  />
                  <label style={{ cursor: "pointer" }}>Last 24 hours</label>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name="postedIn"
                    style={{ accentColor: "#1F8268" }}
                    value="72"
                  />
                  <label style={{ cursor: "pointer" }}>Last 3 days</label>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name="postedIn"
                    style={{ accentColor: "#1F8268" }}
                    value="168"
                  />
                  <label style={{ cursor: "pointer" }}>Last 7 days</label>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <Divider
          style={{
            borderColor: "rgb(185, 187, 198)",
            borderTop: "0.2px  gray",
            width: "90%",
            justifySelf:'center'
          }}
        />

        <div
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Accordion defaultExpanded elevation={0} >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div>
                <Typography component="span">Salary</Typography>
                <Typography style={{ fontSize: "15px", color: "grey",marginTop:7 }}>
                  Salary you expect
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ position: "relative", width: "100%" }}>
                <Slider
                  valueLabelDisplay="on"
                  min={0}
                  max={150000}
                  valueLabelFormat={(value) => {
                    if (value === 0) return "Rs";
                    if (value === 150000) return "More";
                    return value;
                  }}
                  sx={{
                    color: "#b03a84",
                    height: 6,
                    "& .MuiSlider-thumb": {
                      height: 18,
                      width: 18,
                      backgroundColor: "#b03a84",
                      border: "1px solid #fff",
                      boxShadow: "none",
                      "&:focus, &.Mui-active, &.Mui-inactive": {
                        backgroundColor: "#b03a84",
                        boxShadow: "none",
                      },
                    },
                    "& .MuiSlider-rail": {
                      opacity: 0.5,
                      backgroundColor: "#b03a84",
                    },
                    "& .MuiSlider-valueLabel": {
                      backgroundColor: "#b03a84",
                      color: "#fff",
                      borderRadius: "5px",
                      fontSize: "12px",
                    },
                  }}
                />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography style={{ fontSize: "10px" }} color="grey">
                    0 Rs
                  </Typography>
                  <Typography style={{ fontSize: "10px" }} color="grey">
                    1.5 Lakhs
                  </Typography>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <Divider
          style={{
            borderColor: "rgb(185, 187, 198)",
            borderTop: "0.2px  gray",
            width: "90%",
            justifySelf:'center'
          }}
        />

        <div
          style={{ display: "flex", flexDirection: "column"}}
        >
          <Accordion defaultExpanded elevation={0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div>
                <Typography component="span">Highest education</Typography>
                <Typography style={{ fontSize: "13px", color: "grey",marginTop:7 }}>
                  Select your highest education level to see all eligible jobs
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name="educationLevel"
                    style={{ accentColor: "#1F8268" }}
                    value="10 or Below 10th"
                  />
                  <label style={{ cursor: "pointer" }}>10 or Below 10th</label>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name="educationLevel"
                    style={{ accentColor: "#1F8268" }}
                    value="12th Pass"
                  />
                  <label style={{ cursor: "pointer" }}>12th Pass</label>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name="educationLevel"
                    style={{ accentColor: "#1F8268" }}
                    value="Diploma"
                  />
                  <label style={{ cursor: "pointer" }}>Diploma</label>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name="educationLevel"
                    style={{ accentColor: "#1F8268" }}
                    value="Graduate"
                  />
                  <label style={{ cursor: "pointer" }}>Graduate</label>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name="educationLevel"
                    style={{ accentColor: "#1F8268" }}
                    value="Post Graduate"
                  />
                  <label style={{ cursor: "pointer" }}>Post Graduate</label>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <Divider
          style={{
            borderColor: "rgb(185, 187, 198)",
            borderTop: "0.2px  gray",
            width: "90%",
            justifySelf:'center'
          }}
        />

        <div
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Accordion defaultExpanded elevation={0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div>
                <Typography component="span">Work Mode</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  marginTop: 5,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    name="workLocation"
                    style={{ accentColor: "#1F8268" }}
                    value="Work from home"
                  />
                  <label style={{ cursor: "pointer" }}>Work from home</label>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    name="workLocation"
                    style={{ accentColor: "#1F8268" }}
                    value="Work from office"
                  />
                  <label style={{ cursor: "pointer" }}>Work from office</label>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    name="workLocation"
                    style={{ accentColor: "#1F8268" }}
                    value="Work from field"
                  />
                  <label style={{ cursor: "pointer" }}>Work from field</label>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <Divider
          style={{
            borderColor: "rgb(185, 187, 198)",
            borderTop: "0.2px  gray",
            width: "90%",
            justifySelf:'center'
          }}
        />

        <div
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Accordion defaultExpanded elevation={0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div>
                <Typography component="span">Work type</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    name="educationLevel"
                    style={{ accentColor: "#1F8268" }}
                    value="10 or Below 10th"
                  />
                  <label style={{ cursor: "pointer" }}> Full time</label>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    name="educationLevel"
                    style={{ accentColor: "#1F8268" }}
                    value="12th Pass"
                  />
                  <label style={{ cursor: "pointer" }}>Part Time</label>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    name="educationLevel"
                    style={{ accentColor: "#1F8268" }}
                    value="Diploma"
                  />
                  <label style={{ cursor: "pointer" }}>Internship</label>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <Divider
          style={{
            borderColor: "rgb(185, 187, 198)",
            borderTop: "0.2px  gray",
           width: "90%",
            justifySelf:'center'
          }}
        />

        <div
          style={{ display: "flex", flexDirection: "column"}}
        >
          <Accordion defaultExpanded elevation={0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div>
                <Typography component="span">Work Shift</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    name="educationLevel"
                    style={{ accentColor: "#1F8268" }}
                    value="10 or Below 10th"
                  />
                  <label style={{ cursor: "pointer" }}>Day Shift</label>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    name="educationLevel"
                    style={{ accentColor: "#1F8268" }}
                    value="10 or Below 10th"
                  />
                  <label style={{ cursor: "pointer" }}>Night Shift</label>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <Divider
          style={{
            borderColor: "rgb(185, 187, 198)",
            borderTop: "0.2px  gray",
            width: "90%",
            justifySelf:'center'
          }}
        />

        <div
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Accordion defaultExpanded elevation={0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div>
                <Typography component="span">Department</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    name="educationLevel"
                    style={{ accentColor: "#1F8268" }}
                    value="10 or Below 10th"
                  />
                  <label style={{ cursor: "pointer" }}> Full time</label>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    name="educationLevel"
                    style={{ accentColor: "#1F8268" }}
                    value="12th Pass"
                  />
                  <label style={{ cursor: "pointer" }}>Part Time</label>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    name="educationLevel"
                    style={{ accentColor: "#1F8268" }}
                    value="Diploma"
                  />
                  <label style={{ cursor: "pointer" }}>Internship</label>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <Divider
          style={{
            borderColor: "rgb(185, 187, 198)",
            borderTop: "0.2px  gray",
            width: "90%",
            justifySelf:'center'
          }}
        />

        <div
          style={{ display: "flex", flexDirection: "column"}}
        >
          <Accordion defaultExpanded elevation={0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div>
                <Typography component="span">English level</Typography>
                <Typography style={{ fontSize: "13px", color: "grey" ,marginTop:7}}>
                  Select your English level to see all eligible jobs
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    name="educationLevel"
                    style={{ accentColor: "#1F8268" }}
                    value="10 or Below 10th"
                  />
                  <label style={{ cursor: "pointer" }}>No English</label>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    name="educationLevel"
                    style={{ accentColor: "#1F8268" }}
                    value="12th Pass"
                  />
                  <label style={{ cursor: "pointer" }}>Basic English</label>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    name="educationLevel"
                    style={{ accentColor: "#1F8268" }}
                    value="Diploma"
                  />
                  <label style={{ cursor: "pointer" }}>
                    Intermediate English
                  </label>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    name="educationLevel"
                    style={{ accentColor: "#1F8268" }}
                    value="Diploma"
                  />
                  <label style={{ cursor: "pointer" }}>Advance English</label>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <Divider
          style={{
            borderColor: "rgb(185, 187, 198)",
            borderTop: "0.2px  gray",
            width: "90%",
            justifySelf:'center'
          }}
        />

        <div
          style={{ display: "flex", flexDirection: "column"}}
        >
          <Accordion defaultExpanded elevation={0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div>
                <Typography component="span">Gender</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name="educationLevel"
                    style={{ accentColor: "#1F8268" }}
                    value="10 or Below 10th"
                  />
                  <label style={{ cursor: "pointer" }}>Male</label>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name="educationLevel"
                    style={{ accentColor: "#1F8268" }}
                    value="12th Pass"
                  />
                  <label style={{ cursor: "pointer" }}>Female</label>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name="educationLevel"
                    style={{ accentColor: "#1F8268" }}
                    value="Diploma"
                  />
                  <label style={{ cursor: "pointer" }}>other</label>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <Divider
          style={{
            borderColor: "rgb(185, 187, 198)",
            borderTop: "0.2px  gray",
            width: "90%",
            justifySelf:'center'
          }}
        />

        <div
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Accordion defaultExpanded elevation={0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div>
                <Typography component="span">Sort By</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name="educationLevel"
                    style={{ accentColor: "#1F8268" }}
                    value="10 or Below 10th"
                  />
                  <label style={{ cursor: "pointer" }}>Relevant</label>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name="educationLevel"
                    style={{ accentColor: "#1F8268" }}
                    value="12th Pass"
                  />
                  <label style={{ cursor: "pointer" }}>
                    Salary - High to low
                  </label>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name="educationLevel"
                    style={{ accentColor: "#1F8268" }}
                    value="Diploma"
                  />
                  <label style={{ cursor: "pointer" }}>
                    Date posted - New to Old
                  </label>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </Paper>
    </div>
  );
}
