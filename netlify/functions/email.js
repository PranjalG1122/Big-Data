const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
  console.log(event.queryStringParameters);
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: process.env.testusername,
      pass: process.env.testpassword,
    },
  });

  let info = await transporter.sendMail({
    from: '"Test Email 👻" <jcnruad1111@gmail.com>',
    to: "plumberjohn1221@gmail.com",
    subject: "Test",
    text: event.queryStringParameters.content,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Success!" }),
  };
};
