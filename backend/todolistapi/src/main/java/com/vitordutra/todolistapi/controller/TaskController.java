package com.vitordutra.todolistapi.controller;

import com.vitordutra.todolistapi.model.Task;
import com.vitordutra.todolistapi.service.TaskService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
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
    @ApiOperation(value="Create a new task")
    @ApiResponses(value={
            @ApiResponse(code = 201, message = "Task successfully created"),
            @ApiResponse(code = 500, message = "Task creation error, please check the data sent")
    })
    public Task createTask(@RequestBody Task task) {
        log.info("Creating a new task... Info: [{}]", task);
        return taskService.createTask(task);
    }

    @GetMapping("/tasks")
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value="List all tasks")
    @ApiResponses(value={
            @ApiResponse(code = 201, message = "Tasks successfully retrieved"),
            @ApiResponse(code = 500, message = "Tasks retrieval error")
    })
    public List<Task> findAllTasks() {
        log.info("Listing all tasks...");
        return taskService.listAllTasks();
    }

    @GetMapping("/tasks/{id}")
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value="Retrieve task by id")
    @ApiResponses(value={
            @ApiResponse(code = 200, message = "Task successfully retrieved"),
            @ApiResponse(code = 404, message = "Task retrieval error, task not found")
    })
    public ResponseEntity<Task> findTaskById(@PathVariable(value = "id") Long id) {
        log.info("Finding task by Id... Id: [{}]", id);
        return taskService.findTaskById(id);
    }

    @PutMapping("/tasks/{id}")
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value="Update task by id")
    @ApiResponses(value={
            @ApiResponse(code = 204, message = "Task successfully deleted"),
            @ApiResponse(code = 404, message = "Task delete error, task not found")
    })
    public ResponseEntity<Task> updateTaskById(@PathVariable(value = "id") Long id, @RequestBody Task task) {
        log.info("Updating task id [{}] with new info [{}]...", id, task);
        return taskService.updateTaskById(task, id);
    }

    @DeleteMapping("/tasks/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @ApiOperation(value="Retrieve task by id")
    @ApiResponses(value={
            @ApiResponse(code = 201, message = "Task successfully retrieved"),
            @ApiResponse(code = 404, message = "Task retrieval error")
    })
    public ResponseEntity<Object> deleteTaskById(@PathVariable(value = "id") Long id) {
        log.info("Deleting task id [{}]...", id);
        return taskService.deleteTaskById(id);
    }
}
