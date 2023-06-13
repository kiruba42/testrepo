package com.kvk.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kvk.main.entity.IllegalWords;
import com.kvk.main.service.IllegalService;

@RestController
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class IllegalWordsController {

	@Autowired
	private IllegalService illegalService;
	
	@PostMapping(value="illegal",consumes = MediaType.APPLICATION_JSON_VALUE , produces = MediaType.APPLICATION_JSON_VALUE)
	public IllegalWords createillegal(@RequestBody IllegalWords illegalWords) {
		return illegalService.createIllegalWords(illegalWords);
	}
	@GetMapping(value="illegal", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<IllegalWords> getallillegalwords(){
		return illegalService.getallIllegalword();
	}
	@PutMapping(value="illegal",consumes = MediaType.APPLICATION_JSON_VALUE , produces = MediaType.APPLICATION_JSON_VALUE)
	public IllegalWords updateIllegalWords(@RequestBody IllegalWords illegalWords) {
		return illegalService.updateIllegalWords(illegalWords);
	}
}
