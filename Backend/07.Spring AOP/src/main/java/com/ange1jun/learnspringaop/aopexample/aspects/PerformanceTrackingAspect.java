package com.ange1jun.learnspringaop.aopexample.aspects;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;

@Aspect
@Configuration
public class PerformanceTrackingAspect {

    private Logger logger = LoggerFactory.getLogger(getClass());

//  @Around("com.ange1jun.learnspringaop.aopexample.aspects.CommonPointcutConfig.businessandDataPackageConfig()")
    @Around("com.ange1jun.learnspringaop.aopexample.aspects.CommonPointcutConfig.trackTimeAnnotation()")
    public Object findExecutionTime(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {

        long startTimeMills = System.currentTimeMillis();

        Object returnValue = proceedingJoinPoint.proceed();

        long stopTimeMills = System.currentTimeMillis();

        long excutionDuration = stopTimeMills - startTimeMills ;

        logger.info("Around aspect - {} Method execute in {} ms", proceedingJoinPoint , excutionDuration);

        return returnValue;
    }
}
