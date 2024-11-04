import { useState } from "react";

export default function Performance() {

  const [submitted, setSubmitted] = useState(false);
  const [empId, setEmpId] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(!submitted);
  };
  return (
    <>
      <main>
        <section id="performance-management">
          <h2>Performance Management</h2>
          <form id="performanceForm" onSubmit={handleSubmit}>
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
              name="goal"
              placeholder="Performance Goal"
              required
              aria-label="Performance Goal"
            />
            <textarea
              name="comments"
              placeholder="Comments"
              aria-label="Comments"
            ></textarea>
            <button type="submit">Submit Review</button>
          </form>
          {submitted && <div id="performanceList" className="performance-summary">
          Performance updated for Employee Id : {empId}
          </div>}
        </section>
      </main>
    </>
  );
}
