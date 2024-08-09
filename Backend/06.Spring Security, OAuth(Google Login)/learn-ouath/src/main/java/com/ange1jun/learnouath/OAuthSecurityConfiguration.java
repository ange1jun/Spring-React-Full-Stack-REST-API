package com.ange1jun.learnouath;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AuthorizeHttpRequestsConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class OAuthSecurityConfiguration {

    @Bean
    @Order(2147483642)
    SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests((requests) -> {
            ((AuthorizeHttpRequestsConfigurer.AuthorizedUrl) requests.anyRequest()).authenticated();
        });

        // formLogin disabled
        //http.formLogin(Customizer.withDefaults());

        // HTTP Basic 인증 disabled
        //http.httpBasic(Customizer.withDefaults());

        http.oauth2Login(Customizer.withDefaults());

        return (SecurityFilterChain) http.build();

    }
}
