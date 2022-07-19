package karim.majed.myWebsite.controller;

import karim.majed.myWebsite.exception.ResourceNotFoundException;
import karim.majed.myWebsite.model.Tools;
import karim.majed.myWebsite.repository.ToolsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ToolsController {

    @Autowired
    private ToolsRepository toolsRepository;

    // get all tools rest api
    @GetMapping("/tools")
    public List<Tools> getAllTools() {
        return toolsRepository.findAll();
    }

    // add a tool rest api
    @PostMapping("/tools")
    public Tools addTool(@RequestBody Tools tool) {
        return toolsRepository.save(tool);
    }

    // get a tool by id rest api
    @GetMapping("/tools/{id}")
    public ResponseEntity<Tools> getToolById(@PathVariable Long id) {
        Tools tool = toolsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tool with id " + id + " does not exist!"));
        return ResponseEntity.ok(tool);
    }

    // update a tool rest api
    @PutMapping("/tools/{id}")
    public ResponseEntity<Tools> updateTool(@PathVariable Long id, @RequestBody Tools toolDetails) {
        Tools tool = toolsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tool with id " + id + " does not exist!"));
        tool.setToolName(toolDetails.getToolName());
        tool.setProficiency(toolDetails.getProficiency());
        tool.setExamples(toolDetails.getExamples());

        Tools updatedTool = toolsRepository.save(tool);

        return ResponseEntity.ok(updatedTool);
    }

    // delete a tool rest api
    @DeleteMapping("/tools/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteTool(@PathVariable Long id) {
        Tools tool = toolsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tool with id " + id + " does not exist!"));
        toolsRepository.delete(tool);

        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", true);

        return ResponseEntity.ok(response);
    }
}
