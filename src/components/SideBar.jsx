import "../style/SideBar.css";
import {
  FaChartPie, FaHistory, FaCalendarAlt, FaUserMd,
  FaChartBar, FaComments, FaPhone, FaCog
} from "react-icons/fa";
import { useState } from "react";

function SideBar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { section: "General", items: [
      { icon: <FaChartPie className="icon" />, name: "Dashboard" },
      { icon: <FaHistory className="icon" />, name: "History" },
      { icon: <FaCalendarAlt className="icon" />, name: "Calendar" },
      { icon: <FaUserMd className="icon" />, name: "Appointments" },
      { icon: <FaChartBar className="icon" />, name: "Statistics" },
    ]},
    { section: "Tools", items: [
      { icon: <FaComments className="icon" />, name: "Chat" },
      { icon: <FaPhone className="icon" />, name: "Support" },
    ]},
  ];

  return (
    <div className="side-wrapper">
      {menuItems.map((group, index) => (
        <div className="sidebar-section" key={index}>
          <div className="section-title">{group.section}</div>
          {group.items.map((item, idx) => (
            <div
              key={idx}
              className={`sidebar-item ${activeItem === item.name ? "active" : ""}`}
              onClick={() => setActiveItem(item.name)}
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      ))}

      <div className="sidebar-footer">
        <div
          className={`sidebar-item ${activeItem === "Setting" ? "active" : ""}`}
          onClick={() => setActiveItem("Setting")}
        >
          <FaCog className="icon" />
          <span>Setting</span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
