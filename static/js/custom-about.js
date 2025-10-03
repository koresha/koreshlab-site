// Mesure la hauteur du header et expose la variable CSS --header-height
(function(){
  function updateHeaderHeight(){
    var header = document.getElementById('profileHeader');
    if(!header) return;
    var h = header.getBoundingClientRect().height || 84;
    document.documentElement.style.setProperty('--header-height', Math.ceil(h) + 'px');
    // remove fallback padding once header height is known
    var aboutEl = document.getElementById('about');
    if (aboutEl) aboutEl.classList.remove('fallback-padding');
  }
  // add a temporary fallback class to prevent content hiding if JS hasn't run yet
  try { document.getElementById('about')?.classList.add('fallback-padding'); } catch (e) {}

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateHeaderHeight);
  } else { updateHeaderHeight(); }
  window.addEventListener('resize', function(){ setTimeout(updateHeaderHeight, 120); });
})();

// Tech chips initialization (animation duration/delay vars)
function initTechChips() {
  console.log('[Debug] initTechChips called');
  document.querySelectorAll('.tech-chip').forEach(chip => {
    console.log('[Debug] Found tech-chip:', chip.dataset.skill);
    const dur = (8 + Math.random()*8).toFixed(2) + 's';
    const del = (-Math.random()*8).toFixed(2) + 's';
    const dx  = (Math.random() < .5 ? -1 : 1) * (4 + Math.random()*8);
    const dy  = (Math.random() < .5 ? -1 : 1) * (4 + Math.random()*8);
    chip.style.setProperty('animation-duration', dur);
    chip.style.setProperty('animation-delay', del);
    chip.style.setProperty('--dx', dx + 'px');
    chip.style.setProperty('--dy', dy + 'px');
  });
}

// Skill card modal handling
const SKILLS = {
  "Kubernetes": 90, "Docker": 90, "Helm": 80, "ArgoCD": 80,
  "Terraform / OpenTofu": 85, "Ansible": 85, "GitLab CI/CD": 85, "Jenkins": 75,
  "Keycloak": 70, "Prometheus": 80, "Grafana": 80, "ELK (SIEM)": 70,
  "PostgreSQL": 65, "MongoDB": 60, "Python": 65, "Bash": 80,
  "Azure": 70, "AWS": 40, "OVHcloud": 80, "OutScale": 60, "OpenStack": 70, "Scalingo": 80,
  "VMware/Tanzu": 65, "Trivy": 75, "Traefik": 70, "Istio": 55,
  "Kafka": 60, "RabbitMQ": 60, "Vault": 70, "Harbor": 70,
  "Ceph": 55, "MinIO/S3": 65, "Teleport": 85, "Git": 85, "PowerShell": 60, "Go (basics)": 40
};

function openSkill(name) {
  const card = document.getElementById('skillCard');
  const title = document.getElementById('skillTitle');
  const meta  = document.getElementById('skillMeta');
  const bar   = document.getElementById('skillBar');
  if(!card || !title || !meta || !bar) return;
  const lvl = SKILLS[name] ?? 50;
  title.textContent = name;
  meta.textContent  = `Proficiency: ${lvl}%`;
  bar.style.width = '0%';
  card.classList.add('open');
  requestAnimationFrame(() => { bar.style.width = lvl + '%'; });
}
function closeSkill() { document.getElementById('skillCard')?.classList.remove('open'); }

document.addEventListener('click', (e) => {
  console.log('[Debug] Click event on:', e.target);
  const chip = e.target.closest('.tech-chip');
  if (chip) console.log('[Debug] Tech chip clicked:', chip.dataset.skill);
  if (chip) { e.preventDefault(); openSkill(chip.dataset.skill); }
  if (e.target === document.getElementById('skillCard')) closeSkill();
});

document.addEventListener('DOMContentLoaded', initTechChips);

document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSkill(); });

// expose openSkill globally for potential external calls
window.openSkill = openSkill;
