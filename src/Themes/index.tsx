
import { makeStyles } from "@material-ui/core";



 const customStyles = makeStyles({
  time: {
    display: "flex",
    justifyContent: "flex-start",
    columnGap: "6px",
  },
  bannerCardImage: {
    border: "none",
    boxShadow: "none",
    height: "230px",
    width: "250px",
    backgroundColor: "#F1F6F4",
    marginleft: "618px",
    margintop: "17px",
    fontFamily:"Cera Pro"
  },
   bannerBox: {
    backgroundColor: "#F1F6F4",
    // marginLeft: "100px",
    marginTop: "32px",
    height: "264px",
    width: "912px",
    fontFamily:"Cera Pro"

  },
  explorecontent: {
    width: "461px",
    height: "69px",
    color: "#6D787E",
    fontfamily: "Cera Pro",
    fontsize: "18px",
    fontweight: "400",
    lineheight: "23px",
    textalign: "left",
  },
  headerLink:{
   
    display: "flex",
    fontFamily:"Cera Pro",
    // fontWeight:"500",
    alignItems: "center", 
    fontSize:"16px",
    color: "#03314B" ,
    textTransform:"none",
    width:"auto",
    "&:hover": {
      backgroundColor: "white",
      borderBottom: "solid 3px #22C870",
      justifyContent:"center",
    }
  },
  exploretitle: {
    height:"90px",
    width: "319px",
    fontfamily: "Cera Pro",
    fontsize: "36px",
    fontweight: "700",
    lineheight: "45px",
    textalign: "left",
    color: "#03314B",
  },
  timeIcon: {
    width: "16.67px",
    height: "16.67px",
  },
  personIcon: {
    width: "13.33px",
    height: "17.7px",
  },
  iconText: {
    color: "#6D787E",
    fontFamily:"Cera Pro"
  },
  bookTitle: {
    fontSize: "18px",
    fontWeight: 700 ,
    lineHeight: "23.63px",
    color: "#03314B",
    fontFamily:"Cera Pro",
    width:"225px",
    height:"23px",
    
        
  },
  bookAuthor: {
    fontWeight: 500,
    color: "#6D787E",
    lineHeight: "20.11px",
    fontsize: "16px",
    fontweight: "500",
    lineheight: "20px",
    fontFamily:"Cera Pro"

  },
  toggletabs:{

    fontfamily: "Cera Pro",
    fontsize: "16px",
    fontweight: 400,
    lineheight: "10px",
    textAlign:"left",
    justifyContent:"left",
    alignItems:"left",
    height:"20px",
    "&:hover":{Color: "#03314B"},
    margin: "0px 0px",
    textTransform: "none",
  },
  toggleContent:{
    color: "#03314B",
    fontFamily: 'Cera Pro',
    fontStyle: 'normal',
    fontSize: '16px',
    lineHeight: '20px',
  },
  buttonstyle: {
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "20.11px",
    textTransform: "none",
  },
  Finishedbtn:{
    fontfamily: "Cera Pro",
    fontsize: "16px",
    fontweight:"500",
    lineheight: "20px",
    color:"#0365F2",
    width: "62px",
    height: "20px",
    textTransform:"none"
    },
    ReadAgainbtn:{
      
    fontfamily: "Cera Pro",
    fontsize: "16px",
    fontweight: "500",
    lineheight: "20px",
    width: "100px",
    height: "20px",
    textTransform:"none"
    },
  readNowButton: {
    color: "#22C870",
    border: "1px solid #042330",
    borderRadius: "4px",
    width: "122px",
    height: "44px",
    fontFamily:"Cera Pro"
  },
  
  finishedReading: {
    background: "#2CE080;",
    borderRadius: "4px",
    width: "170px",
    height: "44px",
    fontFamily:"Cera Pro",
    color: "#03314B",
    "&:hover": {
      background: "#00C263",
    },
  },
  sendToKindle: {
    color: "#6D787E;",
    borderRadius: "4px",
    width: "151px",
    fontWeight: 400,
    height: "44px",
    fontFamily:"Cera Pro",
    whiteSpace:"nowrap"
  },
  addToLib: {
    height: "20px",
    width: "103px",
    
    fontfamily: "Cera Pro",
    fontsize: "16px",
    fontweight: "400",
    textTransform:"none",
  
  },
  addtoLibrarybtn: {
    width: "100%",
    textTransform: "none",
    color: "#0365F2",
    fontWeight: 500,
    fontSize: "16px",
    fontFamily:"Cera Pro",
    lineHeight: "20.11px",
    "&:hover": {
      color: "white",
      backgroundColor: "#0365F2",
    },
  },

  blinks:{
    color:"#03314B",fontWeight: 700,fontfamily: "Cera Pro",fontsize: "24px",fontweight: "700",lineheight: "30px",height: "30px",textAlign:"left"

  },
  CardHead: {
    background: "#FFF",
    border: "1px solid #E1ECFC",
    borderRadius: "8px",
    width: "300px",
    Height: "466px",
    fontFamily:"Cera Pro"
  },
  bookInfo: {
    color: "#03314B",
    fontFamily:"Cera Pro"
  },
  footer: {
    width: "542px",
    height: "224px",
    fontFamily:"Cera Pro"
  },
  footerNavlinks:{
    
    fontfamily: "Cera Pro",
    fontsize: "16px",
    fontweight: 400,
    lineheight: "24px",
    textalign: "left",
    height: "24px",
    width: "214px",


  },
  visible: {
    position:"absolute",
    height: "1000%",
    // top: "86px",
    // background: "#F1F6F4",
    zIndex:1,
    width:"100%",
    fontFamily:"Cera Pro",

  },
  hidden: {
    display: "none",
  },

  footertitle:{
    width:"378px",height:"64px",color:"#0365F2",fontFamily:"Cera Pro",fontsize:"24px",fontweight: "500",lineheight: "32px",textalign:"left"
  }
  ,
  footertag:{
    fontfamily: "Cera Pro",fontsize: "10px",fontweight: "400",lineheight: "22px",color:"#6D787E"
  }
});
 export { customStyles };