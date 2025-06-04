const serviceReqController = require("../../controller/service/ServiceReqController");

const router = require("express").Router();

router.post("/addServiceReq", serviceReqController.addServiceReq);
router.get("/getAllServiceReq", serviceReqController.getAllServiceReq);
router.get("/getServiceReqID/:id", serviceReqController.getServiceReqID);
router.get("/getServiceAgg/:id", serviceReqController.getServiceAgg);
router.get("/getOrdersBySPID/:spid", serviceReqController.getOrdersBySPID);
router.put(
  "/updateBookingStatus/:servicereq_id/:status",
  serviceReqController.updateBookingStatus
);
router.put(
  "/updateOrderStatus/:servicereq_id/:status",
  serviceReqController.updateOrderStatus
);
module.exports = router;
