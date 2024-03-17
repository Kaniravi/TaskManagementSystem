package com.task.Config;
import java.util.Arrays;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@EnableWebSecurity
@Configuration
public class WebSecurityConfig {
    private static final String[] WHITE_LIST_URLS = {"/admin/register" ,"/admin/login/{emailId}", "/admin/registerManager"  ,"/manager/getManagers"
    		,"/admin/deleteManager/{emailId}", "/manager/login/{emailId}" ,"/manager/registerEmployee"  ,"/employee/getEmployees"
    		, "/employee/deleteEmployee/{emailId}", "/admin/addProject"  , "/admin/getProjects" , "/admin/getProjectById/{id}"
    		, "/admin/updateProject/{id}" ,"/admin/getProject/{managerName}" ,"/admin/getManager/{name}" , "/manager/getEmployees",
    		"/manager/deleteEmployee/{id}" ,"/manager/getProject/{managerName}" , "/manager/updateProject/{id}" ,"/manager/getManager/{managerName}"
    		,"/manager/updatePassword/{id}" ,"/employee/getEmployee/{emailId}"  ,"/employee/getProject/{employeeName}", "/employee/getEmployeeByName/{employeeName}"
    		,"/employee/updatePassword/{id}" ,"/employee/updateProjectStatus/{id}" , "/admin/getAdmin/{adminName}" ,"admin/updatePassword/{id}"};

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    	 return http
    		        .csrf(csrf -> csrf.disable())
    		        .authorizeHttpRequests(auth -> auth
    		            .requestMatchers(WHITE_LIST_URLS).permitAll()
    		            .anyRequest().authenticated()
    		        )
    		        .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
    		        .httpBasic(Customizer.withDefaults())
    		        .build();
    }

 
 



@Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.addAllowedHeader("Content-Type");
        configuration.addAllowedOrigin("http://localhost:3000"); 
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET","PUT","POST","UPDATE"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
