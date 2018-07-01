<template>
    <div>
        <div class="row mb-5">
        <div class="col-4">
            <div class="list-group mb-5">
                <router-link tag="li" class="nav-link" :to="{name:'HistoryLink'}">
                    <a class="list-group-item list-group-item-action">{{baskets}}</a>
                </router-link>
                 <router-link tag="li" class="nav-link" :to="{name:'DeliveryLink'}">
                    <a class="list-group-item list-group-item-action">联系我们</a>
                </router-link>
                 <router-link tag="li" class="nav-link" :to="{name:'ContactLink'}">
                    <a class="list-group-item list-group-item-action">点餐文档</a>
                </router-link>
                 <router-link tag="li" class="nav-link" :to="{name:'OrderingGuideLink'}">
                    <a class="list-group-item list-group-item-action">快递信息</a>
                </router-link>
            </div>
        </div>
        <div class="col-8">
            <router-view></router-view>
        </div>
        
        </div>
    </div>
</template>
<script>
export default {
    data(){
         return {
               baskets:''
               }
    },
 //   created() {
  //    this.$axios.post('http://127.0.0.1:8888/text').then((res)=> {
  //     this.baskets=(res.data)
   // }).catch(error=>{
    //   console.log('跨域error',error)
    // })
   // }
}
</script>
