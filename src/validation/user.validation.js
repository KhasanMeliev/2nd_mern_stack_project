const AJV = require("ajv");
const ajv = new AJV({ allErrors: true });

require("ajv-formats")(ajv);
require("ajv-errors")(ajv);
class userValidation {
  createUser(req, res, next) {
    const schema = {
      type: "object",
      properties: {
        name: { type: "string", minLength: 3 },
        email: { type: "string", format: "email" },
      },
      required: ["name", "email"],
      additionalProperties: false,
      errorMessage: {
        properties: {
          name: "Name should be at least 3 characters long",
          email: "Email should be valid",
        },
        required: {
          name: "Name is required",
          email: "Email is required",
        },
        additionalProperties: "No additional properties allowed",
      },
    };

    const validate = ajv.compile(schema);
    const valid = validate(req.body);

    if (!valid) {
      res.status(400).send({ errors: validate.errors[0].message });
    }

    next();
  }
}

module.exports = new userValidation();
