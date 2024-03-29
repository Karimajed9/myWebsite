package karim.majed.myWebsite.repository;

import karim.majed.myWebsite.model.Admin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository

public interface AdminRepository extends JpaRepository<Admin, Long> {
    Optional<Admin> findByUsername(String username);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
}