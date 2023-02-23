import React, { useEffect, useState } from 'react'

export default function useFileUpload() {

    const [file, setFile] = useState(null)
    const [image, setImage] = useState(null)
    const [preview, setPreview] = useState(null);

    useEffect(() => {

        let fileReader = false;
        
        console.log('Uplaoded file', file)

        if (file) {

            const fileSize = file.size / 1024 / 1024

            if (fileSize > 10) {
                alert('You can upload maximum one megabyte file')
                setFile(null)
                return
            }

            setPreview(URL.createObjectURL(file))

            // alert(URL.createObjectURL(file))

            const reader = new FileReader()

            reader.readAsDataURL(file)

            reader.onloadend = () => {
                // console.log('Loaded Image: ', reader.result)
                setImage(reader.result)

            }
        }

        return () => {
            // isCancel = true;
            if (fileReader && fileReader.readyState === 1) {
                fileReader.abort();
            }
        }


    }, [file]);

    return { file, setFile, preview, image }
}