 oboe('https://raw.githubusercontent.com/koplenov/pac/master/podcasts')
    .node('!.*', function(pair){
 
      //document.querySelector('#feed').insertAdjacentHTML('beforeend', `${pair.name}<br><a href="${pair.link}" target="_blank" >...</a><br><br>`);
      document.querySelector('#cards').insertAdjacentHTML('beforeend',
      `
      <div class="card">
        <h5 class="card-header">${pair.name}</h5>
        <p class="card-body">${pair.link}</p>
        <div class="card-footer center text-center"><p>Footer</p></div>
      </div>
      `);
    });