package com.task.backend.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.task.backend.Entity.Project;
import com.task.backend.Model.ProjectModel;

@Service
public interface ProjectService {
	public Project addProject(ProjectModel projectModel);
	
	public List<Project> getProjects();
	
	public Optional<Project> getProjectById(Long id);
	
	public Project saveProject(Project project);
	
	public Optional<Project> getProject(String managerName);
	
	public Optional<Project> getProjectByEmployeeName(String employeeName);

	

}
