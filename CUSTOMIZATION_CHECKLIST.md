# Lista de Personalización

Antes de implementar estas políticas en producción, debes personalizar los siguientes elementos:

## ✏️ Información de Contacto

### En todos los archivos `.md`:

```markdown
# Buscar y reemplazar:

privacy@socialmetricsautomation.com → tu-email-privacidad@tudominio.com
support@socialmetricsautomation.com → tu-email-soporte@tudominio.com
legal@socialmetricsautomation.com → tu-email-legal@tudominio.com
dpo@socialmetricsautomation.com → tu-dpo@tudominio.com
```

### Dirección Postal

```markdown
[Tu Dirección Comercial] → Tu dirección real de negocio
```

## 🏢 Información de la Empresa

```markdown
Social Metrics Automation → Nombre de tu aplicación/empresa
```

## 🌍 Jurisdicción Legal

En `TERMS_OF_SERVICE.md`, sección 14.1:

```markdown
[Tu Jurisdicción] → País/Estado específico (ej: "España", "California, USA")
```

## 🔧 Servicios Técnicos Utilizados

Actualiza según los servicios que REALMENTE uses:

### En PRIVACY_POLICY.md, sección 5.2:

- **Hosting:** Vercel, AWS, Google Cloud → El que uses
- **Pagos:** Stripe, PayPal → El que uses
- **Analytics:** Google Analytics, Mixpanel → El que uses
- **Email:** SendGrid, Twilio → El que uses
- **Soporte:** Intercom, Zendesk → El que uses

### En COOKIE_POLICY.md:

Elimina o agrega cookies según los servicios que uses:
- Si no usas Mixpanel, elimina referencias
- Si no usas Facebook Pixel, elimina referencias
- Agrega cookies de servicios que sí uses

## 💰 Información de Facturación

En `TERMS_OF_SERVICE.md`, sección 7:

- Actualiza políticas de reembolso según tu modelo de negocio
- Ajusta períodos de prueba si ofreces
- Modifica precios y planes según tu estructura

## 🔐 Datos Específicos de Seguridad

En `PRIVACY_POLICY.md`, sección 9:

- Actualiza métodos de encriptación reales que uses
- Confirma si ofreces 2FA
- Ajusta según tus prácticas de seguridad

## 🌐 Redes Sociales Soportadas

Si tu app NO soporta todas estas redes, elimina las que no apliquen:

```markdown
Facebook, Instagram, Twitter/X, LinkedIn, TikTok, YouTube, Pinterest
```

Reemplaza con solo las que tu app soporta.

## 📊 Métricas y Analytics

En `PRIVACY_POLICY.md`, sección 2.3:

Ajusta según qué métricas REALMENTE recopilas:
- ¿Recopilas datos demográficos?
- ¿Analizas sentimiento?
- ¿Guardas contenido de publicaciones?

## ⏰ Períodos de Retención

En `PRIVACY_POLICY.md`, sección 7:

Actualiza según tus políticas internas:

```markdown
# Actual:
- Datos de Cuenta Inactiva: 12 meses
- Datos de Facturación: 7 años
- Registros de Seguridad: 2 años

# Ajusta según:
- Requisitos legales de tu país
- Políticas internas de tu empresa
```

## 🔗 URLs y Links

Actualiza todos los enlaces con tus URLs reales:

```javascript
// En ejemplos de código:
'https://tudominio.com' → tu dominio real
'/privacy' → tus rutas reales
```

## 📱 Características de la App

### Funcionalidades que mencionas

Asegúrate que tu app REALMENTE ofrece:
- ✅ Programación de publicaciones
- ✅ Análisis de métricas
- ✅ Gestión multi-cuenta
- ✅ Informes automáticos
- ✅ etc.

Elimina o agrega según corresponda.

## 🌍 Idiomas

Si solo ofreces servicio en español:
- Puedes eliminar `PRIVACY_POLICY_EN.md`
- O viceversa si solo ofreces en inglés

## 💳 Métodos de Pago

En `TERMS_OF_SERVICE.md`:

Actualiza según métodos de pago que aceptes:
- Tarjeta de crédito/débito
- PayPal
- Transferencia bancaria
- Criptomonedas
- etc.

## 🎯 Google Analytics ID

En `examples/_app.jsx`:

```javascript
'GA_MEASUREMENT_ID' → Tu ID real de Google Analytics
```

## 📋 Checklist Final

Antes de publicar, verifica:

- [ ] Todos los emails de contacto actualizados
- [ ] Dirección postal de la empresa agregada
- [ ] Nombre de la app correcto en todos los archivos
- [ ] Servicios técnicos coinciden con los que usas
- [ ] Redes sociales soportadas son correctas
- [ ] Políticas de reembolso/facturación son precisas
- [ ] Períodos de retención de datos son correctos
- [ ] URLs y rutas son las correctas
- [ ] Jurisdicción legal especificada
- [ ] IDs de servicios (GA, etc.) configurados

## 🔍 Búsqueda y Reemplazo Global

Usa este comando en tu editor:

### VSCode
1. `Ctrl+Shift+H` (Windows/Linux) o `Cmd+Shift+H` (Mac)
2. Buscar: `socialmetricsautomation.com`
3. Reemplazar: `tudominio.com`
4. Reemplazar todo

### Línea de comandos (Linux/Mac)

```bash
# Reemplazar en todos los archivos .md
find . -name "*.md" -exec sed -i 's/socialmetricsautomation.com/tudominio.com/g' {} +

# Reemplazar nombre de la app
find . -name "*.md" -exec sed -i 's/Social Metrics Automation/Tu App Name/g' {} +
```

### PowerShell (Windows)

```powershell
# Reemplazar dominio
Get-ChildItem -Recurse -Filter *.md | ForEach-Object {
    (Get-Content $_.FullName) -replace 'socialmetricsautomation.com', 'tudominio.com' | Set-Content $_.FullName
}

# Reemplazar nombre de app
Get-ChildItem -Recurse -Filter *.md | ForEach-Object {
    (Get-Content $_.FullName) -replace 'Social Metrics Automation', 'Tu App Name' | Set-Content $_.FullName
}
```

## ⚖️ Revisión Legal

**IMPORTANTE:** Estas son plantillas generales.

Antes de publicar:
1. Consulta con un abogado especializado en:
   - Protección de datos (GDPR, CCPA, LGPD)
   - Derecho digital
   - Legislación de tu país

2. Considera contratar servicios de:
   - Iubenda
   - TermsFeed
   - Termly
   - FreePrivacyPolicy

3. Mantén actualizadas las políticas cuando:
   - Agregues nuevas funcionalidades
   - Cambies proveedores de servicios
   - Cambien las leyes aplicables

---

**¿Necesitas ayuda?**

Si tienes dudas sobre qué personalizar, revisa:
- Los comentarios `[Tu...]` en los archivos
- La documentación de servicios que uses
- Políticas de privacidad de apps similares (para referencia)
