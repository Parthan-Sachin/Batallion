export class DataService {

    getEvents(){
        return DATA;
    }
}
const DATA = [
    {
        id:1,
        name:'wild-bohr',
        price:1200,
        instock: 'yes',
        image:'image'
    },
    {
        id:2,
        name: 'shark',
        price:1500,
        instock: 'yes',
        image: 'image'
    },
    {
        id:3,
        name: 'mini punjab',
        price: 3200,
        instock: 'no',
        image: 'nil'
    },
    {
        id:4,
        name: 'short bottle',
        price: 2000,
        instock: 'yes',
        image: 'nil'
    }
]