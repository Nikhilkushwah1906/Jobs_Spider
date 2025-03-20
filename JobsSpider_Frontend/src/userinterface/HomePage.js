import Header from "./components/Header";
import TopComponent from "./components/TopComponent";
import ScrollComponent from "./components/ScrollComponent";
import TrendingJobsComponent from "./components/TrendingJobsComponent";
import TwoPeopleHireComponenet from "./components/TwoPeopleHireComponent";
import Footer from "./components/Footer";
import DownloadJobsSpider from "./components/DownloadJobsSpider";
import UserReviewComponent from "./components/UserReviewComponent";
import HireCity from "./components/HireCity";
import {Paper } from "@mui/material";
import FindJobs from "./components/FindJobs";
import PopularJobs from "./components/PopularJobs";
import JobsByDepartment from "./components/JobsByDepartment";
import LinksComponent from "./components/LinksComponent";
import GetResumeHelp from "./components/GetResumeHelp";
import { useEffect, useState } from "react";
import { getData } from "../services/FetchNodeServices";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function HomePage() {
  const [topCompanies, setTopCompanies] = useState([]);
  const [trandingJobs,setTrandingJobs]= useState([]);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const fetchAllTopCompanies = async () => {
    var res = await getData("userinterface/user_top_company_display");
    setTopCompanies(res.data);
  };
  const fetchAllTrandingJobs = async () => {
    var res = await getData("userinterface/trending_jobs");
    console.log(res.data);
    setTrandingJobs(res.data);
  };
  useEffect(function () {
    fetchAllTopCompanies();
    fetchAllTrandingJobs()
  }, []);

  var trendingJobsColor = ["#e67e22", "#ffeaa7","#fd79a8","#74b9ff","#2ecc71",];

  return (
    <div >
      <Header />
      <div >
        <TopComponent />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginTop: 80,
        }}
      >
        <TrendingJobsComponent items={trandingJobs} colors={trendingJobsColor}   />
      </div>

      {matches?<></>:

      <div
        style={{
          width: "100%",
          marginTop: 80,
        }}
      >
        <GetResumeHelp />
      </div>
}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          marginTop: 80,
          background: "#e6edf2",
        }}
      >
        <div
          style={{
            fontSize: matches?26:33,
            fontWeight: "bolder",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 20,
            paddingBottom: 5,
          }}
        >
          Job Openings in Top companies
        </div>
        <div style={{ margin: 40, width: "90%" }}>
          <ScrollComponent data={topCompanies} />
        </div>
       
      </div>

      <div style={{ marginTop: 80 }}>
        <UserReviewComponent />
      </div>

      
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 60,
        }}
      >
        <DownloadJobsSpider />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginTop: 60,
        }}
      >
        <TwoPeopleHireComponenet />
      </div>



      <Paper
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifySelf: "center",
          width: matches?"95%":"80%",
          height: "auto",
          background: "#F5E7EF",
          borderRadius: 15,
          marginTop: 100,
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
