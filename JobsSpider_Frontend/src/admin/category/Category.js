import { Button, Divider, TextField } from "@mui/material";
import { useStyles } from "./CategoryCSS";
import TitleComponent from "../components/TitleComponent";
import Grid from "@mui/material/Grid2";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";
import { postData } from "../../services/FetchNodeServices";
import Swal from "sweetalert2";
import email from "../../assets/email.png"

export default function Category() {
  const classes = useStyles();
  const [categoryName, setCategoryName] = useState("");
  const [icon, setIcon] = useState({ byte: "", filename: email });
  const [formError, setformError] = useState({ filename: "" });

  const clearData = () => {
    setCategoryName("");
    setIcon({ byte: "", filename: email });
  };

  const handleError = (label, message) => {
    setformError((prev) => ({ ...prev, [label]: message }));
  };

  const validateData = () => {
    var error = false;
    if (categoryName.length == 0) {
      handleError("categoryname", "categoryname should not be blank...");
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
      formData.append("categoryname", categoryName);
      formData.append("icon", icon.byte);

      var response = await postData("category/submit_category", formData);
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
            <TitleComponent title="Category Register" />
          </Grid>

          <Grid size={12} style={{ display: "flex", justifyContent: "center" }}>
            <Divider style={{ width: "98%" }} />
          </Grid>

          <Grid size={12}>
            <TextField
              value={categoryName}
              helperText={formError.categoryname}
              error={formError.categoryname}
              onFocus={() => handleError("categoryname", "")}
              onChange={(e) => setCategoryName(e.target.value)}
              label="Category Name"
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
              alt="Category"
            />
            <div className={classes.helperTextStyle}>{formError.filename}</div>
          </Grid>

          <Grid size={12}>
            <Button
              fullWidth
              startIcon={<CloudUploadIcon />}
              component="label"
              variant="contained"
              style={{ marginTop: 20 }}
            >
              <input
                onChange={handleIconChange}
                type="file"
                multiple
                hidden
                accept="image/*"
              />
              Upload
            </Button>
          </Grid>

          <Grid size={6}>
            <Button fullWidth variant="contained" onClick={handleClick}>
              Save
            </Button>
          </Grid>

          <Grid size={6}>
            <Button onClick={clearData} fullWidth variant="contained">
              Reset
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
