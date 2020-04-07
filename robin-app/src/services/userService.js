class UserService {
  constructor() {
    this.isAuthenticate = false;
    this.username = "";

    console.log("UserService.constructor");
  }

  // get list of users
  getUsers = () => {
    console.log("UserService.getUsers");

    // TODO: get from API
    return ["user1", "user2", "user3", "user4"];
  };

  // login user, validate user from server
  loginUser = (username) => {
    var result = {
      status: true,
      message: "",
      tasks: [
        // TODO: define tasks
      ],
    };

    // TODO: get result from API
    if (!result.status) {
      return false;
    }

    this.username = username;
    this.isAuthenticate = true;

    return true;
  };

  // logout user and clear existing session
  logoutUser = () => {
    this.isAuthenticate = false;
    this.username = "";
  };
}

const service = new UserService();
export default service;