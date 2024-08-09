package com.ange1jun.learnspringsecurity.resources;

import jakarta.annotation.security.RolesAllowed;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TodoResource {


    private Logger logger = LoggerFactory.getLogger(getClass());


    public static final List<Todo> TODO_LIST =
            List.of(new Todo("ange1jun123", "Learn AWS Service"),
                    new Todo("ange1jun", "Get AWS Certified"));

    @GetMapping("/todos")
    public List<Todo> retrieveAllTodos() {
        return TODO_LIST;

    }

    @GetMapping("/user/{username}/todos")
    @PreAuthorize("hasRole('USER') and #username == authentication.name")
    @PostAuthorize("returnObject.username == 'ange1jun123'")
    @RolesAllowed({"ADMIN","USER"})
    @Secured({"ROLE_ADMIN","ROLE_USER"})
    public Todo retrieveSpecificUserTodos(@PathVariable String username) {
        return TODO_LIST.get(0);
    }

    @PostMapping("/user/{username}/todos")
    public void createSpecificUserTodos(@PathVariable String username
            , @RequestBody Todo todo){
        logger.info("Create {} Get {}", todo, username);
    }


}

record Todo (String username, String description) {}
