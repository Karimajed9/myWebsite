package karim.majed.myWebsite.model;

import javax.persistence.*;

import java.util.Date;

@Entity
@Table(name = "workExperience")
public class WorkExperience {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "company_name")
    private String companyName;

    @Column(name = "start_date")
    private Date startDate;

    @Column(name = "end_date")
    private Date endDate;

    @Column(name = "description")
    private String description;

    public WorkExperience() {

    }

    public WorkExperience(String companyName, Date startDate, Date endDate) {
        super();
        this.companyName = companyName;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
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
}
