package com.ange1jun.aws;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {


    @GetMapping("/")
    public String helloworld(){
        return  """
                { message: This is Hello World for Java}
               """;
    }
}
