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
            subject: `Activate your account in ${process.env.API_WEB_URL}`,
            text: '',
            html:
            `
                <div>
                    <h1>For activation click to this link</h1>
                    <a href="${link}">${link}</a>
                </div>
            `
        })
    }

    


}

export default new MailServices()