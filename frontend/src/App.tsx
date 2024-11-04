import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import AddEmployee from "./components/AddEmployee";
import Attendance from "./components/Attendance";
import LeaveManagement from "./components/LeaveManagement";
import Payroll from "./components/Payroll";
import Performance from "./components/Performance";
import NavBar from "./components/NavBar";
import ListAllEmployees from "./components/ListAllEmployees";
import { useEffect, useState } from "react";
import { getAllEmployees } from "./data/getAllEmployees";
import { IEmployee } from "./data/submitForm";

export default function App() {
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  useEffect(() => {
    const fetchEmployees = async () => {
      const data = await getAllEmployees();
      if (data && data.length > 0) {
        setEmployees(data);
      } else {
        console.log("No employees found");
      }
    };

    fetchEmployees();
  }, []);
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leave-management" element={<LeaveManagement />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/performance" element={<Performance />} />
          <Route
            path="/list-all-employees"
            element={<ListAllEmployees employees={employees} />}
          />
        </Routes>
      </Router>
    </>
  );
}
