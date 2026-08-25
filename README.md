# Tom & Jerry TV

Reproductor web de episodios clásicos de Tom y Jerry. Carga los capítulos desde una fuente externa y permite navegar entre ellos con controles de reproducción.

## Características

- Reproducción automática de un episodio aleatorio al iniciar
- Navegación entre episodios (anterior / siguiente / aleatorio)
- Autoplay al terminar cada episodio; al llegar al último, baraja la lista y continúa
- Lista completa de episodios con acceso directo a cualquier capítulo

## Estructura del proyecto

```
Tom_and_Jerry_TV/
├── index.html   # Estructura de la página
├── index.js     # Lógica de la aplicación
├── data.js      # Catálogo de episodios (nombre y URL)
└── style.css    # Estilos
```

## Ver la app

**Puedes ver la aplicacion desplegada en netlify en este [enlace](https://cartoon-tv.netlify.app/)**

> **Nota sobre autoplay:** Los navegadores modernos bloquean el autoplay con sonido sin interacción previa del usuario. Si el video no arranca solo, añade el atributo `muted` al elemento `<video>` en `index.html`.


## Tecnologías

- HTML5 / CSS3
- JavaScript vanilla (ES Modules)
- API de video HTML5
