package com.u2d.erp.com.u2d.erp.service;

import com.u2d.erp.com.u2d.erp.model.Cliente;
import com.u2d.erp.com.u2d.erp.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
}
