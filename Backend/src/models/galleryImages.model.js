import mongoose, {Schema} from "mongoose"

const galleryImageSchema = new Schema(
    {
        section : {
            type : String,
            enum : ["Campus","Event","Sport","Lab","Classroom"],
            required : true
        },
        imageUrl  : {
            type : String,
            required : true
        },
        public_Id : {
            type : String,
            required : true
        }
    },
    {timestamps : true}
)

export const GalleryImage = mongoose.model("GalleryImage",galleryImageSchema)