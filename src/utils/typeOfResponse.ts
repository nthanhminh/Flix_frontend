export type Movie = {
    id: number,
    name: string,
    image: string
    mainActors: string,
    content: string,
    director: string,
    tag: string,
    duration: string,
    country: string
}

export type Food = {
    id: number,
    name: string,
    price: string,
    image: string,
}

export type Combo = {
    id: number,
    name: string,
    price: string,
    image: string,
}

export type MovieScheduleDate = {
    [key : string]: MovieSchedule[]
}

export type MovieSchedule = {
    id: number,
    filmId: number,
    time: string,
    hour: number,
    minute: number,
    location: number
}

export type Order = {
    [key : number] : OrderDetail[]
}

export type OrderDetail = {
    orderDetailId: number,
    value: string
}

export type OrderFoodRequest = {
    customerId: number,
    totalPrice: string
    foodIdList: foodListType,
    comboIdList: foodListType
}

export type OrderTicketRequest = {
    customerId: number,
    totalPrice: string
    foodIdList: foodListType,
    comboIdList: foodListType,
    movieScheduleId: number,
    values: string[]
}

export type foodListType = {
    [key:number] : number
}

export type Ticket = {
    name: string,
    type: string,
    price: string,
    filmId: string
}

export type OrderResponse = {
    [key : number] : {
        movieTitle: string | null,
        movieImage: string | null,
        food: string[],
        seats: string[]
    }
}
