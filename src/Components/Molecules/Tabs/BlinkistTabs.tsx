import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabsandCardState from "../TabsAndCards/index";
import { makeStyles } from "@mui/styles";

type Book = {
  id: number;
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
  readTime: string;
  readersCount: string;
  status: string;
  category:string;
};

interface BlinkistTabsProps {
  // bookList:Book[];
  value: string;
  onFinishedClick: () => void;
  bookObject: Array<Book>;
}

const useStyles = makeStyles(() => ({
  TabBox: {
    padding: "0 0px",
    borderBottom: "0",
    borderColor: "#22C870",
    justifyContent:"left"
  },
  TabPanel: {
    // padding: "10px 0px !important",
    color:"green",
    alignItems:"left",
    justifyContent:"left"
  },
  Tab: {
  width: "200px",
    height: "23px",

    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight: "23px",
    justifyContent:"left",
    alignItems: "left",
    textTransform: "none",

    "&:focus": {
      color: "#22C870",
    },
  },
  // TabBox: {
    
  //   padding: "0 0px",
  //   borderBottom: "0",
  //   // borderColor: "#22C870",
  //   fontFamily:"Cera Pro"
  // },
  // TabPanel: {
  //   padding: "30px 0px !important",
  //   width:"100%",
  //   // padding: "30px 0px",
  //   fontFamily:"Cera Pro"
  // },
  // Tab: {
  //   width: "200px",
  //   height: "23px",

  //   fontFamily: "Cera Pro",
  //   fontStyle: "normal",
  //   fontSize: "18px",
  //   lineHeight: "23px",
  //   justifyContent:"left",
  //   alignItems: "flex-start",
  //   textTransform: "none",

  //   "&:focus": {
  //     color: "#22C870",
  //   },
    // width: "65%",
    // paddingLeft: "0px !important",
    // whiteSpace:"nowrap",
    // fontFamily:"Cera Pro"
  // },
}));

export default function BlinkistTabs(props: BlinkistTabsProps) {
  const classes = useStyles();
  
  const [value, setValue] = React.useState(props.value);
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  
  return (
    <Box>
      <TabContext value={value}  data-testid={"tab-context"}>
        <Box className={classes.TabBox} position={"relative"} sx={{
        display: "flex",
        flexWrap: "wrap",
        margin:"10px",
        padding:"50px",
        // color:"#22C870"
      }}>
          <TabList
            onChange={handleChange}
            textColor="inherit"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#2CE080",
              },
            }}
          >
            <Tab
              disableRipple
              label="Currently Reading"
              value="1"
              className={classes.Tab}
              data-testid={"reading-tab"}
            />
            <Tab
              disableRipple
              label="Finished"
              value="2"
              className={classes.Tab}
              data-testid={"finished-tab"}
            />
          </TabList>
        </Box>
        <TabPanel value="1" className={classes.TabPanel} data-testid={"tab-panel1"}>
          <TabsandCardState
            type="reading"
            onFinishedClick={()=>props.onFinishedClick()}
            books={props.bookObject}
          />
        </TabPanel>
        <TabPanel value="2" className={classes.TabPanel} data-testid={"tab-panel2"}>
          <TabsandCardState
            type="finished"
            onFinishedClick={()=>props.onFinishedClick()}
            books={props.bookObject}
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
