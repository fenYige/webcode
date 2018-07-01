<template>
    <header>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">

            <span href="/" class="navbar-brand">Pizza点餐系统</span>
            <ul class="navbar-nav">
                <li><router-link tag="div"  :to="{name:'homeLink'}" class="nav-link">主页</router-link></li>
                <li><router-link :to="{name:'menuLink'}" class="nav-link">菜单</router-link></li>
                <li><router-link :to="{name:'adminLink'}" class="nav-link">管理</router-link></li>
                <li><router-link :to="{name:'aboutLink'}" class="nav-link">关于我们</router-link></li>
            </ul>

             <ul class="navbar-nav ml-auto">
                <li><router-link    :to="{name:'loginLink'}" class="nav-link">注册</router-link></li>
                <li><router-link    :to="{name:'registerLink'}"  class="nav-link">登陆</router-link></li>
            </ul>
       </nav>
    </header>
</template>
<script>


</script>
