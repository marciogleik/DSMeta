package com.marciogleik.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.marciogleik.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
