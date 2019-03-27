package com.u2d.erp.com.u2d.erp.repository;

import com.u2d.erp.com.u2d.erp.model.Cliente;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
	
	@Query("SELECT c FROM Cliente c WHERE c.id = :id")
	Cliente buscaPorId(@Param("id") Long id);
}
