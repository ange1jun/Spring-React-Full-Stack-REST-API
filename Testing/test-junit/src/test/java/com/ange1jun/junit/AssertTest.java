package com.ange1jun.junit;

import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class AssertTest {

    List<String> todos = Arrays.asList("AWS", "Azure", "GCP");
    @Test
    void assertTest(){
        boolean test = todos.contains("AWS");
        boolean test2 = todos.contains("DevOps");

//        assertEquals(true, test);
        assertTrue(test, "test1 => AWS");

        assertFalse(test2, "test2 => devops ");

        assertEquals(3,todos.size(),"배열 사이즈 테스트");

        assertArrayEquals(new int[] {1,2}, new int[] {1,2} , "배열 비교 테스트");

    }
}
