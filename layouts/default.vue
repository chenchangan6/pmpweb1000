<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  font-size: 2em;
  font-weight: lighter;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}

a {
  color: #444444;
  text-decoration: none;
}

a:hover {
  color: #3a7734;
  text-decoration: #3a7734;
  font-weight: bolder;
}

h1 {
  font-weight: 100;
  font-size: 1.5em;
  margin: 0;
}

.explain {
  font-size: 0.5em;
}

.headtitle {
  font-weight: 100;
  text-align: center;
}

li {
  padding: 0.1em;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
