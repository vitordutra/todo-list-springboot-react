package com.vitordutra.todolistapi.service;

import com.vitordutra.todolistapi.model.Task;
import com.vitordutra.todolistapi.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    public List<Task> listAllTasks() {
        return taskRepository.findAll();
    }
}
