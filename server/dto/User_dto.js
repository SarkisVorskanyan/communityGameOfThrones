export class User_dto{
    email;
    id;
    nickname;
    isActivated;
    role

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.nickname = model.nickname;
        this.isActivated = model.isActivated
        this.role = model.role
    }
}

