package karim.majed.myWebsite.controller;

import karim.majed.myWebsite.exception.ResourceNotFoundException;
import karim.majed.myWebsite.model.Education;
import karim.majed.myWebsite.repository.EducationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EducationController {

    @Autowired
    private EducationRepository educationRepository;

    // get all education rest api
    @GetMapping("/education")
    public List<Education> getAllEducation() {
        return educationRepository.findAll();
    }

    // add education rest api
    @PostMapping("/education")
    public Education addEducation(@RequestBody Education education) {
        return educationRepository.save(education);
    }

    // get education by id rest api
    @GetMapping("/education/{id}")
    public ResponseEntity<Education> getEducationById(@PathVariable Long id) {
        Education education = educationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Education with id " + id + " does not exist!"));
        return ResponseEntity.ok(education);
    }

    // update education rest api
    @PutMapping("/education/{id}")
    public ResponseEntity<Education> updateEducation(@PathVariable Long id, @RequestBody Education educationDetails) {
        Education education = educationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Education with id " + id + " does not exist!"));
        education.setUniversityName(educationDetails.getUniversityName());
        education.setStartDate(educationDetails.getStartDate());
        education.setEndDate(educationDetails.getEndDate());
        education.setGpa(educationDetails.getGpa());
        education.setCountry((educationDetails.getCountry()));
        education.setDescription((educationDetails.getDescription()));

        Education updatedEducation = educationRepository.save(education);

        return ResponseEntity.ok(updatedEducation);
    }

    // delete education rest api
    @DeleteMapping("/education/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEducation(@PathVariable Long id) {
        Education education = educationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Education with id " + id + " does not exist!"));
        educationRepository.delete(education);

        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", true);

        return ResponseEntity.ok(response);
    }
}
