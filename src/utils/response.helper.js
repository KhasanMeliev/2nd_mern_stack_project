class response {
  success(res, msg = null, data = null) {
    return res.status(200).json({
      success: "success",
      message: msg || "Success",
      result: data,
    });
  }

  created(res, msg = null, data = null) {
    return res.status(201).json({
      success: "success",
      message: msg || "User created successfully",
      result: data,
    });
  }

  badRequest(res, msg = null, data = null) {
    return res.status(400).json({
      success: "error",
      message: msg || "Bad Request",
      data: null,
    });
  }

  internalServerError(res, msg = null, data = null) {
    return res.status(500).json({
      success: "error",
      message: msg || "Internal Server Error",
      data: null,
    });
  }

  notFound(res, msg = null, data = null) {
    return res.status(404).json({
      success: "error",
      message: msg || "Not Found",
      data: null,
    });
  }
}

module.exports = new response();
