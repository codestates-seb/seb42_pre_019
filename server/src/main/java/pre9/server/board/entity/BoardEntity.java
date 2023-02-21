package pre9.server.board.entity;


import lombok.Generated;
import lombok.Getter;
import javax.persistence.Entity;
import javax.persistence.Table;


@Entity
@Getter
@Table(name = "board_table")

public class BoardEntity {

    @Id
    @Generated(strategy = GenerationType.IDENTITY)
    @Column(name = "board)_id")
    private Long id;

    @Column(length = 50, nullable = false)
}
