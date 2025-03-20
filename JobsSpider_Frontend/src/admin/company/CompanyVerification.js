import { useStyles } from "./CompaniesCSS";
import { useState, useEffect } from "react";
import { postData, getData, serverURL } from "../../services/FetchNodeServices";
import Swal from "sweetalert2";
import MaterialTable from "@material-table/core";
import "react-quill/dist/quill.snow.css";
import Switch from "@mui/material/Switch";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";

export default function CompanyVerifiaction() {
  const classes = useStyles();
  const [companiesData, setCompaniesData] = useState([]);
  const [Verify, setVerify] = useState([]);
  const [UnVerify, setUnVerify] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [value, setValue] = useState(0);

  /******************** Fetch All Companys ************************/

  const fetchAllCompanies = async () => {
    const response = await getData("companies/display_all");

    setCompaniesData(response.data);
  };

  const fetchAllVerifyCompanies = async () => {
    const response = await getData("companies/display_all_verify_company");

    setVerify(response.data);
  };

  const fetchAllUnVerifyCompanies = async () => {
    const response = await getData("companies/display_all_unverify_company");

    setUnVerify(response.data);
  };

  useEffect(() => {
    fetchAllCompanies();
    fetchAllVerifyCompanies();
    fetchAllUnVerifyCompanies();
  }, []);

  /********************************************/

  /******************* Tabs *************************/

  const BasicTabs = () => {
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <Paper sx={{ width: "100%" }} elevation={2}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="All" />
            <Tab label="Verified" />
            <Tab label="Un-Verified" />
          </Tabs>
        </Box>
      </Paper>
    );
  };
  /********************************************/

  /****************** Handle Data Insertion in Table **************************/

  useEffect(() => {
    if (value === 0) {
      setTableData(companiesData);
    } else if (value === 1) {
      setTableData(Verify);
    } else if (value === 2) {
      setTableData(UnVerify);
    }
  }, [value, companiesData, Verify, UnVerify]);

  /********************************************/

  /******************* Handle Verification(Switch) *************************/

  const handleChange = async (e, companyid) => {
    var bool = 0;
    var message = "";
    if (e.target.checked == true) {
      bool = 1;
      message = "Do You Want To Verify The Company ?";
    } else if (e.target.checked == false) {
      bool = 0;
      message = "Do You Want To Unverify The Company ?";
    }

    Swal.fire({
      title: message,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Confirm",
      denyButtonText: `Not Confirm`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        var res = await postData("companies/update_companies_verify", {
          verified: bool,
          companyid,
        });
        fetchAllCompanies();
        Swal.fire(res.message);
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  /********************************************/

  /******************* Company Table *************************/

  function ShowAllCompanies() {
    return (
      <MaterialTable
        title="Companies List"
        columns={[
          {
            title: "Verify",
            render: (rowData) => (
              <Switch
                checked={rowData.verified}
                onChange={(e) => handleChange(e, rowData.companyid)}
                inputProps={{ "aria-label": "controlled" }}
              />
            ),
          },
          {
            title: "Company Id",
            field: "companyid",
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
        data={tableData}
        options={{
          pageSize: 3,
          pageSizeOptions: [5, 10, 20, 30, 50, 75, 100],
          toolbar: true,
          paging: true,
        }}
      />
    );
  }
  /********************************************/

  /******************* Main Return *************************/
  return (
    <div className={classes.roott}>
      <div className={classes.boxx}>
        {BasicTabs()}
        {ShowAllCompanies()}
      </div>
    </div>
  );
  /********************************************/
}
