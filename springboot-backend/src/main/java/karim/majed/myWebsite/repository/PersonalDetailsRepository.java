package karim.majed.myWebsite.repository;

import karim.majed.myWebsite.model.PersonalDetails;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonalDetailsRepository extends JpaRepository<PersonalDetails, Long> {
}
