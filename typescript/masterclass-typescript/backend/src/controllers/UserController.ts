import { Request, Response } from "express";

import EmailService from '../services/EmailService';

const users = [
    {
        name: 'Caio',
        email: 'email@mail.com'
    }
]

export default {
    // (request: Request, response: Response)
    async index(request: Request, response: Response){
        return response.json(users)
    },

    async create(request: Request, response: Response){
        const emailService = new EmailService();
        
        emailService.sendMail(
            {
                to: {name: 'Caio', email: 'email@mail.com'},
                message: { subject: 'any shit', body: 'go fuck yourself'}
            }
        );

        return response.send('User created')
    }
}