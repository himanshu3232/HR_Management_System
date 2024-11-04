package com.hrms.HR_MS.service;

import com.hrms.HR_MS.dto.EmployeeDto;
import com.hrms.HR_MS.dto.mapper.EmployeeDtoMapper;
import com.hrms.HR_MS.entity.Employee;
import com.hrms.HR_MS.exception.EmployeeNotFoundException;
import com.hrms.HR_MS.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeService {

    @Autowired
    private final EmployeeRepository employeeRepository;


    public Employee getEmployeeById(Long id) throws EmployeeNotFoundException{
        return employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("Employee not found"));
    }

    public Employee addEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    public List<EmployeeDto> getEmployees(){
        List<Employee> employees = employeeRepository.findAll();
        List<EmployeeDto> employeeDtos = new ArrayList<>();
        for(Employee employee : employees){
            employeeDtos.add(EmployeeDtoMapper.employeeDtoMapper(employee));
        }

        return employeeDtos;
    }

}
