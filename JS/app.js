var vm = new Vue ({
    el: "#body" ,
    data:{
        Pwd1: '' ,
        Pwd2: '' ,
        isP1: true ,
        text: "获取验证码" ,
        time: 60
    },

    methods: {
        RegisterBool:function(){
            if(this.Pwd1!= this.Pwd2) alert("密码不一致");
            else if(this.Pwd1 == '') alert("密码不能为空");
            else alert("ok！");
            return;
        },
        phoneChange:function(){
            if(this.isP1 == false) return;
            else{
                this.isP1 = false;
                this.startCountdown();
            }
        },
        startCountdown() {
            let timer = setInterval(() => {
              this.time--;
              if (this.time <= 0) {
                clearInterval(timer);
                this.time = 60;
                this.isP1 = true;
                this.text = '获取验证码';
              } else {
                this.text = `重新发送(${this.time}s)`;
              }
            }, 1000);
          }
    }
});