// Example implementation for Next.js/React
// File: components/CookieConsent.jsx

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    performance: false,
    functionality: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      setPreferences(JSON.parse(consent));
      initializeCookies(JSON.parse(consent));
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      performance: true,
      functionality: true,
      marketing: true
    };
    savePreferences(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      performance: false,
      functionality: false,
      marketing: false
    };
    savePreferences(onlyNecessary);
  };

  const handleCustomize = () => {
    savePreferences(preferences);
  };

  const savePreferences = (prefs) => {
    localStorage.setItem('cookie_consent', JSON.stringify(prefs));
    localStorage.setItem('cookie_consent_date', new Date().toISOString());
    initializeCookies(prefs);
    setShowBanner(false);
  };

  const initializeCookies = (prefs) => {
    // Initialize Google Analytics if performance cookies accepted
    if (prefs.performance && typeof window !== 'undefined') {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }

    // Initialize marketing cookies if accepted
    if (prefs.marketing && typeof window !== 'undefined') {
      window.gtag('consent', 'update', {
        'ad_storage': 'granted'
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-consent-banner">
      <div className="cookie-content">
        <h3>🍪 Uso de Cookies</h3>
        <p>
          Utilizamos cookies para mejorar tu experiencia. Las cookies necesarias 
          son esenciales para el funcionamiento. Otras nos ayudan a personalizar 
          y analizar el uso.
        </p>
        
        <div className="cookie-options">
          <label>
            <input 
              type="checkbox" 
              checked={preferences.necessary} 
              disabled 
            />
            Necesarias (Requeridas)
          </label>
          
          <label>
            <input 
              type="checkbox" 
              checked={preferences.performance}
              onChange={(e) => setPreferences({
                ...preferences, 
                performance: e.target.checked
              })}
            />
            Rendimiento
          </label>
          
          <label>
            <input 
              type="checkbox" 
              checked={preferences.functionality}
              onChange={(e) => setPreferences({
                ...preferences, 
                functionality: e.target.checked
              })}
            />
            Funcionalidad
          </label>
          
          <label>
            <input 
              type="checkbox" 
              checked={preferences.marketing}
              onChange={(e) => setPreferences({
                ...preferences, 
                marketing: e.target.checked
              })}
            />
            Marketing
          </label>
        </div>

        <div className="cookie-actions">
          <button onClick={handleAcceptAll} className="btn-primary">
            Aceptar Todo
          </button>
          <button onClick={handleRejectAll} className="btn-secondary">
            Solo Necesarias
          </button>
          <button onClick={handleCustomize} className="btn-tertiary">
            Guardar Preferencias
          </button>
        </div>

        <a href="/privacy" className="privacy-link">
          Ver Política de Privacidad
        </a>
      </div>

      <style jsx>{`
        .cookie-consent-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: white;
          box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
          padding: 20px;
          z-index: 9999;
        }

        .cookie-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .cookie-options {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 10px;
          margin: 15px 0;
        }

        .cookie-options label {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cookie-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 15px;
        }

        .btn-primary {
          background: #0070f3;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .btn-secondary {
          background: #666;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .btn-tertiary {
          background: transparent;
          color: #0070f3;
          padding: 10px 20px;
          border: 1px solid #0070f3;
          border-radius: 5px;
          cursor: pointer;
        }

        .privacy-link {
          display: inline-block;
          margin-top: 10px;
          color: #0070f3;
          text-decoration: none;
        }

        @media (max-width: 768px) {
          .cookie-options {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
