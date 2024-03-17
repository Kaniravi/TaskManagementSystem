package com.task.backend.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ManagerModel {
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

