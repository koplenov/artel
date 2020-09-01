// photos from flickr with creative commons license

var cy = cytoscape({
  container: document.getElementById('cy'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(label)',
        'text-valign': 'bottom',
        'color': 'white',
        'text-outline-width': 2,
        'text-outline-color': '#888',
        'background-color': '#888',


        'height': 80,
        'width': 80,
        'background-fit': 'cover',
        'border-color': '#000',
        'border-width': 3,
        'border-opacity': 0.5
      })
    .selector('.eating')
      .css({
        'border-color': 'red'
      })
    .selector('.eater')
      .css({
        'border-width': 9
      })
    .selector('edge')
      .css({
        'content': 'data(label)',
        'text-valign': 'bottom',
        'color': 'white',
        'text-outline-width': 2,
        'text-outline-color': '#888',
        'background-color': '#888',

        'curve-style': 'bezier',
        'width': 4,
        'target-arrow-shape': 'triangle-backcurve',
        'line-color': '#ffaaaa',
        'target-arrow-color': '#ffaaaa'
      })


      .selector('edge[arrow]')
      .css({
        'content': 'data(label)',
        'text-valign': 'bottom',
        'color': 'white',
        'text-outline-width': 2,
        'text-outline-color': '#888',
        'background-color': '#888',
        "target-arrow-shape": "data(arrow)",

        'curve-style': 'bezier',
        'width': 4,
        'line-color': '#ffaaaa',
        'target-arrow-color': '#ffaaaa'
      })


    .selector('#secret')
      .css({
        'background-image': 'https://cors-anywhere.herokuapp.com/https://github.com/koplenov/pragmmers-hub/raw/master/secret.jpg'
      })
    .selector('#koplenov')
      .css({
        'background-image': 'https://sun9-47.userapi.com/impf/c824700/v824700346/122163/oWKId9bVoEc.jpg?size=200x0&quality=90&crop=97,39,430,431&sign=ae8a31414bef98ad594dd7a2c7da826f&ava=1'
      })
    .selector('#DmitruMoth')
      .css({
        'background-image': 'https://sun9-15.userapi.com/impf/c621707/v621707798/50528/dmX5ghuBNCg.jpg?size=200x0&quality=90&crop=0,0,465,465&sign=dd48b092739a969a6fc1fda55e77aa34&ava=1'
      })
    .selector('#goldenwik')
      .css({
        'background-image': 'https://sun9-50.userapi.com/impf/c837631/v837631386/212e4/XeD3Fd-ezeg.jpg?size=200x0&quality=90&crop=0,0,458,604&sign=00e4bf830b066fe0bed04fcabfbee564&ava=1'
      })
    .selector('#GunsteR')
      .css({
        'background-image': 'https://sun9-61.userapi.com/impg/xvWthM7e2OXW5CLTcO2rnPHgb0FbxjK8cXLUYA/qG3QOZfpDy8.jpg?size=200x0&quality=90&crop=21,0,1037,1037&sign=c685cbfc6b359d1e07d54583233d89b4&ava=1'
      })
    .selector('#uselessCorpse')
      .css({
        'background-image': 'https://sun9-34.userapi.com/impg/c855524/v855524082/256856/JxqHVsPYv6I.jpg?size=200x0&quality=90&crop=0,0,720,720&sign=3669e386bec32f4b7a9bbcd58910b367&ava=1'
      })
    .selector('#kikyik')
      .css({
        'background-image': 'https://sun9-63.userapi.com/impg/wqvTM-_51fSMBDwb59PGcbfIBusUyJkKQqV5Xg/7g4-S6OKZfM.jpg?size=200x0&quality=90&crop=0,0,1079,1079&sign=a1deab958066c45615eebe73bca1b3b4&ava=1'
      }),

  elements: {
    nodes: [
      { data: { id: 'secret', } },
      { data: { id: 'koplenov', label: 'koplenov', href: 'http://vk.com/koplenov'} },
      { data: { id: 'DmitruMoth', label: 'DmitruMoth' } },
      { data: { id: 'goldenwik', label: 'goldenwik' } },

      { data: { id: 'GunsteR', label: 'GunsteR' } },
      { data: { id: 'kikyik', label: 'kikyik' } },
      { data: { id: 'uselessCorpse', label: 'useless.corpse' } }
    ],
    edges: [
      { data: { source: 'secret', target: 'koplenov', "arrow": "none" } },
      { data: { source: 'secret', target: 'DmitruMoth', "arrow": "none" } },
      { data: { source: 'secret', target: 'goldenwik', "arrow": "none" } },
      { data: { source: 'koplenov', target: 'GunsteR', label: 'backend' } },
      { data: { source: 'koplenov', target: 'uselessCorpse', label: 'gamedev' } },
      { data: { source: 'goldenwik', target: 'kikyik', label: 'web, ib' } }
    ]
  },

  layout: {
    name: 'breadthfirst',
    directed: true,
    //padding: 10
  }
}); // cy init


cy.on('tap', 'node', function(){
  if(this.data('href') != null){
    try { // your browser may block popups
      window.open( this.data('href') );
    } catch(e){ // fall back on url change
      window.location.href = this.data('href');
    }
  }
});









var constellationInstance = window.constellation({
  size:[window.innerWidth,window.innerHeight-10],
  canvas: document.querySelector('canvas'),
  padding: [-100,-100],
  starCount: 100,
  lineCount: 400,
  fuzziness: 100,
  style: {
    //starColor: '#fff',
    //lineColor: 'rgba(255,255,255,.5)',
    starColor: 'rgb(33,33,33)',
    lineColor: 'rgb(33,33,33)',
    lineSize: .5,
    starPadding: 0,
    starSize: 2
  }
});