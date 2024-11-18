package com.example.springboot;

import ReturnJson.TextToJson;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.Random;

@RestController
@RequestMapping("/apiVersion")
public class StatusController {

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/hacerCafe")
    public TextToJson getMessage(){
        return new TextToJson("Zapdos usa impactrueno 🌩");
    }

    @ResponseStatus(HttpStatus.I_AM_A_TEAPOT)
    @GetMapping("/hacerte")
    public TextToJson getMessage2(){
        return new TextToJson("Soy una Tetera!");
    }

    @ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Not Found")
    @GetMapping("/notFound")
    public TextToJson getMessage3(){
        return new TextToJson("Soy una Tetera!");
    }


}
