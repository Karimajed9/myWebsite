package karim.majed.myWebsite.controller;

import karim.majed.myWebsite.exception.ResourceNotFoundException;
import karim.majed.myWebsite.model.Projects;
import karim.majed.myWebsite.repository.ProjectsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ProjectsController {

    @Autowired
    private ProjectsRepository projectsRepository;

    // get all projects rest api
    @GetMapping("/projects")
    public List<Projects> getAllProjects() {
        return projectsRepository.findAll();
    }

    // add a project rest api
    @PostMapping("/projects")
    public Projects addProject(@RequestBody Projects projects) {
        return projectsRepository.save(projects);
    }

    // get a project by id rest api
    @GetMapping("/projects/{id}")
    public ResponseEntity<Projects> getProjectById(@PathVariable Long id) {
        Projects project = projectsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project with id " + id + " does not exist!"));
        return ResponseEntity.ok(project);
    }

    // update a project rest api
    @PutMapping("/projects/{id}")
    public ResponseEntity<Projects> updateProject(@PathVariable Long id, @RequestBody Projects projectDetails) {
        Projects project = projectsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project with id " + id + " does not exist!"));
        project.setProjectName(projectDetails.getProjectName());
        project.setDate(projectDetails.getDate());
        project.setDescription((projectDetails.getDescription()));
        project.setLink(projectDetails.getLink());

        Projects updatedProject = projectsRepository.save(project);

        return ResponseEntity.ok(updatedProject);
    }

    // delete a project rest api
    @DeleteMapping("/projects/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteProject(@PathVariable Long id) {
        Projects project = projectsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project with id " + id + " does not exist!"));
        projectsRepository.delete(project);

        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", true);

        return ResponseEntity.ok(response);
    }
}
