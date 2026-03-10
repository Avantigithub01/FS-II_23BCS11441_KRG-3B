package com.Healthhub.service;
import com.Healthhub.entity.patient;
import com.Healthhub.dto.patientdto;
import com.Healthhub.repository.patientrepository;
import org.springframework.stereotype.Service;
import java.util.*;
@Service
public class patientservice {
    private patientrepository repo;
    public patientservice(patientrepository repo){
        this.repo=repo;
    }
    public patient createPatient(patientdto dto){
        patient p=new patient();
        p.setName(dto.getName());
        p.setEmail(dto.getEmail());
        p.setAge(dto.getAge());
        p.setPhoneno(dto.getPhoneno());
        p.setDisease(dto.getDisease());
        return repo.save(p);
    }
    public List<patient> getAllPatients(){
       return repo.findAll();
    }
    public patient getPatientById(Long id){
    return repo.findById(id).orElseThrow();
}
public patient updatePatient(long id,patientdto dto){
patient p = repo.findById(id).orElseThrow();
p.setName(dto.getName());
 p.setEmail(dto.getEmail());
        p.setAge(dto.getAge());
        p.setPhoneno(dto.getPhoneno());
        p.setDisease(dto.getDisease());
        return repo.save(p);
}
public void deletepatient(long id){
    patient p=repo.findById(id).orElseThrow();
     repo.delete(p);
}
}
