package pre9.server.auth.utils.email;

import org.springframework.mail.MailSendException;

public class MockExceptionEmailSendable implements EmailSendable {
    @Override
    public void send(String message) throws InterruptedException {
        Thread.sleep(5000L);
        throw new MailSendException("error while send email");
    }
}
