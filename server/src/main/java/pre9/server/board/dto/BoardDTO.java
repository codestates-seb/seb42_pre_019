package pre9.server.board.dto;

import lombok.Data;

@Data
public class BoardDTO {

    private Long id;
    private String boardTitle;
    private String boardWriter;
    private String boardpassword;
    private String boardContents;
    private int boardHits;


}
