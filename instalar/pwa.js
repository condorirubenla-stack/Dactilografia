// Configuración del botón de instalación
const installButton = document.getElementById('btn-install-pwa');

// Efecto hover (añadido vía JS)
if (installButton) {
    installButton.addEventListener('mouseenter', () => {
        installButton.style.transform = 'translateY(-5px) scale(1.05)';
    });
    installButton.addEventListener('mouseleave', () => {
        installButton.style.transform = 'translateY(0) scale(1)';
    });
}


// Manejo del evento de instalación
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  console.log('[PWA] Evento beforeinstallprompt recibido');
  
  // 1. Prevenir el banner automático
  e.preventDefault();
  
  // 2. Guardar el evento para usarlo luego
  deferredPrompt = e;
  
  // 3. Mostrar NUESTRO botón de instalación
  installButton.style.display = 'flex';
  
  // 4. Opcional: Ocultar después de 40 segundos
  setTimeout(() => {
    if (installButton.style.display === 'flex') {
      installButton.style.display = 'none';
    }
  }, 40000);
});

// Manejo del clic en nuestro botón
installButton.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  
  console.log('[PWA] Mostrando diálogo de instalación');
  
  try {
    // Mostrar el prompt de instalación
    deferredPrompt.prompt();
    
    // Esperar a que el usuario decida
    const { outcome } = await deferredPrompt.userChoice;
    
    console.log(`[PWA] Usuario ${outcome === 'accepted' ? 'aceptó' : 'rechazó'} la instalación`);
    
    if (outcome === 'accepted') {
      installButton.textContent = '✓ ¡Instalada!';
      setTimeout(() => {
        installButton.style.display = 'none';
      }, 2000);
    }
  } catch (error) {
    console.error('[PWA] Error al mostrar el prompt:', error);
  } finally {
    deferredPrompt = null;
    installButton.style.display = 'none';
  }
});

// Registro del Service Worker (sin cambios)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('[PWA] Service Worker registrado con éxito:', registration.scope);
      })
      .catch(error => {
        console.error('[PWA] Error al registrar Service Worker:', error);
      });
  });
}

// Detección de iOS (para mostrar instrucciones especiales)
if (/iPad|iPhone|iPod/.test(navigator.userAgent) || 
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
  const iosBanner = document.createElement('div');
  iosBanner.innerHTML = `
    <div style="
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 12px;
      background: #f8f9fa;
      text-align: center;
      border-top: 1px solid #ddd;
      z-index: 999;
    ">
      <p style="margin: 0;">📱 Para instalar: Toca <strong>Compartir</strong> → <strong>Añadir a Inicio</strong></p>
    </div>
  `;
  document.body.appendChild(iosBanner);
}