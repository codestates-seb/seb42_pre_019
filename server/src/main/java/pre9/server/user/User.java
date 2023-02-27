package pre9.server.user;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pre9.server.audit.Auditable;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "users")
public class User extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId; // (PK) 멤버 구분을 위한 아이디

    @Column(length = 100, nullable = false)
    private String displayName; // 이름
    @Column(nullable = false, updatable = false, unique = true) // 빈 값 x, 수정 x, 중복값 x
    private String email; // 이메일

    @Column(length = 100, nullable = false)
    private String password; // 비밀번호

    @ElementCollection(fetch = FetchType.EAGER) // USER ROLE
    private List<String> roles = new ArrayList<>();

    @Enumerated(value = EnumType.STRING) // 활동 상태
    @Column(nullable = false)
    private UserStatus userStatus = UserStatus.USER_ACTIVE;

    public User(String email) { this.email = email; }

    public User(String email, String name) {
        this.displayName = name;
        this.email = email;
    }

    public String getDisplayName() {
        return getEmail();
    }

    public enum UserStatus {
        USER_ACTIVE("활동중");
        @Getter
        private String status;

        UserStatus(String status) { this.status = status; }
    }

}
