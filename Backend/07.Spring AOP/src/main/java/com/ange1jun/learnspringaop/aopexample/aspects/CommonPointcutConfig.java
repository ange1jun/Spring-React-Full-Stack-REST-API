package com.ange1jun.learnspringaop.aopexample.aspects;

import org.aspectj.lang.annotation.Pointcut;

public class CommonPointcutConfig {

    @Pointcut("execution(* com.ange1jun.learnspringaop.aopexample.*.*.*(..))")
    public void businessandDataPackageConfig(){}

    @Pointcut("execution(* com.ange1jun.learnspringaop.aopexample.business.*.*(..))")
    public void businessPackageConfig(){}

    @Pointcut("execution(* com.ange1jun.learnspringaop.aopexample.data.*.*(..))")
    public void dataPackageConfig(){}

    @Pointcut("bean(*Service*)")
    public void dataPackageConfigUsingBean(){}

    @Pointcut("@annotation(com.ange1jun.learnspringaop.aopexample.annotation.TrackTime)")
    public void trackTimeAnnotation(){}
}
