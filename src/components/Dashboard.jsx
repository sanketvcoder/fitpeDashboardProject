import "../style/Dashboard.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import ThreeAnimation, {organs} from "./mockData";


function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-heading">
        <h1 className="heading">Dashboard</h1>
        <div className="week">This Week</div>
      </div>

      <div className="main-dashboard-component">
        <div className="first-box">
          <ThreeAnimation/>
        </div>

        {organs.map((organ, index) => (
          <div className="third-box info-box" key={index}>
            <div className="image">
              <img src={organ.image} alt={organ.name} />
            </div>
            <div className="organ-status">
              <h4>{organ.name}</h4>
              <p>Date: 26 Oct 2021</p>
              <div className="status-bar" style={{ '--progress': organ.progress }}></div>
            </div>
          </div>
        ))}

        <div className="details">
          <div className="det">
            <p>Detail</p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>

      <div className="fourth-box activity-box">
        <div className="activity-header">
          <h3>Activity</h3>
          <span className="appointment-note">3 appointments on this week</span>
        </div>

        <div className="activity-chart">
          {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day, i) => {
            const numBars = Math.floor(Math.random() * 3) + 1;
            const barHeights = Array.from({ length: 3 }, (_, idx) =>
              idx < numBars ? `${Math.random() * 40 + 40}px` : null
            );

            return (
              <div className="activity-column" key={i}>
                <div className="bars">
                  {barHeights.map((height, idx) =>
                    height ? (
                      <div key={idx} className={`bar bar-${idx}`} style={{ height }}></div>
                    ) : (
                      <div key={idx} className="bar empty-bar"></div>
                    )
                  )}
                </div>
                <div className="day-label">{day}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
