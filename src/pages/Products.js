import {useState, useEffect} from 'react';
import Card from './../components/card'

export default function Products (){
	const [products, setProducts] = useState([]);

	//side effect render
	useEffect(()=>{
		fetch('https://dummyjson.com/products')
		.then(res => res.json())
		.then(res => {
			// productLists = res.map(item => item.products.title)
			// console.log(res.products)
			setProducts(res.products)
		})
		
	}, [])
	// if no dependency array, it will run everytime there are changes within the component
	// if with empty dependency array, it will only load once when the component is mounted, regardless of any changes within the component
	// if with data within the dependency array, you allow the useEffect hook to watch and observe any changes on that data which will trigger the function to run

		const productsList = products.map(item => {
			// console.log(item)
			return <Card key={item.id} props={{title: item.title, description: item.description}}/>
		})

	return (
		<div>{productsList}</div>
	)
}