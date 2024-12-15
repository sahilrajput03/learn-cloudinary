import 'dotenv/config';
import { v2 as cloudinary } from 'cloudinary';
// const cloudinary = require(‘cloudinary’).v2

// Note to Sahil: Get these values from KeePass

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

const uploadToCloudinary = async () => {
    const image = "./img1.jpg";
    try {
        const result = await cloudinary.uploader.upload(image, {
            // Learn: `public_id` is filename in cloudinary which is generated automatically if not passed (e.g, `xdbqxmmslpm0jus8qaay`)
            // public_id: 'sample',

            // Learn: This adds file name as prefix for image uploded to cloudinary (e.g., `filename_jwerwh` and `jwerwh` is randomly generated)
            // use_filename: true,

            // timeout: 6000000,
            folder: 'products',
            resource_type: 'image',
        });
        console.log('Upload result:', result);


    } catch (error) {
        console.log('Upload error:', error);
    }
};
uploadToCloudinary();

// TODO: Add delete file in future as well (Hint: delete using `public_id` probabaly)
// CHECK piyush's repo code to see the destroy function to delete files