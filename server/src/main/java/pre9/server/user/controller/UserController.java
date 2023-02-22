package pre9.server.user.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import pre9.server.dto.SingleResponseDto;
import pre9.server.user.dto.UserPatchDto;
import pre9.server.user.dto.UserPostDto;
import pre9.server.user.entity.User;
import pre9.server.user.mapper.UserMapper;
import pre9.server.user.service.UserService;
import pre9.server.utils.UriCreator;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;

@RestController
@RequestMapping("/${api.version}/users")
@Validated
@Slf4j
public class UserController {

    private final static String USER_DEFAULT_URL = "/users";
    private final UserService userService;
    private final UserMapper mapper;

    public UserController(UserService userService, UserMapper mapper) {
        this.userService = userService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto userDto) {
        User user = mapper.userPostDtoToUser(userDto);

        User createdUser = userService.createUser(user);
        URI location = UriCreator.createUri(USER_DEFAULT_URL, createdUser.getUserId());
        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{user-id}")
    public ResponseEntity patchUser(
            @PathVariable("user-id") @Positive long userId,
            @Valid @RequestBody UserPatchDto userPatchDto) {
        userPatchDto.setUserId(userId);

        User user =
                userService.updateUser(mapper.userPatchDtoToUser(userPatchDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponseDto(user))
                        , HttpStatus.OK);
    }

    @GetMapping("/{user-id}")
    public ResponseEntity getUser(
            @PathVariable("user-id") @Positive long userId) {
        User user = userService.findUser(userId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponseDto(user))
                , HttpStatus.OK);
    }

    @DeleteMapping("/{user-id}")
    public ResponseEntity deleteUser(
            @PathVariable("user-id") @Positive long userId) {
        userService.deleteUser(userId);
        return ResponseEntity.noContent().build();
    }
}
