
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import {TabContext} from '@mui/lab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {customStyles} from "../../../Themes/index";


export default function ToggleTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const classes=customStyles();

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} TabIndicatorProps={{style: { background: "#2CE080",color:"#03314B",height: 3}}}>
            <Tab label="Synopsis" value="1" className={classes.toggletabs} />
            <Tab label="Who is it for" value="2" className={classes.toggletabs}/>
            <Tab label="About the author" value="3" className={classes.toggletabs}/>
          </TabList>
        </Box>
        <TabPanel value="1" className={classes.toggleContent}>Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier's essential<br></br> 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, <br></br>visionaries, and innovators of today. This new edition combines the timeless <br></br>business advice and strategy of the original text, supplemented with <br></br>cutting-edge insights and case studies pertinent to today’s business world.</TabPanel>
        <TabPanel value="2" className={classes.toggleContent}>Item Two</TabPanel>
        <TabPanel value="3" className={classes.toggleContent}>Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}