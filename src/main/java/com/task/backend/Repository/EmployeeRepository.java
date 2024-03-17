package com.task.backend.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.task.backend.Entity.Employee;

import jakarta.transaction.Transactional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long>{

	 @Transactional
	public void deleteByEmailId(String emailId);

	public Optional<Employee> findByEmailId(String emailId);

	public Optional<Employee> findByFirstName(String employeeName);

}
