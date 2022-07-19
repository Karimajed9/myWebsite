package karim.majed.myWebsite.controller;

import karim.majed.myWebsite.exception.ResourceNotFoundException;
import karim.majed.myWebsite.model.WorkExperience;
import karim.majed.myWebsite.repository.WorkExperienceRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class WorkExperienceController {

    @Autowired
    private WorkExperienceRepository workExperienceRepository;

    // get all work experience rest api
    @GetMapping("/workExperience")
    public List<WorkExperience> getAllWorkExperience() {
        return workExperienceRepository.findAll();
    }

    // add a work experience rest api
    @PostMapping("/workExperience")
    public WorkExperience addWorkExperience(@RequestBody WorkExperience workExperience) {
        return workExperienceRepository.save(workExperience);
    }

    // get work experience by id rest api
    @GetMapping("/workExperience/{id}")
    public ResponseEntity<WorkExperience> getWorkExperienceById(@PathVariable Long id) {
        WorkExperience workExperience = workExperienceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Work experience with id " + id + " does not exist!"));
        return ResponseEntity.ok(workExperience);
    }

    // update a work experience rest api
    @PutMapping("/workExperience/{id}")
    public ResponseEntity<WorkExperience> updateWorkExperience(@PathVariable Long id, @RequestBody WorkExperience workExperienceDetails) {
        WorkExperience workExperience = workExperienceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Work experience with id " + id + " does not exist!"));
        workExperience.setCompanyName(workExperienceDetails.getCompanyName());
        workExperience.setStartDate(workExperienceDetails.getStartDate());
        workExperience.setEndDate(workExperienceDetails.getEndDate());
        workExperience.setDescription((workExperienceDetails.getDescription()));

        WorkExperience updatedWorkExperience = workExperienceRepository.save(workExperience);

        return ResponseEntity.ok(updatedWorkExperience);
    }

    // delete a work experience rest api
    @DeleteMapping("/workExperience/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteWorkExperience(@PathVariable Long id) {
        WorkExperience workExperience = workExperienceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Work experience with id " + id + " does not exist!"));
        workExperienceRepository.delete(workExperience);

        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", true);

        return ResponseEntity.ok(response);
    }
}
