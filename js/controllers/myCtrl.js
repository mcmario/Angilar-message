
app.controller('myCtrl',['UserService',function(UserService){
    var vm=this;
    vm.mess;
    vm.hello="Hello guest";
    vm.init=function(){
      vm.users=UserService.users;
      
     //   console.log(localStorage.getItem('cUser'))
        if(localStorage.getItem('cUser')=='') vm.hello="Hello guest";
       else vm.hello="Hello "+localStorage.getItem('cName');
        
        
    }
   vm.init();
    
       vm.signin=function(){
      
           for(var i=0;i<vm.users.length;i++){
               // console.log(vm.users[i]);
               if(vm.users[i].login==vm.log&&vm.users[i].password==vm.pass){
                   check="true";
                   vm.hello="Hello "+vm.users[i].name;
                    $("#myModal").modal("hide");
                   localStorage.setItem('cUser',vm.users[i].login);
                   localStorage.setItem('cName',vm.users[i].name);
               }
                   
//               else vm.check="false";
                
           }
           
        }
   vm.exitUser=function(){
       localStorage.clear();
       vm.hello="Hello guest";
   }
    vm.add=function(){
        if(localStorage.getItem('cUser')!=null){
              vm.newSms.posted=localStorage.getItem('cName');
        UserService.addPost(vm.newSms);
            vm.newSms={};
             vm.getMess(); 
            }
        
        
        }
        vm.remove=function(sms){
            if(sms.posted==localStorage.getItem('cName')||
               localStorage.getItem('cUser')=="admin"){
                
          UserService.deleteUser(sms.themeM);
            vm.getMess();
            }
        }
        vm.getMess=function(){
            vm.mess=UserService.getMess();

        }
        vm.init=function(){
            vm.getMess();
        }
        
     
    
}])