package pre9.server.user.mapper;

import pre9.server.user.dto.UserPatchDto;
import pre9.server.user.dto.UserPostDto;
import pre9.server.user.dto.UserResponseDto;
import pre9.server.user.entity.User;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User userPostDtoToUser(UserPostDto userPostDto);
    User userPatchDtoToUser(UserPatchDto userPatchDto);
    UserResponseDto userToUserResponseDto(User user);
    List<UserResponseDto> usersToUserResponseDtos(List<User> users);

}
