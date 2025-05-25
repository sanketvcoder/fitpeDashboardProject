import "../style/Dashboard.css";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Center } from "@react-three/drei";
import Body from '../asserts/Body';

import lungs from '../asserts/lungs.jpg';
import teeth from '../asserts/teeth.jpg';
import bone from '../asserts/bone.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const organs = [
  { name: 'Lungs', image: lungs, progress: '70%' },
  { name: 'Teeth', image: teeth, progress: '85%' },
  { name: 'Bone', image: bone, progress: '50%' },
];

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-heading">
        <h1 className="heading">Dashboard</h1>
        <div className="week">This Week</div>
      </div>

      <div className="main-dashboard-component">
        <div className="first-box">
          <Canvas camera={{ position: [0, 0, 5], fov: 35 }} style={{ width: '100%', height: '100%' }}>
            <ambientLight intensity={1.5} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
            <Suspense fallback={null}>
              <Center>
                <Body scale={1.2} />
              </Center>
            </Suspense>
            <Environment preset="sunset" />
          </Canvas>
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
