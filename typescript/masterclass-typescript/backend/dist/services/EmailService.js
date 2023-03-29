"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailService {
    sendMail({ to, message }) {
        console.log(`Email sent to ${to.name} about ${message.subject}`);
    }
}
exports.default = EmailService;
