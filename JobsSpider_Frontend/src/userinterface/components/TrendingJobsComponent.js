import { colors, Paper } from "@mui/material";
import TrendingJobs from "./TrendingJobs";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function TrendingJobsComponent({ items ,colors}) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const showTrendingJobs = () => {
    return items.map((item,i) => {
        return <TrendingJobs item={item} colors={colors[i]} />;
    });
  };
  return (
    <div style={{ margin: 10, display: "flex",justifyContent:'center', flexWrap: "wrap",alignItems:'center' }}>
      <Paper
        elevation={0}
        style={{
          Padding: "30px 10px 30px 20px",
          width:matches?"90%": 360,
          height: matches?180:280,
          borderRadius:18,
          fontWeight: "bold",
          fontSize:matches?40: 56,
          margin: 15,
          display:'flex',
          justifyContent:'center',
          alignSelf:'center',
          textAlign:'center',
        }}
      >
        Tranding Jobs On JobsSpider
      </Paper>
      {showTrendingJobs()}
    </div>
  );
}
