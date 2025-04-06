import { Paper } from "@mui/material";
import Header from "../components/Header";
import SearchBarComponent from "../components/SearchBarComponent";
import UserReviewComponent from "../components/UserReviewComponent";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import FindJobs from "../components/FindJobs";
import HireCity from "../components/HireCity";
import PopularJobs from "../components/PopularJobs";
import JobsByDepartment from "../components/JobsByDepartment";
import LinksComponent from "../components/LinksComponent";
import Footer from "../components/Footer";
import { Grid2 } from "@mui/material";
import FirstFilterComponent from "./FilterFirstComponent";
import FilterMiddleComponent from "./FilterMiddleComponent";
import FilterLastComponent from "./FilterLastComponent";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getData, postData } from "../../services/FetchNodeServices";
import SearchBarMob from "../components/SearchBarMob";

export default function MainShowFilterJobsComponent() {
  const theme = useTheme();
  const [jobs, setJobsList] = useState([]);
  const params = useParams();
  const [refresh, setRefresh] = useState(false);
  // const[exp,setExp]=useState(0)

  const location = useLocation();
  const keys = new URLSearchParams(location.search);
  // console.log("Keys:",keys)

  var skill = keys.get("skills");
  var skill_id = keys.get("skillid");
  var categoryid = keys.get("categoryid");
  var subcategoryid = keys.get("subcategoryid");
  var expr = keys.get("exp");
  const [exp, setExp] = useState(expr);
  const [time, setTime] = useState("-1");

  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const fetchJobs = async () => {
    var res = await postData("userinterface/main_search_jobs", {
      skills: skill,
      skillid: skill_id,
      categoryid,
      subcategoryid,
      expr: exp,
      time
    });

    setJobsList(res.data);
  };

  useEffect(
    function () {
      setJobsList([]);
      fetchJobs();
    },
    [refresh]
  );
  useEffect(function () {
    fetchJobs();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: matches ? "100%" : "100%",
        height: "auto",
        flexDirection: "column",
      }}
    >
      <div>
        <Header />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "rgb(244 242 246/var(--tw-bg-opacity,1))",
        }}
      >
        <div style={{ marginLeft: matches ? 2 : 244, marginTop: 40 }}>
          {matches ? (
            <></>
          ) : (
            <SearchBarComponent
              param_skill={{
                skills: skill,
                skillid: skill_id,
                categoryid,
                subcategoryid,
              }}
              refresh={refresh}
              setRefresh={setRefresh}
              exp={exp}
              setExp={setExp}
            />
          )}
          {matches ? (
            <SearchBarMob
              param_skill={{
                skills: skill,
                skillid: skill_id,
                categoryid,
                subcategoryid,
              }}
              style={{ zIndex: 1 }}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          ) : (
            <></>
          )}
        </div>

        <div
          style={{
            display: "flex",
            marginLeft: matches ? 22 : 244,
            fontSize: 20,
            marginTop: 20,
            marginBottom: "2%",
            fontWeight: "bold",
          }}
        >
          Showing 210 jobs based on your filter
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: matches ? "column" : "row",
            justifyContent: "center",
            alignItems: matches ? "center" : "",
            padding: 14,
          }}
        >
          {matches ? (
            <></>
          ) : (
            <FirstFilterComponent
              exp={exp}
              setExp={setExp}
              time={time}
              setTime={setTime}
            />
          )}

          <FilterMiddleComponent jobData={jobs} />

          <FilterLastComponent />
        </div>
      </div>
      <div style={{ marginTop: 80 }}>
        <UserReviewComponent />
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
          marginTop: 100,
          alignSelf: "center",
        }}
      >
        <FindJobs />
        <HireCity />
        <PopularJobs />
        <JobsByDepartment />
        <LinksComponent />
      </Paper>
      <div style={{ marginTop: 100 }}>
        <Footer />
      </div>
    </div>
  );
}
