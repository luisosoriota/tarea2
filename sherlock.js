//Input Example

_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------

INPUT = _INPUT.split("\n");	//CORRECCION DEL INPUT

T = INPUT.length - 1;		//NUMERO DE CASOS

for( i = 0 ; i < T ; i++){		//ARREGLOS PARA CADA CASO
	contador = 0;	

	Arreglocasos = INPUT[i+1];	//SE TOMAN LOS DIFERENTES CASOS

	AYB = Arreglocasos.split(" ");	//SEPARACION DE A Y B

	A = parseInt(AYB[0]);
	B = parseInt(AYB[1]);

	if( 1 <= A && A <= B && B <= 1000000000){		//RESTRICIONES DE A Y B
		for( j = A ; j <= B ; j++) {	//RECORRIDO DE LOS NUMEROS ENTRE A Y B

			k = Math.sqrt(j);		//RAIZ DE TODOS LOS NUMEROS ENTRE A Y B

			k = k%1;

			if(k == 0){			//COMPROBACION DE SI EL NUMERO  ES UN CUADRADO PERFECTO
				contador = contador +1;
			}
		}

		console.log(contador);			//OUTPUT CON EL NUMERO DE CUADRADOS PERFECTOS
	}

}


