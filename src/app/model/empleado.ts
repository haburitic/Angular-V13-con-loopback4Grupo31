export class Empleado {

  offset:number= 0;
  limit:number= 100;
  skip:number=  0;
  order:string='';
  fields: {
    nombre: true;
    apellido: true;
    numeroDocumento: true;
    id: string;
  } | undefined
}
