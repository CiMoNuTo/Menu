console.log("¡Bienvenidx al menú de operaciones! Puedes elegir la operación que prefieres.");

console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicación");
console.log("4. División");
console.log("5. Raíz cuadrada");
console.log("6. Fórmula general");
console.log("7. Binomio cuadrado perfecto");

var opcion= prompt("Por favor escribe el número al cual le corresponde la operación.");

switch (opcion) {
	case '1':
		console.log("Suma");
		var num1= prompt("Escribe el primer valor:");
		var num2= prompt("Escribe el segundo valor:");
		function suma(x, y) {
			var x= num1;
			var y= num2;
			s= parseFloat(x)+parseFloat(y);
			console.log("La suma es: "+s);
		}
		suma();
	break

	case '2':
		console.log("Resta");
		var num1= prompt("Escribe el primer valor:");
		var num2= prompt("Escribe el segundo valor:");
		function resta(x, y) {
			var x= num1;
			var y= num2;
			r= parseFloat(x)-parseFloat(y);
			console.log("La resta es: "+r);
		}
		resta();
		
	break

	case '3':
		console.log("Multiplicación");
		var num1= prompt("Escribe el primer valor:");
		var num2= prompt("Escribe el segundo valor:");
		function multi(x, y) {
			var x= num1;
			var y= num2;
			m= parseFloat(x)*parseFloat(y);
			console.log("La multiplicación es: "+m);
		}
		multi();
	break

	case '4':
		console.log("División");
		var num1= prompt("Escribe el primer valor:");
		var num2= prompt("Escribe el segundo valor:");
		function cero(num2){
			var div;
			if (num2==0) {
				console.log (`Error. Ingresa otro numero`);
			} 
			if (num2>0) { 
			div= parseFloat(num1)/parseFloat(num2);
			console.log ("La división es: "+div);
			}
			}
			cero(num2);
	break

	case '5':
		console.log("Raíz cuadrada");
		var num= prompt("Escribe el primer valor:");
		function raiz(x) {
			var x= num;
			rc= Math.sqrt(num);
		console.log ("La raíz cuadrada es: "+rc);
		}
		raiz();
	break

	case '6':
		console.log("Fórmula general");
		var a= prompt("Escribe el valor de a:");
		var b= prompt("Escribe el valor de b:");
		var c= prompt("Escribe el valor de c:");
		function form(x, y, z) {
			var x= a;
			var y= b;
			var z= c;
			fg= (-b + Math.sqrt((b*b)-4*a*c))/(2*a);
			fg2= (-b - Math.sqrt((b*b)-4*a*c))/(2*a);
			console.log ("Primer resultado: "+fg);
			console.log ("Segundo resultado: "+fg2);
		}
		form();
	break

	case '7':
		console.log("Binomio cuadrado perfecto");
		var a= prompt("Escribe el valor de a:");
		var b= prompt("Escribe el valor de b:");
		function binomio(x, y) {
			var x= a;
			var y= b;
			bcp= (a*a)+(2*a*b)+(b*b);
			console.log ("Tu resultado es: "+bcp);
		}
		binomio();
	break

}