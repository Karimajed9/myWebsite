package karim.majed.myWebsite.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "projects")
public class Projects {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "project_name")
    private String projectName;

    @Column(name = "date")
    private Date date;

    @Column(name = "description")
    private String description;

    @Column(name = "link")
    private String link;

    public Projects() {

    }

    public Projects(String projectName, Date date, String description, String link) {
        super();
        this.projectName = projectName;
        this.date = date;
        this.description = description;
        this.link = link;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDescription() { return description; }

    public void setDescription(String description) { this.description = description; }

    public String getLink() { return link; }

    public void setLink(String link) { this.link = link; }
}
