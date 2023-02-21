package pre9.server.user.service;

import org.springframework.stereotype.Service;
import pre9.server.user.entity.User;
import pre9.server.user.repository.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User user) {

    }

}
