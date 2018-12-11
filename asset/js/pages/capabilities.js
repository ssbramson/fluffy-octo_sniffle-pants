new Vue({
  el: '#capabilities',

  template: `
    <div class="capabilities-container">      

      <div class="capabilities-list">
        <ul class="capabilities">
          <li class="capability">[tool]</li>
          <li class="capability">[skill]</li>
          <li class="capability">[skill]</li>
          <li class="capability">[tool]</li>
          <li class="capability">[certification]</li>
          <li class="capability">[skill]</li>
          
          <li class="capability">[tool]</li>
          <li class="capability">[certification]</li>
          <li class="capability">[skill]</li>
          <li class="capability">[tool]</li>
          <li class="capability">[skill]</li>
          
          <li class="capability">[tool]</li>
          <li class="capability">[certification]</li>
          <li class="capability">[tool]</li>
          <li class="capability">[certification]</li>
          <li class="capability">[skill]</li>
          <li class="capability">[tool]</li>
          
          
        </ul>
      </div>

      <div class="capability-types-title">
        <ul class="capability-types">
            <li class="capability-type">
             <a href="capabilities-detail.html">I'm</a>
            </li>
            <li class="capability-type"><a href="http://ssbs-macbook-pro.local:5757/capabilities-detail.html#skills">certified</a></li>
            <li class="capability-type"><a href="http://ssbs-macbook-pro.local:5757/capabilities-detail.html#certifications">use</a></li>
            <li class="capability-type"><a href="http://ssbs-macbook-pro.local:5757/capabilities-detail.html#platforms">know</a></li>
        </ul>
      </div>
      
    </div>
  `,
})