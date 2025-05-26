import React from "react";
import "../style/ScheduleDashboard.css";

const SimpleAppointmentCard = ({ emoji, title, time }) => (
  <div className="card light">
    <div>
      <div className="title">{title}</div>
      <div className="time-range">{time}</div>
    </div>
    <div className="pos">
      <div className="emoji">{emoji}</div>
    </div>
  </div>
);

const UpcomingSchedule = () => (
  <div className="upcoming-schedule">
    <h3 className="section-title">The Upcoming Schedule</h3>

    <div className="day-schedule">
      <div className="dayno day-label">On Thursday</div>
      <div className="card-list">
        <SimpleAppointmentCard emoji="💉" title="Health checkup complete" time="11:00 AM" />
        <SimpleAppointmentCard emoji="👁" title="Ophthalmologist" time="14:00 PM" />
      </div>
    </div>

    <div className="day-schedule">
      <div className="dayno day-label">On Saturday</div>
      <div className="card-list">
        <SimpleAppointmentCard emoji="❤️" title="Cardiologist" time="12:00 AM" />
        <SimpleAppointmentCard emoji="🧑‍🔬" title="Neurologist" time="16:00 PM" />
      </div>
    </div>
  </div>
);

const CalendarView = () => (
  <>
    <div className="calendar-header">
      <span className="month">October 2021</span>
      <div className="arrow-buttons">
        <button className="btn">{"<"}</button>
        <button className="btn">{">"}</button>
      </div>
    </div>

    <div className="day-time-grid">
      {[
        { day: "Mon", date: 25 },
        { day: "Tues", date: 26, selected: true },
        { day: "Wed", date: 27 },
        { day: "Thurs", date: 28 },
        { day: "Fri", date: 29 },
        { day: "Sat", date: 30 },
        { day: "Sun", date: 31 },
      ].map(({ day, date, selected }) => (
        <div className={`day-column ${selected ? "selected" : ""}`} key={date}>
          <div className="day day-label">{day}</div>
          <div className="date-label">{date}</div>
          <div className="time-slots">
            {[8, 9, 10].map((time) => (
              <div
                className={`time ${time === 9 && selected ? "active" : ""}`}
                key={time}
              >
                {`${time.toString().padStart(2, "0")}:00`}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="appointment-cards">
      <div className="card dentist">
        <div>
          <div className="title">Dentist</div>
          <div className="time-range">09:00 - 11:00</div>
          <div className="doctor">Dr. Cameron Williamson</div>
        </div>
        <div className="pos">
          <div className="emoji">🦷</div>
        </div>
      </div>

      <div className="card physiotherapy">
        <div>
          <div className="title">Physiotherapy Appointment</div>
          <div className="time-range">11:00 - 12:00</div>
          <div className="doctor">Dr. Kevin Djones</div>
        </div>
        <div className="pos">
          <div className="emoji">💪</div>
        </div>
      </div>
    </div>
  </>
);

const ScheduleDashboard = () => {
  return (
    <div className="schedule-dashboard">
      <CalendarView />
      <UpcomingSchedule />
    </div>
  );
};

export default ScheduleDashboard;
