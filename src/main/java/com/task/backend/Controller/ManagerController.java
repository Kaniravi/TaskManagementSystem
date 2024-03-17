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
import com.task.backend.Entity.Manager;
import com.task.backend.Entity.Project;
import com.task.backend.Model.EmployeeModel;
import com.task.backend.Service.EmployeeService;
import com.task.backend.Service.ManagerService;
import com.task.backend.Service.ProjectService;

import jakarta.transaction.Transactional;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/manager")
public class ManagerController {
	
	@Autowired
	private ManagerService managerService;
	
	@Autowired
	private EmployeeService employeeService;
	
	@Autowired
	private ProjectService projectService;
	
	@GetMapping("/getManagers")
	public List<Manager> getManagers(){
		List<Manager> manager = managerService.getManagers();
		return manager;
	}
	
	@GetMapping("/login/{emailId}")
	public ResponseEntity<Manager> getManagerByEmailId(@PathVariable String emailId){
		Optional<Manager> manager = managerService.getManagerByEmailId(emailId);
		if(manager.isPresent()) {
			return ResponseEntity.ok(manager.get());
		}
		else {
			return ResponseEntity.notFound().build();
		}
	}
	
	@PostMapping("/registerEmployee")
	public Employee registerEmployee(@RequestBody EmployeeModel employeeModel) {
		Employee employee = employeeService.registerEmployee(employeeModel);
		return employee;
	}
	
	@GetMapping("/getEmployees")
	public List<Employee> getEmployees(){
		List<Employee> employees = employeeService.getEmployees();
		return employees;
	}
	
	@Transactional
	@DeleteMapping("/deleteEmployee/{id}")
	public void deleteEmployee(@PathVariable Long id) {
		employeeService.deleteEmployee(id);
	}
	
	
	@GetMapping("/getProject/{managerName}")
	public ResponseEntity<Project> getProject(@PathVariable String managerName){
		Optional<Project> project  = projectService.getProject(managerName);
		if(project.isPresent()) {
			return ResponseEntity.ok(project.get());
		}
		else {
			return ResponseEntity.notFound().build();
		}
	}
	
	
	@PostMapping("/updateProject/{id}")
	public ResponseEntity<Project> updateProject(@PathVariable Long id, @RequestBody Project updatedProject) {
		Optional<Project> project = projectService.getProjectById(id);
		if(project.isPresent()) {
			project.get().setEmployeeName(updatedProject.getEmployeeName());
			project.get().setEmployeeAssignStatus("Assigned to Employee");
			project.get().setProjectStatus("Assigned to Employee");
			projectService.saveProject(project.get());
			return ResponseEntity.ok(updatedProject);
		}
		else {
			return ResponseEntity.notFound().build();
		}
	}
	
	@GetMapping("/getManager/{managerName}")
	public ResponseEntity<Manager> getManager(@PathVariable String managerName){
		Optional<Manager> manager = managerService.getManager(managerName);
		if(manager.isPresent()) {
			return ResponseEntity.ok(manager.get());
		}
		else {
			return ResponseEntity.notFound().build();
		}
	}
	
	@PostMapping("/updatePassword/{id}")
	public ResponseEntity<Manager> updatePassword(@PathVariable Long id, @RequestBody Manager updatedManager) {
		Optional<Manager>  manager = managerService.getManagerById(id);
		if(manager.isPresent()) {
			manager.get().setPassword(updatedManager.getPassword());
			managerService.saveManager(manager.get());
			return ResponseEntity.ok(updatedManager);
		}
		else {
			return ResponseEntity.notFound().build();
		}
		
	}
}
