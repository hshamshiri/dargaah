


const createFormData = (data) => {
    let formData = new FormData()
    data?.file && formData.append("file", data.file)
    data?.link && formData.append("link", data.link)
    data?.label && formData.append("label", data.label)

    return formData
}

export default createFormData