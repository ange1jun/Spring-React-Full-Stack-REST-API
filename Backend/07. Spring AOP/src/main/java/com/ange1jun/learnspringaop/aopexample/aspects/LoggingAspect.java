package com.ange1jun.learnspringaop.aopexample.aspects;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;

@Configuration
@Aspect
public class LoggingAspect {

    private Logger logger = LoggerFactory.getLogger(getClass());

    @Before("com.ange1jun.learnspringaop.aopexample.aspects.CommonPointcutConfig.dataPackageConfigUsingBean()")
    public void logMethodCallBeforeExecution(JoinPoint joinPoint){
        logger.info("Before Aspect - {} is Called with arguments: {} *** "
                , joinPoint, joinPoint.getArgs());
    }

    @After("com.ange1jun.learnspringaop.aopexample.aspects.CommonPointcutConfig.businessandDataPackageConfig()")
    public void logMethodCallAfterExecution(JoinPoint joinPoint){
        logger.info("After Aspect - {} has executed ", joinPoint);
    }

    @AfterThrowing(
    pointcut = "com.ange1jun.learnspringaop.aopexample.aspects.CommonPointcutConfig.businessandDataPackageConfig()" ,
    throwing = "exception"
    )
    public void logMethodCallAfterException(JoinPoint joinPoint, Exception exception){
        logger.info("AfterThrowing Aspect - {} has thrown an exception {} ", joinPoint, exception);
    }

    @AfterReturning(
    pointcut = "com.ange1jun.learnspringaop.aopexample.aspects.CommonPointcutConfig.businessandDataPackageConfig()" ,
    returning = "resultValue"
    )
    public void logMethodCallAfterSuccessfulExecution(JoinPoint joinPoint, Object resultValue){
        logger.info("AfterReturning Aspect - {} has returned {} ", joinPoint, resultValue);
    }
}
