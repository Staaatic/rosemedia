(function(){
const cfg = {
  count: 60,
  minSize: 2,
  maxSize: 5,
  minSpeed: 14,
  maxSpeed: 28,
  drift: 120,
  spawnDelay: 360
};

const c = document.createElement('div');
c.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999';
document.body.appendChild(c);

let active = 0;
function create() {
  if (active >= cfg.count) return;
  active++;

  const d = document.createElement('div');
  const size = Math.random()*(cfg.maxSize-cfg.minSize)+cfg.minSize;
  d.style.cssText = `position:absolute;width:${size}px;height:${size}px;background:#fff;border-radius:50%;left:${Math.random()*100}vw;top:-15px;opacity:${Math.random()*0.5+0.5}`;
  d.style.setProperty('--x', (Math.random()*cfg.drift*2-cfg.drift)+'px');
  c.appendChild(d);

  d.animate([
    {transform:'translateY(-15px) translateX(0)'},
    {transform:'translateY(100vh) translateX(var(--x))'}
  ],{
    duration: (Math.random()*(cfg.maxSpeed-cfg.minSpeed)+cfg.minSpeed)*1000,
    easing: 'linear',
    iterations: Infinity
  });

  setTimeout(create, cfg.spawnDelay);
}

create();
})();
