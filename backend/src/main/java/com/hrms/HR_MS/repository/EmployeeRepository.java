package com.hrms.HR_MS.repository;

import com.hrms.HR_MS.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
