import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
    const nav = useNavigate();
  return (
    <>
      <header>
        <h1 style={{cursor: "pointer", maxWidth: "max-content", margin: "0 auto"}} onClick={() => nav("/")}>HR Management System</h1>
        <nav>
          <ul className="links">
            <li>
              <Link className="link" to="/list-all-employees">
                All Employees
              </Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/add-employee">Add Employee</Link>
            </li>
            <li>
              <Link to="/attendance">Attendance Tracking</Link>
            </li>
            <li>
              <Link to="/payroll">Payroll Processing</Link>
            </li>
            <li>
              <Link to="/performance">Performance Management</Link>
            </li>
            <li>
              <Link to="/leave-management">Leave Management</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
