import './styles.css'
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '../Grid';

const DashboardWrapper = ({data}) => {
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event,newValue) => {
    setValue(newValue);
  };
  const style={color:'white',fontSize:"1.2rem", width:"100%", textTransform:"capitalize",fontWeight:"600", fontFamily:"Inter" }
  return (
     <div className='tab-wrapper'>
        <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Grid" sx={style}/>
          <Tab label="List" sx={style} />
        </Tabs>
        <TabPanel value={value} index={0}>
         <div className='grid-flex'>
           {
            data.map((coin,i)=>(
                <Grid coin={coin} key={i}/>
            ))
           }
         </div>
       </TabPanel>
       <TabPanel value={value} index={1}>
         Item Two
       </TabPanel>
       
        
         
    </div>
  )
}

export default DashboardWrapper
