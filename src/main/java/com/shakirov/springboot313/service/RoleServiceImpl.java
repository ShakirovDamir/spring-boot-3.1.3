package com.shakirov.springboot313.service;

import com.shakirov.springboot313.model.Role;
import com.shakirov.springboot313.repo.RoleRepository;
import javassist.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;

import java.util.Set;
@Service
public class RoleServiceImpl implements RoleService {
    private final RoleRepository roleRepository;

    public RoleServiceImpl (RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }
    @Override
    public void createRoles(Set<Role> roles) {
        roleRepository.saveAll(roles);
    }

    @Override
    public Set<String> getAllRoles() {
        Iterable<Role>  iterable = roleRepository.findAll();
        Set<String> set = new HashSet<>();
        iterable.forEach(role -> set.add(role.getAuthority()));
        return set;
    }

    @Override
    public Role getByName(String name) throws NotFoundException {
        Role role = roleRepository.findByRoleName(name);
        if (role == null) {
            throw new NotFoundException(name);
        }
        return role;
    }

}
