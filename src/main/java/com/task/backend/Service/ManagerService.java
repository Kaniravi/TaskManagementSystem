package com.task.backend.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.task.backend.Entity.Manager;
import com.task.backend.Model.ManagerModel;

import jakarta.transaction.Transactional;

@Service
public interface ManagerService {
	public Manager registerManager(ManagerModel managerModel);
	
	public List<Manager> getManagers();
	
	 @Transactional
	public void deleteManager(String emailId);
	 
	 
	 public Optional<Manager> getManagerByEmailId(String emailId);
	 
	 public Optional<Manager> getManager(String managerName);
	 
	 public Optional<Manager> getManagerById(Long id);
	 
	 public void saveManager(Manager manager);

}
