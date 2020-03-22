
package com.exam.prueba;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
       
@Service
public class PeliculaServiceImp implements PeliculaService{
    @Autowired
    private PeliculaRepositorio repositorio;
    
    @Override
    public List<Pelicula> listar() {
        return repositorio.findAll();
    }

    @Override
    public Pelicula listarId(int id) {
        return repositorio.findOne(id);
    }

    @Override
    public Pelicula add(Pelicula p) {
        return repositorio.save(p);
    }

    @Override
    public Pelicula edit(Pelicula p) {
        return repositorio.save(p);
    }

    @Override
    public Pelicula delete(Pelicula id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
