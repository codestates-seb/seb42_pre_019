package pre9.server.auth.utils.email;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EmailConfiguration {
    @Bean
    public EmailSendable emailSendable() {
        return new MockEmailSendable();
    }
}
