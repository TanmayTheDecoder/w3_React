import '../css/maincontainer.css'
import '../css/commonclasses.css'
import '../css/media.css'
import SideBar from './sideBar'
import Routing from './routing'
import { useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const MainContainer = () => {
    const [toggle,setToggle] = useState(false);
//   const [bar,setBar] = useState(null);  

  
//   const sideBar = useEffect(() => {
//     {
//         bar && (() => setBar(<SideBar />))
//     }
//   },[]);
   
  return (
      <div>
        <section className="mainContainer w100">
            <div className="mainContainer_inner w100 flex">
                <div className="sidebar w20">
                    {/* {
                        toggle 
                        ? <FontAwesomeIcon icon={ faBars } onClick={setToggle(!toggle)}/>
                        : <FontAwesomeIcon icon={ faXmark } onClick={setToggle(toggle)} />
                    } */}
                    {/* {
                        toggle && (
                            <SideBar />
                        )
                    } */}
                    {/* {   
                        sideBar
                    } */}
                    <div className="menu_logo h100p w20">
                        <FontAwesomeIcon icon={faBars} style={{color: "#ffffff"}} />
                    </div>
                    <SideBar />
                </div>
                <div className="routing w80">
                    <Routing />
                </div>
            </div>
        </section>
    </div>
  )
}

export default MainContainer