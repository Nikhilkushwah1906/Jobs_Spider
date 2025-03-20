import { useStyles } from "./SubCategoryCSS";
import Grid from "@mui/material/Grid2";
import TitleComponent from "../components/TitleComponent";
import { Button, Divider, TextField } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState, useEffect } from "react";
import { postData, getData } from "../../services/FetchNodeServices";
import Swal from "sweetalert2";
import { Select, InputLabel, FormControl, MenuItem } from "@mui/material";
import email from "../../assets/email.png"

export default function SubCategory() {
  const classes = useStyles();
  const [categoryid, setCategoryid] = useState("");
  const [subcategoryName, setSubCategoryName] = useState("");
  const [icon, setIcon] = useState({ byte: "", filename: email });
  const [formError, setFormError] = useState({ filename: "" });
  const [categoryList, setCategoryList] = useState([]);

  const fetchAllCategory = async () => {
    var response = await getData("category/display_all");
    setCategoryList(response.data);
  };

  useEffect(() => {
    fetchAllCategory();
  }, []);

  const fillCatogoryMenu = () => {
    return categoryList.map((item) => {
      return <MenuItem value={item.categoryid}>{item.categoryname}</MenuItem>;
    });
  };

  const clearData = () => {
    setCategoryid("");
    setSubCategoryName("");
    setIcon({ byte: "", filename: email });
  };

  const handleError = (label, message) => {
    setFormError((prev) => ({ ...prev, [label]: message }));
  };

  const validateData = () => {
    var error = false;

    if (categoryid.length == 0) {
      handleError("categoryid", "categoryid should not be blank...");
      error = true;
    }

    if (subcategoryName.length == 0) {
      handleError("subcategoryname", "subcategoryname should not be blank...");
      error = true;
    }

    if (icon.byte.length == 0) {
      handleError("filename", "please Choose icon of category...");
      error = true;
    }

    return error;
  };

  const handleClick = async () => {
    var error = validateData();
    if (error == false) {
      var formData = new FormData();
      formData.append("subcategoryname", subcategoryName);
      formData.append("icon", icon.byte);
      formData.append("categoryid", categoryid);

      var response = await postData("subcategory/submit_subcategory", formData);

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
    }

    clearData();
  };

  const handleIconChange = (e) => {
    setIcon({
      byte: e.target.files[0],
      filename: URL.createObjectURL(e.target.files[0]),
    });
    handleError("filename", "");
  };

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <TitleComponent title="Sub Category Registeration" />
          </Grid>

          <Grid size={12} style={{ display: "flex", justifyContent: "center" }}>
            <Divider style={{ width: "98%" }} />
          </Grid>

          <Grid size={12}>
            <FormControl fullWidth>
              <InputLabel>CategoryId</InputLabel>
              <Select
                label="CategoryId"
                value={categoryid}
                onChange={(e) => setCategoryid(e.target.value)}
              >
                {fillCatogoryMenu()}
              </Select>
            </FormControl>
          </Grid>

          <Grid size={12}>
            <TextField
              value={subcategoryName}
              helperText={formError.subcategoryname}
              error={formError.subcategoryname}
              onFocus={() => handleError("subcategoryname", "")}
              onChange={(e) => setSubCategoryName(e.target.value)}
              label="Sub Category Name"
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
              style={{ width: "18%", alignSelf: "center" }}
              alt="Logo"
            />
            <div className={classes.helperTextStyle}>{formError.filename}</div>
          </Grid>

          <Grid size={12}>
            <Button
              startIcon={<CloudUploadIcon />}
              onChange={handleIconChange}
              fullWidth
              component="label"
              variant="contained"
              style={{ marginTop: 20 }}
            >
              <input type="file" multiple hidden accept="image/*" />
              Upload
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
