package pre9.server.user;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class UserDto {

    @Getter
    @AllArgsConstructor
    public static class Post {
        @NotBlank(message = "이름을 입력하세요.")
        private String displayName;

        @NotBlank
        @Email
        private String email;

        @NotBlank
        private String password;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch{

        private long userId;

        @NotBlank(message = "이름을 입력하세요.")
        private String displayName;

        private User.UserStatus userStatus;

        public void setUserId(long userId) {
            this.userId = userId;
        }

    }

    @AllArgsConstructor
    @Getter
    public static class Response {
        private long userId;
        private String email;
        private String displayName;
        // 회원 등록 일자
        // 프로필 이미지

        private User.UserStatus userStatus;

        public String getUserStatus() {
            return userStatus.getStatus();
        }
    }
}
