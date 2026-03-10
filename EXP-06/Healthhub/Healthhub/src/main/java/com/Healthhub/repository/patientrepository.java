package com.Healthhub.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.Healthhub.entity.patient;
public interface patientrepository extends JpaRepository<patient,Long>{
}