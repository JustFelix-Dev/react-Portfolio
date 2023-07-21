import { Tilt } from "react-tilt";

const MyTech = () => {
    return ( 
          <>
           <div className="my__tech">
             <div className="introduction">
                <h2>OVERVIEW.</h2>
                  <p> I help clients,firms or organizations build applications or solve their software engineering problems by deploying/combining the use of required technology stacks needed for such projects.
                  Let's build something extraordinary together and leave a lasting   impression on your users. Reach out to me and let's get started!
                  </p>
                  <div className="intro__cards">
                    <Tilt className='tilted' options={{ max: 45, scale: 1,speed:450 }}>
                        <img src="/frontendIcon.png" alt="frontEndIcon" width={60} height={60} />
                        <span>Front-End Developer</span>
                    </Tilt>
                    <Tilt className='tilted' options={{ max: 45, scale: 1,speed:450 }}>
                        <img src="/backendIcon.png" alt="backEndIcon" width={60} height={60} />
                        <span>Back-End Developer</span>
                    </Tilt>
                    <Tilt className='tilted' options={{ max: 45, scale: 1,speed:450 }}>
                        <img src="/technicalIcon.png" alt="technicalIcon" width={60} height={60} />
                        <span>Technical  Writer</span>
                    </Tilt>
                  </div>
             </div>
             <div className="technology">
                <h2>MY TECHNOLOGY STACKS</h2>
                <p>I demonstrate a high level of proficiency using these stacks:</p>
            <div className="tech__stack">
                 <Tilt options={{ max: 25, scale: 1,speed:450 }} className="frontEnd">
                 <img src="/frontendIcon.png" alt="frontEndIcon" width={60} height={60} />
                  <div className="frontEndIcons">
                      <span><img src="/html.png" alt="" width={45} height={45} /></span>
                      <span><img src="/css.png" alt="" width={45} height={45} /></span>
                      <span><img src="/bootstrap5.svg" alt="" width={45} height={45} /></span>
                      <span><img src="/Sasss.png" alt="" width={45} height={45} /></span>
                      <span><img src="/tailwind.png" alt="" width={45} height={45} /></span>
                      <span><img src="/framerMotion.jpg" alt="" width={45} height={45} /></span>
                      <span><img src="/javascript.png" alt="" width={45} height={45} /></span>
                      <span><img src="/typescript.png" alt="" width={45} height={45} /></span>
                      <span><img src="/react.png" alt="" width={45} height={45} /></span>
                      <span><img src="/redux.png" alt="" width={45} height={45} /></span>
                  </div>
                    <p>Front-End Stacks</p>
                 </Tilt>
                 <Tilt options={{ max: 25, scale: 1,speed:450 }} className="backEnd">
                 <img src="/backendIcon.png" alt="backEndIcon" width={60} height={60} />
                 <div className="backEndIcons">
                 <span><img src="/firebase.webp" alt="" width={45} height={45} /></span>
                 <span><img src="/nodejs.png" alt="" width={45} height={45} /></span>
                 <span><img src="/expressjs.png" alt="" width={45} height={45} /></span>
                 <span><img src="/mongoDB.png" alt="" width={45} height={45} /></span>
                 </div>
                 <p>Back-End Stacks</p>
                 </Tilt>
                 <Tilt options={{ max: 25, scale: 1,speed:450 }} className="devOps">
                 <img src="/devOps.png" alt="devOpsIcon" width={60} height={60} />
                 <div className="devOpsIcons">
                 <span><img src="/git.png" alt="" width={45} height={45} /></span>
                 <span><img src="/github.png" alt="" width={45} height={45} /></span>
                 <span><img src="/vercel.png" alt="" width={45} height={45} /></span>
                 <span><img src="/netlify.png" alt="" width={45} height={45} /></span>
                 </div>
                 <p>DevOps</p>
                 </Tilt>
            </div>
             </div>
             </div>
          </>
     );
}
 
export default MyTech;