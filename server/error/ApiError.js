import { AUTORIZED_ERROR } from './../configs/Messages.js';

class ApiError extends Error {
    constructor(status, message){
        super()
        this.status = status
        this.message = message
    }

    static badRequest(message) {
        return new ApiError(404, message)
    }

    static internal(message) {
        return new ApiError(500, message)
    }

    static forbidden(message) {
        return new ApiError(403, message)
    }

    static UnauthorizedError(message = AUTORIZED_ERROR) {
        return new ApiError(401, message)
    }
}

export default ApiError