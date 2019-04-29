import { observable } from "mobx";
class User {
    @observable name = "same";
    @observable age = 10;
}

export default new User();