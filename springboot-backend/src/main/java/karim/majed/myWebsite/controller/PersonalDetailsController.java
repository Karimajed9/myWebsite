package karim.majed.myWebsite.controller;

import karim.majed.myWebsite.exception.ResourceNotFoundException;
import karim.majed.myWebsite.model.PersonalDetails;
import karim.majed.myWebsite.repository.PersonalDetailsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class PersonalDetailsController {

    @Autowired
    private PersonalDetailsRepository personalDetailsRepository;

    // get personal details rest api
    @GetMapping("/personalDetails")
    public PersonalDetails getPersonalDetails() {
        PersonalDetails personalDetails = personalDetailsRepository.findById(Long.valueOf("1"))
                .orElseThrow(() -> new ResourceNotFoundException("Personal details not found!"));
        return personalDetails;
    }

    // update personal details rest api
    @PutMapping("/personalDetails")
    public ResponseEntity<PersonalDetails> updatePersonalDetails(@RequestBody PersonalDetails personalDetailsDetails) {
        PersonalDetails personalDetails = personalDetailsRepository.findById(Long.valueOf("1"))
                .orElseThrow(() -> new ResourceNotFoundException("Personal details not found!"));
        personalDetails.setFirstName(personalDetailsDetails.getFirstName());
        personalDetails.setLastName(personalDetailsDetails.getLastName());
        personalDetails.setEmailId(personalDetailsDetails.getEmailId());
        personalDetails.setAddress(personalDetailsDetails.getAddress());
        personalDetails.setPhoneNumber(personalDetailsDetails.getPhoneNumber());
        personalDetails.setDateOfBirth(personalDetailsDetails.getDateOfBirth());
        personalDetails.setDescription((personalDetailsDetails.getDescription()));
        personalDetails.setImage(personalDetailsDetails.getImage());

        PersonalDetails updatedPersonalDetails = personalDetailsRepository.save(personalDetails);

        return ResponseEntity.ok(updatedPersonalDetails);
    }
}
