new Vue({
  el: '#experienceDetails',
  
  template: `
    <div class="experience_detail-container">

      <div class="experience_detail-content_overview">

        <img src="asset/media/img/spotify_logo500.png" style="width: 40%;" alt="">

        <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ratione repellendus provident, aliquam ipsa accusamus excepturi sint officia minus modi laudantium ipsum. A facilis magnam est consectetur fuga incidunt quam.</p>

        <h4>Client's Challenge</h4>
        <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ratione repellendus provident, aliquam ipsa accusamus excepturi sint officia minus modi laudantium ipsum. A facilis magnam est consectetur fuga incidunt quam.</p>

      </div>

      <div class="experience_detail-cta_scroll">
        <i class="fal fa-level-down"></i> the results
      </div>

      <div class="experience_detail-content_list">
        <div class="">
          <h4 class="">Client</h4>
          <ul class="">
            <li class="li">{Client Name}</li>
          </ul>
        </div>
        <div class="">
          <h4 class="">Industry</h4>
          <ul class="">
            <li class="li">{Industry}</li>
          </ul>
        </div>
        <div class="">
          <h4 class="">Services</h4>
          <ul class="">
            <li class="li">Service</li>
            <li class="li">Service</li>
            <li class="li">Service</li>
            <li class="li">Service</li>
          </ul>
        </div>
      </div>

    </div>
  `,
})