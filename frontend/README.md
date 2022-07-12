前端启动：

首次在电脑上要跑：   
`yarn install`   

之后每次就是   
`yarn start`   


===============================================================
后端全部上云了：

URL：http://mongomagicv1-env-1.eba-p8jpdc25.ap-southeast-2.elasticbeanstalk.com

API接口：

`[GET] /users/profile`   

`[POST] /users/register`   
`[POST] /users/login`   
`[POST] /users/logout`   
`[POST] /users/update_profile`   


前端的我已经设置了全局的url变量，所以直接引用就行。

`import backend_url from "../config/api";`   

用法：     
 `${backend_url}/users/profile`  

================================================================

写react要注意几点：   
  1. 不要用class组件，全部使用react hook 函数组件。 函数组件就是定义一个箭头函数然后return 页面的内容。
  2. 不要用state，用props
  3. 不要用this.setState，用useState
  4. 不要用this.props，用props
  5. 所有函数用箭头函数
  6. 变量用let，不要用var
  7. 常量用const
  8. 不要用if else，用switch case

现在还没确定用什么ui库，可以用ant-design或者material-ui。    

这个应该不看代码风格，但是尽量写好一点吧，按照6080要求，用es6的语法。以后各位找工作展示的话可能会很有帮助。


  
