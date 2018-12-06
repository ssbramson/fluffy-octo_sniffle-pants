Vue.component(VueCarousel.name, VueCarousel);

new Vue({
  el: '#about',
  
  template: `
    <div class="about-container">
      <div class="about-content">
        <carousel :autoplay="false" :controls="false" :data="slides" direction="up"></carousel>
      </div>
    </div>
  `,
  
  data: {
    slides: [
      `
      <div class="">
        So, you want to get to know eachother, huh... enjoy the elevator ride
      </div>
      `,
      `
      <div class="">
        I grew up as an only child, so I made technoloy my family 🖥 💻 💾 📟 📠
      </div>
      `,
      `
      <div class="">
        This created my passion for [n], [n], [n], [n], and [n].
      </div>
      `,
      `
      <div class="">
        Which gave me the opportunity to have clients just as [c], [c], [c], [c], and [c].
      </div>
      `,
      `
      <div class="">
        That lead to being honored with such awards like [a], [a], [a], and [a].
      </div>
      `,
      `
      <div class="">
        Currently, I'm spilting my time between NYC and LA collaborating with [i], [i], and [i].
      </div>
      `,
      `
      <div class="">
        <div class="">Want a longer elevator ride? Let's...</div>
        <ol class="">
          <li class=""><a href="capabilities.html">Capabilities</a></li>
          <li class=""><a href="experience.html">Experience</a></li>
          <li class=""><a href="thinking-things.html">Thoughts</a></li>
          <li class=""><a href="lets-collaborate.html">Connect</a></li>
        </ol>
      </div>
      `
    ],
  },
});