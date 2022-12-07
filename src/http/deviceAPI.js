import {$authHost, $host} from "./index";

//TYPES
export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}
export const readTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}
export const updateType = async () => {

}
export const deleteType = async () => {

}

//BRANDS
export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}
export const readBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}
export const updateBrand = async () => {

}
export const deleteBrand = async () => {

}

//DEVICES
export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}
export const readDevices = async () => {
    const {data} = await $host.get('api/device')
    return data
}
export const readDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}
export const updateDevice = async () => {

}
export const deleteDevice = async () => {

}

