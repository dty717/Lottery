package stock.web; 

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;

import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.beans.factory.annotation.Autowired;

import stock.domain.Greeting;
import stock.domain.HelloMessage;

@Controller
public class SocketController {
    
    @Autowired
    private SimpMessagingTemplate template;
    
    @RequestMapping("/hi")
    @ResponseBody
    public Greeting greeting(@RequestParam("content")String content) throws Exception {
        this.template.convertAndSend("/topic/greetings", new Greeting(HtmlUtils.htmlEscape(content)));
        return new Greeting("OK!");
    }
    
    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    public Greeting greeting(HelloMessage message) throws Exception {
        System.out.println(message);
        return new Greeting(HtmlUtils.htmlEscape(message.getName()));
    }
    
}
