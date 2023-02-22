package pre9.server.user.service;

import org.springframework.stereotype.Service;
import pre9.server.exception.BusinessLogicException;
import pre9.server.exception.ExceptionCode;
import pre9.server.user.entity.User;
import pre9.server.user.repository.UserRepository;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User user) {
        verifyExistsEmail(user.getEmail()); //이미 존재하는 이메일인지 확인

        return userRepository.save(user);
    }

    public User updateUser(User user) {
        User findUser = findVerifiedUser(user.getUserId());

        Optional.ofNullable(user.getName()) //이름 변경
                .ifPresent(name -> findUser.setName(name));
        Optional.ofNullable(user.getPassword()) //비밀번호 변경
                .ifPresent(password -> findUser.setPassword(password));

        return userRepository.save(findUser);
    }

    public User findUser(long userId) {
        return findVerifiedUser(userId);
    }

    public void deleteUser(long userId) {
        User findUser = findVerifiedUser(userId);

        userRepository.delete(findUser);
    }

    public User findVerifiedUser(long userId) {
        Optional<User> optionalUser =
                userRepository.findById(userId);
        User findUser =
                optionalUser.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        return findUser;
    }

    private void verifyExistsEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if(user.isPresent())
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
    }


}
