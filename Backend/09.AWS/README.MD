## Trouble Shooting

### The instance profile aws-elasticbeanstalk-ec2-role associated with the environment does not exist
> AWS 보안 정책으로 발생하는 오류, Elastick Beanstalk가 자체 인스턴스 프로필을 만들 수 없어 수동 생성필요

**인스턴스 프로필 IAM** <br/>
`aws-elasticbeanstalk-ec2-role`

    AWSElasticBeanstalkMulticontainerDocker
    AWSElasticBeanstalkWebTier
    AWSElasticBeanstalkWorkerTier

**서비스 역할 IAM** <br/>
`aws-elasticbeanstalk-service-role`

    AutoScalingFullAccess
    ElasticLoadBalancingFullAccess
    AWSElasticBeanstalkEnhancedHealth
    AWSElasticBeanstalkManagedUpdatesCustomerRolePolicy
    AWSElasticBeanstalkService
FullAccess > 500 Errer 해결하기 위함

### H2 Disabled
+ application.properties

        #spring.h2.console.enabled=true
        spring.datasource.url=jdbc:h2:mem:testdb
        spring.jpa.defer-datasource-initialization=true 

+ Security Filter Chain (Jwt Security Config.java)

        
        // .requestMatchers(PathRequest.toH2Console()).permitAll()
        // .requestMatchers(new AntPathRequestMatcher(PathRequest.toH2Console().toString())).permitAll() 


## Deploy Flow
Backend
1. .jar 파일을 통한 Elastic Beanstalk 환경 배포 
2. JWT 토큰을 사용하기 때문에 JWT 토큰 생성해야 함 
    + 생성된 환경 주소/authenticate , `POST`   >> JWT 토큰 발급
    + Talend API Tester를 통한 JWT토큰을 사용한 접속 
    + Todo 리스트 확인
    http://restapi-app-env-1.eba-xwx3uemc.ap-northeast-2.elasticbeanstalk.com/users/ange1jun/todos

Frontend
+ Todo App 경로에서 `npm start` 
+ 로그인 
+ Todo CRUD 반영됨

## Guid Link 
### JWT 발급 </br>
POST > http://localhost:5000/authenticate

```
{
  "username":"ange1jun",
  "password":"dummy"
}
```

### JWT.io 
https://jwt.io/


### Talend API Tester에서 JWT Token 사용 </br>
Hello World URL > http://localhost:5000/hello-world
+ `Add Header`
+ Authorization : Bearer ~JWTtoken~


### User Resource
GET - http://localhost:5000/users/ange1jun/todos