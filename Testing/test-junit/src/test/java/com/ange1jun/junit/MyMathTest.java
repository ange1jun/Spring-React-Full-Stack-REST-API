package com.ange1jun.junit;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class MyMathTest {
    private MyMath myMath = new MyMath();
    @Test
    void testCalcul() {
        assertEquals(6, myMath.calculSum(new int[]{1,2,3}));
    }

    @Test
    void testCalcul2() {
        assertEquals(0, myMath.calculSum(new int[]{}));
    }

}
