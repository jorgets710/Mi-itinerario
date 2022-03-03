export const inicialState = {
    cities:[],
    itineraries:[]
}
export const actionType= {
    CITIESDB:"CITIESDB",
    ITINERARYDB:"ITINERARYDB"
}

const reducer=(state,action)=>{
    
    switch (action.type) {
        case "CITIESDB":
            return{
                ...state,
                cities:action.cities
            }
        case "ITINERARYDB":
            return{
                ...state,
                itineraries:action.itineraries
            }
        default: return state
    }
} 

export default reducer;