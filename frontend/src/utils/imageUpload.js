export const checkImage = (file) => {
    let err = ""
    if(!file) return err = "File does not exist."

    if(file.size > 1024 * 1024 * 5)
    err = "The largest image size is 5mb"

    if(file.type !== 'image/jpeg' && file.type !== 'image/jpg')
    err = "Image format is incorrect"

    return err;
}

export const imageUpload = async (images) => {
    let imgArr = [];
    for(const item of images){
        const formData = new FormData()
        
        console.log(item);
        formData.append("file", item)

        formData.append("upload_preset", "e0mcn3f8")
        formData.append("cloud_name", "pandeyrahul00")

        const res = await fetch("https://api.cloudinary.com/v1_1/pandeyrahul00/image/upload", {
            method: "POST",
            body: formData
        })

        const data = await res.json()
        imgArr.push({public_id: data.public_id, url: data.secure_url})
    }

    return imgArr;
}