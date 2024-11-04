package com.hrms.HR_MS.dto.mapper;

import com.hrms.HR_MS.dto.EmployeeDto;
import com.hrms.HR_MS.entity.Employee;

public class EmployeeDtoMapper {

    public static EmployeeDto employeeDtoMapper(Employee employee){
        return new EmployeeDto(
                employee.getId(),
                employee.getName(),
                employee.getContact(),
                employee.getRole(),
                employee.getSalary(),
                employee.getPerformance()
        );
    }
}
