/**
 * 
 */
// Crea un objeto con los datos del usuario

  class Cliente {

    constructor(nombre, telefono, alta, salida) {

   this.nombre = nombre;

   this.telefono = telefono;

   this.alta = alta;

   this.salida = salida;

   }

}

 

   function guardarRegistro(form, id){

     // Obténgo los valores del formulario

     var nombre=form.nombre.value;

     var telefono=form.telefono.value;

     var alta=form.alta.value;

     var salida=form.salida.value;
     
     if(salida==""){
		 salida="-"
	 }
     

    var cliente = new Cliente(nombre, telefono, alta, salida);
 
   //Guardamos el Objeto para usarlo despues 
   localStorage.setItem(id, JSON.stringify(cliente));
//Para abrir la otra pagina
   window.open("index.html");
 }
 

    function mostrarRegistros(){

      //Creamos otra variable de cliente, para poder utilizar la informacion almacenada a traves del objeto
      var clienteO;
      
      id=localStorage.getItem("id");
      cId=parseInt(id); //lo pasamos a int

//Pruebas 

     //Cambiamos la cadena JSON a un objeto

     //var clients=JSON.parse(localStorage.getItem(telefono));

    /*document.write("<br>Nombre: " + clients.nombre);

    document.write("<br>Apellidos: " + clients.telefono);

    document.write("<br>Edad: " + clients.alta);

    document.write("<br>DNI: " + clients.salida);
    */
    
    
	document.write('<head> <meta charset="ISO-8859-1"> <title>Indice</title>'
	+'<link rel="stylesheet" href="css.css" type="text/css"	media="screen">'
	+'<link	href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"'
	+'	rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"' 
	+'crossorigin="anonymous"></head>');

	document.write('<div class="container-fluid"> <div class="row text-center"> <div class="col-12">');	
	document.write("<h1>Listado de los pacientes</h1>");	
	
	document.write('</div>	</div>	<div class="row text-center"> <div class="col-12">');
	
	//muestra todos los clientes
	for(let i=1;i<=cId;i++)
	{		
		clienteO=JSON.parse(localStorage.getItem(i));
		
		if(localStorage.getItem(i)!=null){
			
			document.write(" Paciente id = "+i);
			document.write("<br> Nombre: "+clienteO.nombre);
			document.write("<br> Telefono: "+clienteO.telefono);
			document.write("<br> Fecha de alta: "+clienteO.alta);
			document.write("<br> Fecha de salida: "+clienteO.salida+"<br><br>");	
		}
	}	
	document.write('</div> </div> </div> <div class="row"><div class="col-8"></div>	<div class="col-4">');
	document.write("<a href='Registro.html'><button>Nuevo ingreso</button></a>");	
	document.write('</div> </div>');

  }
  
  function BuscarCliente(form){
	  
	  let telefonoP = form.telefonoP.value;
		let id = localStorage.getItem("id");
		let cId = parseInt(id);//lo pasamos a int
		let pacienteNoEncontrado=true;

		
		document.write('<head> <meta charset="ISO-8859-1"> <title>Indice</title>'
		+'<link rel="stylesheet" href="css.css" type="text/css"	media="screen">'
		+'<link	href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"'
		+'	rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"' 
		+'crossorigin="anonymous"></head>');		
		
		//encuentra al paciente y muestra el formulario para cambiar la información
		for(let i=1;i<=cId;i++)
		{					
			clienteO=JSON.parse(localStorage.getItem(i));
			
			if(clienteO.telefono==telefonoP){
				
				
				document.write('<div class="container-fluid"> <div class="row text-center"> <div class="col-12">');
				document.write("<h1>Datos Animal</h1>");				
				
				document.write('</div>	</div>	<div class="row text-center"> <div class="col-12">');
				
				document.write(" Cliente id = "+i);
				document.write("<br> Nombre: "+clienteO.nombre);
				document.write("<br> Telefono: "+clienteO.telefono);
				document.write("<br> Fecha de alta: "+clienteO.alta);
				document.write("<br> Fecha de salida: "+clienteO.salida+"<br><br><br><br>");				

				document.write("<h1>Cambiar datos del paciente</h1>")
		
				document.write('<form><label>Nombre de el animal:</label><input type="text" size="50" name="nombre" id="id"  /> <br><br>'
				+'<label>Telefono del dueno:</label> <input	type="text" size="50" name="telefono"  />	<br><br>'
				+'<label>fecha de alta:</label> <input	type="date" size="50" name="alta"  />'
				+'<br><br> <label>fecha de salida:</label>	<input	type="date" size="50" name="salida"  /> <br><br>');
				
				
				document.write('<div class="row"> <div class="col-7"></div>	<div class="col-5 datos">	');
				document.write('<input type="submit" value="Guardar" name="datos" onClick="guardarRegistro(this.form,'+i+')" /> </form>');				
				document.write('</div> </div>');
				document.write('</div> </div> <div class="row"><div class="col-2"></div> <div class="col-10 cambiar">');
				document.write("<a href='alta.html'><button>Cambiar Paciente</button></a>");			

				document.write('</div> </div> </div>');

				pacienteNoEncontrado=false;
				break;
			}
		}
		
		if(pacienteNoEncontrado)
			alert("Paciente no encontrado")	

  }
  
  function CalculoId(){
	
	var id;
	
	if(localStorage.getItem("id")==null)	
		id = localStorage.setItem("id",0);
		
	id = localStorage.getItem("id");//accede al espacio en memoria local
	numero = parseInt(id);// pasamos a int
	numero = numero + 1;// incrementamos en 1
	localStorage.setItem("id", numero);// lo guardamos en su espacio en memoria local correspondiente	

	return id;		
}