package com.ange1jun.mokito.testmokito.business;

public class SomeBusinessImpl {

    private DataService dataservice;

    public SomeBusinessImpl(DataService dataservice) {
        this.dataservice = dataservice;
    }

    public int findTheGreatestFromAllData(){
        int[] data = dataservice.retrieveAllData();
        int greatestValue = Integer.MIN_VALUE;
        for(int value:data){
            if (value > greatestValue)
                greatestValue = value;
        }

        return greatestValue;
    }

}

interface DataService{
    int [] retrieveAllData();
}