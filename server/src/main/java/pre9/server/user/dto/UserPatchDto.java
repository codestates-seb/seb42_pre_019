package pre9.server.user.dto;

import lombok.Getter;
import javax.validation.constraints.NotBlank;

@Getter
public class UserPatchDto {

    private long userId;

    @NotBlank(message = "이름은 필수 입력 값입니다.")
    private String name;

    @NotBlank(message = "비밀번호는 필수 입력 값입니다.")
    private String password;

    public void setUserId(long userId) {
        this.userId = userId;
    }
}
