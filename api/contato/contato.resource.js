var express = require('express');
var router = express.Router();

const mailer = require('nodemailer');

let transporter = mailer.createTransport({
    host: 'email-ssl.com.br',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'cliente@nilomateriaisconstrucao.com.br',
        pass: 'nilo201730'
    }
});

router.post('/', (req, res, next) => {
    let email = req.body;

    let mailOptions = {
        from: 'cliente@nilomateriaisconstrucao.com.br',
        to: 'contato@nilomateriaisconstrucao.com.br',
        subject: email.tipoMensagem + ' de ' + email.nome,
        html: '<b>De: </b>' + email.nome + '<br/>'
                + '<b>Email: </b>' + email.email + '<br/>'
                + '<b>Telefone: </b>' + email.telefone + '<br/><br/>'
                + '<b>Mensagem: </b>' + email.mensagem
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            res.send('Error on sending email').status(400);
        }
        res.send('Email sent').status(200);
    });
});

module.exports = router;