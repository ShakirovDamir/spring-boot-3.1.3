package com.shakirov.springboot313.service;

import com.shakirov.springboot313.model.Role;
import javassist.NotFoundException;

import java.util.Set;

public interface RoleService {
    void createRoles(Set<Role> roles);
    Set<Role> getAllRoles();

    Role getByName(String name) throws NotFoundException;
}
