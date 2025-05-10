const mongoose = require('mongoose')

const refundSchema = new mongoose.Schema({

    payment_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Payment_Table'
    },
	service_id	: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Service_Table'
    },
	service_amount : {
        type : Number,
		min : 0,
        max : 99999.99,
        required : true
    },
	cancellation_fees : {
        type : Number,
		min : 0,
        max : 99999.99,
		required : true
    },
	refund_reason : {
        type : String,
		maxlength : 255,
        required : true
    },
	refund_amount : {
        type : Number,
		min : 0,
        max : 99999.99,
		required : true
    },
	refund_status : {
        type : Number,
		maxlength : 1,
		required : true,
        validate: {
            validator: value => [0, 1, 2].includes(value), // Assuming 0 : Pending, 1: Approved, 2: Rejected
            message: 'Invalid Value'
        }
    },
	request_date : {
        type : String,
        default : Date.now,
		required : true
    },
	approval_date : {
        type : String,
        default : Date.now,
    },
	rejection_date : {
		type : String,
        default : Date.now,
	}
    
    
})

module.exports = mongoose.model('Refund_Table',refundSchema)