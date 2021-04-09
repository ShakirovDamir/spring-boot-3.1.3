package com.shakirov.springboot313.controller;

import com.shakirov.springboot313.dto.RoleDto;
import com.shakirov.springboot313.dto.UserDto;
import com.shakirov.springboot313.model.Role;
import com.shakirov.springboot313.model.User;
import com.shakirov.springboot313.service.RoleService;
import com.shakirov.springboot313.service.UserService;
import lombok.SneakyThrows;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@RestController
public class RestAdminController {
    private final UserService userService;
    private final RoleService roleService;

    public RestAdminController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @GetMapping("/getAuthorizedUser")
    public ResponseEntity<User> getAuthorizedUser() {
        User authorizedUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return ResponseEntity.ok()
                .body(authorizedUser);
    }

    @GetMapping("/getAllUsers")
    public ResponseEntity<Iterable<User>> getAllUsers() {
        return ResponseEntity.ok()
                .body(userService.getAllUsers());
    }

    @GetMapping("/getAllRoles")
    public ResponseEntity<Iterable<Role>> getAllRoles() {
        return ResponseEntity.ok()
                .body(roleService.getAllRoles());
    }

    @GetMapping("/getUserById/{id}")
    public ResponseEntity<Optional<User>> getUserById(@PathVariable Long id) {
        return ResponseEntity.ok()
                .body(userService.getUserById(id));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Long id) {
        userService.deleteUserById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @SneakyThrows
    @PostMapping("/create")
    public ResponseEntity<User>createUser(@RequestBody UserDto userDto){
        User user = new User(userDto);
        Set<Role> roles = new HashSet<>();
        for(String role : userDto.getRoles()){
            roles.add(roleService.getByName(role));
        }
        user.setRoles(roles);
        userService.createUser(user);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @SneakyThrows
    @PutMapping("/update")
    public ResponseEntity<User> updateUser(@RequestBody UserDto userDto) {
        User user = new User(userDto);
        Set<Role> roles = new HashSet<>();
        for (String role : userDto.getRoles()) {
            roles.add(roleService.getByName(role));
        }
        user.setRoles(roles);
        userService.updateUser(user);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
