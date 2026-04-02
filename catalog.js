const platforms = [
  { name: 'StarShort', logo: 'starshort.png', api: 'https://drakula.dramabos.my.id/starshort-api.html', watch: 'https://drakula.dramabos.my.id/starshort-index.html' },
  { name: 'FlexTV', logo: 'flextv.svg', api: 'https://drakula.dramabos.my.id/flextv-api.html', watch: 'https://drakula.dramabos.my.id/flextv-index.html' },
  { name: 'DramaBite', logo: 'dramabite.svg', api: 'https://dramabite.dramabos.my.id/api.html', watch: 'https://dramabite.dramabos.my.id' },
  { name: 'FreeReels', logo: 'freereels.svg', api: 'https://drakula.dramabos.my.id/freereels-api.html', watch: 'https://drakula.dramabos.my.id/freereels-index.html' },
  { name: 'FunDrama', logo: 'fundrama.svg', api: 'https://drakula.dramabos.my.id/fundrama-api.html', watch: 'https://drakula.dramabos.my.id/fundrama-index.html' },
  { name: 'MicroDrama', logo: 'microdrama.png', api: 'https://drakula.dramabos.my.id/microdrama-api.html', watch: 'https://drakula.dramabos.my.id/microdrama-index.html' },
  { name: 'Vigloo', logo: 'vigloo.svg', api: 'https://drakula.dramabos.my.id/vigloo-api.html', watch: 'https://drakula.dramabos.my.id/index-vigloo.html' },
  { name: 'Reelala', logo: 'reelala.png', api: 'https://drakula.dramabos.my.id/reelala.html', watch: 'https://drakula.dramabos.my.id/index-reelala.html' },
  { name: 'BiliTV', logo: 'bilitv.svg', api: 'https://bilitv.dramabos.my.id/api.html', watch: 'https://bilitv.dramabos.my.id' },

  // integrated to local hub
  { name: 'DramaBox', logo: 'dramabox.svg', api: 'https://dramabox.dramabos.my.id/api.html', watch: './hub.html?platform=dramabox', watchText: 'Hub' },
  { name: 'Melolo', logo: 'melolo.svg', api: 'https://melolo.dramabos.my.id/api.html', watch: './hub.html?platform=melolo', watchText: 'Hub' },
  { name: 'ShortMax', logo: 'shortmax.svg', api: 'https://shortmax.dramabos.my.id/api.html', watch: './hub.html?platform=shortmax', watchText: 'Hub' },

  { name: 'DramaWave', logo: 'dramawave.svg', api: 'https://dramawave.dramabos.my.id/api.html', watch: 'https://dramawave.dramabos.my.id' },
  { name: 'NetShort', logo: 'netshort.svg', api: 'https://netshort.dramabos.my.id/api.html', watch: 'https://netshort.dramabos.my.id' },
  { name: 'iDrama', logo: 'idrama.svg', api: 'https://idrama.dramabos.my.id/api.html', watch: 'https://idrama.dramabos.my.id' },
  { name: 'GoodShort', logo: 'goodshort.svg', api: 'https://goodshort.dramabos.my.id/api.html', watch: 'https://goodshort.dramabos.my.id' },
  { name: 'Velolo', logo: 'velolo.svg', api: 'https://velolo.dramabos.my.id/api.html', watch: 'https://velolo.dramabos.my.id' },
  { name: 'ReelShort', logo: 'reelshort.svg', api: 'https://reelshort.dramabos.my.id/api.html', watch: 'https://reelshort.dramabos.my.id' },
  { name: 'FlickReels', logo: 'flickreels.svg', api: 'https://flickreels.dramabos.my.id/api.html', watch: 'https://flickreels.dramabos.my.id' },
  { name: 'Stardusttv', logo: 'stardusttv.svg', api: 'https://stardusttv.dramabos.my.id/api.html', watch: 'https://stardusttv.dramabos.my.id' },
  { name: 'Serial+', logo: 'serialplus.png', apiSoon: true, watch: 'https://sereal.dramabos.asia/generate' },
  { name: 'ReelBuzz', logo: 'reelbuzz.svg', comingSoon: true },
  { name: 'FlareFlow', logo: 'flareflow.svg', comingSoon: true },
  { name: 'MoboReels', logo: 'moboreels.svg', apiSoon: true, watch: 'https://moboreels.dramabos.asia/generate' },
  { name: 'Reelife', logo: 'reelife.svg', api: 'https://reelife.dramabos.my.id/api.html', watch: 'https://reelife.dramabos.my.id' }
];

const grid = document.getElementById('platformGrid');

function external(href) {
  if (!href) return '';
  if (href.startsWith('./') || href.startsWith('/')) return '';
  return ' target="_blank" rel="noopener"';
}

grid.innerHTML = platforms.map((p) => {
  const logo = `https://drakula.dramabos.my.id/logos/${p.logo}`;

  if (p.comingSoon) {
    return `
      <div class="card disabled">
        <img src="${logo}" alt="${p.name}" />
        <div class="card-title">${p.name}</div>
        <div class="badge"><i class="fas fa-clock"></i> Coming Soon</div>
      </div>
    `;
  }

  const apiBtn = p.apiSoon
    ? `<span class="card-btn btn-api" style="opacity:0.5;cursor:not-allowed">API Soon</span>`
    : `<a href="${p.api}"${external(p.api)} class="card-btn btn-api">API</a>`;

  const watchBtn = p.watch
    ? `<a href="${p.watch}"${external(p.watch)} class="card-btn btn-watch">${p.watchText || 'Nonton'}</a>`
    : `<span class="card-btn btn-watch" style="opacity:0.5;cursor:not-allowed">Soon</span>`;

  return `
    <div class="card">
      <img src="${logo}" alt="${p.name}" />
      <div class="card-title">${p.name}</div>
      <div class="card-buttons">
        ${apiBtn}
        ${watchBtn}
      </div>
    </div>
  `;
}).join('');
