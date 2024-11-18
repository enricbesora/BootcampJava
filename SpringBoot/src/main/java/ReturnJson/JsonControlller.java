package ReturnJson;


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

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@RestController
@RequestMapping("/home")
public class JsonControlller {

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/json1")
    public TextToJson getMessage(){
        return new TextToJson("Zapdos usa impactrueno 🌩");
    }

    @GetMapping(value = "/json2", produces = "application/json")
    public String getMessage2(){
        return "{\"page\": \"Articuno uso Frio polar ❄\"}";
    }

    @GetMapping("/json3")
    public ObjectNode getMessage3(){
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode obj = mapper.createObjectNode();
        obj.put("Attack", "Moltres usa lanzallamas 🔥");
        return obj;
    }

    @GetMapping("/json4")
    public ResponseEntity<?> getMessage4(){
        final HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        return new ResponseEntity<String>("{\"page\": \"Lugia usa hidropulso 💧\"}",headers, HttpStatus.OK);
    }

    @GetMapping("/random")
    public HttpStatus getRandom(){
        Random random = new Random();
        int binaryValueRandom = random.nextInt(2);
        if (binaryValueRandom == 0) {
            return HttpStatus.OK;
        }
        else
            return HttpStatus.BAD_REQUEST;
    }

}
