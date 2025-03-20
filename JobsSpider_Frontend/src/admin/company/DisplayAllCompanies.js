import { useStyles } from "./CompaniesCSS";
import TitleComponent from "../components/TitleComponent";
import Grid from "@mui/material/Grid2";
import { Divider, Button, TextField } from "@mui/material";
import { Select, InputLabel, FormControl, MenuItem } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState, useEffect } from "react";
import { postData, getData, serverURL } from "../../services/FetchNodeServices";
import Swal from "sweetalert2";
import MaterialTable from "@material-table/core";
import {Dialog,DialogContent,DialogActions,} from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router";

export default function DisplayAllCompanies() {
  const navigate = useNavigate()
  const classes = useStyles();
  const [buttonStatus, setButtonStatus] = useState(false);
  const [tempPicture, settempPicture] = useState();
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState({ byte: "", filename: "email.png" });
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
  const [companies, setCompanies] = useState([]);
  const [companyId, setCompanyId] = useState("");

  const fetchAllCompanies = async () => {
    var response = await getData("companies/display_all");
    setCompanies(response.data);
  };
  useEffect(() => {
    fetchAllStates();
    fetchAllCompanies();
  }, []);

  const openDialog = (rowData) => {
    fetchAllCitys(rowData.stateid);
    setComapnyName(rowData.companyname);
    setCompanyOwner(rowData.companyowner);
    setCompanyAddress(rowData.companyaddress);
    setEmailId(rowData.emailid);
    setMobileNo(rowData.mobileno);
    setContactPerson(rowData.contactperson);
    setAboutCompany(rowData.aboutcompany);
    setRegistrationNo(rowData.registrationno);
    setPanCard(rowData.pancard);
    setStateId(rowData.stateid);
    setCityId(rowData.cityid);
    setIcon({
      byte: "",
      filename: `${serverURL}/images/${rowData.companypicture}`,
    });
    settempPicture(rowData.companypicture);
    setCompanyId(rowData.companyid);
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const showDialog = () => {
    return (
      <Dialog open={open}>
        <DialogContent>{showCompaniesForm()}</DialogContent>
        <DialogActions>
          <Button onClick={() => closeDialog()}>Close</Button>
        </DialogActions>
      </Dialog>
    );
  };

  /************************/

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
    if (!emailId.endsWith("@gmail.com")) {
      handleError("emailid", "Invalid emailid...");
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

  const cancelPicture = () => {
    setIcon({ byte: "", filename: `${serverURL}/images/${tempPicture}` });
    setButtonStatus(false);
  };

  const editAndCancel = () => {
    return (
      <div>
        <Button onClick={handlePictureEdit}>Edit</Button>
        <Button onClick={cancelPicture}>Cancel</Button>
      </div>
    );
  };

  const handleStateChnage = (e) => {
    setStateId(e.target.value);
    fetchAllCitys(e.target.value);
  };

  const handleIconChange = (e) => {
    setButtonStatus(true);
    setIcon({
      byte: e.target.files[0],
      filename: URL.createObjectURL(e.target.files[0]),
    });
    handleError("filename", "");
  };

  const fetchAllStates = async () => {
    var response = await getData("statecity/display_all_states");
    setStateList(response.data);
  };

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

  const handlePictureEdit = async () => {
    var formData = new FormData();
    formData.append("icon", icon.byte);
    formData.append("companyid", companyId);

    var response = await postData("companies/edit_companies_picture", formData);

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
    setButtonStatus(false);
    fetchAllCompanies();
  };

  const handleCompaniesEdit = async () => {
    var body = {
      companyid: companyId,
      companyname: companyName,
      companyowner: companyOwner,
      companyaddress: companyAddress,
      emailid: emailId,
      mobileno: mobileNo,
      contactperson: contactPerson,
      aboutcompany: aboutCompany,
      registrationno: registrationNo,
      password: "None",
      pancard: panCard,
      stateid: stateId,
      cityid: cityId,
      verified: "false",
    };

    var response = await postData("companies/edit_companies_data", body);

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

    fetchAllCompanies();
  };

  const handleCompaniesDelete = async () => {
    var body = { companyid: companyId };

    var response = await postData("companies/delete_companies", body);

    if (response.status) {
      Swal.fire({
        icon: "success",
        text: response.message,
        toast: true,
      });
      setOpen(false);
      fetchAllCompanies();
    } else {
      Swal.fire({
        icon: "error",
        text: response.message,
        toast: true,
      });
    }
  };

  const showCompaniesForm = () => {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid size={12}>
            <TitleComponent title="Edit Companies Register" />
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
              helperText={formError.aboutcompany}
              error={formError.aboutcompany}
              onFocus={() => handleError("aboutCompany", "")}
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
              alt="Company Logo"
              style={{ width: "12%", alignSelf: "center" }}
            />
            <div className={classes.helperTextStyle}>{formError.filename}</div>
          </Grid>

          <Grid size={12}>
            {buttonStatus ? (
              editAndCancel()
            ) : (
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
            )}
          </Grid>

          <Grid size={6}>
            <Button fullWidth variant="contained" onClick={handleCompaniesEdit}>
              Edit
            </Button>
          </Grid>

          <Grid size={6}>
            <Button
              fullWidth
              variant="contained"
              onClick={handleCompaniesDelete}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  };

  /************************/

  function ShowAllCompanies() {
    return (
      <MaterialTable
        title="Companies List"
        columns={[
          {
            title: "Company Id/verification",
            render: (rowData) => (
              <div>
                {rowData.companyid}
                <br />
                {rowData.verified?'Verified':'Unverified'}
              </div>
            ),
          },
          {
            title: "Company Name/owner",
            render: (rowData) => (
              <div>
                {rowData.companyname}
                <br />
                {rowData.companyowner}
              </div>
            ),
          },
          {
            title: "Company Address/state/city",
            render: (rowData) => (
              <div>
                {rowData.companyaddress}
                <br />
                {rowData.statename}
                <br />
                {rowData.cityname}
              </div>
            ),
          },
          {
            title: "Email Id/Mobile No./Contact Person",
            render: (rowData) => (
              <div>
                {rowData.emailid}
                <br />
                {rowData.mobileno}
                <br />
                {rowData.contactperson}
              </div>
            ),
          },
          {
            title: "Registration No/ Pan No.",
            render: (rowData) => (
              <div>
                {rowData.pancard}
                <br />
                {rowData.registrationno}
              </div>
            ),
          },
          {
            title: "Company logo",
            render: (rowData) => (
              <img
                src={`${serverURL}/images/${rowData.companypicture}`}
                alt="Company Logo"
                width={60}
              />
            ),
          },
        ]}
        data={companies}
        options={{
          pageSize: 3,
          pageSizeOptions: [5, 10, 20, 30 ,50, 75, 100 ],
          toolbar: true,
          paging: true
      }}
        actions={[
          {
            icon: "edit",
            tooltip: "Save User",
            onClick: (event, rowData) => openDialog(rowData),
          },
          {
            icon: 'add',
            tooltip: 'Add Companies',
            isFreeAction: true,
            onClick: (event) => navigate("/dashboardadmin/companies")
          }
        ]}
      />
    );
  }

  return (
    <div className={classes.roott}>
      <div className={classes.boxx}>
        {ShowAllCompanies()}
        {showDialog()}
      </div>
    </div>
  );
}
