package pre9.server.user;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import pre9.server.user.User.UserStatus;
import pre9.server.user.UserDto.Patch;
import pre9.server.user.UserDto.Post;
import pre9.server.user.UserDto.Response;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-01T17:15:50+0900",
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
        user.setUserEmail( requestBody.getUserEmail() );
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
        String userEmail = null;
        String displayName = null;
        UserStatus userStatus = null;

        if ( user.getUserId() != null ) {
            userId = user.getUserId();
        }
        userEmail = user.getUserEmail();
        displayName = user.getDisplayName();
        userStatus = user.getUserStatus();

        Response response = new Response( userId, userEmail, displayName, userStatus );

        return response;
    }

    @Override
    public List<Response> usersToUserResponses(List<User> users) {
        if ( users == null ) {
            return null;
        }

        List<Response> list = new ArrayList<Response>( users.size() );
        for ( User user : users ) {
            list.add( userToUserResponse( user ) );
        }

        return list;
    }
}
