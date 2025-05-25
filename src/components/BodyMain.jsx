import '../style/Global.css'
import BodyContent from './BodyContent'
import Header from './Header'

function BodyMain(){
    return(
        <div className="main">
            <div className="area-work">
                <Header/>
                <BodyContent/>
            </div>
        </div>
    )
}

export default BodyMain