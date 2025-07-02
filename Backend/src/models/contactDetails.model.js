import mongoose, { Schema } from "mongoose";

const contactDetailSchema = new Schema(
    {
        phone : {
            type : String,
            required : true,
        },
        email : {
            type : String,
            required : true
        },
        address: {
            type: String,
        },
        facebook : String,
        instagram : String,
        youtube : String
    },
    {
        timestamps : true
    }
)
 
export const ContactDetail = mongoose.model("ContactDetail",contactDetailSchema)