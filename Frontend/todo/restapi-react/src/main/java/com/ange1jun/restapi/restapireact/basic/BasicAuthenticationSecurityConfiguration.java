package com.ange1jun.restapi.restapireact.basic;

import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

//@Configuration
public class BasicAuthenticationSecurityConfiguration {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{

        return
        // authentication all request
                http
                    .authorizeHttpRequests(
                    auth -> auth
                            .requestMatchers(HttpMethod.OPTIONS, "/**")
                            .permitAll()
                            .anyRequest()
                            .authenticated()
                )
        // basic authentication (웹 페이지 대신, 팝업이 나오는 인증 = 기본인증)
                    .httpBasic(Customizer.withDefaults())
        // no use Session (STATELESS, = REST API)
                    .sessionManagement(
                        session -> session.sessionCreationPolicy
                                (SessionCreationPolicy.STATELESS))
        // CSRF Disable
                    .csrf (csrf -> csrf.disable())
                    .build();

    }
}
