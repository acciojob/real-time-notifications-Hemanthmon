//your JS code here. If required.
function ascendingOrder(employ){
    employ.sort((a,b) => a.age - b.age)
	 return employ.map(obj => `${obj.id},${obj.name}, ${obj.age}, ${obj.contact} `)
}
console.log(ascendingOrder(employ))