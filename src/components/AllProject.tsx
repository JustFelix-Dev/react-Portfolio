import { motion } from "framer-motion"


const AllProject = () => {
    const myVariant = {
        hidden:{
          opacity: 0,
        },
        visible:{
          opacity:1,
          transition:{
              type:'spring',
              duration:1,
              when:'beforeChildren',
              staggerChildren:0.3
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
         duration:1.5
     }
    }
}
  return (
           <motion.div variants={myVariant} initial='hidden' animate='visible' className="allProject">
             <motion.div variants={childVariant}>
                  <a target="blank" className="github" href="https://github.com/JustFelix-Dev/mern-airBnB-app"><img src="/github.png" alt="icon" height={20} width={20} /></a>
                  <a className="link" target="blank" href={'https://airbnb.felixdev.com.ng'}>
                     <img src="https://res.cloudinary.com/dljgkzwfz/image/upload/v1694427320/Github%20ReadMe%20Screenshots/Screenshot_73_hdcphh.png" alt="icon" />
                  </a>
                     <p className="details">
                          Booking Application
                     </p>
            </motion.div>
            <motion.div  variants={childVariant}  >
                  <a target="blank" className="github" href="https://github.com/JustFelix-Dev/React-budgetApp"><img src="/github.png" alt="icon" height={20} width={20} /></a>
                  <a className="link" target="blank" href={'https://react-budget-app-orpin.vercel.app/'}>
                     <img src="https://res.cloudinary.com/dljgkzwfz/image/upload/v1694437857/Github%20ReadMe%20Screenshots/Screenshot_77_jff20f.png" alt="icon" />
                  </a>
                     <p className="details">
                          Budgetry
                     </p>
            </motion.div>
            <motion.div  variants={childVariant} >
                  <a target="blank" className="github" href="https://github.com/JustFelix-Dev/mern-scheduley"><img src="/github.png" alt="icon" height={20} width={20} /></a>
                  <a className="link" target="blank" href={'https://www.scheduley.felixdev.com.ng'}>
                     <img src="https://res.cloudinary.com/dljgkzwfz/image/upload/v1694432699/Github%20ReadMe%20Screenshots/Screenshot_74_uapnm0.png" alt="icon" />
                  </a>
                     <p className="details">
                          Scheduley
                     </p>
            </motion.div>
            <motion.div  variants={childVariant} >
                  <a target="blank" className="github" href="https://github.com/JustFelix-Dev/React-JokeApp"><img src="/github.png" alt="icon" height={20} width={20} /></a>
                  <a className="link" target="blank" href={'https://react-joke-app.vercel.app/'}>
                     <img src="https://res.cloudinary.com/dljgkzwfz/image/upload/v1694440540/Github%20ReadMe%20Screenshots/Screenshot_81_ja8dcx.png" alt="icon" />
                  </a>
                     <p className="details">
                          Joke-App
                     </p>
            </motion.div>
            <motion.div  variants={childVariant} >
                  <a target="blank" className="github" href="https://github.com/JustFelix-Dev/react-serviceProvider-checker"><img src="/github.png" alt="icon" height={20} width={20} /></a>
                  <a className="link" target="blank" href={'https://react-service-provider-checker.vercel.app/'}>
                     <img src="https://res.cloudinary.com/dljgkzwfz/image/upload/v1694438500/Github%20ReadMe%20Screenshots/Screenshot_78_jkogiy.png" alt="icon" />
                  </a>
                     <p className="details">
                          Network Provider Tracker
                     </p>
            </motion.div>
            <motion.div  variants={childVariant}  >
                  <a target="blank" className="github" href="https://github.com/JustFelix-Dev/CSS-Library"><img src="/github.png" alt="icon" height={20} width={20} /></a>
                  <a className="link" target="blank" href={'https://justfelix-dev.github.io/CSS-Library/'}>
                     <img src="https://res.cloudinary.com/dljgkzwfz/image/upload/v1694437109/Github%20ReadMe%20Screenshots/Screenshot_76_bqovtd.png" alt="icon" />
                  </a>
                     <p className="details">
                         FelixCSS - CSS Library
                     </p>
            </motion.div>
            <motion.div  variants={childVariant}  >
                  <a target="blank" className="github" href="https://github.com/JustFelix-Dev/Figma-to-React"><img src="/github.png" alt="icon" height={20} width={20} /></a>
                  <a className="link" target="blank" href={'https://figma-to-react-rho.vercel.app/'}>
                     <img src="https://res.cloudinary.com/dljgkzwfz/image/upload/v1694441350/Github%20ReadMe%20Screenshots/Screenshot_82_le6way.png" alt="icon" />
                  </a>
                     <p className="details">
                          Figma - to - React
                     </p>
            </motion.div>
            <motion.div  variants={childVariant} >
                  <a target="blank" className="github" href="https://github.com/JustFelix-Dev/react-Printivo-clone"><img src="/github.png" alt="icon" height={20} width={20} /></a>
                  <a className="link" target="blank" href={'https://printivo-clone.vercel.app/'}>
                     <img src="https://res.cloudinary.com/dljgkzwfz/image/upload/v1694439497/Github%20ReadMe%20Screenshots/Screenshot_79_tmxq8d.png" alt="icon" />
                  </a>
                     <p className="details">
                          Printivo
                     </p>
            </motion.div>
            <motion.div  variants={childVariant}  >
                  <a target="blank" className="github" href="https://github.com/JustFelix-Dev/Weather-App"><img src="/github.png" alt="icon" height={20} width={20} /></a>
                  <a className="link" target="blank" href={'https://justfelix-dev.github.io/Weather-App/'}>
                     <img src="https://res.cloudinary.com/dljgkzwfz/image/upload/v1694443247/Github%20ReadMe%20Screenshots/Screenshot_84_nbxpx7.png" alt="icon" />
                  </a>
                     <p className="details">
                          Weather Application
                     </p>
            </motion.div>
            <motion.div  variants={childVariant}  >
                  <a target="blank" className="github" href="https://github.com/JustFelix-Dev/Tic-Tac-Toe"><img src="/github.png" alt="icon" height={20} width={20} /></a>
                  <a className="link" target="blank" href={'https://justfelix-dev.github.io/Tic-Tac-Toe/'}>
                     <img src="https://res.cloudinary.com/dljgkzwfz/image/upload/v1694442284/Github%20ReadMe%20Screenshots/Screenshot_83_wduwrf.png" alt="icon" />
                  </a>
                     <p className="details">
                          Tic-Tac-Toe Game
                     </p>
            </motion.div>
            <motion.div  variants={childVariant} >
                  <a target="blank" className="github" href="https://github.com/JustFelix-Dev/Quiz-App"><img src="/github.png" alt="icon" height={20} width={20} /></a>
                  <a className="link" target="blank" href={'https://justfelix-dev.github.io/Quiz-App/'}>
                     <img src="https://res.cloudinary.com/dljgkzwfz/image/upload/v1694447058/Github%20ReadMe%20Screenshots/Screenshot_87_uheeat.png" alt="icon" />
                  </a>
                     <p className="details">
                          Quiz Application
                     </p>
            </motion.div>
            <motion.div  variants={childVariant} >
                  <a target="blank" className="github" href="https://github.com/JustFelix-Dev/Calculation-Table"><img src="/github.png" alt="icon" height={20} width={20} /></a>
                  <a className="link" target="blank" href={'https://justfelix-dev.github.io/Calculation-Table/'}>
                     <img src="https://res.cloudinary.com/dljgkzwfz/image/upload/v1694446109/Github%20ReadMe%20Screenshots/Screenshot_86_xnrkqm.png" alt="icon" />
                  </a>
                     <p className="details">
                          JS Calculation Table
                     </p>
            </motion.div>
            <motion.div  variants={childVariant}  >
                  <a target="blank" className="github" href="https://github.com/JustFelix-Dev/Gmail-Clone"><img src="/github.png" alt="icon" height={20} width={20} /></a>
                  <a className="link" target="blank" href={'https://justfelix-dev.github.io/Gmail-Clone/'}>
                     <img src="https://res.cloudinary.com/dljgkzwfz/image/upload/v1694506546/Github%20ReadMe%20Screenshots/Screenshot_93_j4h9es.png" alt="icon" />
                  </a>
                     <p className="details">
                         Gmail HomePage
                     </p>
            </motion.div>
            <motion.div  variants={childVariant} >
                  <a target="blank" className="github" href="https://github.com/JustFelix-Dev/Twitter-Clone"><img src="/github.png" alt="icon" height={20} width={20} /></a>
                  <a className="link" target="blank" href={'https://justfelix-dev.github.io/Twitter-Clone/'}>
                     <img src="https://res.cloudinary.com/dljgkzwfz/image/upload/v1694507135/Github%20ReadMe%20Screenshots/Screenshot_94_at9v5d.png" alt="icon" />
                  </a>
                     <p className="details">
                         Twitter HomePage
                     </p>
            </motion.div>
            <motion.div  variants={childVariant} >
                  <a target="blank" className="github" href="https://github.com/JustFelix-Dev/YouTube-Clone"><img src="/github.png" alt="icon" height={20} width={20} /></a>
                  <a className="link" target="blank" href={'https://justfelix-dev.github.io/YouTube-Clone/'}>
                     <img src="https://res.cloudinary.com/dljgkzwfz/image/upload/v1694507684/Github%20ReadMe%20Screenshots/Screenshot_95_ydcig4.png" alt="icon" />
                  </a>
                     <p className="details">
                         YouTube HomePage
                     </p>
            </motion.div>
            <motion.div  variants={childVariant}  >
                  <a target="blank" className="github" href="https://github.com/JustFelix-Dev/JS-Calculator"><img src="/github.png" alt="icon" height={20} width={20} /></a>
                  <a className="link" target="blank" href={'https://justfelix-dev.github.io/JS-Calculator/'}>
                     <img src="https://res.cloudinary.com/dljgkzwfz/image/upload/v1694495398/Github%20ReadMe%20Screenshots/Screenshot_89_tybuki.png" alt="icon" />
                  </a>
                     <p className="details">
                          JS - Calculator
                     </p>
            </motion.div>
            <motion.div  variants={childVariant} >
                  <a target="blank" className="github" href="https://github.com/JustFelix-Dev/Coffee-Page"><img src="/github.png" alt="icon" height={20} width={20} /></a>
                  <a className="link" target="blank" href={'https://justfelix-dev.github.io/Coffee-Page/'}>
                     <img src="https://res.cloudinary.com/dljgkzwfz/image/upload/v1694513591/Github%20ReadMe%20Screenshots/Screenshot_97_mfzntq.png" alt="icon" />
                  </a>
                     <p className="details">
                          Coffee Enterprise
                     </p>
            </motion.div>
            <motion.div  variants={childVariant}  >
                  <a target="blank" className="github" href="https://github.com/JustFelix-Dev/Mosaic-Grid"><img src="/github.png" alt="icon" height={20} width={20} /></a>
                  <a className="link" target="blank" href={'https://justfelix-dev.github.io/Mosaic-Grid/'}>
                     <img src="https://res.cloudinary.com/dljgkzwfz/image/upload/v1694514276/Github%20ReadMe%20Screenshots/Screenshot_98_jai3jc.png" alt="icon" />
                  </a>
                     <p className="details">
                          Mosaic Grid
                     </p>
            </motion.div>
            <motion.div  variants={childVariant}  >
                  <a target="blank" className="github" href="https://github.com/JustFelix-Dev/WhatsApp-Web"><img src="/github.png" alt="icon" height={20} width={20} /></a>
                  <a className="link" target="blank" href={'https://justfelix-dev.github.io/WhatsApp-Web/'}>
                     <img src="https://res.cloudinary.com/dljgkzwfz/image/upload/v1694514833/Github%20ReadMe%20Screenshots/Screenshot_100_oagzom.png" alt="icon" />
                  </a>
                     <p className="details">
                          WhatsApp WebPage
                     </p>
            </motion.div>
            <motion.div  variants={childVariant}  >
                  <a target="blank" className="github" href="https://github.com/JustFelix-Dev/TailWind-ECommerce"><img src="/github.png" alt="icon" height={20} width={20} /></a>
                  <a className="link" target="blank" href={'https://tail-wind-e-commerce.vercel.app/'}>
                     <img src="https://res.cloudinary.com/dljgkzwfz/image/upload/v1694443564/Github%20ReadMe%20Screenshots/Screenshot_85_xr4cch.png" alt="icon" />
                  </a>
                     <p className="details">
                         E-Commerce Page
                     </p>
            </motion.div>
            <motion.div  variants={childVariant} >
                  <a target="blank" className="github" href="https://github.com/JustFelix-Dev/Ludo-Game"><img src="/github.png" alt="icon" height={20} width={20} /></a>
                  <a className="link" target="blank" href={'https://justfelix-dev.github.io/Ludo-Game/'}>
                     <img src="https://res.cloudinary.com/dljgkzwfz/image/upload/v1694515286/Github%20ReadMe%20Screenshots/Screenshot_101_nzwbnl.png" alt="icon" />
                  </a>
                     <p className="details">
                          Ludo Game - UI
                     </p>
            </motion.div>
            <motion.div  variants={childVariant} >
                  <a target="blank" className="github" href="https://github.com/JustFelix-Dev/Chess-Board"><img src="/github.png" alt="icon" height={20} width={20} /></a>
                  <a className="link" target="blank" href={'https://justfelix-dev.github.io/Chess-Board/'}>
                     <img src="https://res.cloudinary.com/dljgkzwfz/image/upload/v1694515040/Github%20ReadMe%20Screenshots/Screenshot_6_g56otn.png" alt="icon" />
                  </a>
                     <p className="details">
                         ChessBoard - UI
                     </p>
            </motion.div>
            
           </motion.div>
  )
}

export default AllProject
