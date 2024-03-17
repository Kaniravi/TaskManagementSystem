package com.task.backend.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.task.backend.Entity.Employee;
import com.task.backend.Model.EmployeeModel;
import com.task.backend.Repository.EmployeeRepository;

import jakarta.transaction.Transactional;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepository;
		
	public Employee registerEmployee(EmployeeModel employeeModel) {
		Employee employee = new Employee();
		employee.setFirstName(employeeModel.getFirstName());
		employee.setLastName(employeeModel.getLastName());
		employee.setEmailId(employeeModel.getEmailId());
		employee.setRole(employeeModel.getRole());
		employee.setGender(employeeModel.getGender());
		employee.setPassword(employeeModel.getPassword());
		employee.setContactNo(employeeModel.getContactNo());
		employee.setAge(employeeModel.getAge());
		employee.setStreet(employeeModel.getStreet());
		employee.setCity(employeeModel.getCity());
		employee.setPincode(employeeModel.getPincode());
		
		employeeRepository.save(employee);
		return employee;
		
	}
	
	public List<Employee> getEmployees(){
		return employeeRepository.findAll();
	}
	
	 @Transactional
	public void deleteEmployeeByEmailId(String emailId) {
		employeeRepository.deleteByEmailId(emailId);
	}
	 
	 @Transactional
	 public void deleteEmployee(Long id) {
		 employeeRepository.deleteById(id);
	 }
	 
	 public Optional<Employee> getEmployee(String emailId){
		 return employeeRepository.findByEmailId(emailId);
	 }

	@Override
	public Optional<Employee> getEmployeeByName(String employeeName) {
		return employeeRepository.findByFirstName(employeeName);
	}

	@Override
	public Optional<Employee> getEmployeeById(Long id) {
		return employeeRepository.findById(id);
	}

	@Override
	public void save(Employee employee) {
		employeeRepository.save(employee);
		
	}
}
