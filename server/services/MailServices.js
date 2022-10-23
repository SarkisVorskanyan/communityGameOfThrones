import nodemailer from 'nodemailer'

class MailServices {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMPT_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }

    async sendActivationMail(to, link){
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: `Активировать ваш аккаунт на ${process.env.API_WEB_URL}`,
            text: '',
            html:
                `
                <div>
                    <h1>Для активации аккаунта нажмите на линк</h1>
                    <a href="${link}">${link}</a>
                </div>
            `
        })
    }

    async SendResetPassword(to, link){
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: `Изменит ваш парол на ${process.env.API_WEB_URL}`,
            text: '',
            html:
                `
                <div>
                    <h1>Для изменение вашего пароля на аккаунт нажмите на линк</h1>
                    <a href="${link}">${link}</a>
                </div>
            `
        })
    }




}

export default new MailServices()