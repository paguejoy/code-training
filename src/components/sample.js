
//let vs var
	
	if(true){
		var a = 2
	}
	console.log(a)	// 2 bec it is function scope

	if(true){
		let b = 3
	}
	console.log(b)	// undefined bec it is local scope, & much safer bec it cannot be re-declared

// array and object destructuring

//array destructuring - assigning variable names (regardless of naming) according to it's index position

const arr = ["a", "e", "i", "o", "u"];
const [o, , , , ] = arr		//a
const [, u, , , ] = arr 	//e
const [o,u, ...rest] = arr  //i, o, u

//object destructuring
const person = {
	name: "Timothy Holland",
	nickname: "Tom",
	address: {
		city: "California"
	}
}

//it refers to property name, if property does not exist - it will return undefined
const { address: { city} } = person
const { address } = person
const { city } = address




//HOC - High Order Components
	// a function which takes components as its parameter and return a new component that bears data being passed to that new component


function Parent(component){
	const [prod, setProd] = useState([])

	useEffect(() => {
		fetch()
		.then(res => res.json())
		.then(res => setProd(res))
	})

	const prodlist = prod.map(item => item)

	function newComponent(){
		return <component value={prodlist}/>
	}

	return <newComponent/>
}


import Parent from '../../'

const function Products({prodlist}){

	return()
}

export default Parent(Products)




