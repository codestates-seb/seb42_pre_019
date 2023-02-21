package pre9.server.board.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import pre9.server.board.dto.BoardDTO;
import pre9.server.board.service.BoardService;

@Controller
@RequestMapping("/board" )
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService; //생성자주입

    @GetMapping("/save-form")
    public String saveForm(){
        return "boardPages/save";
    }

    @PostMapping("/save")
    public String save(@ModelAttribute BoardDTO boardDTO){
        Long id = boardService.save(boardDTO)
        return  "redirect:/board/"; //목록페이지 요청
    }
}


