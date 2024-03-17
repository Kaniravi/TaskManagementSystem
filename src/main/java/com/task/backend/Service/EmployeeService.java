package com.task.backend.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.task.backend.Entity.Employee;
import com.task.backend.Model.EmployeeModel;

import jakarta.transaction.Transactional;

@Service
public interface EmployeeService {
	public Employee registerEmployee(EmployeeModel employeeModel);
	
	public List<Employee> getEmployees();
	
	 @Transactional
	public void deleteEmployeeByEmailId(String emailId);
	 
	@Transactional
	public void deleteEmployee(Long id);
	
	public Optional<Employee> getEmployee(String emailId);
	
	public Optional<Employee> getEmployeeByName(String employeeName);

	public Optional<Employee> getEmployeeById(Long id);

	public void save(Employee employee);
}
