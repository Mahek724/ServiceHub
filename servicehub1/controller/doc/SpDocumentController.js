const spDocModel = require("../../model/documents/Sp_Document_tbl");

const addSpDoc = async (req, res) => {
  const user = new spDocModel(req.body);

  try {
    const saveUser = await user.save();

    if (saveUser) {
      res.status(201).json({
        message: "Service provider Document created successfully...",
        data: saveUser,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "error to create document",
      error: err.message,
    });
  }
};

const getAllSpDoc = async (req, res) => {
  try {
    const user = await spDocModel.find();
    if (user) {
      res.status(201).json({
        message: "Service provider Document get successfully",
        data: user,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  addSpDoc,
  getAllSpDoc,
};
