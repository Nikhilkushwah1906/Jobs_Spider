import MaterialTable from "@material-table/core";
import { useStyles } from "./SubCategoryCSS";
import { useState, useEffect } from "react";
import { getData, serverURL } from "../../services/FetchNodeServices";
import { Dialog, DialogContent, DialogActions, Button } from "@mui/material";
import { Divider, TextField } from "@mui/material";
import TitleComponent from "../components/TitleComponent";
import Grid from "@mui/material/Grid2";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Swal from "sweetalert2";
import { postData } from "../../services/FetchNodeServices";
import { Select, InputLabel, FormControl, MenuItem } from "@mui/material";
import { useNavigate } from "react-router";

export default function DisplayAllSubCategory() {
  const navigate = useNavigate()
  const classes = useStyles();
  const [subCategory, setSubCategory] = useState([]);
  const [open, setOpen] = useState(false);
  const [categoryid, setCategoryid] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const [subcategoryName, setSubCategoryName] = useState("");
  const [icon, setIcon] = useState({ byte: "", filename: "email.png" });
  const [formError, setFormError] = useState({ filename: "" });
  const [buttonStatus, setButtonStatus] = useState(false);
  const [tempPicture, settempPicture] = useState();
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

  const showDialog = () => {
    return (
      <Dialog open={open}>
        <DialogContent>{showSubCategoryForm()}</DialogContent>
        <DialogActions>
          <Button onClick={() => closeDialog()}>Close</Button>
        </DialogActions>
      </Dialog>
    );
  };

  const openDialog = (rowData) => {
    setCategoryid(rowData.categoryid);
    setSubCategoryId(rowData.subcategoryid);
    setIcon({
      byte: "",
      filename: `${serverURL}/images/${rowData.subcategorypicture}`,
    });
    settempPicture(rowData.subcategorypicture);
    setSubCategoryName(rowData.subcategoryname);
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  /**********Sub Category**********/

  const handleError = (label, message) => {
    setFormError((prev) => ({ ...prev, [label]: message }));
  };

  const validateData = () => {
    var error = false;

    if (subcategoryName.length == 0) {
      handleError("subcategoryname", "subcategoryname should not be blank...");
      error = true;
    }

    return error;
  };

  const handlePictureEdit = async () => {
    var formData = new FormData();
    formData.append("icon", icon.byte);
    formData.append("subcategoryid", subCategoryId);

    var response = await postData(
      "subcategory/edit_subcategory_picture",
      formData
    );

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
    fetchAllSubCategory();
  };

  const handleSubCategoryEdit = async () => {
    var error = validateData();
    if (error == false) {
      var body = {
        subcategoryid: subCategoryId,
        subcategoryname: subcategoryName,
      };

      var response = await postData("subcategory/edit_subcategory_data", body);

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
      fetchAllSubCategory();
    }
  };

  const handleSubCategoryDelete = async () => {
    var body = { subcategoryid: subCategoryId };

    var response = await postData("subcategory/delete_subcategory", body);

    if (response.status) {
      Swal.fire({
        icon: "success",
        text: response.message,
        toast: true,
      });
      setOpen(false);
    } else {
      Swal.fire({
        icon: "error",
        text: response.message,
        toast: true,
      });
    }
    fetchAllSubCategory();
  };

  const handleIconChange = (e) => {
    setButtonStatus(true);
    setIcon({
      byte: e.target.files[0],
      filename: URL.createObjectURL(e.target.files[0]),
    });
    handleError("filename", "");
  };

  const showSubCategoryForm = () => {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid size={12}>
            <TitleComponent title="Edit Sub Category" />
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
              alt="Sub Category"
              style={{ width: "20%", alignSelf: "center" }}
            />
            <div className={classes.helperTextStyle}>{formError.filename}</div>
          </Grid>

          <Grid size={12}>
            {buttonStatus ? (
              editAndCancel()
            ) : (
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
            )}
          </Grid>

          <Grid size={6}>
            <Button
              fullWidth
              variant="contained"
              onClick={handleSubCategoryEdit}
            >
              Edit
            </Button>
          </Grid>

          <Grid size={6}>
            <Button
              fullWidth
              variant="contained"
              onClick={handleSubCategoryDelete}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  };

  /***********************************/

  const fetchAllSubCategory = async () => {
    var response = await getData("subcategory/display_all");
    setSubCategory(response.data);
  };
  useEffect(() => {
    fetchAllSubCategory();
  }, []);

  function ShowAllSubCategory() {
    return (
      <MaterialTable
        title="Sub Category List"
        columns={[
          { title: "SubCategoryId", field: "subcategoryid" },
          {
            title: "CategoryId",
            render: (rowData) => (
              <div>
                [{rowData.categoryid}]/{rowData.categoryname}
              </div>
            ),
          },
          { title: "SubCategoryName", field: "subcategoryname" },
          {
            title: "Icon",
            render: (rowData) => (
              <img
                src={`${serverURL}/images/${rowData.subcategorypicture}`}
                alt="Sub Category"
                width={60}
              />
            ),
          },
        ]}
        data={subCategory}
        options={{
          pageSize: 4,
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
            tooltip: 'Add Sub-Category',
            isFreeAction: true,
            onClick: (event) => navigate("/dashboardadmin/subcategory")
          }
          
        ]}
      />
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.boxx}>
        {ShowAllSubCategory()}
        {showDialog()}
      </div>
    </div>
  );
}
