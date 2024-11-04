import { useState } from "react";

export default function LeaveManagement() {
  const [submitted, setSubmitted] = useState(false);
  const [empId, setEmpId] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(!submitted);
  };
  return (
    <>
      <main>
        <section id="leave-management">
          <h2>Leave Management</h2>
          <form id="leaveForm" onSubmit={handleSubmit}>
            <input
              type="number"
              name="employee_id"
              placeholder="Employee ID"
              required
              aria-label="Employee ID"
              onChange={(e) => setEmpId(e.target.value)}
            />
            <input
              type="text"
              name="leave_type"
              placeholder="Leave Type (e.g., Sick, Vacation)"
              required
              aria-label="Leave Type"
            />
            <input
              type="date"
              name="start_date"
              required
              aria-label="Start Date"
            />
            <input type="date" name="end_date" required aria-label="End Date" />
            <button type="submit">Request Leave</button>
          </form>
          {submitted && <div id="performanceList" className="performance-summary">
          Leave updated for Employee ID : {empId}
          </div>}
        </section>
      </main>
    </>
  );
}
