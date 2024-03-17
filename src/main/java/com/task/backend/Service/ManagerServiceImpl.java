package com.task.backend.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.task.backend.Entity.Manager;
import com.task.backend.Model.ManagerModel;
import com.task.backend.Repository.ManagerRepository;

import jakarta.transaction.Transactional;

@Service
public class ManagerServiceImpl implements ManagerService{
	@Autowired
	private ManagerRepository managerRepository;

	@Override
	public Manager registerManager(ManagerModel managerModel) {
		Manager manager = new Manager();
		manager.setFirstName(managerModel.getFirstName());
		manager.setLastName(managerModel.getLastName());
		manager.setEmailId(managerModel.getEmailId());
		manager.setRole(managerModel.getRole());
		manager.setGender(managerModel.getGender());
		manager.setPassword(managerModel.getPassword());
		manager.setAge(managerModel.getAge());
		manager.setContactNo(managerModel.getContactNo());
		manager.setStreet(managerModel.getStreet());
		manager.setCity(managerModel.getCity());
		manager.setPincode(managerModel.getPincode());
		
		 return managerRepository.save(manager);
		
		
	}
	
	public List<Manager> getManagers(){
		List<Manager> manager = managerRepository.findAll();
		return manager;
	}
	
	 @Transactional
	public void deleteManager(String emailId) {
		managerRepository.deleteByEmailId(emailId);
	}
	 
	 
	public Optional<Manager> getManagerByEmailId(String emailId){
		return managerRepository.findByEmailId(emailId);
	}
	
	public Optional<Manager> getManager(String managerName){
		return managerRepository.findByFirstName(managerName);
	}
	
	public Optional<Manager> getManagerById(Long id){
		return managerRepository.findById(id);
	}
	
	public void saveManager(Manager manager) {
		 managerRepository.save(manager);
	}

}
