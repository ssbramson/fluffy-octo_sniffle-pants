new Vue({
  el: '#index',

  template: `
    <div class="index-container">
      <div class="index-content">
        <div class="index-header">
          Hello there <div class="wave">👋</div>
        </div>
  
        <p class="index-intro-paragraph">I’m <a href="https://www.linkedin.com/in/ssbramson" target="_blank">@ssbramson</a>, awards winning marketing executive &amp; software product owner, making companies &amp; clients happy since 2008 including,</p>
  
        <ul class="index-highlighted-clients">
          <li v-for="indexClientLink in indexClientLinks">
            <a :href="indexClientLink.linkURL">{{ indexClientLink.linkTitle }}</a>
          </li>
          
        </ul>
      </div>
    </div>
  `,

  data: {
    indexClientLinks: [
      { linkTitle: 'Procter & Gamble', linkURL: 'experience-procter_gamble.html' },
      { linkTitle: 'Google', linkURL: 'experience-google.html' },
      { linkTitle: 'Blackberry', linkURL: 'experience-blackberry.html' },
      { linkTitle: 'Milkyway', linkURL: 'experience-milkyway.html' },
      { linkTitle: 'Thomason Reuters', linkURL: 'experience-thomson_reuters.html' },
      { linkTitle: 'Kendrick Lamar', linkURL: 'experience-kendrick_lamar.html' },
      { linkTitle: 'Ford', linkURL: 'experience-ford.html' },
      { linkTitle: 'Spotify', linkURL: 'experience-spotify.html' },
      { linkTitle: 'Playtex', linkURL: 'experience-playtex.html' }
    ]
  }
})