<template>
<div>
 <h1>Home</h1>
 <button @click="goToMenu" class="btn btn-success">返回上一页</button>
 </div>
</template>
<script>
    export default{
            methods:{
                goToMenu(){
                    //this.$router.go(-1)

                   //  this.$router.replace('/menu')

                  // this.$router.replace({name:'menuLink'})

                   // this.$router.push('/menu')

                    this.$router.push({name:'aboutLink'})
                }

            }
           // ,
            // beforeRouteLeave(to,from,next){
             //       if(confirm("确定离开吗？")==true){
             //           next()
             //       }else{
              //          next(false)
              //      }
              //  }    //路由提供退出重复确认

    }


</script>
