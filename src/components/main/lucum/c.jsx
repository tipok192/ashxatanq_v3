import s from "./c.module.css"
import mp3 from "../../../audio/audio1.mp3"
import {motion} from "framer-motion"

function Lucum() {
   return (
      <motion.div className={s.div}
      initial={{width:0}}
      animate={{width:"100%"}}
      exit={{x: window.innerWidth, transition:{duration:0.1}}}
      >
         <div>
            <div className={s.box2}>

               <div className={s.box}>
                  <div className={s.text}>
                     <h2 className={s.hw1}>Լուծման ուղղիներ</h2>
                     <h3 className={s.hw2}>kjwhmotfhbucasiuhdrkjrufnoioghyuvaskdmlgkjcfoigjhklijihrtcyuvgblakfjz;lokinhbkhcxoikpvfl;pbkmgokxnoihsuvfysugfrvhsoiftxgyidhmvfouvl;gokjsdhoulsvhoip futghfdkiyhjgdoipfyikbjkdyghuf</h3>
                  </div>
               </div>

            </div>
         </div>
      </motion.div>
   );
}

export default Lucum;