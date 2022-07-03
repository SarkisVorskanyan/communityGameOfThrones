export class User_dto{
    email;
    id;
    nickname;

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.nickname = model.nickname;
    }
}

