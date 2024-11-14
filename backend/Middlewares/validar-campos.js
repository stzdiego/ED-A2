const { validationResult } = require('express-validator');

const validarCampos = (req, res = express.request, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: error.mapped()
        });
    }

    next();
}

module.exports = {
    validarCampos
}