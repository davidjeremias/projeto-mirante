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
    public ResponseEntity<?> listar(){
    	List<Cliente> clientes = clienteService.listar();
        return !clientes.isEmpty() ? ResponseEntity.ok(clientes) : ResponseEntity.noContent().build();
    }

    @PostMapping
    public ResponseEntity<Cliente> salvar(@RequestBody Cliente clinte){
        Cliente clienteSalvo = clienteService.salvar(clinte);
        return ResponseEntity.status(HttpStatus.CREATED).body(clienteSalvo);
    }
    
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void remover(@PathVariable Long id){
        clienteService.remover(id);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Cliente> atualizar(@PathVariable Long id, @RequestBody Cliente cliente){
        Cliente clienteSalvo = clienteService.atualizar(id, cliente);
        return ResponseEntity.ok(clienteSalvo);
    }
}
