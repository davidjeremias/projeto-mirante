package com.u2d.erp.com.u2d.erp.resources;

import com.u2d.erp.com.u2d.erp.model.Cliente;
import com.u2d.erp.com.u2d.erp.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clientes")
public class ClienteResource {

    @Autowired
    private ClienteService clienteService;

    @GetMapping
    public List<Cliente> listar(){
        return clienteService.listar();
    }

    @PostMapping
    public ResponseEntity<Cliente> salvar(@RequestBody Cliente clinte){
        Cliente clienteSalvo = clienteService.salvar(clinte);
        return ResponseEntity.status(HttpStatus.CREATED).body(clienteSalvo);
    }
}
