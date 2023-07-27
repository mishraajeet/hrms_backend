var nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    service: 'gmail',
    auth: {
        user: 'ajeetmagnet@gmail.com',
        pass: 'uqiiyricyqumuepy',
    },
    secure: true,
});

module.exports = {
    mail: async (email,url) => {
        try {
            return new Promise((resolve, reject) => {
                const mailData = {
                    from: 'ajeetmagnet@gmail.com',
                    to: email,
                    subject: 'Please reset you password',
                    text: 'That was easy!',
                    html: `<b>Plese click <a href="${url}">here</a> to reset password </b>`,
                };
                transporter.sendMail(mailData, function (err, info) {
                    if (err) {
                        console.log("error is " + err);
                        resolve(false);
                    }
                    else {
                        console.log('Email sent: ' + info.response);
                        resolve(true);
                    }
                })
            });
        } catch (e) {

        }
    }
}