package com.ange1jun.learnspringaop.aopexample.business;

import com.ange1jun.learnspringaop.aopexample.data.DataService1;
import com.ange1jun.learnspringaop.aopexample.data.DataService2;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
public class BusinessService2 {
    private DataService2 dataService2;

    public BusinessService2(DataService2 dataService2) {
        this.dataService2 = dataService2;
    }
    public int calculateMin(){

        int[] data = dataService2.retrieveData();
//        throw new RuntimeException("Something wrong!!!");
        try {
            Thread.sleep(30);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        return Arrays.stream(data).min().orElse(0);
    }
}
