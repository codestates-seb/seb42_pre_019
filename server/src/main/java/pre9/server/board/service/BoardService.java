package pre9.server.board.service;

import  pre9.server.board.dto.BoardDTO;
import  lombok.RequiredArgsConstructor;
import  org.springframework.stereotype.Service;
import pre9.server.board.repository.BoardRepository;

@Service
@RequiredArgsConstructor

public class BoardService {
    private final BoardRepository boardRepository;
    public Long save(BoardDTO boardDTO){

    }

}
