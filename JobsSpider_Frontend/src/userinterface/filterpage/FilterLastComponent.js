import { Button, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { serverURL } from "../../services/FetchNodeServices";

export default function LastFilterComponent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div style={{ display: "flex",justifyContent:'center'}}>
      <Paper
        elevation={1}
        style={{
          backgroundColor: "hsla(231, 45.90%, 78.20%, 0.39)",
          padding: 5,
          width: matches ? "90%" : 300,
          height: "500px",
          borderRadius: 10,
          background: "linear-gradient(to bottom, #99ccff 0%, #ffffff 100%)",
          border: '0.5px solid #74b9ff',
          margin: 5,
        }}
      >
        <div>
          <h3
            style={{
              color: "rgb(0 60 150/var(--tw-text-opacity,1))",
              fontSize: 22,
              fontWeight: "500",
              margin: "5px 5px 5px 20px",
            }}
          >
            Login with Apna and experience more!
          </h3>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <ul>
            <li>Personalised job matches</li>
            <li>Direct connect with HRs</li>
            <li>Latest updates on the job</li>
          </ul>
        </div>

        <div style={{ position: "relative" }}>
          <img
            src={`${serverURL}/images/mobile.png`}
            style={{
              width: 210,
              height: "327px",
              marginTop: matches ? 13 : 12,
              display: "flex",
              justifySelf: "center",
            }}
            alt="Logo"
          />
          <Button
            variant="contained"
            style={{
              display: "flex",
              width: matches ? "95%" : "180px",
              justifySelf: "center",
              color: "#ffff",
              background: "#b03a84",
              borderColor: "green",
              position: "absolute",
              top:270,
              right:matches?10: 62,
              textTransform: "none",
            }}
          >
            Create Profile
          </Button>
        </div>
      </Paper>
    </div>
  );
}
