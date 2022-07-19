package karim.majed.myWebsite.repository;

import karim.majed.myWebsite.model.WorkExperience;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkExperienceRepository extends JpaRepository<WorkExperience, Long> {

}
