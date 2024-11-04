import { useState } from "react";
import { IEmployee, submitForm } from "../data/submitForm.ts";

export default function AddEmployee() {
  const [name, setName] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [salary, setSalary] = useState<string>("");
  const [performance, setPerformance] = useState<string>("");
  const [status, setStatus] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const employee : IEmployee = {
      name: name,
      contact: contact,
      role: role,
      salary: salary,
      performance: performance,
    }
    submitForm(employee);
    setStatus(true);
  };

  return (
    <>
      <main>
        <section id="employee-management">
          <h2>Employee Management</h2>
          <form id="employeeForm" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Employee Name"
              required
              aria-label="Employee Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              name="contact_details"
              placeholder="Contact Details"
              required
              aria-label="Contact Details"
              onChange={(e) => setContact(e.target.value)}
            />
            <input
              type="text"
              name="job_role"
              placeholder="Job Role"
              required
              aria-label="Job Role"
              onChange={(e) => setRole(e.target.value)}
            />
            <input
              type="number"
              name="salary"
              placeholder="Salary"
              required
              aria-label="Salary"
              onChange={(e) => setSalary(e.target.value)}
            />
            <input
              type="text"
              name="performance"
              placeholder="Performance"
              required
              aria-label="Performance"
              onChange={(e) => setPerformance(e.target.value)}
            />
            <button type="submit">Add Employee</button>
          </form>
          {status && <div>Employee {name} has been added successfully.</div>}
        </section>
      </main>
    </>
  );
}
