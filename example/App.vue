<template>
  <p class="message">This text color will be changed if you change the window width.</p>
</template>

<style>
.message {
  color: #333;
}
</style>

<style media="(max-width: 767px)">
.message {
  color: #33a;
}
</style>

<style media="(max-width: 320px)">
.message {
  color: #a33;
}
</style>
