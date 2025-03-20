import { Box, Button, Grid } from "@mui/material";
import { serverURL } from "../../services/FetchNodeServices";
import spider from "../../assets/spider.png";

export default function GetResumeHelp() {
  return (
    <div
      style={{ background: "#f3f4ff", width: "100%", height: 350, display: "flex" }}
    >
      <div
        style={{
          width: "33%",
          height: 350,
          display: "flex",
        }}
      >
        <img
          src={`${serverURL}/images/getresumehelpleft.webp`}
          style={{ height: "90%", marginTop: 35 }}
        />
      </div>
      <div
        style={{
          width: "34%",
          height: 350,
          display: "flex",
          flexDirection: "column",
          alignItems: 'center',
          justifyContent: 'center',
          textAlign:'center'
        
          
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontWeight: 600,
          }}
        >
          Already have a resume? Get help making it stand out to employers
        </div>
        <div style={{ fontSize: 16,fontWeight:400, marginTop: 13}}>
          Match with a career coach who knows your industry for an expert resume
          review
        </div>
        <Button
          variant="contained"
          style={{
            fontSize: 18,
            backgroundColor: "#9C0F68",
            borderRadius: 25,
            color: "#ffffff",
            textTransform: "none",
            marginTop: 25,
          }}
        >
            <b>Get Resume Help</b>
        </Button>
        <div style={{ display: "flex", justifyContent:'center',alignItems:'center',marginTop:15 }}>
          <div style={{ fontSize: 16 }}>A service of JobsSpider</div>
          <img
            src={spider}
            style={{ height: 30,marginLeft:5 }}
          />
        </div>
      </div>
      <div
        style={{
          width: "33%",
          height: 350,
          display: "flex",
          justifyContent: "end",
        }}
      >
        <img
          src={`${serverURL}/images/getresumehelpright.webp`}
          style={{ height: "100%" }}
        />
      </div>
    </div>
  );
}
