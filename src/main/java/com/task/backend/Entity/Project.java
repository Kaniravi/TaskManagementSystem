package com.task.backend.Entity;

import java.time.LocalDate;
import java.util.Date;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Builder;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Project {
	
	

	    @Id
	    @GeneratedValue(strategy = GenerationType.SEQUENCE)
	    private Long id;
	    
	    private String name;
	    private String description;
	    private String requirement;

	   
	    private String managerAssignStatus;
	    private String managerName;

	    
	    private String employeeAssignStatus;

	 
	    private String employeeName;

	    @CreationTimestamp
	    @Temporal(TemporalType.DATE)
	    @Column(updatable = false)
	    private Date projectCreatedDate;

	    @CreationTimestamp
	    @Temporal(TemporalType.DATE)
	    @Column(updatable = false)
	    private Date projectAssignDate;

	   

	    private LocalDate deadline;

	  
	    private String projectStatus;
	    
	    
	    
	    @PrePersist
	    public void prePersist() {
	    	if(managerAssignStatus==null) {
	    		managerAssignStatus = "Not Assigned";
	    		
	    	}
	        
	        if (managerName == null) {
	            managerName = "Not Assigned";
	        }
	        if (employeeName == null) {
	            employeeName = "Not Assigned";
	        }
	        if (projectStatus == null) {
	            projectStatus = "Not Assigned to Manager";
	        }
	        if(employeeAssignStatus == null) {
	        	employeeAssignStatus ="Not Assigned";
	        }
	       
	        if(projectAssignDate == null) {
	        	projectAssignDate = new Date();
	        }
	        
	    }
	}


