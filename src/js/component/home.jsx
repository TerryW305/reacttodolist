import React, {useState} from "react";

export const ToDoList = ()=>{
	const [myArray, setMyArray] = useState(["sleep","exercise","eat","work"])
	function addToDoList(newTask){
    const myArray2 = [newTask]
	const myNewArray = myArray.concat(myArray2)
	setMyArray(myNewArray);
	}
	

return(
	<div> <input></input><span role = "span" onClick={()=> addToDoList("school")}>Add New Task</span>
		
		<ul>
			{myArray.map((item, index)=>(<li key={index}>{item}</li>))}
			
		</ul>
	</div>
)
}