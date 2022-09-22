
export default function Banner({value}){
	const { title, description } = value
	// console.log(value)

	return (
		<div className="jumbotron jumbotron-fluid">
		  <div className="container">
		    <h1 className="display-4">{title}</h1>
		    <p className="lead">{description}</p>
		  </div>
		</div>
	)
}