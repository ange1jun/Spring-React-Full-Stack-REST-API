package com.ange1jun.junit;

public class MyMath {

    public int calculSum(int[] numbers){
        int sum =0;

        for(int number:numbers){
            sum += number;
        }

        return sum;

    }
}
