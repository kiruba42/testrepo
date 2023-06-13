package com.kvk.inventory.exception;

import org.springframework.http.HttpStatus;

@SuppressWarnings("serial")
public class ExceptionClass  extends RuntimeException{
	private String message;
	private HttpStatus httpstatus;
	public ExceptionClass(String message, HttpStatus httpstatus) {
		super();
		this.message = message;
		this.httpstatus = httpstatus;
	}
	@Override
	public String getMessage() {
		return message;
	}
	
	public void setMessage(String message) {
		this.message = message;
	}
	public HttpStatus getHttpstatus() {
		return httpstatus;
	}
	public void setHttpstatus(HttpStatus httpstatus) {
		this.httpstatus = httpstatus;
	}
	@Override
	public String toString() {
		return "message=" + message + ", httpstatus=" + httpstatus;
	}
	
}
