import MaterialTable from "@material-table/core";
import { useStyles } from "./CategoryCSS";
import { getData, serverURL } from "../../services/FetchNodeServices";
import { Dialog, DialogActions, DialogContent, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Divider, TextField } from "@mui/material";
import TitleComponent from "../components/TitleComponent";
import Grid from "@mui/material/Grid2";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Swal from "sweetalert2";
import { postData } from "../../services/FetchNodeServices";
import { useNavigate } from "react-router";

export default function DisplayAllCategory() {
  const navigate = useNavigate()
  const classes = useStyles();
  const [category, setCategory] = useState([]);
  const [open, setOpen] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [icon, setIcon] = useState({ byte: "", filename: "email.png" });
  const [formError, setformError] = useState({ filename: "" });
  const [buttonStatus, setButtonStatus] = useState(false);
  const [tempPicture, settempPicture] = useState();

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

  const openDialog = (rowData) => {
    setCategoryId(rowData.categoryid);
    setCategoryName(rowData.categoryname);
    setIcon({
      byte: "",
      filename: `${serverURL}/images/${rowData.categorypicture}`,
    });
    settempPicture(rowData.categorypicture);
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  /***********category form*************/

  const clearData = () => {
    setCategoryName("");
    setIcon({ byte: "", filename: "email.png" });
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

    return error;
  };

  const handlePictureEdit = async () => {
    var formData = new FormData();
    formData.append("categoryid", categoryId);
    formData.append("icon", icon.byte);

    var response = await postData("category/edit_category_picture", formData);
    if (response.status) {
      Swal.fire({
        icon: "success",
        text: response.message,
        toast: true,
      });
      setButtonStatus(false);
    } else {
      Swal.fire({
        icon: "error",
        text: response.message,
        toast: true,
      });
      setButtonStatus(false);
    }
    fetchAllCategory();
  };

  const handleCategoryEdit = async () => {
    var error = validateData();
    if (error == false) {
      var body = { categoryid: categoryId, categoryname: categoryName };

      var response = await postData("category/edit_category_data", body);
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
    fetchAllCategory();
  };

  const handleDelete = async () => {
    var body = { categoryid: categoryId };

    var response = await postData("category/delete_category", body);
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
    setOpen(false);
    fetchAllCategory();
  };

  const handleIconChange = (e) => {
    setButtonStatus(true);
    setIcon({
      byte: e.target.files[0],
      filename: URL.createObjectURL(e.target.files[0]),
    });
    handleError("filename", "");
  };

  const showCategoryForm = () => {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid size={12}>
            <TitleComponent title="Edit Category" />
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
              style={{ width: "20%", alignSelf: "center" }}
              alt="Category"
            />
            <div className={classes.helperTextStyle}>{formError.filename}</div>
          </Grid>

          <Grid size={12}>
            {buttonStatus ? (
              editAndCancel()
            ) : (
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
            )}
          </Grid>

          <Grid size={6}>
            <Button fullWidth variant="contained" onClick={handleCategoryEdit}>
              Edit
            </Button>
          </Grid>

          <Grid size={6}>
            <Button onClick={handleDelete} fullWidth variant="contained">
              Delete
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  };

  /************************************/

  const fetchAllCategory = async () => {
    var response = await getData("category/display_all");
    setCategory(response.data);
  };

  useEffect(() => {
    fetchAllCategory();
  }, []);

  const showDialog = () => {
    return (
      <Dialog open={open}>
        <DialogContent>{showCategoryForm()}</DialogContent>

        <DialogActions>
          <Button onClick={() => closeDialog()}>Close</Button>
        </DialogActions>
      </Dialog>
    );
  };

  function ShowAllCategory() {
    return (
      <MaterialTable
        title="Category List"
        columns={[
          { title: "ID", field: "categoryid" },
          { title: "Category", field: "categoryname" },
          {
            title: "Icon",
            render: (rowData) => (
              <img
                src={`${serverURL}/images/${rowData.categorypicture}`}
                alt="Category"
                width={40}
              />
            ),
          },
        ]}
        data={category}
        options={{
          pageSize: 5,
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
            tooltip: 'Add Category',
            isFreeAction: true,
            onClick: (event) => navigate("/dashboardadmin/category")
          }
        ]}
      />
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.boxx}>
        {ShowAllCategory()}
        {showDialog()}
      </div>
    </div>
  );
}
