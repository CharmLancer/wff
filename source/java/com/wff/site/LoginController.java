package com.wff.site;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.wff.site.services.LoginService;

@Controller
@RequestMapping("/user")
public class LoginController
{
    @Autowired
    LoginService logInService;

    @ResponseBody
    @RequestMapping("/hello")
    public String helloWorld()
    {
        return "Hello, World!";
    }

    @ResponseBody
    @RequestMapping(value = "/login", params = {"name","password"})
    public String helloName(@RequestParam("name") String name, @RequestParam("password") String password)
    {	
    	return Boolean.toString(logInService.checkLogin(name, password));        
    }
}
