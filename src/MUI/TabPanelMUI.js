import { Typography, Box, Tab, Tabs } from "@mui/material";
import { PropTypes } from "prop-types";
import React from "react";
import DGlist from "../components/DGlist";

function TabPanel(props) {
    const { children, value, index, ...other} = props;

    return (
        <div
            role='tabpanel'
            hidden={ value !== index }
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100vh' }} 
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="Tarjoukset" {...a11yProps(0)} />
          <Tab label="Kiekot" {...a11yProps(1)} />
          <Tab label="Reput" {...a11yProps(2)} />
          <Tab label="Asusteet" {...a11yProps(3)} />
          <Tab label="Muut tuotteet" {...a11yProps(4)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Tarjoukset
        </TabPanel>
        <TabPanel value={value} index={1}>
            <DGlist />
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
      </Box>
    );
  }