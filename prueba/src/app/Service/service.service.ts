import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from '../Modelo/Pelicula';

@Injectable()

export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/prueba/peliculas';

getPeliculas(){
  return this.http.get<Pelicula[]>(this.Url);
}
createPelicula(pelicula:Pelicula){
  return this.http.post<Pelicula>(this.Url,pelicula)
}
getPersonasId(id:number){
  return this.http.get<Pelicula>(this.Url+"/"+id);
}
updatePelicula(pelicula:Pelicula){
 return this.http.put<Pelicula>(this.Url+"/"+pelicula.id,pelicula);
}
}
