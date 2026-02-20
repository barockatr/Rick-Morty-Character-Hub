# 🌀 Rick & Morty Character Hub
> Aplicación web interactiva y responsiva para explorar, filtrar y gestionar personajes del multiverso de Rick and Morty.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## 🔗 Enlaces Rápidos
- [🚀 Live Demo / Deploy][URL_DEL_DEPLOY_AQUI]
- [📹 Video Tour del Proyecto][URL_DEL_VIDEO_AQUI]

---

## 📸 Vistazo Rápido

[INSERTAR CAPTURA DE PANTALLA 1: Vista Principal / Dashboard]
*(Reemplazar este texto con la imagen: `![Dashboard](./docs/dashboard.png)`)*

[INSERTAR CAPTURA DE PANTALLA 2: Sistema de Favoritos o Detalle del Personaje]
*(Reemplazar este texto con la imagen: `![Favorites](./docs/favorites.png)`)*

[INSERTAR CAPTURA DE PANTALLA 3: Vista Móvil]
*(Reemplazar este texto con la imagen: `![Mobile](./docs/mobile.png)`)*

---

## 🎯 ¿De qué trata?
**Rick & Morty Character Hub** resuelve la necesidad de consultar ágilmente el extenso catálogo de la API de Rick and Morty. Permite a los usuarios autenticarse de manera local, realizar búsquedas exactas, aplicar filtros por especie y mantener una lista de personajes favoritos de forma persistente. Todo envuelto en una interfaz "Glassmorphism" altamente optimizada.

---

## ✨ Características Clave
- **🔐 Autenticación Simulada**: Flujo de Login/Registro persistente en el navegador (localStorage).
- **❤️ Gestión de Favoritos Global**: Integridad de datos en toda la app garantizada mediante Redux.
- **🔍 Búsqueda Dinámica y Filtros**: Búsqueda cruzada por ID y filtros instantáneos por raza (Human/Alien).
- **📱 Mobile-First & Glassmorphism**: UI premium con animaciones suaves, layouts adaptables y consistencia visual en todas las pantallas.

---

## 🛠️ Stack Tecnológico
- **Frontend Core**: React 18
- **State Management**: Redux & Redux-Thunk
- **Enrutamiento**: React Router DOM v6
- **Data Fetching**: Axios y [The Rick and Morty API](https://rickandmortyapi.com/)
- **Bundler & Tooling**: Vite
- **Estilos**: Vanilla CSS y CSS Modules (Scoped styles)

---

## 🚀 Guía de Instalación (Getting Started)

Sigue estos pasos para correr el proyecto en tu entorno local:

```bash
# 1. Clonar el repositorio
git clone [https://github.com/barockatr/Rick-Morty-Character-Hub.git]

# 2. Navegar al directorio del proyecto
cd App-Rick-Morty

# 3. Instalar las dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev
```
*La aplicación estará disponible en `http://localhost:5173/`*

---

## 🏗️ Arquitectura y Estructura del Proyecto

El proyecto está fuertemente modularizado para garantizar escalabilidad, código limpio y fácil mantenimiento, separando estrictamente la lógica de negocio de la interfaz de usuario:

- `src/components/`: Componentes reutilizables de UI enfocados en presentación (*Dumb components*).
- `src/views/`: Vistas principales que manejan el estado local y orquestan la conexión con el *store* global.
- `src/redux/`: Gestión centralizada del estado global (actions, reducers) para evitar el anti-patrón de *prop drilling*.
- `src/services/`: Configuración del cliente HTTP (Axios) y abstracción de las llamadas a la API de Rick & Morty, aislando la capa de *data fetching*.

---

## 🧠 Decisiones Técnicas y Retos

- **Gestión de Estado Complejo (Redux):** Se implementó Redux para manejar la lista de favoritos globalmente. Esto asegura que la UI se mantenga sincronizada en tiempo real sin importar en qué vista navegue el usuario, garantizando la integridad de los datos en toda la SPA.
- **Persistencia de Datos:** Se integró `localStorage` para simular un flujo de autenticación y mantener la sesión del usuario (y sus favoritos) activa, demostrando el manejo del ciclo de vida de la aplicación directamente en el navegador.
- **Optimización de UI/UX:** Adopción del patrón visual *Glassmorphism* utilizando *CSS Modules* para asegurar el alcance local (*scope*) de los estilos y evitar colisiones de clases, logrando una interfaz *Mobile-First* fluida y altamente responsiva.

---

## 🗺️ Roadmap (Próximas Mejoras)

- [ ] Implementar paginación infinita (*Infinite Scrolling*) para optimizar la carga del catálogo de personajes.
- [ ] Desarrollar tests unitarios para componentes clave utilizando Jest y React Testing Library.
- [ ] Migrar el estado de autenticación simulado a un backend real para mayor seguridad.

---

## 👨💻 Autor

**Antonio**
- [LinkedIn](TU_URL_DE_LINKEDIN_AQUI)
- [GitHub](TU_URL_DE_GITHUB_AQUI)
