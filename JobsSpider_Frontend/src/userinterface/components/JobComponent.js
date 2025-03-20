import { Button,Paper } from "@mui/material"
import {serverURL} from "../../services/FetchNodeServices"
import { useState } from "react"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function JobComponent ({item}){

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const [bk,setBk]= useState('#f1f2f6')
    const [btnProps ,setBtnProps]= useState({v:'text',btnbk:'',c:'#b03a84'})

    const handleColorChangeOver=()=>{
        setBk('#ffff')
        setBtnProps({v:'contained', btnbk:'#b03a84', c:'#ffff'})
    }
    const handleColorChangeOut=()=>{
        setBk('#f1f2f6')
        setBtnProps({v:'text', btnbk:'', c:'#b03a84'})
    }

    return (
        <div style={{display:'flex'}}>
            <Paper elevation={1} style={{width:matches?320:340, height:270, padding:'30px 20px 30px 20px', borderRadius:18, background:bk, border:'0.5px solid #f1f2f6'}} onMouseOver={handleColorChangeOver} onMouseOut={handleColorChangeOut}  >
                <img src={`${serverURL}/images/${item.companypicture}`} style={{width:150}} />

                <div style={{display:'flex', flexDirection:'column', marginTop:40}}>
                    <div style={{fontSize:20,fontWeight:'bold',marginBottom:12}}>{item.companyname}</div>
                    <div style={{fontWeight:400,fontSize:17}}>{(item.description).length>28?(item.description).substring(0,39)+"...":item.description}</div>
                </div>
                <div>
                    <Button variant={btnProps.v} style={{color:btnProps.c,background:btnProps.btnbk,textTransform:'capitalize',marginTop:60,marginBottom:20,fontSize:18,fontWeight:'bold'}}>{'View Jobs >'}</Button>
                </div>
            </Paper>
        </div>
    )
}