var app=angular.module("myApp",[]);

app.controller('myCtrl', ['UserService',function(UserService){
    var vm=this;
 vm.people;
//    vm.people=[
//        {
//            name:"Vasya",
//            sname:"Vasyliy",
//            phone:"+380978901915",
//            age:"35"
//        },
//          {
//            name:"Nastia",
//            sname:"Ivanova",
//            phone:"+38097565545",
//              age:"26"
//        },
//          {
//            name:"Ivan",
//            sname:"Gorec",
//            phone:"+380660674125",
//               age:"16"
//        },
//        {
//            name:"AAAAAAaaaaaaaaa",
//            sname:"BBBBBBBBb",
//            phone:"+3803663125",
//               age:"12"
//        }
//    ]
  
    
        vm.add=function(){
        vm.people.push(vm.newUser);
            vm.newUser={};
        }
        vm.remove=function(human){
           for(var x in vm.people){
                if(vm.people[x].phone===human.phone){
                    vm.people.splice(x,1);
                }
           }
        }
        vm.getUsers=function(){
            vm.people=UserService.getUsers();
        }
        vm.init=function(){
            
        }
        
        
        
        vm.filterAge=function(user){
            var from;
            var to;
            if(!vm.fromPrice)
                from=0;
            else from=vm.fromPrice
            
             if(!vm.toPrice)
                to=999999999999;
           else
               to=vm.toPrice
        
           if(user.age>=from && user.age<=to)
            return true
            return false
        }
    
    
}])




app.factory('UserService',function(){
    return {
        users:[
        {
            name:"Vasya",
            sname:"Vasyliy",
            phone:"+380978901915",
            age:"35"
        },
          {
            name:"Nastia",
            sname:"Ivanova",
            phone:"+38097565545",
              age:"26"
        },
          {
            name:"Ivan",
            sname:"Gorec",
            phone:"+380660674125",
               age:"16"
        },
        {
            name:"AAAAAAaaaaaaaaa",
            sname:"BBBBBBBBb",
            phone:"+3803663125",
               age:"12"
        }
    ],
    getUsers:function(){
       // $http.get('url')success(function(){})
        return this.users;
    },
    addUser:function(user){
        this.users.push(user)
    },
    deleteUser:function(phone){
     for(var x in vm.people){
                if(this.users[x].phone===phone){
                    this.users.splice(x,1);
                }
           }
    }
        
        
        
    }
    
})


