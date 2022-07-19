package karim.majed.myWebsite.repository;

import karim.majed.myWebsite.model.Tools;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ToolsRepository extends JpaRepository<Tools, Long>{

}
