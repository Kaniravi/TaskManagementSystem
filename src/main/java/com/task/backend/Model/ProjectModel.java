package com.task.backend.Model;

import java.time.LocalDate;
import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Builder;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProjectModel {
	
	private String name;
	private String description;
	private String requirement;
	private LocalDate deadline;

}
