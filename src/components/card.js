
export default function Card({props}) {
	// console.log(props)
	const {title, description} = props
	// console.log(title)

	return (
		<div>
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	)
}