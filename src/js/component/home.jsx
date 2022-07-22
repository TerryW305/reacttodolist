import React, {useState} from "react";

export const ToDoList = ()=>{
	const [myArray, setMyArray] = useState([])
	const [item, setItem] = useState("");
	function addItem(data){
		if (data!="")
		setMyArray([...myArray, data])
		setItem("")
	
	}
	return(
	
	<div> 
		<h1 className="text-center fst-italic"  >Todos</h1>
		<div className="d-flex justify-content-center">
		<input 
        value={item}
        onChange={e => setItem(e.target.value)}
    />
	<button className="btn btn-success" onClick={()=>addItem(item)}>Add Item</button>
	</div>
		<ul className="list-group p-5">
			{myArray.map((item, index)=>(<li className="list-group-item" key={index}>{item}</li>))}
			
			{myArray.map((item, data) => (
					<li key={item} className="spacing">
						{item.data}{" "}
						<button onClick ={() => removeItem(myArray)}>x</button>
					</li>
				))}
		</ul>
	</div>
)
}