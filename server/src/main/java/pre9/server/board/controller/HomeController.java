package pre9.server.board.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
//@CrossOrigin(origins = "*",allowedHeaders = "*")
@Controller
public class HomeController {
    @GetMapping("/")
    public String index() {
        return "index";
    }
}
