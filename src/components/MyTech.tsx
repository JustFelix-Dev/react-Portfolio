import { Tilt } from "react-tilt";
import {motion} from 'framer-motion';

const MyTech = () => {
    const myVariant = {
        hidden:{
          opacity: 0,
        },
        visible:{
          opacity:1,
          transition:{
              type:'spring',
              duration:2,
              when:'beforeChildren',
              staggerChildren:0.35
          }
        }
  }

  const childVariant = {
         hidden:{
          opacity:0,
         },
         visible:{
          opacity:1,
          transition:{
              duration:2
          }
         }
  }
    return ( 
          <>
           <div className="my__tech">
             <div className="introduction">
                <motion.h2 initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{duration:1}}>OVERVIEW.</motion.h2>
                  <motion.p initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{duration:1}}> I help clients,firms or organizations build applications or solve their software engineering problems by deploying/combining the use of required technology stacks needed for such projects.
                  </motion.p>
                  <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{type:'spring', delay:0.6,duration:2.5,staggerChildren:1}}className="intro__cards">
                    <Tilt className='tilted' options={{ max: 45, scale: 1,speed:450 }}>
                        <motion.img initial={{scale:0.9}} animate={{scale:1.1}} transition={{duration:2,repeat:Infinity,repeatType:'mirror'}} drag
                    dragConstraints={{left:0,right:0,top:0,bottom:0}}
                    dragElastic={0.1} src="/frontendIcon.png" alt="frontEndIcon" width={60} height={60} />
                        <span>Front-End Developer</span>
                    </Tilt>
                    <Tilt className='tilted' options={{ max: 45, scale: 1,speed:450 }}>
                        <motion.img initial={{scale:0.9}} animate={{scale:1.1}} transition={{duration:2,repeat:Infinity,repeatType:'mirror'}} drag
                    dragConstraints={{left:0,right:0,top:0,bottom:0}}
                    dragElastic={0.1} src="/backendIcon.png" alt="backEndIcon" width={60} height={60} />
                        <span>Back-End Developer</span>
                    </Tilt>
                    <Tilt className='tilted' options={{ max: 45, scale: 1,speed:450 }}>
                        <motion.img initial={{scale:0.9}} animate={{scale:1.1}} transition={{duration:2,repeat:Infinity,repeatType:'mirror'}} drag
                    dragConstraints={{left:0,right:0,top:0,bottom:0}}
                    dragElastic={0.1} src="/technicalIcon.png" alt="technicalIcon" width={60} height={60} />
                        <span>Technical  Writer</span>
                    </Tilt>
                  </motion.div>
             </div>
             <motion.div initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:1.5}} className="technology">
                <h2>MY TECHNOLOGY STACKS</h2>
                <p>I demonstrate a high level of proficiency using these stacks:</p>
            <motion.div variants={myVariant} initial='hidden' animate='visible' className="tech__stack">
                 <Tilt options={{ max: 25, scale: 1,speed:450 }} className="frontEnd">
                 <img src="/frontendIcon.png" alt="frontEndIcon" width={60} height={60} />
                  <motion.div variants={childVariant} className="frontEndIcons">
                      <motion.span initial={{scale:0.9}} animate={{scale:1.09}} transition={{duration:3,repeat:Infinity,repeatType:'mirror'}}><img src="/html.png" alt="" width={45} height={45} /></motion.span>
                      <motion.span initial={{scale:0.9}} animate={{scale:1.09}} transition={{delay:0.5,duration:3,repeat:Infinity,repeatType:'mirror'}}><img src="/css.png" alt="" width={45} height={45} /></motion.span>
                      <motion.span initial={{scale:0.9}} animate={{scale:1.09}} transition={{delay:1,duration:3,repeat:Infinity,repeatType:'mirror'}}><img src="/bootstrap5.svg" alt="" width={45} height={45} /></motion.span>
                      <motion.span initial={{scale:0.9}} animate={{scale:1.09}} transition={{delay:1.5,duration:3,repeat:Infinity,repeatType:'mirror'}}><img src="/Sasss.png" alt="" width={45} height={45} /></motion.span>
                      <motion.span initial={{scale:0.9}} animate={{scale:1.09}} transition={{delay:2,duration:3,repeat:Infinity,repeatType:'mirror'}}><img src="/tailwind.png" alt="" width={45} height={45} /></motion.span>
                      <motion.span initial={{scale:0.9}} animate={{scale:1.09}} transition={{delay:2.5,duration:3,repeat:Infinity,repeatType:'mirror'}}><img src="/framerMotion.jpg" alt="" width={45} height={45} /></motion.span>
                      <motion.span initial={{scale:0.9}} animate={{scale:1.09}} transition={{delay:3,duration:3,repeat:Infinity,repeatType:'mirror'}}><img src="/javascript.png" alt="" width={45} height={45} /></motion.span>
                      <motion.span initial={{scale:0.9}} animate={{scale:1.09}} transition={{delay:3.5,duration:3,repeat:Infinity,repeatType:'mirror'}}><img src="/typescript.png" alt="" width={45} height={45} /></motion.span>
                      <motion.span initial={{scale:0.9}} animate={{scale:1.09}} transition={{delay:4,duration:3,repeat:Infinity,repeatType:'mirror'}}><img src="/react.png" alt="" width={45} height={45} /></motion.span>
                      <motion.span initial={{scale:0.9}} animate={{scale:1.09}} transition={{delay:4.5,duration:3,repeat:Infinity,repeatType:'mirror'}}><img src="/redux.png" alt="" width={45} height={45} /></motion.span>
                  </motion.div>
                    <p>Front-End Stacks</p>
                 </Tilt>
                 <Tilt options={{ max: 25, scale: 1,speed:450 }} className="backEnd">
                 <img src="/backendIcon.png" alt="backEndIcon" width={60} height={60} />
                 <motion.div variants={childVariant} className="backEndIcons">
                 <motion.span initial={{scale:0.9}} animate={{scale:1.09}} transition={{duration:3,repeat:Infinity,repeatType:'mirror'}}><img src="/firebase.webp" alt="" width={45} height={45} /></motion.span>
                 <motion.span initial={{scale:0.9}} animate={{scale:1.09}} transition={{delay:0.5,duration:3,repeat:Infinity,repeatType:'mirror'}}><img src="/nodejs.png" alt="" width={45} height={45} /></motion.span>
                 <motion.span initial={{scale:0.9}} animate={{scale:1.09}} transition={{delay:1,duration:3,repeat:Infinity,repeatType:'mirror'}}><img src="/expressjs.png" alt="" width={45} height={45} /></motion.span>
                 <motion.span initial={{scale:0.9}} animate={{scale:1.09}} transition={{delay:1.5,duration:3,repeat:Infinity,repeatType:'mirror'}}><img src="/mongoDB.png" alt="" width={45} height={45} /></motion.span>
                 </motion.div>
                 <p>Back-End Stacks</p>
                 </Tilt>
                 <Tilt options={{ max: 25, scale: 1,speed:450 }} className="devOps">
                 <img src="/devOps.png" alt="devOpsIcon" width={60} height={60} />
                 <motion.div variants={childVariant} className="devOpsIcons">
                 <motion.span initial={{scale:0.9}} animate={{scale:1.09}} transition={{duration:3,repeat:Infinity,repeatType:'mirror'}}><img src="/git.png" alt="" width={45} height={45} /></motion.span>
                 <motion.span initial={{scale:0.9}} animate={{scale:1.09}} transition={{delay:0.5,duration:3,repeat:Infinity,repeatType:'mirror'}}><img src="/github.png" alt="" width={45} height={45} /></motion.span>
                 <motion.span initial={{scale:0.9}} animate={{scale:1.09}} transition={{delay:1,duration:3,repeat:Infinity,repeatType:'mirror'}}><img src="/vercel.png" alt="" width={45} height={45} /></motion.span>
                 <motion.span initial={{scale:0.9}} animate={{scale:1.09}} transition={{delay:1.5,duration:3,repeat:Infinity,repeatType:'mirror'}}><img src="/netlify.png" alt="" width={45} height={45} /></motion.span>
                 </motion.div>
                 <p>DevOps</p>
                 </Tilt>
            </motion.div>
             </motion.div>
             </div>
          </>
     );
}
 
export default MyTech;