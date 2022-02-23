---
# try also 'default' to start simple
theme: bricks
# apply any windi css classes to the current slide
class: 'text-center'
# persist drawings in exports and build
drawings:
  persist: true
fonts:
  sans: 'Lato'
---

# Self-Introduction

yuta sakamoto

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
layout: two-cols
---


<template v-slot:default>
  <div>
    <h1> Who am i ?</h1>
    <div style="margin-top: 30px;">
      <p>坂元　佑太　(30)</p>
      <p>エンジニア５年生（2017年卒）</p>
      <p>ＰＳ３年生（2019年4月〜）</p>
      <p>ステキャン作った人</p>
      <a
        href="https://step-up-camp-572f4.firebaseapp.com"
        target="_blank"
        alt="suc"
        class="text-xl !border-none"
      >
        <mdi-web /> ステキャンweb
      </a>
    </div>
  </div>
</template>

<template v-slot:right>
<div class="profile-img-area">
  <img src="/my-profile.jpg"/>
</div>
</template>

<style>
  .profile-img-area{
    height: 100%;
    display: flex;
    align-items: center;
  }
  div p{
    line-height: 1.5;
    font-size: 1.7rem;
    font: 'Lato'
  }
</style>



---
layout: two-cols
---

# What's hobby ?

<h2>Coffee</h2>
<img src="/coffee-env.jpg">

::right::

<h2 class="mt-15">Tech</h2>
<img src="/dev-env.jpg">

---

# Coffee

<div style="display: flex;">
  <coffee-img path="/coffee-1.jpg" title="sparkling coffee" />
  <coffee-img path="/coffee-2.jpg" title="Caffè latte" />
  <coffee-img path="/coffee-7.jpg" title="Caffè latte"/>
</div>
<div style="display: flex;">
  <coffee-img path="/coffee-4.jpg" title="latte art" />
  <coffee-img path="/coffee-5.jpg" title="latte art"/>
  <coffee-img path="/coffee-6.jpg" title="latte art"/>
</div>

---

# Tech

  ## Language

  <div class="my-5">
    <VscodeIconsFileTypeRuby class="logo mx-2"/>
    <VscodeIconsFileTypePython class="logo mx-2"/>
    <LogosGopher class="logo mx-2"/>
    <LogosJavascript class="logo mx-2"/>
    <LogosTypescriptIcon class="logo mx-2"/>
  </div>

  ## Framework
  <div class="my-5">
    <VscodeIconsFileTypeRails class="logo mx-2"/>
    <LogosDjango class="logo mx-2"/>
    <LogosReact class="logo mx-2"/>
    <LogosVue class="logo mx-2"/>
    <LogosNextjs class="logo mx-2"/>
  </div>

<style>
  .logo {
    font-size: 5rem;
  }
</style>

---
