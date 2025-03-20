import ShowJobsCardDatails from "./ShowJobsCardDetails";
import ShowJobsDiscription from "./ShowJobsDiscription";
import FilterLastCompoennt from "./FilterLastComponent";
import FilterMiddleComponent from "./FilterMiddleComponent";
import FindJobs from "../components/FindJobs";
import HireCity from "../components/HireCity";
import PopularJobs from "../components/PopularJobs";
import JobsByDepartment from "../components/JobsByDepartment";
import LinksComponent from "../components/LinksComponent";
import Footer from "../components/Footer";
import { Divider, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocation } from "react-router";
import Header from "../components/Header";

export default function ShowJobsCards() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  console.log(location.search);
  const keys = new URLSearchParams(location.search);
  console.log("Keys:", keys);

  var categoryname = keys.get("categoryname");
  var subcategoryname = keys.get("subcategoryname");
  var companyname = keys.get("companyname");
  var companypicture = keys.get("companypicture");
  var companyaddress=keys.get("companyaddress")
  var statename=keys.get("statename")
  var cityname=keys.get("cityname")
  var minsalary=keys.get("minsalary")
  var maxsalary=keys.get("maxsalary")
  var jobtype=keys.get("jobtype")
  var experience=keys.get("experience")
  var schedule=keys.get("schedule")
  var jobdescription=keys.get("jobdescription")
  var skills=keys.get("skills")
  var qualification=keys.get("educationqualification")
  var benifits = keys.get("benefits")
  var worklocationcity=keys.get("worklocationcity")
  var supplementalpay=keys.get("supplementalpay")
  var applicationquestion=keys.get("applicationquestion")
  var data={categoryname,subcategoryname,companyname,companypicture,minsalary,maxsalary,schedule,experience,jobtype,jobdescription,qualification,benifits,supplementalpay,worklocationcity,applicationquestion,companyaddress,statename,cityname}

  // var skill_id = keys.get("skillid");
  //var categoryid = keys.get("categoryid");
  //var subcategoryid = keys.get("subcategoryid");
  //console.log("Skills:",skill)

  return (
    <div style={{ display: "flex", flexDirection: "column",background: "rgb(244 242 246)", }}>
      <div>
        {" "}
        <Header />{" "}
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "rgb(244 242 246)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "2%",
            marginBottom: "2%",
           width:matches?'100%':<></>
          }}
        >
          <ShowJobsCardDatails
            data={data}
          />
          <ShowJobsDiscription data={data}/>
        </div>

        {matches ? (
          <></>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginLeft: 15,
              width:350
            }}
          >
            <img
              src="getyourdreamjob.png"
              style={{
                width: '90%',
                height: 150,
                marginTop: "10%",
                marginBottom: 20,
              }}
              alt="logo"
            />
            <FilterLastCompoennt />
          </div>
        )}
      </div>

      <Paper
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifySelf: "center",
          width: matches ? "95%" : "80%",
          height: "auto",
          background: "#F5E7EF",
          borderRadius: 15,
          marginTop: 50,
          alignSelf: "center",
          marginBottom:50
        }}
      >
        <FindJobs />
        <HireCity />
        <PopularJobs />
        <JobsByDepartment />
        <LinksComponent />
      </Paper>

      <div>
        <Footer />
      </div>
    </div>
  );
}

