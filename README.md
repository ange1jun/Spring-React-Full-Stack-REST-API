## INDEX
+  [Project Structure](#프로젝트-구조-(structure))
+  [Frontend](#프론트엔드(frontend))
+  [Backend](#백엔드(backend))
   1.  [Spring-framework](#1.-spring-framework,spring-framework-02),[Spring-framework-02](#1.-spring-framework,spring-framework-02)
   2.  [Learn-springboot](###-2.-learn-springboot)
   3.  [Jpa-and-hibernate](#jpa-and-hibernate)
   4.  [Restful-web-services](#restful-web-services)
   5.  [Spring Security & OAuth (Google)](#spring-security--oauth-google)
   6. [Maven&Gradle and Docker build](#maven&gradle-and-docker-build)
   +  [Functional-programming](#functional-programming)
+  [Testing](#테스팅(testing))
   -  [JUnit](#junit)
   -  [Mockito](#mockito)

# 프로젝트 구조 (structure)
> REST API Todo WebApp </br>
> FE : todo -> React </br>
> BE : todo -> Spring </br
> DB : MySQL </br>
  + IntelliJ, VS Code
  + Java 17, 21
  + Gradle, Maven

# 프론트엔드(frontend) 
+ todo 
  +  Todo Application 
  + Route using 'react-router-dom'
  + HTTP Request Library using *axios*
  + Security using *JWT*, *SpringSecurity*
  + **Form, DATE using Formik, momnet** 

# 백엔드(backend)
### 1. Spring-framework,Spring-framework-02
  + helloworld: Spring Context, Use Bean App
  + game: 5 Java, 1 Interface (Simple Gamming App)

          a1: DepedencyInjection 
          b1: SimpleSpringContext 
          c1: SpringContext, Calculator App 
          d1: Lazyinitializaion 
          e1: BeanScopes 
          f1: PreConstruct, PreDestroy 
          g1: Jakarta CDI (Contexts & DI) 
          h1: XML Configurtaion
        
### 2. Learn-springboot
  + /src/main/resources
      - use Profiles (Multi application.properties)
  + /src/main (Springboot)
      - @ConfigurationProperties 
  + Springboot actuator <br/>
      - /target (Embedded Server)
      - Maven build

### 3. Jpa-and-hibernate
  + use H2 Console
  + use JDBC, Spring JDBC
  + use JPA, Spring Data JPA

### 4. Restful-web-services
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
  
###  5. Spring Security & OAuth (Google) 
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
  
###  6. Spring AOP (Aspect Oriented Programming)
  - Pointcut, Aspect, Advice
  - @After, @Before, @AfterReturning, @AfterThrowing, @Around
  - Custom Annotation (@TrackTime)

###  7. Maven&Gradle and Docker Build
  - Maven & Gradle build
  - Maven & Gradle flow 
  - Build Dockerfile
  - Using Spring Boot Maven Plugin (Docker build)

###  # Functional-programming
  + Lambda Expression
  + .map
  + Optional Class
  + For eacy, Improve For


# 테스팅(testing)
### 1. Junit (Unit Test Framework)
  + AssertTest
  + BeforeTest
  + AfterTest
### 2. Mockito (Mocking Framework)
  + Using Mock Annotation 