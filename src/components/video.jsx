import videos_ from "../assets/imeages.mp4"
import videos___ from "../assets/holding.mp4"
import videos____ from "../assets/love_.mp4"
import videos_____ from "../assets/lovee.mp4"
import videos______ from "../assets/propose.mp4"
import videos_______ from "../assets/love.mp4"



const Video =()=>{
    const videos=[videos_,videos______,videos____,videos_____,videos___,videos_______]
    const current=new Date();
    const day=current.getDay();
    const presentday=videos[day-3]
    return(
        
        <div className="main">
    

            <video autoPlay loop muted src={presentday}/>
                
        </div>
    )
}
export default Video; 