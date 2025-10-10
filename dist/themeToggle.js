(function(){
  const root = document.documentElement;
  const key='theme';
  const btn = document.getElementById('themeToggle');
  const set = v => { root.dataset.theme = v; localStorage.setItem(key,v); };
  const init = () => {
    const saved = localStorage.getItem(key);
    if(saved) set(saved);
    else if(window.matchMedia('(prefers-color-scheme: dark)').matches) set('dark');
  };
  init();
  btn?.addEventListener('click', ()=> set(root.dataset.theme==='dark'?'light':'dark'));
})();
