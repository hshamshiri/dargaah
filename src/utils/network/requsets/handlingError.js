


const handlingResponseError = (status) => {

    if (status === 404) {
        return "صفحه مورد نظر وجود ندارد"
    }
    if (status === 422) {
        return "آدرس مورد نظر یافت نشد"
    }

}


export default handlingResponseError