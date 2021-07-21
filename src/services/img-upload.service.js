import axios from 'axios';

export const uploadImg = async (file) =>{
    const UPLOAD_PRESET = 'camay_21'
    const CLOUD_NAME = 'camay21-1'
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
    const FORM_DATA = new FormData();
    FORM_DATA.append('file', file)
    FORM_DATA.append('upload_preset',UPLOAD_PRESET)
    try {
        console.log('here',FORM_DATA);
        const res = await axios.post(UPLOAD_URL, FORM_DATA)
        console.log(res.data, 'data');
        return res.data;
    } catch(err) {
        console.error('ERROR!', err)
    }
}