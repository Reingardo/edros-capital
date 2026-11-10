# EdRos Capital

## Contexto del sitio

- Portafolio personal sin fines de lucro de Edgar Rosales, en español. Presenta su trayectoria en los mercados y su enfoque de mentoría individual en trading y análisis de inversiones.
- La marca vigente es **EdRos Capital**. El usuario de Instagram es **@edroscapital** y el correo de contacto es **edgar.pro91@icloud.com**.
- La biografía parte de los datos proporcionados por Edgar. Tiene más de 10 años de experiencia en los mercados, un MBA en Administración y Finanzas por Tecmilenio (2018) y experiencia con futuros, opciones y criptomonedas. Su trayectoria incluye inversiones tempranas en NVIDIA, Palantir, AMD, Google y Tesla. La mención de AMD en la biografía es independiente de la ficha «AMD ↗», que Edgar pidió retirar de la antigua fila de empresas.
- La versión pública vigente está en [Vercel](https://edros-capital.vercel.app/), en el proyecto `edros/edros-capital` del plan Hobby. También existe una versión anterior en ChatGPT Sites.

## Código y diseño

- Next.js con App Router, React y TypeScript. `next.config.ts` habilita la exportación estática a `out/`. Usa el archivo de bloqueo de pnpm.
- `app/page.tsx` contiene la portada, la trayectoria, los servicios, el enfoque, la biografía, el formulario y las preguntas frecuentes. `app/globals.css` contiene los estilos. `app/layout.tsx` define los metadatos y `app/gracias/page.tsx` es la página de confirmación. Los recursos publicados están en `public/assets/` y las fotos originales en `../Fotos/`.
- Mantén la estética de portafolio financiero con fondo oscuro, acentos dorados, retratos de Edgar y navegación directa. TradingView inspiró los paneles visuales e Investopedia sirvió de referencia para organizar el contenido por tema.
- El logo del encabezado tiene ícono dorado y texto blanco. Ambos pasan a verde únicamente al poner el cursor encima, en dispositivos compatibles con hover.
- La portada entra por etapas. Detrás del retrato hay velas japonesas decorativas en ascenso que se animan en bucle, con control de pausa. La gráfica es ilustrativa. Los tres bloques de trayectoria, **10+**, **MBA** y **1:1**, se animan en secuencia al entrar en pantalla.
- Las preguntas frecuentes usan `details` y `summary`. Al pasar el cursor sobre una pregunta, el texto pasa a dorado, el fondo se resalta y la fila gana un poco de espacio interior. Respeta `prefers-reduced-motion` y conserva la navegación con teclado y el diseño móvil.

## Formulario y publicación

- El formulario usa FormSubmit para enviar solicitudes al correo de Edgar. Las citas se coordinan por correo. Los botones de servicio preseleccionan la opción correspondiente y el envío redirige a `/gracias.html` en el dominio actual. Se verificó que la página de agradecimiento carga en Vercel. La entrega de correos sigue pendiente de comprobar y FormSubmit puede requerir una primera activación por correo.
- Antes de modificar archivos, revisa `git status`. Los cambios publicados en Vercel pueden estar en el árbol de trabajo sin commit. Conserva esos cambios al aplicar nuevas anotaciones.
- Valida con `git diff --check` y `pnpm build`. Si pnpm no está en el PATH y las dependencias ya están instaladas, usa `node node_modules/next/dist/bin/next build`.
- Para publicar, usa la sesión autenticada de Vercel CLI. El flujo usado hasta ahora copia el contenido de `out/` a una carpeta temporal, agrega un `vercel.json` con `{"framework":null,"outputDirectory":"."}` y ejecuta `vercel deploy --cwd <carpeta-temporal> --scope edros --project edros-capital --prod --yes`. Publica en el proyecto existente y comprueba el cambio en el dominio público. Mantén las credenciales fuera del repositorio.
