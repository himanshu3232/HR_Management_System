package com.hrms.HR_MS.dto;

import java.time.LocalDateTime;

public record EmployeeDto(
        Long id,
        String name,
        String contact,
        String role,
        String salary,
        String performance
) {
}
