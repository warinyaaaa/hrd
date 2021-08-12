package com.example.springboot;

import com.example.springboot.domain.Student;
import com.example.springboot.repo.StudentRepo;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class StudentController {
    private StudentRepo repo;

    public StudentController(StudentRepo repo) {
        this.repo = repo;
    }

    @GetMapping("/student/{id}")
    public Optional<Student> find(@PathVariable Integer id){
        return repo.findById(id);
    }
    @PostMapping("/student")
    public Student save(@RequestBody Student s){
        return repo.save(s);
    }
    @GetMapping("/student")
    public List<Student> findAll(){
        return repo.findAll();
    }
}
