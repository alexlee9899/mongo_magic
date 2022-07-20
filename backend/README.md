后端全部上云了：

URL：http://mongomagicv1-env-1.eba-p8jpdc25.ap-southeast-2.elasticbeanstalk.com

API接口：

`[GET] /users/profile`   

`[POST] /users/register`   
`[POST] /users/login`   
`[POST] /users/logout`   
`[POST] /users/update_profile`    

`[POST] /question/addin`    


```{
   "title":"initial detail",
    "content":"Which public transport available?",
    "question_type": "1",
    "mutiable": "true",
    "option":["Bus", "Train", "Light Rail", "Ferry", "Metro"],
    "score_method":{}
}```    


`[GET] /question/list`   拿到所有问题的list  


前端的我已经设置了全局的url变量，所以直接引用就行。

`import backend_url from "../config/api";`   

用法：     
 `${backend_url}/users/profile`   