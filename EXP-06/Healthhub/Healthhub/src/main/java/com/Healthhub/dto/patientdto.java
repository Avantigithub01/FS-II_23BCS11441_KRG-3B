package com.Healthhub.dto;
import lombok.*;
import jakarta.validation.constraints.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class patientdto {
    @NotBlank
    String name;
    @NotBlank
    @Email
    String email;
    @Min(1)
    int age;
    @NotBlank
    String phoneno;
    @NotBlank
    String disease;
}
