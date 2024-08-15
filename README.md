### <span style="color:RED">INDEX

1. [Project Structure](#project-structure)
2. [Frontend](#frontend)
3. [Backend](#backend)
   1. [Spring-framework](#spring-framework,),[Spring-framework-02](#spring-framework-02)
   3. [Learn-springboot](#learn-springboot)
   4. [Jpa-and-hibernate](#jpa-and-hibernate)
   5. [Restful-web-services](#restful-web-services)
   6. [Spring Security & OAuth (Google)](#spring-security--oauth-google)
   7. [Functional-programming](#functional-programming)
4. [Testing](#testing)
   1. [JUnit](#junit)
   2. [Mockito](#mockito)

## <span style="color:Green"> **Project Structure**
> **REST API Todo WebApp** </br>
> FE : todo -> React </br>
> BE : todo -> Spring </br>
> DB : MySQL </br>
+ IntelliJ, VS Code
+ Java 17, 21
+ Gradle, Maven


## <span style="color:Yellow"> **Frontend** 
+ todo 
  +  Todo Application 
  + Route using 'react-router-dom'
  + HTTP Request Library using *axios*
  + Security using *JWT*, *SpringSecurity*
  + **Form, DATE using Formik, momnet** 

## <span style="color:Yellow"> **Backend** 
## 1. Spring-framework 
  + game: 4 Java, 1 Interface (Simple Gamming App)
  + helloworld: Spring Context, Use Bean App
## 2. Spring-framework-02
  + game: 5 Java, 1 Interface (Simple Gamming App)

          
          a1: DepedencyInjection 
          b1: SimpleSpringContext 
          c1: SpringContext, Calculator App 
          d1: Lazyinitializaion 
          e1: BeanScopes 
          f1: PreConstruct, PreDestroy 
          g1: Jakarta CDI (Contexts & DI) 
          h1: XML Configurtaion
        
## 3. Learn-springboot
  + /src/main/resources
      - use Profiles (Multi application.properties)
  + /src/main (Springboot)
      - @ConfigurationProperties 
  + Springboot actuator <br/>
      - /target (Embedded Server)
      - Maven build

## 4. Jpa-and-hibernate
  + use H2 Console
  + use JDBC, Spring JDBC
  + use JPA, Spring Data JPA

## 5. Restful-web-services
  + improve POST method
  + Exception for all resource 
  + REST API Document 
    + Swagger
    + Open API
  + Versioning
    + URI based
    + Request Parameter based
    + Request Header based
    + Media Type based
  + HATEOAS (Hypermedia As The Engine Of Application State)
  + Actuator (for production Monitoring)
  + HAL-Explorer (API Explorer)
  
##  6. Spring Security & OAuth (Google) 
  + Spring Security (**Gradle**)
    + **CSRF** (Croos Site Request Forgery) *disabled*
    + **CORS** (Cross Origin Resource Sharing)
    + BA; Basic Authentication 
      + Security Filter Chain **Overriding**
    + Using JWT 
      + BcryptPasswordEncoder
      + Jwt Encoder
      + Jwt Decoder
  + OAuth2 Client
      + Google Login
      + defaultSecurityFilterChain **Overriding**

##  6. Functional-programming
  + Lambda Expression
  + .map
  + Optional Class
  + For eacy, Improve For
  
##  7. Spring AOP (Aspect Oriented Programming)
  - Pointcut, Aspect, Advice
  - @After, @Before, @AfterReturning, @AfterThrowing, @Around
  - Custom Annotation (@TrackTime)

## <span style="color:Yellow"> **Testing** <hr>

## 1. Junit (Unit Test Framework)
  + AssertTest
  + BeforeTest
  + AfterTest
## 2. Mockito (Mocking Framework)
  + Using Mock Annotation 