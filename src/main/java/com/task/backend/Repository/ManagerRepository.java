package com.task.backend.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.task.backend.Entity.Manager;

import jakarta.transaction.Transactional;

@Repository
public interface ManagerRepository extends JpaRepository<Manager,Long>{
	
	@Transactional
	public void deleteByEmailId(@Param("emailId") String emailId);

	public Optional<Manager> findByEmailId(String emailId);

	public Optional<Manager> findByFirstName(String managerName);
	
	

}
