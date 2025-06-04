const docModel = require("../../model/documents/Document_tbl");
const fileUplaodService = require("../../fileUploadService");

const addDoc = async (req, res) => {
  try {
    const { documents } = req.body;
    console.log("documents", req.body);
    // Validate if documents array exists
    if (!documents || !Array.isArray(documents)) {
      return res
        .status(400)
        .json({ error: "Documents array is missing or invalid" });
    }

    const savedDocuments = [];
    for (let i = 0; i < documents.length; i++) {
      const { document, documentTitle } = documents[i];

      // Perform file upload service here (Replace this line with your file upload logic)
      const uploadedDoc = await fileUploadService(document.tempFilePath);

      // Create a new document instance and save it to the database
      const newDocument = new docModel({
        title: documentTitle,
        fileUrl: uploadedDoc.secure_url, // Assuming the file URL is obtained from fileUploadService
      });
      const savedDocument = await newDocument.save();
      savedDocuments.push(savedDocument);
    }

    res.status(201).json({
      message: "Documents uploaded successfully!",
      documents: savedDocuments,
    });
  } catch (error) {
    console.error("Error uploading documents:", error);
    res
      .status(500)
      .json({ error: "An error occurred while uploading documents" });
  }
};

const getAllDoc = async (req, res) => {
  try {
    const user = await docModel.find();
    if (user) {
      res.status(201).json({
        message: "Document get successfully",
        data: user,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const updateDocById = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await docModel.findByIdAndUpdate(id, req.body);

    if (user) {
      res.status(201).json({
        message: "Document updated successfully",
        data: user,
      });
    } else {
      res.status(404).json({
        message: "Document not found",
        data: [],
      });
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

const deleteDocById = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await docModel.findByIdAndDelete(id, req.body);

    if (user) {
      res.status(201).json({
        message: "Document deleted successfully",
        data: user,
      });
    } else {
      res.status(404).json({
        message: "Document not found",
        data: [],
      });
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
module.exports = {
  addDoc,
  getAllDoc,
  updateDocById,
  deleteDocById,
};
