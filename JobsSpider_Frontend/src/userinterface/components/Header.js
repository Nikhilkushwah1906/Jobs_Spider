import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, Link, Menu, MenuItem } from "@mui/material";
import spider from "../../assets/spider.png";
import parse from 'html-react-parser';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DrawerComponent from "./DrawerComponent";

export default function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const options = {
    Jobs: [
      "Work From Home Jobs",
      "Part Time Jobs",
      "Freshers Jobs",
      "Jobs For Women",
      "Full Time Jobs",
      "Night Shift Jobs",
      "International Jobs",
      "Jobs By City",
      "Jobs By Department",
      "Jobs By Company",
      "Jobs By Qualifications",
      "Others",
    ],
    "Carrer Compass": [
      "AI Resume Builder",
      "AI Resume Checker",
      "AI Cover Letter Generator",
      "AI Interview",
    ],
    Degree: [],
    Contest: [],
  };

  var menuoptions = Object.keys(options);

  const [anchorEl, setAnchorEl] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const open = Boolean(anchorEl);

  const handleOpenDrawer=()=>{
    setOpenDrawer(true)
  }
  
  const handleClick = (event, item) => {
    setAnchorEl(event.currentTarget);
    setMenuItems(options[item]);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const mainMenu = () => {
    return menuoptions.map((item) => {
      return (
        <Button
          onClick={(event) => handleClick(event, item)}
          style={{
            textTransform: "capitalize",
            color: "#000",
            fontSize: 14,
            fontWeight: "bold",
          }}
          endIcon={<KeyboardArrowDownIcon />}
        >
          {item}
        </Button>
      );
    });
  };

  const setMenuFormate=()=>{
    
    let str = `<div style="display:flex; flex-direction:column; padding:10px;">`;
  
    for (let i = 0; i < menuItems.length;) {
      str += `
        <div style="display:flex; flex-direction:row; width:400px;">
          <div style="width:200px; padding:3px;">${menuItems[i++] || ""}</div>
          <div style="border-left: 1px solid black; width:10px; justify-content:center;"></div>
          <div style="width:150px; display:flex; padding:3px; margin-left:20px;">${menuItems[i++] || ""}</div>
        </div>`;
    }
  
    str += `</div>`;
    return parse(str)
  }

  const showMenuOptions = () => {
    return menuItems.map((item, i) => {
      return <MenuItem onClick={handleClose}>{item}</MenuItem>;
    });
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background:
          "linear-gradient(298deg, rgba(255,255,255,1) 24%, rgba(249,244,255,1) 94%)" }}>
        <Toolbar>
          <div style={{ display: "flex", alignItems: "center" }}>
         {matches? <div><MenuIcon onClick={handleOpenDrawer} style={{cursor:'pointer',color:'#000',marginRight:7}}/></div>:<></>}
                     <div>
              <img src={spider} style={{ width: 40 }} />
            </div>

            <div
              style={{
                fontWeight: 700,
                fontSize: 24,
                color: "#000",
                marginLeft: 5,
              }}
            >
              JobsSpider
            </div>
          </div>

          {matches?<></>:
          <div
            style={{
              marginLeft: 30,
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            {mainMenu()}
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              {setMenuFormate()}
            </Menu>
          </div>
          }
          <div style={{width:300,display:'flex',justifyContent:matches?'flex-end':'space-between',alignItems:'center'}}>
            {matches?<></>:
            <Link
              href="#"
              underline="none"
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "#b03a84",
              }}
            >
              Employer Login
            </Link>
            }
            {matches?<AccountBoxIcon style={{fontSize:35,color:"#b03a84"}} />:
            <Button
              style={{
                width: 180,
                textTransform: "capitalize",
                fontSize: 14,
                fontWeight: "bold",
                background: "#b03a84",
                color: "#ffff",
              }}
            >
              Candidate Login
            </Button>
            }
          </div>
        </Toolbar>
      </AppBar>
      <h1>{`Result:${matches}`}</h1>
      <DrawerComponent options={options} open={openDrawer} setOpenDrawer={setOpenDrawer}/>
    </Box>
  );
}
