const employees=[
{
	name:"david carlson",
	age:30
},
{
	name:"john cena",
	age:34
},
{
	name:"mike sheridan",
	age:25
},
{
	name:"john taie",
	age:50
}
];
var b=[];
employees.filter(function(a){
	if(a.age>30)
	{
		b.push(a);
	}
});
console.log(b);



	