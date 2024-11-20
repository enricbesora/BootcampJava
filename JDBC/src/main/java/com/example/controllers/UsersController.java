package com.example.controllers;

import com.example.controllers.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/users")
public class UsersController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

   @GetMapping
    public List<User> getAllUsers() {
        String sql = "select * from users";

        List<Map<String, Object>> users = jdbcTemplate.queryForList(sql);

        List<User> userList = new ArrayList<User>();

        for (Map<String, Object> user : users) {
            User userObj = new User();
            userObj.setId(Integer.parseInt(user.get("id").toString()));
            userObj.setName(user.get("nombre").toString());
            userObj.setSurname((String) user.get("apellidos"));

            userList.add(userObj);
        }
        return userList;
    }

    @GetMapping(value = "/{id}" )
    public ResponseEntity<?> getUserById(@PathVariable int id) {
        String sql = "SELECT * FROM users WHERE id = ?";
        List<Map<String, Object>> users = jdbcTemplate.queryForList(sql, new Object[]{id});

        if (users.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("No existe un usuario con el ID: " + id);
        }

        Map<String, Object> userMap = users.get(0);
        User userObj = new User();
        userObj.setId((int) userMap.get("id"));
        userObj.setName((String) userMap.get("nombre"));
        userObj.setSurname((String) userMap.get("apellidos"));

        return ResponseEntity.ok(userObj);
    }

    @PutMapping
    public ResponseEntity<?> addUser(@RequestBody User newUser) {
        try {
            String sql = "INSERT INTO users (nombre, apellidos) VALUES (?, ?)";
            int rowsAffected = jdbcTemplate.update(sql, newUser.getName(), newUser.getSurname());

            if (rowsAffected > 0) {
                return ResponseEntity.status(HttpStatus.CREATED)
                        .body("Usuario creado con éxito.");
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("No se pudo crear el usuario.");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Error al crear el usuario: " + e.getMessage());
        }
    }

    @PatchMapping(value = "/{id}")
    public ResponseEntity<?> updateUser(@PathVariable int id, @RequestBody User newUser) {
        try{
            String sql = "UPDATE users SET nombre = ?, apellidos = ? WHERE id = ?";
            int rowsAffected = jdbcTemplate.update(sql, newUser.getName(), newUser.getSurname(), id);
            if (rowsAffected > 0) {
                return ResponseEntity.status(HttpStatus.OK)
                        .body("Usuario actualizado con éxito.");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("No se pudo aztualizar el usuario.");
            }
        }catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Error al actualizar el usuario: " + e.getMessage());
        }
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable int id) {
        try {
            String sql = "DELETE FROM users WHERE id = ?";
            int rowsAffected = jdbcTemplate.update(sql, id);
            if (rowsAffected > 0) {
                return ResponseEntity.status(HttpStatus.OK)
                        .body("Usuario borrado con éxito.");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("No se pudo borrar el usuario.");
            }
        }catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Error al borrar el usuario: " + e.getMessage());
        }
            }

}
