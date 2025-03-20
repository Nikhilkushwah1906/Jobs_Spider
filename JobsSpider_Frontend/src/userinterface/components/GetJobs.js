import { Paper } from "@mui/material";
import { serverURL } from "../../services/FetchNodeServices";

export default function GetJobs({ item }) {
  return (
    <Paper
      elevation={1}
      style={{
        width: 250,
        height: 80,
        borderRadius: 45,
        border: "0.5px solid #f1f2f6",
        display:'flex',
        alignItems: "center",
        justifyContent:"space-evenly",
      }}
    >
      <div style={{display:'flex',width:'90%',height:'95%',alignItems:'center'}}>
      <div >
        <img
          src={`${serverURL}/images/${item.picture}`}
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
          }}
        />
      </div>
      <div style={{ fontSize: 15, fontWeight: "bold",marginLeft:6}}>
        {item.candidatename} {item.title}
      </div>
      </div>
    </Paper>
  );
}
