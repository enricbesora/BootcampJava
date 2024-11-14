package com.example.myfirstapplication;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class MyRestController {

    @GetMapping("/message")
    public Map<String, String> getMessage() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Hello from RestController!");
        return response;
    }
}
