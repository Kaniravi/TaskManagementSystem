package com.task.backend.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.task.backend.Entity.Employee;
import com.task.backend.Entity.Project;
import com.task.backend.Service.EmployeeService;
import com.task.backend.Service.ProjectService;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/employee")
public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeService;
	
	@Autowired
	private ProjectService projectService;
	
	@GetMapping("getEmployees")
	public List<Employee> getEmployees(){
		List<Employee> employees = employeeService.getEmployees();
		return employees;
	}
	
	@DeleteMapping("/deleteEmployee/{emailId}")
	public void deleteEmployeeById(@PathVariable String emailId) {
		employeeService.deleteEmployeeByEmailId(emailId);
	}
	
	@GetMapping("/getEmployee/{emailId}")
	public ResponseEntity<Employee> getEmployee(@PathVariable String emailId){
		Optional<Employee> employee = employeeService.getEmployee(emailId);
		if(employee.isPresent()) {
			return ResponseEntity.ok(employee.get());
		}
		else {
			return ResponseEntity.notFound().build();
		}
	}
	
	@GetMapping("/getProject/{employeeName}")
	public ResponseEntity<Project> getProject(@PathVariable String employeeName){
		Optional<Project> project = projectService.getProjectByEmployeeName(employeeName);
		if(project.isPresent()) {
			return ResponseEntity.ok(project.get());
		}
		else {
			return ResponseEntity.notFound().build();
		}
	}
	
	
	@GetMapping("/getEmployeeByName/{employeeName}")
	public ResponseEntity<Employee> getEmployeeByName(@PathVariable String employeeName){
		Optional<Employee> employee = employeeService.getEmployeeByName(employeeName);
		if(employee.isPresent()) {
			return ResponseEntity.ok(employee.get());
		}
		else {
			return ResponseEntity.notFound().build();
		}
	}
	
	
	@PostMapping("/updatePassword/{id}")
	public ResponseEntity<Employee> updatePassword(@PathVariable Long id, @RequestBody Employee updatedEmployee) {
		Optional<Employee> employee = employeeService.getEmployeeById(id);
		if(employee.isPresent()) {
			employee.get().setPassword(updatedEmployee.getPassword());
			employeeService.save(employee.get());
			return ResponseEntity.ok(updatedEmployee);
		}
		else {
			return ResponseEntity.notFound().build();
		}
	}
	
	
	@PostMapping("/updateProjectStatus/{id}")
	public ResponseEntity<Project> updateProjectStatus(@PathVariable Long id, @RequestBody Project updatedProject) {
		Optional<Project> project = projectService.getProjectById(id);
		if(project.isPresent()) {
			project.get().setProjectStatus(updatedProject.getProjectStatus());
			projectService.saveProject(project.get());
			return ResponseEntity.ok(updatedProject);
		}
		else {
			return ResponseEntity.notFound().build();
		}
	}
}
