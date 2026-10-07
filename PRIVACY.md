# Privacidad
Proyecto actualizado: 4 de octubre de 2026. Información de desarrollo; completar titular y contacto antes de publicar.

## Datos locales
Nombre, identificador de jugador, cartera, movimientos, progreso, partidas y clasificación se guardan en localStorage del navegador o WebView. Las referencias de regalos y anuncios evitan abonos repetidos. Cambiar el nombre no cambia el identificador ni crea un saldo nuevo. El audio se genera localmente.
Las preferencias publicitarias y el halo se guardan bajo neon-salvaje-ad-preferences-v1. Para borrar el perfil local elimina los datos del sitio o de la aplicación; un perfil local sin vincular no se recupera al reinstalar.

## Cuenta de Google y Firebase
La conexión está preparada, pero no configurada ni desplegada. Con los campos Firebase vacíos no se carga el SDK web ni se solicita una cuenta.
Una vez conectada, Google autentica al jugador y Firebase conserva UID, nombre, ID público de cartera, saldo, regalos diarios, movimientos y progreso. Las Functions acceden sólo al perfil autenticado; las escrituras directas de clientes en Firestore se bloquean. El ID público permite al administrador autorizado identificar abonos. El historial de movimientos del servidor evita duplicados y puede tener conservación distinta de los últimos 200 movimientos visibles localmente.
No se incorpora analítica propia del juego. La versión publicada deberá incluir un mecanismo y contacto para solicitar eliminación de cuenta y los plazos de conservación reales.

## Web y demostración
La versión web no carga AdMob nativo. La demostración está identificada como DEMO LOCAL, no genera ingresos ni contacta con una red publicitaria. Completar el ejemplo concede 60 CR virtuales a la cartera o un halo visual según la opción elegida.

## Android y AdMob
Se usan IDs oficiales de prueba por defecto. El jugador activa el proveedor desde PUBLICIDAD. El SDK y UMP se inicializan antes de cargar anuncios; sólo se solicitan cuando UMP indica canRequestAds. Las opciones permiten gestionar preferencias y desactivar nuevas solicitudes.
El SDK puede tratar datos de dispositivo, red e interacción conforme a su configuración y consentimiento. Actualmente el adaptador no recibe nombre, ranking o resultados del juego. La verificación remota de recompensas para la versión comercial queda pendiente.
Proveedor: https://developers.google.com/admob/android/privacy

## Compras
Los paquetes se muestran, pero los cobros están desactivados. El puente preparado tramita pagos mediante Google Play; la aplicación no recoge tarjetas ni datos bancarios. Al activarlo, el servidor verificará el token de compra, su estado y el ID de la cartera, conservará el hash del recibo y el abono, y consumirá el producto después de registrar su entrega.
Google gestiona los datos del pago conforme a sus condiciones. Completar la información del titular, tratamiento de reembolsos y eliminación de cuenta antes de activar compras.

## Recursos virtuales
Los créditos y gemas sólo sirven dentro del juego y no se canjean por dinero ni premios externos. Un anuncio completado concede 60 créditos; cerrarlo sin recompensa no concede créditos ni penaliza. Los anuncios no cambian probabilidades o multiplicadores. La bienvenida de 60 CR se entrega una vez; el regalo diario es de 20 CR desde el día siguiente, con fecha Europe/Madrid.

## Tienda del templo
El perfil guarda los artículos desbloqueados, decoraciones activas, dios y mascota equipados. Las compras con créditos se anotan en la misma cartera. Se guardan localmente y se sincronizan con la cuenta sólo después de configurar y desplegar Firebase.
