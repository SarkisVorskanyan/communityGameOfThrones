export class User_dto{
    email;
    _id;
    nickname;
    isActivated;
    role

    constructor(model) {
        this.email = model.email;
        this._id = model._id;
        this.nickname = model.nickname;
        this.isActivated = model.isActivated
        this.role = model.role
    }
}

