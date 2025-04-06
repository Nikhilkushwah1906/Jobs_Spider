import * as React from "react";
import { useStyles } from "./CompanyJobsCSS";
import { Button, Divider, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TitleComponent from "../components/TitleComponent";
import { Select, InputLabel, FormControl, MenuItem } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Checkbox from "@mui/material/Checkbox";
import { useState, useEffect } from "react";
import { postData, getData } from "../../services/FetchNodeServices";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Swal from "sweetalert2";

export default function CompanyJobs() {
  const classes = useStyles();

  const [companyName, setComapnyName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [experience, setExperience] = useState("");
  const [jobType, setJobType] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [schedule, setSchedule] = useState("");
  const [benefits, setBenefits] = useState("");
  const [postDate, setPostDate] = useState("");
  const [deadlineDate, setDeadlineDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [supplementalPay, setSupplementalPay] = useState("");
  const [contactPerson, setcontactPerson] = useState("");
  const [emailId, SetEmailId] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [questions, setQuestions] = useState("");

  const [formError, setFormError] = useState({ filename: "" });

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const [categoryList, setCategoryList] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [skillsList, setSkillsList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [city, setCity] = useState("");

  /*****************Data Submition******************/

  const handleClick = async () => {
    var error = validateData();
    if (error == false) {
      var body = {
        companyid: companyName,
        categoryid: categoryId,
        subcategoryid: subCategoryId,
        skills: JSON.stringify(skills),
        educationqualification: JSON.stringify(education),
        expereince: experience,
        jobdescription: jobDescription,
        jobtype: jobType,
        minsalary: minSalary,
        maxsalary: maxSalary,
        schedule: schedule,
        benefits: benefits,
        worklocationcity: JSON.stringify(city),
        supplementalpay: supplementalPay,
        postdate: postDate,
        applicationdeadline: deadlineDate,
        expectedstart: startDate,
        applicationquestion: questions,
        contactperson: contactPerson,
        emailaddress: emailId,
        mobileno: mobileNo,
      };

      var response = await postData("companyjobs/submit_companyjobs", body);

      if (response.status) {
        Swal.fire({
          icon: "success",
          text: response.message,
          toast: true,
        });
      } else {
        Swal.fire({
          icon: "error",
          text: response.message,
          toast: true,
        });
      }
      handleClear();
    }
  };

  /******************************************/

  /*****************Error Handling******************/

  const handleError = (label, message) => {
    setFormError((prev) => ({ ...prev, [label]: message }));
  };

  const validateData = () => {
    var error = false;
    if (companyName.length == 0) {
      handleError("companyname", "companyname should not be blank...");
      error = true;
    }
    if (categoryId.length == 0) {
      handleError("categoryid", "categoryId should not be blank...");
      error = true;
    }
    if (skills.length == 0) {
      handleError("skill", "skill should not be blank...");
      error = true;
    }
    if (education.length == 0) {
      handleError("qualification", "qualification should not be blank...");
      error = true;
    }
    // if (postDate.length == 0) {
    //   handleError("postdate", "PostDate should not be blank...");
    //   error = true;
    // }
    // if (deadlineDate.length == 0) {
    //   handleError("deadlinedate", "DeadlineDate should not be blank...");
    //   error = true;
    // }
    // if (startDate.length == 0) {
    //   handleError("startdate", "startDate should not be blank...");
    //   error = true;
    // }
    if (city.length == 0) {
      handleError("city", "city should not be blank...");
      error = true;
    }
    if (subCategoryId.length == 0) {
      handleError("subcategoryid", "subCategoryId should not be blank...");
      error = true;
    }
    // if (emailId.length == 0) {
    //   handleError("emailid", "emailid should not be blank...");
    //   error = true;
    // }
    // if (!emailId.endsWith("@gmail.com")) {
    //   handleError("emailid", "Invalid emailid...");
    //   error = true;
    // }
    if (mobileNo.length == 0) {
      handleError("mobileno", "mobileno should not be blank...");
      error = true;
    }
    if (mobileNo.length > 10) {
      handleError("mobileno", "Invalid Mobile No...");
      error = true;
    }
    if (contactPerson.length == 0) {
      handleError("contactperson", "contactperson should not be blank...");
      error = true;
    }
    if (jobDescription.length == 0) {
      handleError("jobdescription", "jobDescription should not be blank...");
      error = true;
    }
    // if (benefits.length == 0) {
    //   handleError("benefits", "benefits should not be blank...");
    //   error = true;
    // }
    // if (supplementalPay.length == 0) {
    //   handleError("supplementalpay", "supplementalPay should not be blank...");
    //   error = true;
    // }
    if (experience.length == 0) {
      handleError("expereince", "experience should not be blank...");
      error = true;
    }
    if (jobType.length == 0) {
      handleError("jobtype", "jobType should not be blank...");
      error = true;
    }
    if (minSalary.length == 0) {
      handleError("minsalary", "minSalary should not be blank...");
      error = true;
    }
    if (maxSalary.length == 0) {
      handleError("maxsalary", "maxSalary should not be blank...");
      error = true;
    }
    if (postDate.length == 0) {
      handleError("postdate", "postDate should not be blank...");
      error = true;
    }
    if (deadlineDate.length == 0) {
      handleError("deadlinedate", "deadlineDate should not be blank...");
      error = true;
    }
    if (startDate.length == 0) {
      handleError("startdate", "startDate should not be blank...");
      error = true;
    }
    // if (questions.length == 0) {
    //   handleError("question", "questions should not be blank...");
    //   error = true;
    // }
    if (schedule.length == 0) {
      handleError("schedule", "schedule should not be blank...");
      error = true;
    }
    return error;
  };

  /******************************************/

  /*****************Use Effect******************/

  useEffect(() => {
    fetchAllEducations();
    fetchAllCitys();
    fetchAllCategory();
  }, []);

  /******************************************/

  /*****************Category******************/

  const fetchAllCategory = async () => {
    var response = await getData("companyjobs/display_all_category");
    setCategoryList(response.data);
  };

  const fillCategoryMenu = () => {
    return categoryList.map((item) => {
      return <MenuItem value={item.categoryid}>{item.categoryname}</MenuItem>;
    });
  };

  const handleCategoryChange = (e) => {
    setCategoryId(e.target.value);
    fetchAllSubCategory(e.target.value);
  };

  /**********************************************/

  /*****************Sub Category******************/

  const fetchAllSubCategory = async (categoryid) => {
    var response = await postData("companyjobs/display_all_subcategory", {
      categoryid,
    });
    setSubCategoryList(response.data);
  };

  const fillSubCategoryMenu = () => {
    return subCategoryList.map((item) => {
      return (
        <MenuItem value={item.subcategoryid}>{item.subcategoryname}</MenuItem>
      );
    });
  };

  const handleSubCategoryChange = (e) => {
    setSubCategoryId(e.target.value);
    fetchAllSkills(e.target.value);
  };

  /**********************************************/

  /*****************Skills******************/

  const fetchAllSkills = async (subcategoryid) => {
    var response = await postData("companyjobs/display_all_skills", {
      subcategoryid,
    });
    setSkillsList(response.data);
  };

  const handleSkill = (e, v) => {
    setSkills(v);
  };

  /**********************************************/

  /*****************Education******************/

  const fetchAllEducations = async () => {
    var response = await getData("companyjobs/display_all_educations");
    setEducationList(response.data);
  };

  const educationqualification = [
    { title: "High School" },
    { title: "Higher Secondery School" },
    { title: "Betech" },
    { title: "BSC" },
    { title: "MBA" },
    { title: "BCOM" },
    { title: "BA" },
    { title: "MCA" },
  ];

  const handleEducation = (e, v) => {
    setEducation(v);
  };

  /**********************************************/

  /*****************City******************/
  const fetchAllCitys = async () => {
    var response = await getData("statecity/display_all_city");
    setCityList(response.data);
  };

  const handleCitys = (e, v) => {
    setCity(v);
  };
  /**********************************************************/

  /****************All Clear******************/

  const handleClear = () => {
    setCategoryId("");
    setSubCategoryId("");
    setComapnyName("");
    setJobDescription("");
    setSkills("");
    setSkillsList([]);
    setEducationList([]);
    setCityList([]);
    fetchAllSkills("");
    setEducation("");
    fetchAllEducations();
    setExperience("");
    setJobType("");
    setMinSalary("");
    setMaxSalary("");
    setSchedule("");
    setCity("");
    fetchAllCitys();
    setBenefits("");
    setPostDate("");
    setDeadlineDate("");
    setStartDate("");
    setSupplementalPay("");
    setcontactPerson("");
    SetEmailId("");
    setMobileNo("");
    setQuestions("");
  };

  /***************************************************/

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <TitleComponent title="Job Registeration" />
          </Grid>

          <Grid size={12} style={{ display: "flex", justifyContent: "center" }}>
            <Divider style={{ width: "98%" }} />
          </Grid>

          <Grid size={4}>
            <TextField
              label="Company Name"
              value={companyName}
              onChange={(e) => setComapnyName(e.target.value)}
              fullWidth
              helperText={formError.companyname}
              error={formError.companyname}
              onFocus={() => handleError("companyname", "")}
            />
          </Grid>

          <Grid size={4}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={categoryId}
                label="Category"
                helperText={formError.categoryid}
                error={formError.categoryid}
                onFocus={() => handleError("categoryid", "")}
                onChange={handleCategoryChange}
              >
                {fillCategoryMenu()}
              </Select>
              <div className={classes.helperTextStyle}>
                {formError.categoryid}
              </div>
            </FormControl>
          </Grid>

          <Grid size={4}>
            <FormControl fullWidth>
              <InputLabel>Sub Category</InputLabel>
              <Select
                label="Sub Category"
                helperText={formError.subcategoryid}
                error={formError.subcategoryid}
                onFocus={() => handleError("subcategoryid", "")}
                onChange={handleSubCategoryChange}
                value={subCategoryId}
              >
                {fillSubCategoryMenu()}
              </Select>
              <div className={classes.helperTextStyle}>
                {formError.subcategoryid}
              </div>
            </FormControl>
          </Grid>

          <Grid size={12}>
            <ReactQuill
              onFocus={() => handleError("jobdescription", "")}
              value={jobDescription}
              onChange={(e) => setJobDescription(e)}
              placeholder="Job Description"
              theme="snow"
              modules={{
                toolbar: {
                  container: [
                    [{ header: "1" }, { header: "2" }, { font: [] }],
                    [{ size: [] }],
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [
                      { list: "ordered" },
                      { list: "bullet" },
                      { indent: "-1" },
                      { indent: "+1" },
                    ],
                    ["link", "image", "video"],
                    ["code-block"],
                    ["clean"],
                  ],
                },
                clipboard: {
                  matchVisual: false,
                },
              }}
              formats={[
                "header",
                "font",
                "size",
                "bold",
                "italic",
                "underline",
                "strike",
                "blockquote",
                "list",
                "bullet",
                "indent",
                "link",
                "image",
                "video",
                "code-block",
              ]}
            />
            <div className={classes.helperTextStyle}>
              {formError.jobdescription}
            </div>
          </Grid>

          <Grid size={6}>
            <Autocomplete
              fullWidth
              multiple
              onChange={handleSkill}
              options={skillsList}
              disableCloseOnSelect
              getOptionLabel={(option) => option.skills}
              renderOption={(props, option, { selected }) => {
                const { key, ...optionProps } = props;
                return (
                  <li key={option.skillid} {...optionProps}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                      value={option.skillid}
                    />
                    {option.skills}
                  </li>
                );
              }}
              style={{ width: "auto" }}
              renderInput={(params) => (
                <TextField {...params} label="Skills" placeholder="Skills" />
              )}
            />
            <div className={classes.helperTextStyle}>{formError.skill}</div>
          </Grid>

          <Grid item xs={6}>
            <Autocomplete
              multiple
              onChange={handleEducation}
              options={educationList}
              disableCloseOnSelect
              getOptionLabel={(option) => option.title}
              renderOption={(props, option, { selected }) => {
                const { key, ...optionProps } = props;
                return (
                  <li key={option.qualificationid} {...optionProps}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                      value={option.title}
                    />
                    {option.qualificationname}
                  </li>
                );
              }}
              style={{ width: 540 }}
              renderInput={(params) => (
                <TextField
                  fullWidth
                  {...params}
                  label="Education Qualification"
                  placeholder="Education Qualification"
                />
              )}
            />
          </Grid>

          <Grid size={6}>
            <FormControl fullWidth>
              <InputLabel>Experience</InputLabel>
              <Select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                label="Experience"
                helperText={formError.expereince}
                error={formError.expereince}
                onFocus={() => handleError("expereince", "")}
              >
                <MenuItem value={"More Than 10 Years"}>
                  More Than 10 Years
                </MenuItem>
                <MenuItem value={"10"}>More than 10 year</MenuItem>
                <MenuItem value={"5-10"}>5-10 year</MenuItem>
                <MenuItem value={"2-5"}>2-5 year</MenuItem>
                <MenuItem value={"1-2"}>1-2 year</MenuItem>
                <MenuItem value={"0-1"}>Fresher</MenuItem>
              </Select>
              <div className={classes.helperTextStyle}>
                {formError.expereince}
              </div>
            </FormControl>
          </Grid>

          <Grid size={6}>
            <FormControl fullWidth>
              <InputLabel>Job Type</InputLabel>
              <Select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                helperText={formError.jobtype}
                error={formError.jobtype}
                onFocus={() => handleError("jobtype", "")}
                label="Job Type"
              >
                <MenuItem value={"Freshers"}>Freshers</MenuItem>
                <MenuItem value={"Full Time"}>Full Time</MenuItem>
                <MenuItem value={"Part Time"}>Part Time</MenuItem>
                <MenuItem value={"Internship</"}>Internship</MenuItem>
                <MenuItem value={"Remote"}>Remote</MenuItem>
                <MenuItem value={"Hybrid"}>Hybrid</MenuItem>
                <MenuItem value={"International"}>International</MenuItem>
                <MenuItem value={"Jobs for Women"}>Jobs For Women</MenuItem>
                <MenuItem value={"Work From Home"}>Work From Home</MenuItem>
                <MenuItem value={"Work From Ofiice"}>Work From Office</MenuItem>
                <MenuItem value={"Contract Based"}>Contract Based</MenuItem>
              </Select>
              <div className={classes.helperTextStyle}>{formError.jobtype}</div>
            </FormControl>
          </Grid>

          <Grid size={6}>
            <TextField
              value={minSalary}
              onChange={(e) => setMinSalary(e.target.value)}
              label="Min Salary / year"
              fullWidth
              helperText={formError.minsalary}
              error={formError.minsalary}
              onFocus={() => handleError("minsalary", "")}
            />
          </Grid>

          <Grid size={6}>
            <TextField
              value={maxSalary}
              onChange={(e) => setMaxSalary(e.target.value)}
              label="Max Salary / year"
              fullWidth
              helperText={formError.maxsalary}
              error={formError.maxsalary}
              onFocus={() => handleError("maxsalary", "")}
            />
          </Grid>

          <Grid size={6}>
            <FormControl fullWidth>
              <InputLabel>Schedule</InputLabel>
              <Select
                value={schedule}
                onChange={(e) => setSchedule(e.target.value)}
                error={formError.schedule}
                label="Schedule"
                onFocus={() => handleError("schedule", "")}
              >
                <MenuItem value={"Day Shift"}>Day Shift</MenuItem>
                <MenuItem value={"Night Shift"}>Night Shift</MenuItem>
                <MenuItem value={"Day Shift (US)"}>Day Shift (US)</MenuItem>
                <MenuItem value={"Night Shift (US)"}>Night Shift (US)</MenuItem>
              </Select>
              <div className={classes.helperTextStyle}>
                {formError.schedule}
              </div>
            </FormControl>
          </Grid>

          <Grid size={6}>
            <Autocomplete
              multiple
              onChange={handleCitys}
              options={cityList}
              disableCloseOnSelect
              getOptionLabel={(option) => option.city}
              renderOption={(props, option, { selected }) => {
                const { key, ...optionProps } = props;
                return (
                  <li key={option.id} {...optionProps}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                      value={option.id}
                    />
                    {option.city}
                  </li>
                );
              }}
              style={{ width: "100%" }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="WorkLocation City"
                  placeholder="WorkLocationcity"
                />
              )}
            />
          </Grid>

          <Grid size={12} fullWidth>
            <ReactQuill
              value={benefits}
              onChange={(e) => setBenefits(e)}
              placeholder="Benefits"
              theme="snow"
              modules={{
                toolbar: {
                  container: [
                    [{ header: "1" }, { header: "2" }, { font: [] }],
                    [{ size: [] }],
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [
                      { list: "ordered" },
                      { list: "bullet" },
                      { indent: "-1" },
                      { indent: "+1" },
                    ],
                    ["link", "image", "video"],
                    ["code-block"],
                    ["clean"],
                  ],
                },
                clipboard: {
                  matchVisual: false,
                },
              }}
              formats={[
                "header",
                "font",
                "size",
                "bold",
                "italic",
                "underline",
                "strike",
                "blockquote",
                "list",
                "bullet",
                "indent",
                "link",
                "image",
                "video",
                "code-block",
              ]}
              // onFocus={() => handleError("benefits", "")}
            />
            {/* <div className={classes.helperTextStyle}>{formError.benefits}</div> */}
          </Grid>

          <Grid size={4}>
            <TextField
              value={postDate}
              // helperText={formError.postdate}
              // error={formError.postdate}
              // onFocus={() => formError("postdate", "")}
              onChange={(e) => setPostDate(e.target.value)}
              label="post date"
              type="date"
              fullWidth
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
          </Grid>

          <Grid size={4}>
            <TextField
              value={deadlineDate}
              // helperText={formError.deadlinedate}
              // error={formError.deadlinedate}
              // onFocus={() => formError("deadlinedate", "")}
              onChange={(e) => setDeadlineDate(e.target.value)}
              label="Application Deadline"
              type="date"
              fullWidth
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
          </Grid>

          <Grid size={4}>
            <TextField
              value={startDate}
              // helperText={formError.startdate}
              // error={formError.startdate}
              // onFocus={() => formError("startdate", "")}
              onChange={(e) => setStartDate(e.target.value)}
              label="Expected Start"
              type="date"
              fullWidth
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
          </Grid>

          <Grid size={12} fullWidth>
            <ReactQuill
              value={supplementalPay}
              // onFocus={() => handleError("supplementalpay", "")}
              onChange={(e) => setSupplementalPay(e)}
              placeholder="Supplemental Pay"
              theme="snow"
              modules={{
                toolbar: {
                  container: [
                    [{ header: "1" }, { header: "2" }, { font: [] }],
                    [{ size: [] }],
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [
                      { list: "ordered" },
                      { list: "bullet" },
                      { indent: "-1" },
                      { indent: "+1" },
                    ],
                    ["link", "image", "video"],
                    ["code-block"],
                    ["clean"],
                  ],
                },
                clipboard: {
                  matchVisual: false,
                },
              }}
              formats={[
                "header",
                "font",
                "size",
                "bold",
                "italic",
                "underline",
                "strike",
                "blockquote",
                "list",
                "bullet",
                "indent",
                "link",
                "image",
                "video",
                "code-block",
              ]}
            />
            {/* <div className={classes.helperTextStyle}>
              {formError.supplementalpay}
            </div> */}
          </Grid>

          <Grid size={4}>
            <TextField
              value={contactPerson}
              onChange={(e) => setcontactPerson(e.target.value)}
              label="Contact Person"
              fullWidth
              onFocus={() => handleError("contactperson", "")}
              helperText={formError.contactperson}
              error={formError.contactperson}
            />
          </Grid>

          <Grid size={4}>
            <TextField
              value={emailId}
              onChange={(e) => SetEmailId(e.target.value)}
              label="Email Address"
              fullWidth
              helperText={formError.emailid}
              error={formError.emailid}
              onFocus={() => handleError("emailid", "")}
            />
          </Grid>

          <Grid size={4}>
            <TextField
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              label="Mobile No"
              fullWidth
              helperText={formError.mobileno}
              error={formError.mobileno}
              onFocus={() => handleError("mobileno", "")}
            />
          </Grid>

          <Grid size={12} fullWidth>
            <ReactQuill
              value={questions}
              onChange={(e) => setQuestions(e)}
              placeholder="Application Question"
              theme="snow"
              modules={{
                toolbar: {
                  container: [
                    [{ header: "1" }, { header: "2" }, { font: [] }],
                    [{ size: [] }],
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [
                      { list: "ordered" },
                      { list: "bullet" },
                      { indent: "-1" },
                      { indent: "+1" },
                    ],
                    ["link", "image", "video"],
                    ["code-block"],
                    ["clean"],
                  ],
                },
                clipboard: {
                  matchVisual: false,
                },
              }}
              formats={[
                "header",
                "font",
                "size",
                "bold",
                "italic",
                "underline",
                "strike",
                "blockquote",
                "list",
                "bullet",
                "indent",
                "link",
                "image",
                "video",
                "code-block",
              ]}
              // onFocus={() => handleError("question", "")}
            />
            {/* <div className={classes.helperTextStyle}>{formError.question}</div> */}
          </Grid>

          <Grid size={6}>
            <Button fullWidth variant="contained" onClick={handleClick}>
              Submit
            </Button>
          </Grid>

          <Grid size={6}>
            <Button fullWidth variant="contained" onClick={handleClear}>
              Reset
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
