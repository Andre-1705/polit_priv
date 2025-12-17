# Políticas de Privacidad - Social Metrics Automation

Este repositorio contiene las políticas de privacidad oficiales para la aplicación Social Metrics Automation.

## Archivos Disponibles

- **PRIVACY_POLICY.md** - Política de privacidad completa en español
- **PRIVACY_POLICY_EN.md** - Privacy policy in English
- **PRIVACY_POLICY_ES.md** - Versión extendida en español
- **TERMS_OF_SERVICE.md** - Términos de servicio (próximamente)
- **COOKIE_POLICY.md** - Política de cookies (próximamente)

## Versión Actual

**Versión:** 1.0.0  
**Última actualización:** 17 de diciembre de 2025

## Cumplimiento Legal

Esta política de privacidad está diseñada para cumplir con:

- ✅ **GDPR** (Reglamento General de Protección de Datos - UE)
- ✅ **CCPA** (California Consumer Privacy Act - EE.UU.)
- ✅ **LGPD** (Lei Geral de Proteção de Dados - Brasil)
- ✅ **PIPEDA** (Ley de Protección de Información Personal - Canadá)
- ✅ Normativas internacionales de privacidad

## Uso en Proyectos

### Para Git/GitHub

1. Clona o descarga este repositorio
2. Incluye `PRIVACY_POLICY.md` en tu proyecto
3. Actualiza la información de contacto con tus datos
4. Revisa y personaliza según las necesidades específicas de tu app

### Para Vercel

Puedes servir estas políticas como páginas estáticas:

```bash
# Estructura sugerida en tu proyecto
/public
  /legal
    /privacy-policy.md
    /terms-of-service.md
```

O crear rutas específicas:
- `https://tudominio.com/privacy`
- `https://tudominio.com/privacy/en`
- `https://tudominio.com/privacy/es`

### En Tu Aplicación

**React/Next.js:**
```jsx
import PrivacyPolicy from '@/legal/privacy-policy.md'

export default function PrivacyPage() {
  return <MarkdownRenderer content={PrivacyPolicy} />
}
```

**HTML estático:**
```html
<a href="/privacy-policy.html">Política de Privacidad</a>
```

## Personalización Requerida

Antes de usar estas políticas, asegúrate de actualizar:

1. **Información de Contacto:**
   - Email: `privacy@socialmetricsautomation.com` → tu email
   - Dirección postal → tu dirección comercial
   - DPO email → si aplica

2. **Nombre de la Aplicación:**
   - "Social Metrics Automation" → nombre de tu app

3. **Servicios Específicos:**
   - Proveedores de pago que uses
   - Servicios de analytics específicos
   - Plataformas de hosting reales

4. **Funcionalidades:**
   - Ajusta según las características reales de tu app
   - Elimina secciones que no apliquen

## Recomendaciones Legales

⚠️ **IMPORTANTE:** Estas políticas son plantillas generales. Se recomienda:

1. Consultar con un abogado especializado en privacidad de datos
2. Adaptarlas a tu jurisdicción específica
3. Revisarlas periódicamente (al menos anualmente)
4. Actualizar cuando agregues nuevas funcionalidades
5. Mantener un registro de versiones y cambios

## Estructura de Secciones

### Secciones Principales

1. **Introducción** - Qué es la política y su alcance
2. **Información Recopilada** - Qué datos se recopilan
3. **Uso de Información** - Cómo se usan los datos
4. **Base Legal** - Justificación legal (GDPR)
5. **Compartir Datos** - Con quién se comparten
6. **Transferencias Internacionales** - Datos fuera de tu país
7. **Retención** - Cuánto tiempo se guardan los datos
8. **Derechos del Usuario** - Qué puede hacer el usuario
9. **Seguridad** - Cómo se protegen los datos
10. **Menores** - Política sobre menores de edad
11. **Cookies** - Uso de cookies y tracking
12. **Enlaces Externos** - Responsabilidad de terceros
13. **Cambios** - Cómo se notifican cambios
14. **Redes Sociales** - Específico para apps sociales
15. **Contacto** - Cómo contactar para temas de privacidad
16. **Consentimiento** - Aceptación de la política

## Integración con Vercel

### Opción 1: Página Estática

Crea un archivo en `/pages/privacy.js`:

```jsx
import fs from 'fs'
import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'

export default function Privacy({ content }) {
  return (
    <div className="privacy-policy">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'PRIVACY_POLICY.md')
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const processedContent = await remark().use(html).process(fileContent)
  const content = processedContent.toString()

  return { props: { content } }
}
```

### Opción 2: API Route

Crea `/pages/api/privacy.js`:

```javascript
import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'PRIVACY_POLICY.md')
  const content = fs.readFileSync(filePath, 'utf8')
  
  res.status(200).json({ content })
}
```

### Variables de Entorno

Crea un `.env.local` para información sensible:

```env
NEXT_PUBLIC_COMPANY_NAME=Social Metrics Automation
NEXT_PUBLIC_CONTACT_EMAIL=privacy@tudominio.com
NEXT_PUBLIC_SUPPORT_EMAIL=support@tudominio.com
NEXT_PUBLIC_DPO_EMAIL=dpo@tudominio.com
```

## Changelog

### Versión 1.0.0 (17 de diciembre de 2025)
- ✨ Versión inicial completa
- 📝 Cobertura GDPR, CCPA, LGPD
- 🌐 Versiones en español e inglés
- 🔒 Sección completa de seguridad
- 📱 Sección específica para redes sociales
- 🍪 Política de cookies integrada

## Licencia

Estas plantillas de políticas de privacidad se proporcionan "tal cual" sin garantías. Puedes usarlas y modificarlas para tu proyecto, pero asumes toda la responsabilidad legal por su uso.

## Contribuciones

Si encuentras errores o tienes sugerencias de mejora:

1. Abre un issue
2. Envía un pull request
3. Contacta directamente

## Recursos Adicionales

- [GDPR Official Text](https://gdpr-info.eu/)
- [CCPA Information](https://oag.ca.gov/privacy/ccpa)
- [LGPD Brasil](https://www.gov.br/cidadania/pt-br/acesso-a-informacao/lgpd)
- [Privacy Policy Generators](https://www.iubenda.com/)

## Soporte

Para preguntas sobre estas políticas:
- Email: legal@socialmetricsautomation.com
- Issues: [GitHub Issues](https://github.com/tuusuario/polit_priv/issues)

---

**Nota:** Este documento es una plantilla. Consulta con profesionales legales antes de implementarlo en producción.
