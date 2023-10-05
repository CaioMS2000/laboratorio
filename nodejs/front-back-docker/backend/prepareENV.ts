import dotenv from 'dotenv';
import path from 'path';
import { writeFileSync, unlink } from 'fs';

const envDir = path.join(__dirname, '..'); // Diretório personalizado

dotenv.config({ path: path.join(envDir, '.env') });

unlink('.env', err => {})

const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD
const DATABASE_HOST = process.env.DATABASE_HOST

if(DATABASE_PASSWORD && DATABASE_HOST){
    writeFileSync('.env', `DATABASE_URL=postgres://postgres:${DATABASE_PASSWORD}@${DATABASE_HOST}:5432/database?schema=public`)
}