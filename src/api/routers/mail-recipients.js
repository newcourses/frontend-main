import MailRecipientsControllers from 'api/controllers/mail-recipients';

export default [
  {
    method: 'POST',
    path: '/api/mail-recipients',
    controller: MailRecipientsControllers.create,
  },
];
