package com.vitordutra.todolistapi.controller;

import com.vitordutra.todolistapi.model.Task;
import com.vitordutra.todolistapi.service.TaskService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@AllArgsConstructor
@Slf4j
public class TaskController {

    @Autowired
    TaskService taskService;

    @PostMapping("/tasks")
    @ResponseStatus(HttpStatus.CREATED)
    public Task createTask(@RequestBody Task task) {
        log.info("Creating a new task... Info: [{}]", task);
        return taskService.createTask(task);
    }

    @GetMapping("/tasks")
    @ResponseStatus(HttpStatus.OK)
    public List<Task> findAllTasks() {
        log.info("Listing all tasks...");
        return taskService.listAllTasks();
    }

    @GetMapping("/tasks/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Task> findTaskById(@PathVariable(value = "id") Long id) {
        log.info("Finding task by Id... Id: [{}]", id);
        return taskService.findTaskById(id);
    }

    @PutMapping("/tasks/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Task> updateTaskById(@PathVariable(value = "id") Long id, @RequestBody Task task) {
        log.info("Updating task id [{}] with new info [{}]...", id, task);
        return taskService.updateTaskById(task, id);
    }

    @DeleteMapping("/tasks/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<Object> deleteTaskById(@PathVariable(value = "id") Long id) {
        log.info("Deleting task id [{}]...", id);
        return taskService.deleteTaskById(id);
    }
}
