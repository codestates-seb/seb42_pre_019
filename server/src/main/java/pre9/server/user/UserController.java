package pre9.server.user;

import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import pre9.server.dto.MultiResponseDto;
import pre9.server.dto.SingleResponseDto;
import pre9.server.utils.UriCreator;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;


//@CrossOrigin
@RestController
@RequestMapping("/users")
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

    @PostMapping("/new-user")
    public ResponseEntity postUser(@Valid @RequestBody UserDto.Post requestBody) {
        User user = mapper.userPostToUser(requestBody);

        User createdUser = userService.createUser(user);
        URI location = UriCreator.createUri(USER_DEFAULT_URL, createdUser.getUserId());

        return ResponseEntity.created(location).build();

    }
    @PatchMapping("/{userId}")
    public ResponseEntity patchUser(
        @PathVariable @Positive long userId,
        @Valid @RequestBody UserDto.Patch requestBody){
        requestBody.setUserId(userId);

        User user =
                userService.updateUser(mapper.userPatchToUser(requestBody));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponse(user)),
                HttpStatus.OK);
    }

    @GetMapping("/{userId}")
    public ResponseEntity getUser(@PathVariable @Positive long userId) {
        User user = userService.findUser(userId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponse(user))
                , HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity getUsers(@Positive @RequestParam int page,
                                   @Positive @RequestParam int size) {
        Page<User> pageUsers = userService.findUsers(page-1, size);
        List<User> users = pageUsers.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.usersToUserResponses(users),
                        pageUsers),
                HttpStatus.OK);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity deleteUser(
            @PathVariable("userId") @Positive long userId) {
        userService.deleteUser(userId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/my-page")
    public String myPage() {
        return "my-page";
    }
}
