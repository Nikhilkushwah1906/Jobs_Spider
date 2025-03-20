import { Button, Divider, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShareIcon from "@mui/icons-material/Share";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import zIndex from "@mui/material/styles/zIndex";
import { serverURL } from "../../services/FetchNodeServices";
import spider from "../../assets/spider.png";

export default function ShowJobsCardDatails({ data }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: matches ? "100%" : "50Vw",
          height: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          //   key={job.companyid}
          elevation={0}
          style={{
            backgroundColor: "#ffff",
            padding:matches?15: 10,
            width: matches ? "100%" : "50vw",
            height: matches ? "auto" : "355px",
            borderRadius: 10,
          }}
        >
          <div style={{ display: "flex",margin:7 }}>
            <img
              src={`${serverURL}/images/${data.companypicture}`}
              style={{ maxWidth: 60, objectFit: "contain" ,marginRight:matches?13:8}}
              alt="logo"
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 20, fontWeight: 600 }}>
                {data.categoryname} {data.subcategoryname}
              </div>
              <div style={{ fontSize: 14, color: "rgb(124, 119, 119)" }}>
                {data.companyname}
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: matches ? "column" : "row",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", margin:7 }}>
              <img src="pin.png" style={{ width: 15, height: 20,marginRight:matches?8:4 }} />
              {data.jobtype}
            </div>
            <div style={{ display: "flex", margin:7 }}>
              <img src="money.png" style={{ width: 20, height: 20 ,marginRight:matches?8:5}} />₹
              {data.minsalary} - ₹{data.maxsalary} Monthly
            </div>
          </div>
          <div
            style={{
              width: matches ? "100%" : "50vw",
              flexDirection: matches ? "column" : "row",
              height: "15vh",
              backgroundColor: "rgb(242 242 243 / var(--tw-bg-opacity, 1))",
              borderRadius: 15,
              display: "flex",
              alignItems: matches ? "" : "center",
              marginTop: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: matches ? "row" : "column",
                justifyContent:'space-between',
                gap: "20px",
                margin: 10,
                Color: "rgb(191, 186, 186)",
              }}
            >
              <div>Fixed</div>
              <div>
                ₹{data.minsalary} - ₹{data.maxsalary} Monthly
              </div>
            </div>
            {matches ? <Divider style={{ width: "90%", margin: 10 }} /> : <></>}

            <div
              style={{
                marginLeft: matches ? "10px" : "100px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: matches ? "row" : "column",
                  justifyContent:'space-between',
                  gap: "20px",
                  margin: 10,
                }}
              >
                <div>Earning Potential</div>
                <div>₹{data.maxsalary} Monthly</div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 15,
              gap: 5,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                background: "rgb(242 242 243 / var(--tw-bg-opacity, 1))",
                width: 'auto',
                borderRadius: 2,
                alignItems:'center',
                justifyContent:'center',
                padding:8
              }}
            >
              <img src="wfh.png" style={{ width: 25, height: 25,marginRight:3}} />
              <div>{data.jobtype}</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                background: "rgb(242 242 243 / var(--tw-bg-opacity, 1))",
                width: 'auto',
                borderRadius: 2,
                alignItems:'center',
                justifyContent:'center',
                padding:8
              }}
            >
              <img
                src="fulltime.png"
                style={{ width: 25, height: 25, marginRight: 3 }}
              />
              <div>{data.schedule}</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                background: "rgb(242 242 243 / var(--tw-bg-opacity, 1))",
                width: 'auto',
                borderRadius: 2,
                alignItems:'center',
                justifyContent:'center',
                padding:8
              }}
            >
              <img
                src="experience.png"
                style={{ width: 25, height: 25, marginRight: 3 }}
              />
              <div>{data.experience}</div>
            </div>
          </div>

          {matches?<></>:
          <div
            style={{
              display: "flex",
              gap: 10,
              marginTop: 20,
              position: matches ? "relative" : "",
              zIndex: matches ? 1 : "",
            }}
          >
            <Button
              variant="contained"
              style={{
                width: matches ? "80%" : "40vw",
                height: 50,
                border: "1px solid #b03a84",
                background: "#b03a84",
                textTransform: "none",
                fontWeight: 700,
              }}
            >
              Apply For Job{" "}
            </Button>
            <Button
              variant="text"
              style={{
                width: matches ? "20%" : "10vw",
                height: 50,
                border: "1px solid green",
                color: "green",
                background: "#ffffff",
              }}
              startIcon={<ShareIcon />}
            >
              Share
            </Button>
          </div>
          }
        </Paper>
      </div>
    </div>
  );
}
