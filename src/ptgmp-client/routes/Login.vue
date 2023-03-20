<template lang="html">
<div class="login-container">
    <transition name="fade">
        <div v-show="message" class="alert alert-danger" v-html="message"></div>
    </transition>

    <div class="form-group">
        <label>Username</label>
        <input type="text" class="login-control"
            :disabled="message"
            v-model="username"
            autofocus
            placeholder="write your name here">
    </div>

    <div class="form-group" style="margin-bottom: 30px;">
        <label>Password</label>
        <input type="password"
            @keyup.prevent.enter="onLogin"
            :disabled="message"
            v-model="password"
            class="login-control"
            placeholder="write your password here">
    </div>

    <div class="form-group">
        <button @click="onLogin" :disabled="message" class="button-submit">
            Login
        </button>
    </div>

    <div v-if="isDemo" class="form-group">
        <p>demo account
            <br>username: <strong>{{demoName}}</strong>
            <br>password: <strong>{{demoPassword}}</strong>
        </p>
    </div>
</div>
</template>

<script src="./login.js"></script>
<style media="screen" lang="scss" src="./login.scss"></style>
