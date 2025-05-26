import SideBar from "./SideBar"
import '../style/Global.css'
import Dashboard from "./Dashboard"
import ScheduleDashboard from "./ScheduleDashboard"
function BodyContent(){
    return(
        <div className="body-part">
            <div className="first-1-col">
                <SideBar/>
            </div>
            <div className="sec-2-col">
                <Dashboard/>
            </div>
            <div className="third-3-col">
                <ScheduleDashboard/>
            </div>
        </div>
    )
}

export default BodyContent