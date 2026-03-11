# 🛸 Rick & Morty Character Hub: Explorador del Multiverso

> Una **Aplicación de Alto Rendimiento** diseñada para explorar el multiverso de Rick & Morty mediante búsqueda avanzada, gestión de favoritos y una UI premium con estética neón/espacial en el ecosistema React moderno.

<p align="center">
  <img src="Docs/Images/landing-page.png" alt="Landing Page de Rick & Morty Character Hub" width="800">
</p>

<p align="center">
  <img src="Docs/Images/home-page.png" alt="Vista principal mostrando la galería de personajes" width="800">
</p>

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router_6-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Axios](https://img.shields.io/badge/axios-671ddf?style=for-the-badge&logo=axios&logoColor=white)

---

## 🚀 Despliegue (Live Demo)

Puedes ver la aplicación funcionando aquí: [Ver Demo](URL_LIVE_DEMO_AQUI)

> **⚠️ Nota sobre despliegue:**
> Esta plataforma es una **SPA puramente Frontend** distribuida globalmente en Vercel.
> Consume la Rick and Morty API pública en tiempo real para traer los +800 personajes del multiverso.
> ¡Explora el universo de Rick & Morty sin fricciones! ⚡

---

## 🔐 Autenticación Local: Sistema de Identidad del Explorador (Highlight Principal)

<p align="center">
  <img src="Docs/Images/auth-login.png" alt="Pantalla de Login y Registro del sistema de autenticación" width="800">
</p>

El punto de entrada de la aplicación es su sistema de autenticación simulada, diseñado para demostrar flujos de Login/Registro sin depender de un backend externo.

- **Persistencia en localStorage:** Los usuarios registrados y sus sesiones se almacenan directamente en el navegador, permitiendo una experiencia de autenticación completa sin servidor.
- **Validación de Formularios:** Lógica de validación de campos en tiempo real con feedback visual inmediato antes de procesar cualquier acción.
- **Guards de Ruta:** Las rutas protegidas verifican el estado de autenticación antes de renderizar, redirigiendo automáticamente al Login si no hay sesión activa.
- **UX de Onboarding:** Pantalla de bienvenida temática que introduce al usuario al universo de la app antes de acceder al explorador principal.

---

## 🛠️ Architecture Insights: Redux para Estado Global de Favoritos

Para gestionar la colección de favoritos del usuario a través de múltiples rutas y componentes, se implementó **Redux** como capa de estado global, en contraste con soluciones de estado local.

- **Store Centralizado:** El mazo de favoritos vive en un único store Redux accesible desde cualquier componente, eliminando prop drilling entre la galería, el detalle y la vista de favoritos.
- **Acciones Atómicas:** `ADD_FAVORITE` y `REMOVE_FAVORITE` como acciones puras y predecibles que garantizan que el estado nunca mute de forma inesperada.
- **Persistencia de Sesión:** Los favoritos se mantienen durante toda la sesión del usuario sin recargas, demostrando el valor del estado global sobre el estado efímero de componente.
- **Decisión Arquitectónica Consciente:** A diferencia de proyectos más complejos donde Zustand elimina el boilerplate, aquí Redux demuestra dominio de la solución estándar de la industria para gestión de estado a escala.

---

## ✨ High-Fidelity UX/UI & Features

<p align="center">
  <img src="Docs/Images/character-gallery.png" alt="Galería de personajes con glassmorphism y estética neón" width="800">
</p>

- **Glassmorphism & Estética Neón/Espacial:** UI 100% customizada con transparencias, `backdrop-filter`, bordes luminosos y paleta de colores psicodélica inspirada en el universo del show.
- **Búsqueda Multidimensional:** Soporte para búsqueda por ID directo, nombre, especie y status — cada modalidad consume el endpoint correcto de la API para máxima precisión.
- **Filtrado Rápido:** Filtros integrados para separar Humanos de Alienígenas en tiempo real sin nueva llamada a la API.
- **Vista de Detalle Expandida:** Modal con información completa del personaje: origen, ubicación actual, status de vida y lista de episodios en los que aparece.
- **Gestión de Favoritos:** Colección persistente en sesión con opción de agregar/remover personajes desde la galería o desde el detalle.

<p align="center">
  <img src="Docs/Images/character-detail.png" alt="Vista de detalle expandida de un personaje con su información completa" width="800">
</p>

---

## 🛡️ Robustez y Resiliencia

Diseñado para manejar los límites y errores del multiverso con elegancia.

- **Estados de Carga (Loaders):** Indicadores visuales mientras la API responde, evitando interfaces vacías o confusas durante el fetching.
- **Placeholders de Datos:** Cuando la información de un campo no está disponible en la API, se muestran valores por defecto temáticos en lugar de `undefined` o errores visuales.
- **Validación Pre-Submit:** Los formularios de autenticación validan todos los campos antes de procesar, previniendo estados inválidos en el store.

---

## 🚀 Roadmap Evolutivo

✅ **Características Clave (Completadas):**
- Sistema de Autenticación Simulada (Login/Registro con localStorage).
- Explorador de personajes con búsqueda multidimensional.
- Gestión de Favoritos con Redux persistente en sesión.
- Vista de Detalle expandida con episodios y localizaciones.
- UI Premium con Glassmorphism y estética neón/espacial.

🔮 **Próximos Pasos (En Desarrollo):**
- 📜 **Infinite Scrolling:** Paginación continua para explorar los +800 personajes del multiverso sin sobrecargar el DOM, usando `Intersection Observer`.
- 🔔 **Sistema de Notificaciones (Toasts):** Migración de `window.alert` a notificaciones temáticas premium con `React-Hot-Toast`.
- 🔥 **Autenticación Real (Firebase):** Migración del sistema de auth de localStorage a Firebase Auth para persistencia remota y seguridad real.
- 🔍 **Búsqueda Avanzada Combinada:** Formulario multicampo que permita combinar filtros simultáneos (ej: "Aliens que estén vivos en la Ciudadela de Ricks").
- 📊 **Stats de la Colección:** Gráficos en la sección de favoritos mostrando distribución por especie, status y origen.

---

## ⚙️ Instalación y Despliegue Local

Sigue estos pasos para correr el proyecto localmente. Necesitarás tener Node.js instalado.

### 1. Clonar el repositorio

```bash
git clone https://github.com/barockatr/Rick-Morty-Character-Hub.git
cd Rick-Morty-Character-Hub/App-Rick-Morty
```

---

### 2. Instalar dependencias

```bash
npm install
```

---

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

> La aplicación estará disponible en **`http://localhost:5173`** 🚀

---

> **Nota:** La app consume la [Rick and Morty API](https://rickandmortyapi.com/) pública. No requiere API Keys ni variables de entorno para correr localmente.

---

*Desarrollado para demostrar dominio de React, Redux, consumo de APIs REST y arquitectura de SPAs modernas.*