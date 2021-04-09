package com.shakirov.springboot313.service;

import com.shakirov.springboot313.model.User;
import com.shakirov.springboot313.repo.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service("userServiceImpl")
public class UserServiceImpl implements UserService {
    BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    private final UserRepository userRepository;

    public UserServiceImpl (UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void createUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    @Override
    public void updateUser(User user) { userRepository.save(user); }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException { return userRepository.findByEmail(email); }

    @Override
    public Iterable<User> getAllUsers() { return userRepository.findAll(); }

    @Override
    public void deleteUser(User user) { userRepository.delete(user); }

    @Override
    public Optional<User> getUserById(Long id) { return userRepository.findById(id); }

    @Override
    public void deleteUserById(Long id) { userRepository.deleteById(id); }
}