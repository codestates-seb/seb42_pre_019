package pre9.server.user;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;


@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UserMapper {
    User userPostToUser(UserDto.Post requestBody);
    User userPatchToUser(UserDto.Patch requestBody);
    UserDto.Response userToUserResponse(User user);

}
