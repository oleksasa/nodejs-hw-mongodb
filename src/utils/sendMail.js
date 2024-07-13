import nodemailer from 'nodemailer';
import { env } from '../utils/env.js';
import { ENV_VARS } from '../constants/index.js';

const transport = nodemailer.createTransport({
  host: env(ENV_VARS.SMTP_HOST),
  port: env(ENV_VARS.SMTP_PORT),
  auth: {
    pass: env(ENV_VARS.SMTP_PASSWORD),
    user: env(ENV_VARS.SMTP_USER),
  },
  from: env(ENV_VARS.SMTP_USER),
});

export const sendMail = async (options) => {
  return await transport.sendMail(options);
};
