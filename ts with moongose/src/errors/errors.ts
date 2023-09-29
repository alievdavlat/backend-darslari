export class ErrorHandler extends Error{
    status: number

    constructor(message: string, status: number) {
        super()

        this.message = message
        this.status = status
    }

    getErrorInfo() {
        return {
            message: this.message || 'Internal server error',
            status: this.status || 500
        }
    }
}