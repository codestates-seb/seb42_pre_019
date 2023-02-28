package pre9.server.user;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import pre9.server.user.User.UserStatus;
import pre9.server.user.UserDto.Patch;
import pre9.server.user.UserDto.Post;
import pre9.server.user.UserDto.Response;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-02-28T13:22:01+0900",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.6.jar, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User userPostToUser(Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        User user = new User();

        user.setDisplayName( requestBody.getDisplayName() );
        user.setEmail( requestBody.getEmail() );
        user.setPassword( requestBody.getPassword() );

        return user;
    }

    @Override
    public User userPatchToUser(Patch requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        User user = new User();

        user.setUserId( requestBody.getUserId() );
        user.setDisplayName( requestBody.getDisplayName() );
        user.setUserStatus( requestBody.getUserStatus() );

        return user;
    }

    @Override
    public Response userToUserResponse(User user) {
        if ( user == null ) {
            return null;
        }

        long userId = 0L;
        String email = null;
        String displayName = null;
        UserStatus userStatus = null;

        if ( user.getUserId() != null ) {
            userId = user.getUserId();
        }
        email = user.getEmail();
        displayName = user.getDisplayName();
        userStatus = user.getUserStatus();

        Response response = new Response( userId, email, displayName, userStatus );

        return response;
    }
}
