package com.task.backend.Service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.backend.Model.LoginModel;
import com.task.backend.Entity.Admin;
import com.task.backend.Model.AdminModel;

@Service
public interface AdminService {
	
	public Admin register(AdminModel adminModel);
	
	public Optional<Admin> getUserByEmail(String emailId);
	
	public Optional<Admin> getAdmin(String adminName);

	public Optional<Admin> getAdminById(Long id);

	public void saveAdmin(Admin admin);

}
