

import { axiosPostClient } from "../apiClient"


export async function postRequest(url, data) {
    const result = {
        data: null,
        error: { status: null, msg: null }
    }
    const form_data = createFormData(data)

    try {
        await axiosPostClient.post(url, form_data)
            .then(response => {
                if (response.data) {
                    result.data = response.data
                }
            })
            .catch(function (error) {
                if (error.response && error.response.status) {
                    result.error.status = error.response.status
                    result.error.msg = handlingResponseError(error.response.status)
                }
            })
    } catch (error) {
        result.error.msg = error
    }

    return result
}



const handlingResponseError = (status) => {
    if (status == "404") {
        return "paaaaage nooooot found"
    }

}

const createFormData = (data) => {

    let formData = new FormData()
    formData.append("link", data.imageLink)
    formData.append("file", data.file)


    return formData
}