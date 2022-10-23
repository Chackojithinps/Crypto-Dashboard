import './styles.css'
import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';

import Grid from '../Grid';

const DashboardWrapper = ({data}) => {
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event,newValue) => {
    setValue(newValue);
  };
  const style={color:'white',fontSize:"1.2rem", width:"100%", textTransform:"capitalize",fontWeight:"600", fontFamily:"Inter" }
  return (
     <div className='tab-wrapper'>
       <TabContext value={value}>
          <TabList variant="fullWidth" value={value} onChange={handleChange} >
            <Tab label="Grid" sx={style}/>
            <Tab label="List" sx={style}/>
          </TabList>
          <TabPanel value={0}>
          <div className='grid-flex'>
            {
              data.map((coin,i)=>(
                  <Grid coin={coin} key={i}/>
              ))
            }
          </div>
        </TabPanel>
        <TabPanel value={1}>
          Item Two
        </TabPanel>
       </TabContext>
        
         
    </div>
  )
}

export default DashboardWrapper
