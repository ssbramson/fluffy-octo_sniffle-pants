new Vue({
  el: '#index',

  template: `
    <div class="index-container">
      <div class="index-content">
        <div class="index-header">
        🐨<sub>.6</sub> + 🤖<sub>.25</sub> + 🤓<sub>.3</sub> + 🤦‍<sub> .05</sub>
        </div>
  
        <p class="index-intro-paragraph">
          Award winning marketing executive  specialized in consumer technology applications and packaged goods. Past clientele include, but not limited to;
          <ul class="index-highlighted-clients">
            <li v-for="indexClientLink in indexClientLinks">
              <a :href="indexClientLink.linkURL">{{ indexClientLink.linkTitle }}</a>
            </li>
          </ul>
        </p>
  
        
      </div>
    </div>
  `,

  data: {
    indexClientLinks: [
      
      { linkTitle: 'Milkyway', linkURL: 'experience-milkyway.html' },
      { linkTitle: 'Blackberry', linkURL: 'experience-blackberry.html' },
      { linkTitle: 'Procter & Gamble', linkURL: 'experience-procter_gamble.html' },
      { linkTitle: 'Google', linkURL: 'experience-google.html' },
      
      
      
      { linkTitle: 'Kendrick Lamar', linkURL: 'experience-kendrick_lamar.html' },
      { linkTitle: 'Thomason Reuters', linkURL: 'experience-thomson_reuters.html' },
      
      { linkTitle: 'Ford Automotive', linkURL: 'experience-ford.html' },
      { linkTitle: 'Playtex Tampons', linkURL: 'experience-playtex.html' },
      { linkTitle: 'Spotify Music', linkURL: 'experience-spotify.html' }
    ]
  }
})