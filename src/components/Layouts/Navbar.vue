<script setup lang="ts"></script>
<template>
    <nav class="navbar container">
        <ul class="navbar__ul">
        <li class="navbar__li">
            <RouterLink name="VIDEO" exact-active-class="navbar__a--active" class="navbar__a" to="/">Video games</RouterLink>
        </li>
        <li class="navbar__li">
            <RouterLink name="CONTACT" exact-active-class="navbar__a--active" class="navbar__a" to="/contact">contact</RouterLink>
        </li>
        </ul>
    </nav>
</template>
