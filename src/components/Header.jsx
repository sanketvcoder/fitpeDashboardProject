import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import boyImage from '../asserts/user.png'
import '../style/Header.css'
function Header(){
    return(
        <div className="header-container">
  <div className="logo-block">
    <p><span>Health</span>care.</p>
  </div>

  <div className="middle-column">
    <div className="search-bell-wrapper">
      <div className="search">
        <FontAwesomeIcon icon={faSearch} className="icon search-icon" />
        <input type="text" className="search-input" placeholder="Search..." />
      </div>
      <FontAwesomeIcon icon={faBell} className="icon bell-icon" />
    </div>
  </div>

  <div className="user-profile">
    <div className="user-pic">
      <img src={boyImage} alt="" />
    </div>
    <div className="add-more">+</div>
  </div>
</div>

    )
}
export default Header