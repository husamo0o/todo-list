
const InvalidAccessException = use('App/Exceptions/InvalidAccessException');
const ResourceNotExistException = use('App/Exceptions/ResourceNotExistException');

class AuthorizationService{
    verifyPermission(resource, user){
        if(!resource){
            throw new ResourseNotExistException();
        }
        if(resource.user_id !== user.id){
            // throw new Error();
            throw new InvalidAccessException();
        }
    }
}

module.exports = new AuthorizationService();