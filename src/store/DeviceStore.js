import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Lenovo'},
            {id: 2, name: 'Автотовари'},
            {id: 3, name: 'Інструменти'},
            {id: 4, name: 'Зарядні пристрої'},
        ]
        this._brands = [
            {id: 1, name: 'Baseus'},
            {id: 2, name: 'Xiaomi'},
            {id: 3, name: 'Xoco'},
            {id: 4, name: 'XO'},
            {id: 5, name: 'WUW'},
        ]
        this._devices = [
            {id: 1, name: "Холдер Baseus Wireless Charger Gravity Car Mount Black (WXYL-A01)", price: 657, rating: 5, img: "http://localhost:5000/c2429367-6c77-41e3-9566-a4600a5d9a13.jpg"},
            {id: 2, name: "АЗУ Hoco Z44 Leading PD20W+QC3.0 car charger set(Type-C to iP) Black (Z44)", price: 327, rating: 5, img: "http://localhost:5000/ad9bda2a-ee0c-44d9-958f-d8b795b9b341.jpg"},
            {id: 3, name: "Мультитул Xiaomi Nato Multi-Function Wrench Knife Stainless Steel Primary Color Silver", price: 1159, rating: 5, img: "http://localhost:5000/813dbb92-0da4-451e-a86f-09b637db6e13.jpg"},
            {id: 4, name: "Холдер Xiaomi CooWoo T100 Gravity Car Phone Holder Space Silver (T100)", price: 405, rating: 5, img: "http://localhost:5000/f538c5d2-20b4-4a35-b85c-a3842e7147f7.jpg"},
        ]
        this._selectedType = {}
        this._selectedBrand = {}

        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }

    setBrands(brands){
        this._brands = brands
    }

    setDevices(devices){
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}