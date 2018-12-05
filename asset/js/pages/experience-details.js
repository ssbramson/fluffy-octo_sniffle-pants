new Vue({
  el: '#experienceDetails',
  
  template: `
    <div class="experience_detail-container">
      <div class="experiencer_detail-content">
        <h1 class="">[client name]</h1>
        <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate harum at dolorum mollitia deleniti architecto, suscipit ipsa facere obcaecati nobis.</p>
        <ul class="experience_detail-categories">
          <li class="experience_detail-category">
            <ul class="">
              <li class="bold">Agency</li>
              <li class="">stuff</li>
            </ul>
          </li>
          <li class="experience_detail-category">
            <ul class="">
              <li class="bold">Industry</li>
              <li class="">stuff</li>
            </ul>
          </li>
          <li class="experience_detail-category">
            <ul class="">
              <li class="bold">Services</li>
              <li class="">stuff</li>
            </ul>
          </li>
        </ul>        
      </div>

      <div class="scroll-icon-container">
        <a href="#experience_details-below">
          <div class="">
            <i class="fal fa-level-down"></i>
          </div>
          scroll
        </a>
      </div>
    </div>
  `,
})