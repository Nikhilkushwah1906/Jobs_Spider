import { Paper } from "@mui/material";
import React, { useEffect } from "react";
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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function FirstFilterComponent({exp,setExp, time, setTime}) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = useState(0);
  const [edValue, setEdValue] = useState(null);

  const handleDateChange = (event) => {
    setValue(event.target.value);
    setTime(event.target.value);
  };

  const handleEducationChange = (event) => {
    alert(event.target.value)
    setEdValue(event.target.value);
    // setTime(event.target.value);
  };

  useEffect(function(){
    setExp(exp)
  },[exp])

  const handleChange=(e)=>{
    setExp(e.target.value)
  }

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
          <div style={{ display: "flex", alignItems: "center" }}>
            <FilterAltIcon
              style={{ width: 20, height: 20, marginRight: 3, marginLeft: 7 }}
            />
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

        <div style={{ display: "flex", flexDirection: "column" }}>
          <Accordion defaultExpanded elevation={0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div>
                <Typography component="span">Experience</Typography>
                <Typography
                  style={{ fontSize: "15px", color: "grey", marginTop: 7 }}
                >
                  Your work expirence
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ position: "relative", width: "100%" }}>
                <Slider
                value={exp}
                onChange={(e)=>handleChange(e)}
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
            justifySelf: "center",
          }}
        />

       
<div
          style={{ display: "flex", flexDirection: "column", paddingRight: 5 }}
        >
          <Accordion defaultExpanded disableGutters elevation={0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div>
                <Typography component="span">Date Posted</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <div>
                  <FormControl>
                    <FormLabel></FormLabel>
                    <RadioGroup value={value} defaultValue="0" onChange={handleDateChange}>
                      <FormControlLabel
                        value="0"
                        control={
                          <Radio
                            sx={{
                              "& .MuiSvgIcon-root": {
                                fontSize: 18,
                                color: "#b03a84",
                              },
                            }}
                          />
                        }
                        label="All"
                        sx={{
                          marginBottom: -1,
                          "& .MuiFormControlLabel-label": { fontSize: "14px" },
                        }}
                      />
                      <FormControlLabel
                        value="1"
                        control={
                          <Radio
                            sx={{
                              "& .MuiSvgIcon-root": {
                                fontSize: 18,
                                color: "#b03a84",
                              },
                            }}
                          />
                        }
                        label="Last 24 hours"
                        sx={{
                          marginBottom: -1,
                          "& .MuiFormControlLabel-label": { fontSize: "14px" },
                        }}
                      />
                      <FormControlLabel
                        value="3"
                        control={
                          <Radio
                            sx={{
                              "& .MuiSvgIcon-root": {
                                fontSize: 18,
                                color: "#b03a84",
                              },
                            }}
                          />
                        }
                        label="Last 3 Days"
                        sx={{
                          marginBottom: -1,
                          "& .MuiFormControlLabel-label": { fontSize: "14px" },
                        }}
                      />
                      <FormControlLabel
                        value="7"
                        control={
                          <Radio
                            sx={{
                              "& .MuiSvgIcon-root": {
                                fontSize: 18,
                                color: "#b03a84",
                              },
                            }}
                          />
                        }
                        label="Last 7 Days"
                        sx={{
                          marginBottom: -1,
                          "& .MuiFormControlLabel-label": { fontSize: "14px" },
                        }}
                      />
                    </RadioGroup>
                  </FormControl>
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
            justifySelf: "center",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <Accordion defaultExpanded elevation={0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div>
                <Typography component="span">Salary</Typography>
                <Typography
                  style={{ fontSize: "15px", color: "grey", marginTop: 7 }}
                >
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
            justifySelf: "center",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          
          <Accordion defaultExpanded disableGutters elevation={0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <div>
                <Typography component="span">Highest education</Typography>
                <Typography
                  style={{ fontSize: "13px", color: "grey", marginTop: 7 }}
                >
                  Select your highest education level to see all eligible jobs
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <div>
                  <FormControl>
                    <FormLabel></FormLabel>
                    <RadioGroup value={edValue}  onChange={handleEducationChange}>
                      <FormControlLabel
                        value="0"
                        control={
                          <Radio
                            sx={{
                              "& .MuiSvgIcon-root": {
                                fontSize: 18,
                                color: "#b03a84",
                              },
                            }}
                          />
                        }
                        label="10 or Below 10th"
                        sx={{
                          marginBottom: -1,
                          "& .MuiFormControlLabel-label": { fontSize: "14px" },
                        }}
                      />
                      <FormControlLabel
                        value="1"
                        control={
                          <Radio
                            sx={{
                              "& .MuiSvgIcon-root": {
                                fontSize: 18,
                                color: "#b03a84",
                              },
                            }}
                          />
                        }
                        label="12th Pass"
                        sx={{
                          marginBottom: -1,
                          "& .MuiFormControlLabel-label": { fontSize: "14px" },
                        }}
                      />
                      <FormControlLabel
                        value="3"
                        control={
                          <Radio
                            sx={{
                              "& .MuiSvgIcon-root": {
                                fontSize: 18,
                                color: "#b03a84",
                              },
                            }}
                          />
                        }
                        label="
Diploma"
                        sx={{
                          marginBottom: -1,
                          "& .MuiFormControlLabel-label": { fontSize: "14px" },
                        }}
                      />
                      <FormControlLabel
                        value="7"
                        control={
                          <Radio
                            sx={{
                              "& .MuiSvgIcon-root": {
                                fontSize: 18,
                                color: "#b03a84",
                              },
                            }}
                          />
                        }
                        label="Graduate"
                        sx={{
                          marginBottom: -1,
                          "& .MuiFormControlLabel-label": { fontSize: "14px" },
                        }}
                      />
                      <FormControlLabel
                        value="8"
                        control={
                          <Radio
                            sx={{
                              "& .MuiSvgIcon-root": {
                                fontSize: 18,
                                color: "#b03a84",
                              },
                            }}
                          />
                        }
                        label="Post Graduate"
                        sx={{
                          marginBottom: -1,
                          "& .MuiFormControlLabel-label": { fontSize: "14px" },
                        }}
                      />
                    </RadioGroup>
                  </FormControl>
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
            justifySelf: "center",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
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
            justifySelf: "center",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
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
            justifySelf: "center",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
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
            justifySelf: "center",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
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
            justifySelf: "center",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <Accordion defaultExpanded elevation={0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div>
                <Typography component="span">English level</Typography>
                <Typography
                  style={{ fontSize: "13px", color: "grey", marginTop: 7 }}
                >
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
            justifySelf: "center",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
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
            justifySelf: "center",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
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
