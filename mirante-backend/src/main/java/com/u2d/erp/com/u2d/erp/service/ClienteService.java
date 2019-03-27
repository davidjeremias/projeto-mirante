package com.u2d.erp.com.u2d.erp.service;

import com.u2d.erp.com.u2d.erp.model.Cliente;
import com.u2d.erp.com.u2d.erp.repository.ClienteRepository;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public List<Cliente> listar(){
        return clienteRepository.findAll();
    }

    public Cliente salvar(Cliente cliente){
        Cliente clienteSalvo = clienteRepository.save(cliente);
        return clienteSalvo;
    }
    
    public void remover(Long id) {
    	clienteRepository.deleteById(id);
    }
    
    public Cliente atualizar(Long id, Cliente cliente) {
    	Cliente clienteSalvo = buscaPorId(id);
    	BeanUtils.copyProperties(cliente, clienteSalvo, "id");
    	return clienteRepository.save(clienteSalvo);
    }
    
    public Cliente buscaPorId(Long id) {
    	Cliente clienteSalvo = clienteRepository.buscaPorId(id);
    	if(clienteSalvo == null) {
    		throw new EmptyResultDataAccessException(1);
    	}
    	return clienteSalvo;
    }
}
