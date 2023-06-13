package com.kvk.inventory.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


@ControllerAdvice
public class ExceptionHandlerClass {

	
	@ExceptionHandler(ExceptionClass.class)
	public ResponseEntity<TaskErrorResponse> handleTaskException(ExceptionClass ex)
	{
			TaskErrorResponse errorResponse = new TaskErrorResponse(ex.getMessage(),ex.getHttpstatus().value());
			return ResponseEntity.status(ex.getHttpstatus()).body(errorResponse);
	}					

	}
class TaskErrorResponse
	{
		private String errorMessage;
		private Integer errorCode;
		public TaskErrorResponse(String errorMessage, Integer errorCode) {
			super();
			this.errorMessage = errorMessage;
			this.errorCode = errorCode;
		}
		public String getErrorMessage() {
			return errorMessage;
		}
		public void setErrorMessage(String errorMessage) {
			this.errorMessage = errorMessage;
		}
		public Integer getErrorCode() {
			return errorCode;
		}
		public void setErrorCode(Integer errorCode) {
			this.errorCode = errorCode;
		}

}
