package com.task.backend.Model;

import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Builder;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AdminModel {
	private String firstName;
	private String lastName;
	private String role;
	private String emailId;
	private String password;
	private String gender;
	private String contactNo;
	
	
	private int age;
	private String street;
	private String city;
	private String pincode;
}
