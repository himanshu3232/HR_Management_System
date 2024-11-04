import { useState } from "react";

export default function Attendance() {
  const [absent, _] = useState(0);
  const [checkInCount, setCheckInCount] = useState(0);
  const [checkOutCount, setCheckOutCount] = useState(0);

  const handleCheckIn = () => {
    if (checkInCount === 0) {
      setCheckInCount(1);
    } else {
      alert("Already checked in for today!");
    }
  };

  const handleCheckOut = () => {
    if (checkOutCount === 0) {
      setCheckOutCount(1);
    } else {
      alert("Already checked out for today!");
    }
  };
  return (
    <>
      <main>
        <section id="attendance-tracking">
          <h2>Attendance Tracking</h2>
          <div className="attendance-controls">
            <button
              onClick={handleCheckIn}
              id="checkInBtn"
              className="circular-button"
            >
              Check In
            </button>
            <button
              onClick={handleCheckOut}
              id="checkOutBtn"
              className="circular-button"
            >
              Check Out
            </button>
          </div>
          <div id="attendanceStatus" className="attendance-summary"></div>
          <div id="attendanceSummary">
            <p>
              Days Present: <span id="daysPresent">{checkInCount}</span>
            </p>
            <p>
              Days Absent: <span id="daysAbsent">{absent}</span>
            </p>
            <p>
              Check-Ins: <span id="checkInCount">{checkInCount}</span>
            </p>
            <p>
              Check-Outs: <span id="checkOutCount">{checkOutCount}</span>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
