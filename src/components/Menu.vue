<template>
<div class="row">
    <div class="col-sm-12 col-md-8">
        <table class="table">
            <thead class="thead-default">
            <tr>
                <th>尺寸</th>
                <th>价格</th>
                <th>加入</th>
            </tr>
            </thead>
            <tbody  v-for="item in getMenuItems" :key="item.name">
                <tr><td colspan="3">{{item.name}}</td></tr>
                <tr v-for="option in item.options" :key="option.size">
                    <td>{{option.size}}</td>
                    <td>{{option.price}}</td>
                    <td><button @click="addToBasket(item,option)" class="btn btn-sm btn-outline-success">+</button></td>
                </tr>
                
            </tbody>
        
        </table>
    </div>
     <div class="col-sm-12 col-md-4">
     <div v-if="baskets.length>0">
        <table class="table">
            <thead class="thead-default">
            <tr>
                <th>数据</th>
                <th>品种</th>
                <th>价格</th>
            </tr>
            </thead>
            <tbody v-for="item in baskets" :key="item.name1">
                <tr>
                    <td>
                    <button @click="decreaseQuantity(item)" class="btn btn-sm">-</button>
                    <span>{{item.quantity}}</span>
                    <button @click="addcount(item)" class="btn btn-sm">+</button>
                    </td>
                    <td>
                    {{item.name}}{{item.size}}
                    </td>
                    <td>
                    {{item.price * item.quantity}}
                    </td>
                </tr>
            </tbody>  
        </table>
        <p>总价：{{total}}RMB</p>
        <button class="btn btn-success btn-block">提交</button>
    </div>
    <div v-else>
        {{basketText}}
    </div>
    </div>
 </div>
</template>
<script>
    export default{
        data(){
           return {
               baskets:[],
               basketText:"购物车当前没有任何数据",
               getMenuItems:{
                   1:{
                       name:'榴莲pizza',
                       'description':'这是喜欢吃榴莲朋友得最佳选择',
                       'options':[{
                           'size':9,
                           'price':38
                       },{
                           'size':12,
                           'price':48
                       }]
                   },
                   2:{
                       'name':'芝士pizza',
                       'description':'这是喜欢吃榴莲朋友得最佳选择',
                       'options':[{
                           'size':19,
                           'price':138
                       },{
                           'size':112,
                           'price':148
                       }]
                   },
                   3:{
                       'name':'柠檬pizza',
                       'description':'这是喜欢吃榴莲朋友得最佳选择',
                       'options':[{
                           'size':29,
                           'price':238
                       },{
                           'size':212,
                           'price':248
                       }]
                   }
               }
           }
        },
        computed:{
            total(){//计算总价
                let totalCost = 0
                for(let index in this.baskets){
                    let individualItem=this.baskets[index]
                    totalCost += individualItem.quantity * individualItem.price
                }
                return totalCost
            }
        },
        methods:{
            addToBasket(item,option){
                let basket={
                    name:item.name,
                    size:option.size,
                    price:option.price,
                    quantity:1
                }
                alert(this.baskets.length)
                if(this.baskets.length>0){
                    //过滤
                  let result=  this.baskets.filter(basket=>{
                        return (basket.name===item.name && basket.price===option.price)
                    })
                    if(result != null  && result.length>0){
                            result[0].quantity++
                    }else{
                        this.baskets.push(basket)
                    }
                }else{
                     this.baskets.push(basket)
                }
                
            },
            decreaseQuantity(item){
                 item.quantity--
               if(item.quantity<=0){
                    this.removeFromBasket(item)
               }
               
            },
            addcount(item){
                item.quantity++
            },
            removeFromBasket(item){
                this.baskets.splice(this.baskets.indexOf(item),1)
            }
        }

    }


</script>
<style>
div{
    margin:0;
    
}
body{margin:0;}
</style>
