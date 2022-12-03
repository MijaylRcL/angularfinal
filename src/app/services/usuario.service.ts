import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: "jrudolfo", nombre: 'Juancho', apellido: 'Rudolfo', sexo: 'Masculino'},
    {usuario: "mconcha", nombre: 'Manolo', apellido: 'Concha', sexo: 'Masculino'},
    {usuario: "rgomez", nombre: 'Rufina', apellido: 'Gomez', sexo: 'Femenino'},
    {usuario: "abrinco", nombre: 'Aquiles', apellido: 'Brinco', sexo: 'Masculino'},
    {usuario: "aparedez", nombre: 'Armando', apellido: 'Paredez', sexo: 'Masculino'},
    {usuario: "abrinco", nombre: 'Aquiles', apellido: 'Brinco', sexo: 'Masculino'},
    {usuario: "svaca", nombre: 'Soila', apellido: 'Vaca', sexo: 'Femenino'},
    {usuario: "lmento", nombre: 'Lola', apellido: 'Mento', sexo: 'Femenino'},
    {usuario: "ajaleo", nombre: 'Armando', apellido: 'Jaleo', sexo: 'Masculino'},
    {usuario: "atortilla", nombre: 'Aitor', apellido: 'Tilla', sexo: 'Masculino'},
    {usuario: "enito", nombre: 'Elena', apellido: 'Nito', sexo: 'Femenino'},
    {usuario: "mneta", nombre: 'Mario', apellido: 'Neta', sexo: 'Masculino'},
    {usuario: "pgarte", nombre: 'Paca', apellido: 'Garte', sexo: 'Femenino'},
    {usuario: "amenta", nombre: 'Aitor', apellido: 'Menta', sexo: 'Masculino'},
    {usuario: "atrozado", nombre: 'Andrés', apellido: 'Trozado', sexo: 'Masculino'},
    {usuario: "pgil", nombre: 'Pere', apellido: 'Gil', sexo: 'Masculino'},
    {usuario: "mqueroso", nombre: 'Matías', apellido: 'Queroso', sexo: 'Masculino'},
    {usuario: "ddelano", nombre: 'Dolores', apellido: 'Delano', sexo: 'Femenino'},
    {usuario: "ecapunta", nombre: 'Elsa', apellido: 'Capunta', sexo: 'Femenino'},
    {usuario: "idito", nombre: 'Igor', apellido: 'Dito', sexo: 'Masculino'},
    {usuario: "epato", nombre: 'Elsa', apellido: 'Pato', sexo: 'Femenino'},
    {usuario: "soria", nombre: 'Susana', apellido: 'Oria', sexo: 'Femenino'},
    {usuario: "gnigote", nombre: 'Guillermo', apellido: 'Nigote', sexo: 'Masculino'},
    {usuario: "edido", nombre: 'Esteban', apellido: 'Dido', sexo: 'Masculino'},
    {usuario: "evales", nombre: 'Encarna', apellido: 'Vales', sexo: 'Femenino'}
  ];

  constructor() { }

  getUsuario() {
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }
}
