

import { useState } from "react";
import { firestore } from "../firebase/firestore";
import { collection , addDoc} from "firebase/firestore";
const Appview=()=>{
    const [yourname, setYourname] = useState('')
    const [yourcrush, setYourcrush] = useState('')
    const [posts, setPosts] = useState(0)

    const contents={
        yourname:yourname,
        yourcrush:yourcrush
    }
    const handleuploadtext=async()=>{
        const prevposts=parseInt(localStorage.getItem('posts'))||0;
        console.log(prevposts)
        if (prevposts>2){
            alert('You have reached your limit')
        }
        else{
        try{
            const content=collection(firestore,'secretlove');
            await addDoc(content,{contents,timestamp:new Date()})
            setYourname('')
            setYourcrush('')
            setPosts(prevposts+1)
            localStorage.setItem('posts',prevposts+1)

        }
        catch(e){
            console.log(e)
        }
    }
    }
    const imagesurl={
        day1:'./assets/1.mp4',
        day2:'./assets/2.mp4'

    }
    const days=['ROSE DAY 🌹','PROPOSE DAY💍','CHOCOLATE DAY🍫','TEDDY DAY 🧸','PROMISE DAY 🤞','HUG DAY 🤗','KISS DAY 😘','VALENTINE DAY 💝'];
    const current=new Date();   
    const day=current.getDay();
    const presentday=days[day-3]
    return (

        <div>
          
            <center >  
                <div className="title">
                     <h1>Who is it? 🤫</h1>
                <h1>Secret Admirer</h1>
                </div>
               
            <div className="card">
                <h1 className="textsh">Day: {presentday}</h1>
                <h1></h1>
            <p className="texts">Your name:</p>
            <input type="text" value={yourname} onChange={(e)=> setYourname(e.target.value)} className="inputs"/>
            <p className="texts">Your crush:</p>
            <input type="text" value={yourcrush} onChange={(e)=>setYourcrush(e.currentTarget.value)} className="inputs"/>
            <p className="texts">Riddle/Poem:</p>
            <textarea className="textinput" rows="4" cols="25" placeholder="Enter your text here"></textarea>

            <br />
            <input className="btn" type="button" value="submit" onClick={handleuploadtext}/>
            
            </div>
           
            </center>
            
        </div>
    )
}
export default Appview;