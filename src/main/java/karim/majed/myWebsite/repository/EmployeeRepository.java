package karim.majed.myWebsite.repository;

import karim.majed.myWebsite.model.Employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {


}
