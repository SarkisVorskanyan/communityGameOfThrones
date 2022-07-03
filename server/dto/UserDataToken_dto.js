export class UserDataToken_dto{
    email;
    id;
    nickname;
    role

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.nickname = model.nickname;;
        this.role = model.role
    }
}

