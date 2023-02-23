package pre9.server.user.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@NoArgsConstructor
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId; // 멤버 구분을 위한 아이디

    @Column(nullable = false, updatable = false, unique = true) // 빈 값 x, 수정 x, 중복값 x
    private String email; // 이메일

    @Column(nullable = false)
    private String password; // 비밀번호

    @Column(nullable = false)
    private String name; // 이름

}
