package com.shakirov.springboot313.repo;

import com.shakirov.springboot313.model.Role;
import org.springframework.data.repository.CrudRepository;

public interface RoleRepository extends CrudRepository<Role, Long> {
    Role findByRoleName(String role);
}
