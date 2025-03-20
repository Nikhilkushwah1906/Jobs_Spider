import { Paper } from "@mui/material";
import { serverURL } from "../../services/FetchNodeServices";
import Rating from "@mui/material/Rating";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ReviewComponent({item}) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div style={{height:'400px',display:'flex',alignItems:'center',justifyContent:'center'}}>
      
        
      <Paper
        style={{
          width: matches?'480px':"440px",
          height: matches?'230px':"250px",
          backgroundColor: "#fff",
          borderRadius: "18px",
          padding: "15px",
          position: "relative",
        }}
      >
        <div>
          <img
            src={`${serverURL}/images/${item.userpicture}`}
            style={{
              width: '18%',
              borderRadius: 10,
              position: "absolute",
              top: matches?-30:-20,
              left: 30,
              alt: "image",
              zIndex:3,
            }}
          />
        </div>
        
        

        <div style={{ height: "25%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", marginBottom: 4 }}
            >
              <div style={{ fontSize: 17, fontWeight: 700 }}>
                {item.username}
              </div>
              <div
                style={{
                  border: "0.5px solid #B6BBC4",
                  marginLeft: "12px",
                  borderRadius: "10px",
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  padding: 2,
                }}
              >
                <div
                  style={{
                    backgroundColor: "#218c74",
                    borderRadius: "90%",
                    margin: "1.2px 0px 0px 1px",
                    width: "17px",
                    height: "17px",
                  }}
                >
                  <CheckCircleOutlineIcon
                    style={{ width: "11px", margin: "-3px 3px", color: "#fff" }}
                  />
                </div>
                <div
                  style={{
                    color: "#218c74",
                    fontWeight: "bold",
                    fontSize: 11,
                    marginLeft: "7px",
                    marginTop: "2px",
                  }}
                >
                  PLACED
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ fontSize: 18, fontWeight: 600 }}>{item.userrating}</div>
              <Rating
                name="half-rating-read"
                defaultValue={item.userrating}
                size="small"
                style={{ width: 174, marginLeft: 8 }}
                precision={0.5}
                readOnly
              />
            </div>
          </div>
        </div>

        <p style={{ fontSize: 18, fontWeight:400 }}>
        {item.userreview}
        </p>
      </Paper>
    </div>
  );
}
