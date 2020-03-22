
package com.exam.prueba;
import java.util.List;
import org.springframework.data.repository.Repository;



public interface PeliculaRepositorio extends Repository<Pelicula, Integer>{
    List<Pelicula>findAll();
    Pelicula findOne (int id);
    Pelicula save(Pelicula p);
    void delete (Pelicula p);
}
