package com.ange1jun.mokito.testmokito.business;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class SomeBusinessImplMockTest {

    // Mock 어노테이션 사용
    @Mock
    private DataService dataServiceMock;

    // SomeBusinessImpl 주입
    @InjectMocks
    private SomeBusinessImpl businessImpl;


    @Test
    void findTheGreatestFromAllData_BasicScenario() {
        when(dataServiceMock.retrieveAllData()).thenReturn(new int[] {25, 10, 5});
        assertEquals(25, businessImpl.findTheGreatestFromAllData());
    }

    @Test
    void findTheGreatestFromAllData_OneValue() {
        when(dataServiceMock.retrieveAllData()).thenReturn(new int[] {5});
        assertEquals(5, businessImpl.findTheGreatestFromAllData());
    }

    @Test
    void findTheGreatestFromAllData_EmptyArray() {
        when(dataServiceMock.retrieveAllData()).thenReturn(new int[] {});
        assertEquals(Integer.MIN_VALUE, businessImpl.findTheGreatestFromAllData());
    }
}

