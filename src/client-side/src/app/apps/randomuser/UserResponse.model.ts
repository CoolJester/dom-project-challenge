export type UserResponse = {
    results: Array<Results>
}

type Results = {
    gender: string,
    name: Name,
    location: Loc,
    email: string,
    login: Login,
    dob: TimeAndAge,
    registraed: TimeAndAge,
    phone: string,
    cell: string,
    id: ID,
    picture: Picture,
    nat: string
}

type Name = {
    title: string,
    first: string,
    last: string
}

type Loc = {
    street: {
        number: number,
        name: string
    },
    city: string,
    state: string,
    country: string,
    postcode: number,
    coordinates: {
        latitude: string,
        longitude: string
    },
    timezone:{
        offset: string,
        description: string
    }
}

type Login = {
    uuid: string,
    username: string,
    password: string,
    salt: string,
    md5: string,
    sha1: string,
    sha156: string
}

type TimeAndAge = {
    data: string,
    age: number
}

type ID = {
    name: string,
    value: string
}

type Picture = {
    large: string,
    medium: string,
    thumbnail: string
}