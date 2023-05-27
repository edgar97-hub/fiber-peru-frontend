import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DevicesIcon from '@mui/icons-material/Devices';
import IconOnline from "../../../images/online.jpg";
import IconAgente from "../../../images/agentes2.png";
import IconBanco from "../../../images/bancos.webp";
import IconYape from "../../../images/logo.png";

import Bank from "./Bank";
import Agents from "./Agents";
import Online from "./Online";
import Yape from "./Yape";

function TabPanel(props) {
  const {
    children,
    value,
    index,
    ...other
  } = props;

  return (<div role="tabpanel"
    hidden={
      value !== index
    }
    id={
      `simple-tabpanel-${index}`
    }
    aria-labelledby={
      `simple-tab-${index}`
    }
    {...other}> {
    value === index && (<Box sx={
      {p: 3}
    }>
      <Typography> {children}</Typography>
    </Box>)
  } </div>);
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {id: `simple-tab-${index}`, 'aria-controls': `simple-tabpanel-${index}`};
}

export default function WheretoPayServices() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (<Box sx={
    {
      //border: "1px solid #0d0d0f",
      alignItems: "center",
      justifyContent: "center",
      //width: { xs: 210, sm: 280, md: 250, lg: 250 },
      width: '100%',
      //paddingLeft: "300px",
      paddingLeft:{ xs: 3, sm: 10, md: "200px", lg: "100px" },

    }
  }>
    <Box sx={
      {
        borderBottom: 1,
        borderColor: 'divider',
        width: '100%',
        //border: "1px solid #0d0d0f",
      }
    }>
			 

		<Typography  variant="h4"  mt={2} ml={4}  sx={
                    {
                        color: "#315db7"
                    }
                }>Dónde pagar tu recibo?</Typography>

      <Tabs value={value}   variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
        onChange={handleChange}
        >
        <Tab 
          label="Bancos"  icon={<img src={IconBanco} height={65} width={55}  />}
          {...a11yProps(0)}   sx={ { padding:"50px" }}/>
        <Tab icon={<img src={IconAgente} height={65} width={85}  />}
          label="Agentes"
          {...a11yProps(1)} sx={ { padding:"50px" }}/>
        <Tab icon={<img src={IconOnline} height={65} width={85}  />}
          label="En linea"
          {...a11yProps(2)} sx={ { padding:"50px" }}/>
        <Tab icon={<img src={IconYape} height={55} width={55}  />}
          {...a11yProps(3)} sx={ { padding:"50px" }}/>

      </Tabs>
    </Box>
    <TabPanel value={value}
      index={0} >
			<Bank/>
    </TabPanel>
    <TabPanel value={value}
      index={1}>
			<Agents/>
    </TabPanel>
    <TabPanel value={value}
      index={2}>
			<Online/>
    </TabPanel>
		<TabPanel value={value}
      index={3}>
			<Yape />
    </TabPanel>
  </Box>);
}
