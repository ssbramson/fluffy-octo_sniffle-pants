new Vue({
  el: "#globalNavigation",
    
  template: `
    <div class="global_navigation-container">
      <div class="global_navigation-logo-container">
        <a href="index.html">{{ navigationLogo }}</a>
      </div>

      <div :class="['global_navigation-icon-container', {'global_navigation-icon-container--open': this.open}]" @click="toggleNav">
        <i class="fal fa-chess-knight-alt"></i>
      </div>

      <div :class="['global_navigation-overlay', {'global_navigation-overlay--open': this.open}]">

        <ul class="connect-contact-list">
          <li class="connect-contact-link">
            <a href="mailto:chitchat@ssbramson.com" target="_blank">
              <i class="fab fa-google"></i>
            </a>
          </li>

          <li class="connect-contact-link">
            <a href="https://www.angel.co/ssbramson" target="_blank">
              <i class="fab fa-angellist"></i>
            </a>
          </li>

          <li class="connect-contact-link">
            <a href="" target="_blank">
              <i class="fab fa-codepen"></i>
            </a>
          </li>

          <li class="connect-contact-link">
            <a href="https://www.linkedin.com/in/ssbramson" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>

        <ul class="global_navigation-links">
          <li v-for="globalNavigationLink in globalNavigationLinks">
            <a :href="globalNavigationLink.linkURL">{{ globalNavigationLink.linkTitle }}</a>
          </li>
        </ul>

      </div>
    </div>
  `,
    
  data: {
    globalNavigationLinks: [
      { linkTitle: 'About', linkURL: 'about.html' },
      { linkTitle: 'Capabilities', linkURL: 'capabilities.html' },
      { linkTitle: 'Experience', linkURL: 'experience.html' },
      { linkTitle: 'Connect', linkURL: 'lets-collaborate.html' }
    ],
    navigationLogo: '</ssbramson>',
    open: false
  },
    
  methods: {
    toggleNav: function() {
      this.open = !this.open
      this.$emit('toggle', this.open)
    }
  }
}),

new Vue({
  el: '#footer',
  template: `
    <div class="global_footer-container">
      <ul class="">
        <li class=""><a href="">link</a></li>
        <li class=""><a href="">link</a></li>
        <li class=""><a href="">link</a></li>
        <li class=""><a href="">link</a></li>
      </ul>

      <ul class="">
        <li class=""><a href="">social</a></li>
        <li class=""><a href="">social</a></li>
        <li class=""><a href="">social</a></li>
        <li class=""><a href="">social</a></li>
        <li class=""><a href="">social</a></li>
        <li class=""><a href="">social</a></li>
      </ul>

      <ul class="">
        <li class=""><a href="">legal</a></li>
        <li class=""><a href="">legal</a></li>
      </ul>
    </div>
  `
})