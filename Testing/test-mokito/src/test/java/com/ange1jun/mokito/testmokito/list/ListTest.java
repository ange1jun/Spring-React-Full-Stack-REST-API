package com.ange1jun.mokito.testmokito.list;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class ListTest {

    @Test
    void SimpleTest(){
        List listMock = mock(List.class);
        when(listMock.size()).thenReturn(3);
        assertEquals(3, listMock.size());
    }

    @Test
    void MultipleTest(){
        List listMock = mock(List.class);
        when(listMock.size()).thenReturn(3).thenReturn(2);
        assertEquals(3, listMock.size());
        assertEquals(2, listMock.size());
    }

    @Test
    void SpeicificParameters(){
        List listMock = mock(List.class);
        when(listMock.get(0)).thenReturn("Something");
        assertEquals("Something", listMock.get(0));
        assertEquals(null, listMock.get(1));
    }

    @Test
    void GenericParameters(){
        List listMock = mock(List.class);
        when(listMock.get(Mockito.anyInt())).thenReturn("SomethingString");
        assertEquals("SomethingString", listMock.get(0));
        assertEquals("SomethingString", listMock.get(1));
    }
}
