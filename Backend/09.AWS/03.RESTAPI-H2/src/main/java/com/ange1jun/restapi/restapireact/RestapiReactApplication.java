package com.ange1jun.restapi.restapireact;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;



@SpringBootApplication
public class RestapiReactApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestapiReactApplication.class, args);
	}

	// CORS override
	@Bean
	public WebMvcConfigurer corsConfigurer(){
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
						.allowedMethods("*")
						.allowedOrigins("*");
						//.allowedOrigins("http://localhost:3000);
			}
		};
	}

}
