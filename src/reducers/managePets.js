export let state;


export function managePets(state = {pets:[]}, action){
	switch (action.type){
		case 'ADD_PET':
			return Object.assign({}, state, {pets: [...state.pets, action.pet]});
		case 'REMOVE_PET':
			const filterArr = state.pets.filter((pet )=> pet.id !== action.id)
			return Object.assign({}, state, {pets: filterArr} );
		default:
			return state;
	}

}

export function dispatch(action){
	state = managePets(state, action)
	render()
}

export function render(){
	let container = document.getElementById("container")

	let petDisplay = state.pets.map(pet=> `<li>${pet.name}</li>`).join(' ')
	container.innerHTML = `<ul>${petDisplay}</ul>`

}


// const indexToFind = state.books.findIndex((book) => book.id === action.payload.id)
// const newArray[...state.books.slice(0, indexToFind),
// 			   ...state.books.slice(indexToFind + 1)]
// return Object.assign({}, state, {books: newArray})