import { Button, Paper } from "@mui/material";
import { serverURL } from "../../services/FetchNodeServices";
import { useState } from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function TrendingJobs({item, colors}) {
  console.log(colors)
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const [bk, setBk] = useState("#f1f2f6");
  const [move, setMove] = useState("text");
  const [color, setColor] = useState("#000");
  const [btnProps, setBtnProps] = useState({
    v: "text",
    bk: "#f1f2f6",
    c: "#b03a84",
    brc: "#f1f2f6",
  });
  const handleColorChangeOver = (item) => {
    setBk("#ffff");
    setColor(colors);
    setMove("textMove");
    setBtnProps({
      v: "contained",
      bk: colors,
      c: "#ffff",
      brc: color,
    });
  };

  const handleColorChangeLeave = () => {
    setBk("#f1f2f6");
    setColor("#000")
    setMove("text");
    setBtnProps({ v: "text", bk: "#f1f2f6", c: "#b03a84", brc: "#f1f2f6" });
  };

  return (
    <Paper
      onMouseLeave={handleColorChangeLeave}
      onMouseOver={() => handleColorChangeOver(item)}
      elevation={0}
      style={{
        padding: "30px 20px 30px 20px",
        width:matches?"90%": 360,
        height: matches?160:280,
        borderRadius: 18,
        background:matches?`linear-gradient(0deg, ${colors} -80%, rgba(255,255,255,0) 83%)`:`linear-gradient(0deg, ${btnProps.bk} -80%, rgba(255,255,255,0) 83%)`,
        border:`0.5px solid ${btnProps.bk}`,
        margin: 15,
      }}
    >
      <div className="b" style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 18, color: "#7f8c8d" }}>
          {`Trending @ #${item.trending}`.toUpperCase()}
        </div>
        <div
          style={{
            marginTop: matches?10:40,
            fontSize: 20,
            fontWeight: "bold",
            marginBottom:matches?5: 10,
            color:matches?item.color:color 
          }}
        >
          {item.jobtype}
        </div>

        {matches?
        <div style={{fontFamily: "Bungee Outline" , fontSize: 30, fontWeight:500 }}>{item.jobtype}</div>:  <div className={`${move}`}>{item.jobtype}</div>}
      </div>
      <div style={{ marginTop:matches?22: 60 }}>
        <Button
          variant={matches?"contained":btnProps.v}
          style={{
            color: matches?"#fff":btnProps.c,
            textTransform: "capitalize",
            fontSize: 18,
            fontWeight: "bold",
            background:matches?colors: btnProps.bk,
          }}
        >{`View All >`}</Button>
      </div>
      <div style={{ position: "relative" }}>
        <img
          src={`${serverURL}/images/${item.picture}`}
          style={{
            width:matches?"40%": "55%",
            height:matches?180: 215,
            borderBottomRightRadius: 25,
            position: "absolute",
            zIndex: 2,
            top: matches?-160:-189,
            right: -20,
          }}
        />
      </div>
    </Paper>
  );
}
