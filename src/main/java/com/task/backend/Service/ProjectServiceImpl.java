package com.task.backend.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.task.backend.Entity.Project;
import com.task.backend.Model.ProjectModel;
import com.task.backend.Repository.ProjectRepository;

@Service
public class ProjectServiceImpl implements ProjectService {
	
	@Autowired
	private ProjectRepository projectRepository;
	
	public Project addProject(ProjectModel projectModel) {
		Project project = new Project();
		project.setName(projectModel.getName());
		project.setDescription(projectModel.getDescription());
		project.setRequirement(projectModel.getRequirement());
		project.setDeadline(projectModel.getDeadline());
		
		projectRepository.save(project);
		return project;
		
	}
	
	
	public List<Project> getProjects(){
		return projectRepository.findAll();
	}
	
	
	public Optional<Project> getProjectById(Long id){
		return projectRepository.findById(id);
	}
	
	public Project saveProject(Project project) {
		return projectRepository.save(project);
	}
	
	public Optional<Project> getProject(String managerName){
		return projectRepository.findByManagerName(managerName);
	}


	@Override
	public Optional<Project> getProjectByEmployeeName(String employeeName) {
		return projectRepository.findByEmployeeName(employeeName);
	}
	
	

	

}
