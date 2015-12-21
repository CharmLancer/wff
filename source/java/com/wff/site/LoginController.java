package com.wff.site;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.wff.exception.DatabaseFieldValueException;
import com.wff.model.User;
import com.wff.site.services.UserService;

@Controller
@RequestMapping("/user")
public class LoginController {
	@Autowired
	UserService userService;

	@ResponseBody
	@RequestMapping("/hello")
	public String helloWorld() {
		return "Hello, World!";
	}

	@ResponseBody
	@RequestMapping(value = "/login", params = { "name", "password" })
	public String login(@RequestParam("name") String userName, @RequestParam("password") String userPassword)
			throws DatabaseFieldValueException {
		return Boolean.toString(userService.checkUser(userName, userPassword));
	}

	@ResponseBody
	@RequestMapping(value = "/register", params = { "name", "password" })
	public String register(@RequestParam("name") String name, @RequestParam("password") String password)
			throws DatabaseFieldValueException {
		User user = new User();
		user.userName.setFieldValue(name);
		user.userPassword.setFieldValue(password);
		userService.insert(user);
		return "success";
	}
}
