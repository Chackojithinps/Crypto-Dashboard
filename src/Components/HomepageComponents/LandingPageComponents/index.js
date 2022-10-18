import React from 'react'
import './style.css'
import blueShade from '../../../assets/blueShade.png'
import cryptoMobile from '../../../assets/cryptoMobile.png'
import { motion} from 'framer-motion'
import { RWebShare } from "react-web-share";
import Button from '../../../Button'
import OutlineButton from '../../../OutlineButton/Button'
const LandingPageComponent = () => {
  return (
    <div className='wrapper'>
       <div className='heading-sec'>
        <motion.h1 className='big-heading' 
            initial={{opacity:0.5, y:50}}
            animate={{opacity:1, y:0}}
            transition={{type:"spring", duration:1}}>
          <span className='big-first-heading'>Track Crypto</span>
          <br/>
          <span className='big-heading-blue'>Real Time.</span>
        </motion.h1>
        <p className='para'>Track crypto through a public api in real time. Visit the dashboard to do so!</p>
        <div className='left-buttons'>
           <a href='/dashboard'>
              <Button text='Dashboard'/>
           </a>

           <div className='outline-btn'>
           <RWebShare
              data={{
                text: "checkout my crypto tracker made using react",
                url: "https://on.natgeo.com/2zHaNup",
                title: "crypto-tracker",
              }}
              onClick={() => console.log("shared successfully!")}
            >
           <OutlineButton text={"Share"}/>
         </RWebShare>
              
           </div>
        </div>
       </div>
       
       <div className='image-box'>
           <img className='blueShade' src={blueShade}></img>
           <motion.img 
             initial={{y:-10}}
             animate={{y:10}}
             transition={{type:"smooth",duration:2,repeat:Infinity,repeatType:'mirror'}}
           className='crypto-image' src={cryptoMobile}></motion.img>
       </div>
     
    </div>
  )
}

export default LandingPageComponent
