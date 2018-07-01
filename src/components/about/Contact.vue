<template>
    <div class=" card text-dark bg-light mb-5">
        <div class="card-header">联系我们</div>
        
        <div class="card-body">
            <h4>Contact13786206936</h4>
            <p>695831619@qq.com</p>

            <router-link :to="{name:'firstLink'}">first</router-link>
            <router-link :to="{name:'secondLink'}">Second</router-link>

            <router-view></router-view>
        </div>
    </div>
</template>