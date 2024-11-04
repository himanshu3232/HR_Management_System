import { useState } from "react";

export default function Payroll() {
  const [empId, setEmpId] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(!submitted);
  };
  return (
    <>
      <main>
        <section id="payroll-processing">
          <h2>Payroll Processing</h2>
          <form id="payrollForm" onSubmit={handleSubmit}>
            <input
              type="number"
              name="employee_id"
              placeholder="Employee ID"
              required
              aria-label="Employee ID"
              onChange={(e) => setEmpId(e.target.value)}
            />
            <input
              type="number"
              name="month"
              placeholder="Month"
              required
              aria-label="Month"
            />
            <input
              type="number"
              name="year"
              placeholder="Year"
              required
              aria-label="Year"
            />
            <button type="submit">Generate Payslip</button>
          </form>
          {submitted && (
            <div id="payslip" className="payroll-summary">
              Payslip allocated for Employee ID : {empId}
            </div>
          )}
        </section>
      </main>
    </>
  );
}
