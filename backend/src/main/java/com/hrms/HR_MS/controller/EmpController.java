package com.hrms.HR_MS.controller;

import com.hrms.HR_MS.dto.EmployeeDto;
import com.hrms.HR_MS.dto.mapper.EmployeeDtoMapper;
import com.hrms.HR_MS.entity.Employee;
import com.hrms.HR_MS.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class EmpController {

    @Autowired
    private final EmployeeService employeeService;

    @GetMapping("/get-details/{id}")
    public ResponseEntity<EmployeeDto> getEmployeeDetails(@PathVariable("id") String id){
        EmployeeDto employeeDto = EmployeeDtoMapper
                .employeeDtoMapper(employeeService.getEmployeeById(Long.parseLong(id)));

        return new ResponseEntity<>(employeeDto, HttpStatus.OK);
    }

    @PostMapping("/add-employee")
    public ResponseEntity<EmployeeDto> addEmployee(@RequestBody Employee employee){
        System.out.println(employee);
        EmployeeDto employeeDto = EmployeeDtoMapper
                .employeeDtoMapper(employeeService.addEmployee(employee));

        return new ResponseEntity<>(employeeDto, HttpStatus.CREATED);
    }


    @GetMapping("/get-all-employees")
    public ResponseEntity<List<EmployeeDto>> getAllEmployees(){
        return new ResponseEntity<>(employeeService.getEmployees(), HttpStatus.OK);
    }
}
