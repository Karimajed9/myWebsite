package karim.majed.myWebsite.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "education")
public class Education {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "university_name")
    private String universityName;

    @Column(name = "start_date")
    private Date startDate;

    @Column(name = "end_date")
    private Date endDate;

    @Column(name = "description")
    private String description;

    @Column(name = "country")
    private String country;

    @Column(name = "gpa")
    private Float gpa;

    public Education() {

    }

    public Education(String universityName, Date startDate, Date endDate, Float gpa, String country, String description) {
        super();
        this.universityName = universityName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.gpa = gpa;
        this.country = country;
        this.description = description;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUniversityName() {
        return universityName;
    }

    public void setUniversityName(String universityName) {
        this.universityName = universityName;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getDescription() { return description; }

    public void setDescription(String description) { this.description = description; }

    public Float getGpa() { return gpa; }

    public void setGpa(Float gpa) { this.gpa = gpa; }

    public String getCountry() { return country; }

    public void setCountry(String country) { this.country = country; }
}
