import s from "./c.module.css"
import mp3 from "../../../audio/audio1.mp3"
import {motion} from "framer-motion"
function Main2() {
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
                     <h2 className={s.hw1}>Ի՞նչն է խնդիրը</h2>
                     <h3 className={s.hw2}>kjwhmotfhbucasiuhdrkjrufnoioghyuvaskdmlgkjcfoigjhklijihrtcyuvgblakfjz;lokinhbkhcxoikpvfl;pbkmgokxnoihsuvfysugfrvhsoiftxgyidhmvfouvl;gokjsdhoulsvhoip futghfdkiyhjgdoipfyikbjkdyghuf</h3>
                  </div>
               </div>

            </div>
            <div className={s.gicdiv}>
               <div className={s.gic}></div>
            </div>
            <div className={s.gicdiv2}>
               <div className={s.gic2}></div>
            </div>
            <h2 className={s.hw1}>Հարցման երկու արդյունք</h2>
            <div className={s.gicdiv2}>
               <div className={s.gic2}></div>
            </div>
            <div className={s.div2}>
               {/* /////////////////////////////// */}
               <div className={s.div3}>
                  <div className={s.box}>
                     <div className={s.text}>
                        <h2 className={s.hw1}>rfhfgjfhgjfjgfhjf</h2>
                        <h3 className={s.hw2}>fhdgdfjghudfhoighfdjldhfoghumdoihoijokixpdflhudfhjfdhlkjuhfbkljfdhfldho;klhsdloksudgcbklishljoizsglpkjfdoulnaosicvgybiyvsyakubvguysfbvkjsgpdkcpkjevokhouhdtggduoisoxhdsfghvudfdgd</h3>
                     </div>
                  </div>
                  <audio controls src={mp3} className={s.audio}></audio>
               </div>
               {/* /////////////////////////// */}

               <div className={s.gicdiv2}>
                  <div className={s.gic2}></div>
               </div>
               {/* ...................... */}
               <div className={s.div3}>
                  <audio controls src={mp3} className={s.audio}></audio>
                  <div className={s.box}>
                     <div className={s.text}>
                        <h2 className={s.hw1}>dfhydfhgdgggmkh</h2>
                        <h3 className={s.hw2}>fhdgdfjghudfhoighfdjldhfoghumdoihoijokixpdflhudfhjfdhlkjuhfbkljfdhfldho;klhsdloksudgcbklishljoizsglpkjfdoulnaosicvgybiyvsyakubvguysfbvkjsgpdkcpkjevokhouhdtggduoisoxhdsfghvudfdgd</h3>
                     </div>
                  </div>
               </div>
               {/* /////////////////////////// */}
               <div className={s.gicdiv2}>
               <div className={s.gic2}></div>
            </div>
            </div>
         </div>
      </motion.div>
   );
}

export default Main2;