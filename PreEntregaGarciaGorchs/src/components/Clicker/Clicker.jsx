import { useState } from "react"

export const Clicker = () => {

	const [counter, setCounter] = useState(0)


	const sumar = () => {
		setCounter(counter + 1)
	}

       return (
	  <div>
		<a onClick={sumar}><img className="foto_like" src='/like.png'/></a>
		<p className="contador">{counter}</p>
	  </div>
	)
 }

 export default Clicker