


const handlingResponseError = (status) => {
    if (status === "404") {
        return "page not found"
    }
    if (status === "422") {
        return "Unprocessable Entity"
    }

}


export default handlingResponseError