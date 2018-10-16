 function updateuser (newUser){
    return {

        type : "updateUser",
        payload : {
            user : newUser
        }
    }
}

function adduser(newUser){
    return {
        type : "addUser",
        payload : newUser
    }
}
export {updateuser,adduser};