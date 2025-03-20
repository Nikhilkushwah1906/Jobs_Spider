import { useStyles } from "./CompaniesCSS";
import TitleComponent from "../components/TitleComponent";
import Grid from "@mui/material/Grid2";
import { Divider, Button, TextField } from "@mui/material";
import { Select, InputLabel, FormControl, MenuItem } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState, useEffect } from "react";
import {postData,getData,passwordGenerator,} from "../../services/FetchNodeServices";
import Swal from "sweetalert2";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import email from "../../assets/email.png"

export default function Companies() {
  const classes = useStyles();
  const [icon, setIcon] = useState({ byte: "", filename: email });
  const [companyName, setComapnyName] = useState("");
  const [companyOwner, setCompanyOwner] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [emailId, setEmailId] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [aboutCompany, setAboutCompany] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [panCard, setPanCard] = useState("");
  const [Password, setPassword] = useState("");
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [stateId, setStateId] = useState("");
  const [cityId, setCityId] = useState("");
  const [verified, setVerified] = useState("");
  const [formError, setFormError] = useState({ filename: "" });

  const clearData = () => {
    setComapnyName("");
    setCompanyOwner("");
    setCompanyAddress("");
    setEmailId("");
    setMobileNo("");
    setContactPerson("");
    setAboutCompany("");
    setRegistrationNo("");
    setPanCard("");
    setCityId(fillCitysMenu());
    setStateId(fillStatesMenu());
    setIcon({ byte: "", filename: email});
    setFormError(false);
  };

  const handleError = (label, message) => {
    setFormError((prev) => ({ ...prev, [label]: message }));
  };

  const validateData = () => {
    var error = false;
    if (companyName.length === 0) {
      handleError("companyname", "companyname should not be blank...");
      error = true;
    }

    if (companyOwner.length === 0) {
      handleError("companyowner", "companyowner should not be blank...");
      error = true;
    }
    if (companyAddress.length === 0) {
      handleError("companyaddress", "companyaddress should not be blank...");
      error = true;
    }
    if (emailId.length === 0) {
      handleError("emailid", "emailid should not be blank...");
      error = true;
    }
    if (!emailId.endsWith("@gmail.com")) {
      handleError("emailid", "Invalid emailid...");
      error = true;
    }
    if (mobileNo.length === 0) {
      handleError("mobileno", "mobileno should not be blank...");
      error = true;
    }
    if (mobileNo.length > 10) {
      handleError("mobileno", "Invalid Mobile No...");
      error = true;
    }
    if (contactPerson.length === 0) {
      handleError("contactperson", "contactperson should not be blank...");
      error = true;
    }
    if (registrationNo.length === 0) {
      handleError("registrationno", "registrationno should not be blank...");
      error = true;
    }
    if (panCard.length === 0) {
      handleError("pancard", "panCard should not be blank...");
      error = true;
    }
    if (stateId.length === 0) {
      handleError("stateid", "stateid should not be blank...");
      error = true;
    }
    if (cityId.length === 0) {
      handleError("cityid", "cityId should not be blank...");
      error = true;
    }
    return error;
  };

  const handleStateChnage = (e) => {
    setStateId(e.target.value);
    fetchAllCitys(e.target.value);
  };

  const handleIconChange = (e) => {
    setIcon({
      byte: e.target.files[0],
      filename: URL.createObjectURL(e.target.files[0]),
    });
  };

  const fetchAllStates = async () => {
    var response = await getData("statecity/display_all_states");
    setStateList(response.data);
  };

  useEffect(() => {
    fetchAllStates();
  }, []);

  const fillStatesMenu = () => {
    return stateList.map((item) => {
      return <MenuItem value={item.id}>{item.name}</MenuItem>;
    });
  };

  const fetchAllCitys = async (stateid) => {
    var response = await postData("statecity/display_all_citys", { stateid });
    setCityList(response.data);
  };

  const fillCitysMenu = () => {
    return cityList.map((item) => {
      return <MenuItem value={item.id}>{item.city}</MenuItem>;
    });
  };

  const handleClick = async () => {
    var error = validateData();
    if (error === false) {
      var formData = new FormData();

      formData.append("companyname", companyName);
      formData.append("companyowner", companyOwner);
      formData.append("companyaddress", companyAddress);
      formData.append("emailid", emailId);
      formData.append("mobileno", mobileNo);
      formData.append("contactperson", contactPerson);
      formData.append("aboutcompany", aboutCompany);
      formData.append("registrationno", registrationNo);
      var p = passwordGenerator();
      formData.append("password", p);
      formData.append("pancard", panCard);
      formData.append("icon", icon.byte);
      formData.append("stateid", stateId);
      formData.append("cityid", cityId);
      formData.append("verified", 0);

      var response = await postData("companies/submit_companies", formData);

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
      clearData();
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <TitleComponent title="Companies Register" />
          </Grid>

          <Grid size={12} style={{ display: "flex", justifyContent: "center" }}>
            <Divider style={{ width: "98%" }} />
          </Grid>

          <Grid size={6}>
            <TextField
              value={companyName}
              helperText={formError.companyname}
              error={formError.companyname}
              onFocus={() => handleError("companyname", "")}
              label="Company Name"
              onChange={(e) => setComapnyName(e.target.value)}
              fullWidth
            />
          </Grid>

          <Grid size={6}>
            <TextField
              value={companyOwner}
              helperText={formError.companyowner}
              error={formError.companyowner}
              onFocus={() => handleError("companyowner", "")}
              label="Company Owner"
              onChange={(e) => setCompanyOwner(e.target.value)}
              fullWidth
            />
          </Grid>

          <Grid size={12} fullWidth>
            <TextField
              value={companyAddress}
              helperText={formError.companyaddress}
              error={formError.companyaddress}
              onFocus={() => handleError("companyaddress", "")}
              onChange={(e) => setCompanyAddress(e.target.value)}
              label="Company Address"
              fullWidth
            ></TextField>
          </Grid>

          <Grid size={6}>
            <FormControl fullWidth>
              <InputLabel>State</InputLabel>
              <Select
                value={stateId}
                helperText={formError.stateid}
                error={formError.stateid}
                onFocus={() => handleError("stateid", "")}
                label="State"
                onChange={handleStateChnage}
              >
                {fillStatesMenu()}
              </Select>
              <div className={classes.helperTextStyle}>{formError.stateid}</div>
            </FormControl>
          </Grid>

          <Grid size={6}>
            <FormControl fullWidth>
              <InputLabel>City</InputLabel>
              <Select
                value={cityId}
                helperText={formError.cityid}
                error={formError.cityid}
                onFocus={() => handleError("cityid", "")}
                label="City"
                onChange={(e) => setCityId(e.target.value)}
              >
                {fillCitysMenu()}
              </Select>
              <div className={classes.helperTextStyle}>{formError.cityid}</div>
            </FormControl>
          </Grid>

          <Grid size={4}>
            <TextField
              value={emailId}
              helperText={formError.emailid}
              error={formError.emailid}
              onFocus={() => handleError("emailid", "")}
              label="Email Id"
              onChange={(e) => setEmailId(e.target.value)}
              fullWidth
            />
          </Grid>

          <Grid size={4}>
            <TextField
              value={mobileNo}
              helperText={formError.mobileno}
              error={formError.mobileno}
              onFocus={() => handleError("mobileno", "")}
              label="Mobile No."
              onChange={(e) => setMobileNo(e.target.value)}
              fullWidth
            />
          </Grid>

          <Grid size={4}>
            <TextField
              value={contactPerson}
              helperText={formError.contactperson}
              error={formError.contactperson}
              onFocus={() => handleError("contactperson", "")}
              label="Contact Person"
              onChange={(e) => setContactPerson(e.target.value)}
              fullWidth
            />
          </Grid>

          <Grid size={12} fullWidth>
            <ReactQuill
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
              placeholder="About Company"
              theme="snow"
              value={aboutCompany}
              onChange={(e) => setAboutCompany(e)}
            />
          </Grid>

          <Grid size={6}>
            <TextField
              value={registrationNo}
              helperText={formError.registrationno}
              error={formError.registrationno}
              onFocus={() => handleError("registrationno", "")}
              label="Registration No."
              onChange={(e) => setRegistrationNo(e.target.value)}
              fullWidth
            />
          </Grid>

          <Grid size={6}>
            <TextField
              value={panCard}
              helperText={formError.pancard}
              error={formError.pancard}
              onFocus={() => handleError("pancard", "")}
              label="PanCard No."
              onChange={(e) => setPanCard(e.target.value)}
              fullWidth
            />
          </Grid>

          <Grid
            size={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={icon.filename}
              alt="Logo"
              style={{ width: "10%", alignSelf: "center" }}
            />
            <div className={classes.helperTextStyle}>{formError.filename}</div>
          </Grid>

          <Grid size={12}>
            <Button
              startIcon={<CloudUploadIcon />}
              fullWidth
              onChange={handleIconChange}
              component="label"
              variant="contained"
              style={{ marginTop: 10 }}
            >
              <input type="file" multiple hidden accept="image/*" />
              Upload Company Logo
            </Button>
          </Grid>

          <Grid size={6}>
            <Button fullWidth variant="contained" onClick={handleClick}>
              Save
            </Button>
          </Grid>

          <Grid size={6}>
            <Button fullWidth variant="contained" onClick={clearData}>
              Reset
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
