export function chip(name:string, level:number) {
  const dur = (8 + Math.random()*8).toFixed(2)+'s';
  const dx  = ((Math.random()<.5?-1:1)*(4+Math.random()*8)).toFixed(1)+'px';
  const dy  = ((Math.random()<.5?-1:1)*(4+Math.random()*8)).toFixed(1)+'px';
  return `<button class="tag transition will-change-transform"
            style="animation:float ${dur} ease-in-out infinite; --dx:${dx}; --dy:${dy}"
            onclick="openSkill('${name.replace(/'/g,"\\'")}', ${level})">${name}</button>`;
}
