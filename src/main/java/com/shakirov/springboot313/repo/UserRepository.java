package com.shakirov.springboot313.repo;

import com.shakirov.springboot313.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
    User findByEmail(String email);
    void deleteById(Long id);
    User findByName(String name);

}
