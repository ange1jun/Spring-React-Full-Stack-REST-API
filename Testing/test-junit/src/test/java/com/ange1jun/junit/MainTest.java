package com.ange1jun.junit;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MainTest {

    @Test
    void main() {
        Main main = new Main();
        assertEquals(main.getSum(2,3),6);
    }
    @Test
    void getSum() {
    }


}