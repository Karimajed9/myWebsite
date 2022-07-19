package karim.majed.myWebsite.model;

import javax.persistence.*;

@Entity
@Table(name = "tools")
public class Tools {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "toolName")
    private String toolName;

    @Column(name = "proficiency")
    private int proficiency;

    @Column(name = "examples")
    private String examples;

    public Tools() {

    }

    public Tools(String toolName, int proficiency, String examples) {
        super();
        this.toolName = toolName;
        this.proficiency = proficiency;
        this.examples = examples;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getToolName() {
        return toolName;
    }

    public void setToolName(String toolName) {
        this.toolName = toolName;
    }

    public int getProficiency() {
        return proficiency;
    }

    public void setProficiency(int proficiency) {
        this.proficiency = proficiency;
    }

    public String getExamples() { return examples; }

    public void setExamples(String examples) { this.examples = examples; }
}
