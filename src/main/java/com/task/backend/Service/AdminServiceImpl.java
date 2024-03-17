package com.task.backend.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.task.backend.Entity.Admin;
import com.task.backend.Model.AdminModel;
import com.task.backend.Model.LoginModel;
import com.task.backend.Repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	private AdminRepository adminRepository;
	
	public Admin register(AdminModel adminModel) {
		Admin admin = new Admin();
		admin.setFirstName(adminModel.getFirstName());
		admin.setLastName(adminModel.getLastName());
		admin.setEmailId(adminModel.getEmailId());
		admin.setRole(adminModel.getRole());
		admin.setGender(adminModel.getGender());
		admin.setPassword(adminModel.getPassword());
		admin.setContactNo(adminModel.getContactNo());
		admin.setAge(adminModel.getAge());
		admin.setStreet(adminModel.getStreet());
		admin.setCity(adminModel.getCity());
		admin.setPincode(adminModel.getPincode());
		
		adminRepository.save(admin);
		return admin;
		
	}
	
	public Optional<Admin> getUserByEmail(String emailId){
		Optional<Admin> admin = adminRepository.findByEmailId(emailId);
		return admin;
	}

	@Override
	public Optional<Admin> getAdmin(String adminName) {
		return adminRepository.findByFirstName(adminName);
	}

	@Override
	public Optional<Admin> getAdminById(Long id) {
		return adminRepository.findById(id);
	}

	@Override
	public void saveAdmin(Admin admin) {
		adminRepository.save(admin);
	}

	
	
}
