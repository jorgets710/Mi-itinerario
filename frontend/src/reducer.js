export const inicialState = {
    cities: [],
    itineraries: [],
    user: null,
    filtercity:[]
}
export const actionType = {
    CITIESDB: "CITIESDB",
    ITINERARYDB: "ITINERARYDB",
    USER: "USER",
    FILTERCITY:"FILTERCITY"
}

const reducer = (state, action) => {

    switch (action.type) {
        case "CITIESDB":
            return {
                ...state,
                cities: action.cities,
                filtercity:action.cities
            }
        case "ITINERARYDB":
            return {
                ...state,
                itineraries: action.itineraries
            }
        case "USER":
            return {
                ...state,
                user: action.user
            }
        case "FILTERCITY":
            const filterCity= state.cities.filter(city=>city.name.toLowerCase().startsWith(action.value.toLowerCase().trim()) )
            return {
                ...state,
                filtercity: filterCity
            }
        default: return state

    }
}

export default reducer;