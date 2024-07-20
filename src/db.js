import { Sequelize } from 'sequelize';

const env = {
    PORT: 5000,
    DB_NAME: 'postgres',
    DB_USER: 'postgres',
    DB_PASSWORD: '1703',
    DB_HOST: 'localhost',
    DB_PORT: 5555,
    SECRET_KEY: 'random_secret_key123',
}
export const sequelize = new Sequelize(
    `postgresql://${env.DB_USER}:${env.DB_PASSWORD}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`
);