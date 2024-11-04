package com.hrms.HR_MS;

import com.hrms.HR_MS.dto.EmployeeDto;
import com.hrms.HR_MS.dto.mapper.EmployeeDtoMapper;
import com.hrms.HR_MS.entity.Employee;
import com.hrms.HR_MS.exception.EmployeeNotFoundException;
import com.hrms.HR_MS.repository.EmployeeRepository;
import com.hrms.HR_MS.service.EmployeeService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ActiveProfiles("test")
@Transactional
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
class HrMsApplicationTests {

	@Autowired
	private EmployeeService employeeService;

	@Autowired
	private EmployeeRepository employeeRepository;

	private Employee employee;

	@BeforeEach
	void setUp() {
		employee = new Employee();
		employee.setName("John Doe");
	}

	@Test
	void contextLoads() {
		assertNotNull(employeeService);
	}

	@Test
	void getEmployeeById_ShouldReturnEmployee_WhenEmployeeExists() throws EmployeeNotFoundException {
		// Save an employee to test the retrieval
		employee = employeeRepository.save(employee);

		Employee foundEmployee = employeeService.getEmployeeById(employee.getId());

		assertNotNull(foundEmployee);
		assertEquals(employee.getId(), foundEmployee.getId());
		assertEquals("John Doe", foundEmployee.getName());
	}

	@Test
	void getEmployeeById_ShouldThrowException_WhenEmployeeDoesNotExist() {
		// No employee saved in the database with this ID
		assertThrows(EmployeeNotFoundException.class, () -> employeeService.getEmployeeById(99L));
	}

	@Test
	void addEmployee_ShouldSaveAndReturnEmployee() {
		Employee savedEmployee = employeeService.addEmployee(employee);

		assertNotNull(savedEmployee);
		assertEquals("John Doe", savedEmployee.getName());
		assertTrue(employeeRepository.findById(savedEmployee.getId()).isPresent());
	}

	@Test
	void getEmployees_ShouldReturnListOfEmployeeDtos() {
		// Save a couple of employees
		employeeRepository.save(employee);

		Employee anotherEmployee = new Employee();
		anotherEmployee.setName("Jane Doe");
		employeeRepository.save(anotherEmployee);

		List<EmployeeDto> employeeDtos = employeeService.getEmployees();

		assertNotNull(employeeDtos);
		assertEquals(2, employeeDtos.size());
		assertEquals("John Doe", employeeDtos.get(0).name());
		assertEquals("Jane Doe", employeeDtos.get(1).name());
	}
}
