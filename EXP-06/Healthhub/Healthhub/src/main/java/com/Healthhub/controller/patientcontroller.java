package com.Healthhub.controller;
import com.Healthhub.dto.patientdto;
import com.Healthhub.entity.patient;
import com.Healthhub.service.patientservice;
import java.util.*;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;
@RestController
@RequestMapping("/patient")
public class patientcontroller {
    private patientservice service;
    public patientcontroller(patientservice service){
    this.service = service;
}
@PostMapping
public patient createPatient(@RequestBody patientdto dto){
    return service.createPatient(dto);
}
@GetMapping
public List<patient> getAllPatients(){
    return service.getAllPatients();
}
@GetMapping("/{id}")
public patient getPatientById(@PathVariable Long id){
    return service.getPatientById(id);
}
@PutMapping("/{id}")
public patient updatePatient(@PathVariable Long id,@RequestBody patientdto dto){
    return service.updatePatient(id,dto);
}
 @DeleteMapping("/{id}")
    public void deletePatient(@PathVariable Long id){
        service.deletepatient(id);
    }
}
