package com.example.springboot;
import ch.qos.logback.classic.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@SpringBootApplication
@Controller

public class Application {

    private static final Logger LOGGER=(Logger) LoggerFactory.getLogger(Application.class);

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);

        LOGGER.info("An INFO Message");
        LOGGER.warn("An WARN Message");
        LOGGER.error("An ERROR Message");
        LOGGER.debug("An DEBUG Message");
        LOGGER.trace("An TRACE Message");
    }

    @GetMapping("/index")
    public String index() {
        return "index"; // Redirige a index.html
    }

    @GetMapping("/contacto")
    public String contacto() {
        return "contacto"; // Redirige a contacto.html
    }

    @GetMapping("/sobre-nosotros")
    public String sobreNosotros() {
        return "sobreNosotros"; // Redirige a sobreNosotros.html
    }

}

