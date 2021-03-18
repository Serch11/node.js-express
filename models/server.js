require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');


class Server {


    constructor() {

        this.app = express();
        this.port = process.env.PORT || 3000;
        //endPoint
        this.endPoint = {
            usuarios: '/api/usuarios',
            login: 'api/login'
        };

        this.middlewares();
        this.router();
    }


    middlewares() {

        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(express.json());
    }

    router() {

        this.app(this.endPoint.usuarios, require('../router/usuarios'));
    }

    listend() {
        this.app.listen(this.port, () => {
            console.log("Servidor Corriendo localhost" + this.port);
        })
    }

}


module.exports = {
    Server
}