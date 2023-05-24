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
import IconYape from "../../../images/logo.png";
import Bank from "./Bank";
import Agents from "./Agents";

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
      width: '100%',
      //border: "5px solid #0d0d0f",
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: "300px"

    }
  }>
    <Box sx={
      {
        borderBottom: 1,
        borderColor: 'divider',
        width: '100%',
        //border: "1px solid #0d0d0f"

      }
    }>
			<Box>
			 

		<Typography  variant="h4"  mt={2} ml={4}  sx={
                    {
                        color: "#315db7"
                    }
                }>Dónde pagar tu recibo?</Typography>

			</Box>
      <Tabs value={value}
        onChange={handleChange}
        >
        <Tab icon={<AccountBalanceIcon sx={
                    {
                        fontSize: "50px"
                    }
                } />}
          label="Bancos"
          {...a11yProps(0)} sx={ { padding:"50px" }}/>
        <Tab icon={<SupportAgentIcon  sx={
                    {
                        fontSize: "50px"
                    }
                }/>}
          label="Agentes"
          {...a11yProps(1)} sx={ { padding:"50px" }}/>
        <Tab icon={<DevicesIcon  sx={
                    {
                        fontSize: "50px"
                    }
                }/>}
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
      Item Three
    </TabPanel>
		<TabPanel value={value}
      index={3}>
      Item Three
    </TabPanel>
  </Box>);
}
