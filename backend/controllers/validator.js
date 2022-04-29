// isntalar npm install joi
const joi = require ("joi")
// trim q no tenga espacios anteriores y posteriores
const validator = (req,res,next) => { 
    console.log(req.body.NuevoUsuario)
    const Schema= joi.object({
        firstname:joi.string().max(40).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({
            "string.min":"el nombre debe contener almenos 3 caracteres",
            "string.empty":"el campo no puede estar vacio"
        }),
        lastname:joi.string().max(20).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({
            "string.min":"el apellido debe contener almenos 3 caracteres",
            "string.empty":"el campo no puede estar vacio"
        }),
        email:joi.string().email({minDomainSegments:2}).required().messages({
            "string.email":"formato de email invalido"
        }),
        password:joi.string().max(30).min(6).trim().pattern(new RegExp("^[a-zA-Z0-9]+$")).required().messages({
            "string.min":"el password debe contener almenos 6 caracteres",
            
            "string.pattern":"el password debe ser alfanumerica"
        }),
        from: joi.string()

    })
    const validation=Schema.validate(req.body.NuevoUsuario,{abortEarly:false})
    if (validation.error) {
        return res.json({sucess:"falseVAL", response:validation})
    }
    next()
}
module.exports = validator
