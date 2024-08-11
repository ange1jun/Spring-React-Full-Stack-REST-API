package com.ange1jun.learnspringaop.aopexample.data;

import com.ange1jun.learnspringaop.aopexample.annotation.TrackTime;
import org.springframework.stereotype.Repository;

@Repository
public class DataService2 {

    @TrackTime
    public int[] retrieveData(){

        try {
            Thread.sleep(30);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        return new int[] {111, 222, 333, 444, 555};
    }

}
