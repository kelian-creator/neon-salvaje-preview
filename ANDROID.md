# Android / Capacitor — AdMob
Actualizado: 4 de octubre de 2026.

## Estado
Existe proyecto nativo en android/, creado con Capacitor 8. Dependencias instaladas y fijadas en package-lock.json. Plugin @capacitor-community/admob 8.1.0 y @capacitor/app integrados. www/ contiene el paquete web generado.
El Manifest incluye el ID oficial de aplicación de prueba de Google. No se ha generado ni firmado un APK; no hay Android SDK/JDK disponibles en este equipo.

## Preparación
- Node 22+; npm install para restaurar dependencias.
- npm run android:sync genera www/, sincroniza recursos y plugins, y actualiza el Manifest.
- npm run android:open abre el proyecto en Android Studio una vez instalado.
- Configurar SDK/JDK compatibles con el proyecto generado. android/variables.gradle fija minSdk 24, compileSdk 36 y targetSdk 36.
- El identificador com.neonsalvaje.templofortuna es provisional. Establecer el identificador propio antes de publicar.
- No modificar el origen de WebView entre actualizaciones si se quiere conservar localStorage.

## AdMob
PUBLICIDAD → ACTIVAR ADMOB · ANUNCIOS DE PRUEBA.
Durante una partida y tras elegir camino: VER ANUNCIO · +60 CR.
Anuncio completado y recompensa SDK confirmada: abono único de 60 CR. Pausa automática de tiempo e inactividad mientras se carga y muestra el anuncio. El saldo queda guardado.
El halo es una recompensa separada entre partidas; usar una unidad propia para cada recompensa en producción.
Datos y pasos de IDs comerciales, unidades y consentimiento en ADS.md.

## Pendientes antes de distribuir
- Ejecutar Android y validar consentimiento, banner, reward/cierre, fallos, cambio de aplicación, Atrás, orientación, restauración y audio.
- El banner nativo reserva espacio y se oculta durante diálogos.
- Sustituir iconos/splash de plantilla por los definitivos.
- IDs propios y opciones de privacidad reales del titular. Revisar PRIVACY.md y ficha de distribución.
- Compilar release firmada y guardar la clave fuera del repositorio.

La generación del paquete web y del proyecto nativo no equivale a validar la ejecución del SDK en un dispositivo.

## Perfiles y compras preparados
Consultar CUENTAS_Y_CREDITOS.md. Google permanece excluido del arranque nativo hasta añadir google-services.json válido y ejecutar android:sync. TempleBillingPlugin integra Billing 9.1.0, pero los cobros y el servidor comercial siguen desactivados. La generación web y la sincronización Capacitor no compilan Java ni generan APK/AAB.
