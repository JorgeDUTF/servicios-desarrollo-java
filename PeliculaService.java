
package com.exam.prueba;
import java.util.List;

public interface PeliculaService {
    List<Pelicula>listar();
    Pelicula listarId(int id);
    Pelicula add(Pelicula p);
    Pelicula edit(Pelicula p);
    Pelicula delete(Pelicula id);
}
