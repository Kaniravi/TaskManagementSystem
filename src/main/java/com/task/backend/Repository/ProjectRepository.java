package com.task.backend.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.task.backend.Entity.Project;

@Repository
public interface ProjectRepository  extends JpaRepository<Project,Long>{

	public Optional<Project> findByName(String name);

	public List<Project> findAllByName(String name);

	public Optional<Project> findByManagerName(String managerName);

	

	public Optional<Project> findByEmployeeName(String employeeName);

	




	
}; 
