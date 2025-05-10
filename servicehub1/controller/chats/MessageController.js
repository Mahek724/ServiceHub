const messageModel = require("../../model/chat/Message_tbl");

const addMessage = async (req, res) => {
  const user = req.body;
  try {
    const savedOffer = await messageModel.create({
      Chat_id: user.chat_id,
      Sender_id: user.Sender_id,
      receiver_id: user.receiver_id,
      content: user.chats[0].text,
    });

    if (savedOffer) {
      res.status(201).json({
        message: "message created successfully...",
        data: savedOffer,
      });
    } else {
      res.status(500).json({
        message: "Error creating message",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Error creating message",
      error: err.message,
    });
  }
};

const getAllMessage = async (req, res) => {
  try {
    const user = await messageModel.find();
    if (user) {
      res.status(201).json({
        message: "Message get successfully",
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
  addMessage,
  getAllMessage,
};
