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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Model.LoginModel;
import com.task.backend.Entity.Admin;
import com.task.backend.Entity.Manager;
import com.task.backend.Entity.Project;
import com.task.backend.Model.AdminModel;
import com.task.backend.Model.ManagerModel;
import com.task.backend.Model.ProjectModel;
import com.task.backend.Service.AdminService;
import com.task.backend.Service.ManagerService;
import com.task.backend.Service.ProjectService;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/admin")

public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	@Autowired
	private ManagerService managerService;
	
	@Autowired
	private ProjectService projectService;
	
	@PostMapping("/register")
	public Admin register(@RequestBody AdminModel adminModel) {
		Admin admin = adminService.register(adminModel);
		return admin;
	}
	
	@GetMapping("/login/{emailId}")
	public ResponseEntity<Admin> getUserByEmail(@PathVariable String emailId){
		
		
		Optional<Admin> newAdmin  = adminService.getUserByEmail(emailId);
		if(newAdmin.isPresent()) {
			System.out.println(newAdmin);
			return ResponseEntity.ok(newAdmin.get());
			
		}
		else {
			return ResponseEntity.notFound().build();
		}
		
	}
	
	
	
	@PostMapping("/registerManager")
	public Manager registerManager(@RequestBody ManagerModel managerModel) {
		Manager manager = managerService.registerManager(managerModel);
		return manager;
		
	}
	
	@DeleteMapping("/deleteManager/{emailId}")
	public void deleteManager(@PathVariable String emailId) {
		managerService.deleteManager(emailId);
	}
	
	
	@PostMapping("/addProject")
	public Project addProject(@RequestBody ProjectModel projectModel) {
		return projectService.addProject(projectModel);
	}
	
	
	@GetMapping("/getProjects")
	public List<Project> getProjects(){
		List<Project> projects = projectService.getProjects();
		return projects;
	}
	
	@GetMapping("/getProjectById/{id}")
	public ResponseEntity<Project> getProjectById(@PathVariable Long id){
		
		Optional<Project> project = projectService.getProjectById(id);
		if(project.isPresent()) {
			return ResponseEntity.ok(project.get());
		}
		else {
			return ResponseEntity.notFound().build();
		}
		
	}
	
	@PutMapping("/updateProject/{id}")
	public ResponseEntity<Project> updateProject(@PathVariable long id, @RequestBody Project updatedProject) {
		Optional<Project> project = projectService.getProjectById(id);
		if(project.isPresent()) {
			project.get().setManagerName(updatedProject.getManagerName());
			project.get().setManagerAssignStatus("Assigned to Manager");
			projectService.saveProject(project.get());
			return ResponseEntity.ok(updatedProject);
		}
		else {
			return ResponseEntity.notFound().build();
		}
		
	}
	
	
	
	@GetMapping("/getManager/{emailId}")
	public ResponseEntity<Manager> getManagerByEmailId(@PathVariable String emailId){
		Optional<Manager> manager = managerService.getManagerByEmailId(emailId);
		if(manager.isPresent()) {
			return ResponseEntity.ok(manager.get());
		}
		else {
			return ResponseEntity.notFound().build();
		}
	}
	
	
	@GetMapping("/getProject/{managerName}")
	public ResponseEntity<Project> getProject(@PathVariable String managerName){
		Optional<Project> project = projectService.getProject(managerName);
		if(project.isPresent()) {
			return ResponseEntity.ok(project.get());
		}
		else {
			return ResponseEntity.notFound().build();
		}
		
	}
	
	@GetMapping("/getAdmin/{adminName}")
	public ResponseEntity<Admin> getAdmin(@PathVariable String adminName){
		Optional<Admin> admin = adminService.getAdmin(adminName);
		if(admin.isPresent()) {
			return ResponseEntity.ok(admin.get());
			
		}
		else {
			return ResponseEntity.notFound().build();
		}
	}
	
	@PostMapping("/updatePassword/{id}")
	public ResponseEntity<Admin> updatePassword(@PathVariable Long id, @RequestBody Admin updatedAdmin){
		Optional<Admin> admin = adminService.getAdminById(id);
		if(admin.isPresent()) {
			admin.get().setPassword(updatedAdmin.getPassword());
			adminService.saveAdmin(admin.get());
			return ResponseEntity.ok(updatedAdmin);
		}
		else {
			return ResponseEntity.notFound().build();
		}
	}
	
	

}
