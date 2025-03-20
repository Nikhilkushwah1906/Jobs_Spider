import ReviewScroll from "./ReviewScroll";
import { serverURL } from '../../services/FetchNodeServices';
import Rating from "@mui/material/Rating";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function UserReviewComponent(){
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
    var user_review=[{userreviewid:1, username:"Pranita Sapre", userrating:4, userpicture:"shiwangi-singla.webp",userreview:"Thanks Apna for helping me find a job without much hassle. If you are a fresher or a skilled person with expert knowledge in a specific field, you can easily find a job through the JobSpider app." },
        {userreviewid:1, username:"Jenil Ghevariya", userrating:2.5, userpicture:"nikhil.jpg", userreview:"This app is very helpful if you are looking for a job and the team is also very supportive and friendly. They guided me through every stage. It is very easy to find a job on JobSpider because there are a lot of job options here for everyone. I got a job interview call very quickly after applying."},
        {userreviewid:1, username:"Moon Rai", userrating:4.5, userpicture:"rekha.webp" ,userreview:"It is definitely a great app with correct and true information on the job details. I am happy to use it and I would also recommend my friends to use it for their career development."},
        {userreviewid:1, username:"Nikhiil K kuhswah", userrating:4.5, userpicture:"nikhiil.jpeg",userreview:"Good and helpful app, even for freshers who don't have good qualifications. There are jobs for Caretakers, Househelp and many more. It's very easy to find jobs here. Thank you, JobSpider app!" },
        {userreviewid:1, username:"Anjali Saxsena", userrating:3.5, userpicture:"kaynat-mansuri.webp" ,userreview:"Good and helpful app, even for freshers who don't have good qualifications. There are jobs for Caretakers, Househelp and many more. It's very easy to find jobs here. Thank you, JobSpider app!"},
      ]
    return (
        <div style={{width:'100%',height:'auto',display:'flex',flexDirection:matches?'column':'row'}}>
            <div style={{background:'rgb(31 130 104)',width:matches?'100%':'30%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
              <div style={{width:matches?'85%':'80%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:matches?40:0,marginBottom:matches?40:0}}>
            <img src={`${serverURL}/images/inverted-quote.png` } style={{width:matches?'13%':'28%'}}/>
            <div style={{fontSize:matches?26:32,color:'white',marginTop:matches?35:45,marginBottom:50,fontWeight:matches?700:'bold'}}>Join the community of 5 crore satisfied job seekers...</div>
            <div style={{display:'flex',color:'white',fontSize:18}}>
                <div style={{marginRight:10}}>Play Store Ratings</div>
                <Rating
                name="half-rating-read"
                defaultValue={5}
                precision={0.5}
                readOnly
              />
            </div>
            </div>
            </div>
            <div style={{background:'rgb(234 248 244)',width:matches?'100%':'70%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div style={{width:'100%'}}>
                <ReviewScroll data={user_review} />
                </div>
            </div>
        </div>
    )
}