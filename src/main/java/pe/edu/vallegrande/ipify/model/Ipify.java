package pe.edu.vallegrande.ipify.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Data
@Table("ipify")
public class Ipify {

    @Id
    private Long id;
    private String ip;
    private String city;
    private String region;
    private String country;
    private String loc;
    private String org;
    private String postal;
    private String timezone;
}