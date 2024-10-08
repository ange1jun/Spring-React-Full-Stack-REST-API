package com.ange1jun.learnspringaop.aopexample.business;

import com.ange1jun.learnspringaop.aopexample.annotation.TrackTime;
import com.ange1jun.learnspringaop.aopexample.data.DataService1;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class BusinessService1 {

    private DataService1 dataService1;

    public BusinessService1(DataService1 dataService1) {
        this.dataService1 = dataService1;
    }

    @TrackTime
    public int calculateMax(){
        int[] data = dataService1.retrieveData();
//        throw new RuntimeException("Something wrong!!!");

        try {
            Thread.sleep(30);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        return Arrays.stream(data).max().orElse(0);
    }
}
