const express = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = (req, res = express.request) => {
    const { name, email, password} = req.body;

    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: error.mapped()
        });
    }

    res.status(200).json({
        ok: true,
        name, email, password
    })
}

const loginUsuario = (req, res = express.request) => {
    res.json({
        ok: true
    });
}

const revalidarToken = (req, res = express.request) => {
    res.json({
        ok: true
    });
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}