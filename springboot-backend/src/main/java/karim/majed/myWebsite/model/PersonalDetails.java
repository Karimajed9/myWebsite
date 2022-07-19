package karim.majed.myWebsite.model;

import javax.persistence.*;

import java.util.Date;

@Entity
@Table(name = "personalDetails")
public class PersonalDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "emailId")
    private String emailId;

    @Column(name = "address")
    private String address;

    @Column(name = "phone_number")
    private Long phoneNumber;

    @Column(name = "date_of_birth")
    private Date dateOfBirth;

    @Column(name = "description")
    private String description;

    @Column(name = "image")
    private String image;

    public PersonalDetails() {

    }

    public PersonalDetails(String firstName, String lastName, String emailId, String address, Long phoneNumber, Date dateOfBirth, String description, String image) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.dateOfBirth = dateOfBirth;
        this.description = description;
        this.image = image;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() { return firstName; }

    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getLastName() { return lastName; }

    public void setLastName(String lastName) { this.lastName = lastName; }

    public String getEmailId() { return emailId; }

    public void setEmailId(String emailId) { this.emailId = emailId; }

    public String getAddress() { return address; }

    public void setAddress(String address) { this.address = address; }

    public Long getPhoneNumber() { return phoneNumber; }

    public void setPhoneNumber(Long phoneNumber) { this.phoneNumber = phoneNumber; }

    public Date getDateOfBirth() { return dateOfBirth; }

    public void setDateOfBirth(Date dateOfBirth) { this.dateOfBirth = dateOfBirth; }

    public String getDescription() { return description; }

    public void setDescription(String description) { this.description = description; }

    public String getImage() { return image; }

    public void setImage(String image) { this.image = image; }
}
