import React from "react";
import './side.css'
import {Link} from "react-router-dom"
import Zurag from "../assets/323453193_1159156441633090_9201649881388999674_n.jpg"
const Side = () =>{
    return(
        <>  
       
            <div className="box1">
                <div className="box2">
                    <div className="flex">
                        <div className="box3">
                            <h1>Read more</h1>
                        </div>
                        <div className="box4">
                        <img src="https://scontent-hkt1-2.xx.fbcdn.net/v/t39.30808-6/323453193_1159156441633090_9201649881388999674_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HSoWdQFVkzsAX9_Y4VM&_nc_ht=scontent-hkt1-2.xx&oh=00_AfART18MlxL9_KJpGjiyiGGV30_6LH3u4T80ydcPQ6Nygg&oe=63E2F97B" alt="/"/> 
                        </div>
                    </div>
                    <div className="grid">
                        <div className="box5"><h1>Read more</h1></div>
                        <div className="box6"><h1>Read more</h1></div>
                    </div>

                </div>
            </div>   
     
        </>
    )
}
export default Side