app.factory('UserService',function(){
    return {
        users:[
        {
            login:"login1",
            password:"password1",
            name:"Vasya",
            sname:"Vasyliy",
            phone:"+380978901915",
            age:"35",
            
        },
          {
              login:"login2",
            password:"password2",
            name:"Nastia",
            sname:"Ivanova",
            phone:"+38097565545",
              age:"26"
        },
          {
            login:"login3",
            password:"password3",
            name:"Ivan",
            sname:"Gorec",
            phone:"+380660674125",
               age:"16"
        },
        {
            login:"login4",
            password:"password4",
            name:"AAAAAAaaaaaaaaa",
            sname:"BBBBBBBBb",
            phone:"+3803663125",
               age:"12"
        },
            { login:"admin",
            password:"admin",
            name:"admin",
            sname:"admin",
            phone:"+3803663125",
               age:"30"
        }
    ],
    messageP:[{
        themeM:"hello",
        postM:"Hello world",
        posted:"Ivan"
    },
       {
        themeM:"qwerty",
        postM:" world world world  world world world world world",
           posted:"Nastia"
    }      
             ],
    getMess:function(){
       // $http.get('url')success(function(){})
        return this.messageP;
    },
      
    addPost:function(user){
       this.messageP.push(user)
    },
    deleteUser:function(themeM){
     for(var x in this.messageP){
                if(this.messageP[x].themeM===themeM){
                    this.messageP.splice(x,1);
                }
           }
    }
  
        
        
        
    }
    
})


app.filter('startFrom', function() {
 return function(input, start) {
  if(input) {
   start = +start; //parse to int
   return input.slice(start);
  }
  return [];
 }
});