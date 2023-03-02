package pre9.server.auth;

import lombok.Getter;

@Getter
public class LoginDto {
    private String userEmail;
    private String password;
}
