package com.ange1jun.javafordocker;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @GetMapping("/")
    public String hello(){
        return "{\"message\":\"Hello this is java, test for Docker!!\"}";
    }
}
