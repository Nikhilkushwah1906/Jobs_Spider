import { serverURL } from "../../services/FetchNodeServices";
import SearchBarComponent from "./SearchBarComponent";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SearchBarMob from "./SearchBarMob";

export default function TopComponent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  var Data = [
    {
      candidatename: "Nikhiil K Kushwah",
      title: "got Job",
      picture: "adi.jpg",
    },
    {
      candidatename: "Shivani Bhaduariya",
      title: "got Job",
      picture: "adi.jpg",
    },
    {
      candidatename: "Dhruv Shukla",
      title: "has fixed an interview ",
      picture: "adi.jpg",
    },
    {
      candidatename: "Suryansh Gupta",
      title: "has fixed an interview",
      picture: "adi.jpg",
    },
    { candidatename: "Harshit Kushwaha", title: "got Job", picture: "adi.jpg" },
    { candidatename: "Shristi Rajput", title: "got Job", picture: "adi.jpg" },
    {
      candidatename: "Raj Bhadouria",
      title: "has fixed an interview",
      picture: "adi.jpg",
    },
    {
      candidatename: "Kashis",
      title: "has fixed an interview",
      picture: "adi.jpg",
    },
    { candidatename: "Radha Gupta", title: "got Job", picture: "adi.jpg" },
  ];
  return (
    <div
      style={{
        height: matches ? 650 : 500,
        paddingTop: 20,
        background:
          "linear-gradient(298deg, rgba(255,255,255,1) 24%, rgba(249,244,255,1) 94%)",
      }}
    >
      <div
        style={{
          fontSize: matches ? 18 : 20,
          fontWeight: "bolder",
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: matches ? 20 : 80,
          marginTop: matches ? 40 : 60,
          height: "auto",
          color: "#b42f6b",
        }}
      >
        INDIA’S #1 JOB PLATFORM
      </div>
      <div
        style={{
          fontSize: matches ? 34 : 60,
          fontWeight: "bolder",
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: matches ? 20 : 80,
          marginTop: matches ? 15 : 20,
          height: "auto",
        }}
      >
        Your job search ends here
      </div>
      <div
        style={{
          fontSize: matches ? 14 : 25,
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: matches ? 20 : 80,
          marginTop: matches ? 16 : 20,
          height: "auto",
        }}
      >
        Discover 50 lakh+ career opportunities
      </div>

      <div
        style={{
          marginLeft: matches ? 5 : 80,
          marginTop: matches ? 30 : 60,
        }}
      >
        {matches ? <></> : <SearchBarComponent />}

        {matches ? (
          <div>
            <SearchBarMob/>
          </div>
        ) : (
          <></>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            justifyItems: "flex-end",
            backgroundColor: "transparent",
            position: "relative",
          }}
        >
          <img
            src={`${serverURL}/images/topimage.webp`}
            style={{
              position: "absolute",
              width: matches ? "85%" : "40%",
              top: matches ? -80 : -360,
              zIndex: matches ? -1 : 0,
              left: matches ? 0 : "",
            }}
            alt="Logo"
          />
        </div>
      </div>

      {matches ? (
        <></>
      ) : (
        <div style={{ marginTop: 245 }}>
          {/* <GetJobComponent data={Data} />*/}
        </div>
      )}

      {/* {matches ? <></> : <Divider style={{ marginTop: 50 }} />} */}
    </div>
  );
}

