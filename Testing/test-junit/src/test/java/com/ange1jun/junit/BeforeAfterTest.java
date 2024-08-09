package com.ange1jun.junit;

import org.junit.jupiter.api.*;

public class BeforeAfterTest {

    @BeforeAll
    static void beforeall(){
        System.out.println("#### Start ####");
    }
    @BeforeEach
    void befortest(){
        System.out.println("Starting test..");
    }

    @Test
    void test1(){
        System.out.println("test1");
    }
    @Test
    void test2(){
        System.out.println("test2");
    }
    @Test
    void test3(){
        System.out.println("test3");
    }

    @AfterEach
        void aftertest(){
        System.out.println("======finish testing=====");
    }

    @AfterAll
    static void afterall(){
        System.out.println("#### Finish ####");
    }
}
