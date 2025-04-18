# Boiler Node, Express, Typescript, Awilix, Router

Este proyecto es una demostración de cómo implementar la inyección de dependencias (DI) utilizando Awilix, Express y TypeScript en una aplicación Node.js.

## Estructura del Proyecto
``` bash
├── src/
│ ├── config/
│ │ ├── di/
│ │ │ └── container-registry.ts
│ │ ├── routes/
│ │ │ └── router-registry.ts
│ │ └── server.ts
│ ├── users/
│ │ ├── controllers/
│ │ │ └── user.controller.ts
│ │ ├── services/
│ │ │ └── user.service.ts
│ │ ├── repositories/
│ │ │ └── user-repo.impl.ts
│ │ ├── interfaces/
│ │ │ └── index.ts
│ │ ├── user.routes.ts
│ │ └── user.container.ts
│ └── index.ts
├── package.json
└── tsconfig.json
```
## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución JavaScript
- **Express**: Framework web para Node.js
- **TypeScript**: Superset tipado de JavaScript
- **Awilix**: Contenedor de inyección de dependencias

## Configuraciones Principales

### TypeScript (tsconfig.json)

El proyecto está configurado con TypeScript para proporcionar tipado estático. La configuración incluye:

- **Target**: ES2020
- **Module**: CommonJS
- **Strict Mode**: Habilitado
- **Decorators**: Soporte experimental habilitado
- **Output Directory**: ./dist
- **Root Directory**: ./src

### Awilix - Inyección de Dependencias

El proyecto utiliza Awilix para la inyección de dependencias, lo que permite desacoplar componentes y facilitar las pruebas unitarias.

#### ContainerRegistry (container-registry.ts)

La clase `ContainerRegistry` maneja el registro y resolución de dependencias:

- **Inicialización Automática**: Escanea todos los archivos `*.container.ts` en el proyecto
- **Modo de Inyección**: Configurado en modo CLASSIC
- **Singleton**: Las dependencias se registran como singletons para reutilización

#### Contenedores Modulares

Cada módulo tiene su propio archivo contenedor (ej. `user.container.ts`) que registra sus dependencias específicas.

### Express y Middleware

#### Configuración del Servidor (server.ts)

- **Seguridad**: Desactiva el encabezado 'x-powered-by'
- **CORS**: Configurado para permitir solicitudes desde cualquier origen
- **JSON**: Middleware para procesar cuerpos JSON
- **URL Encoded**: Soporte para datos de formularios

### Sistema de Rutas

Las rutas se registran automáticamente mediante el `RouteRegistry`, que escanea todos los archivos `*.routes.ts` en el proyecto.

### Arquitectura por Capas

El proyecto sigue una arquitectura de capas:

1. **Controllers**: Manejan las solicitudes HTTP y respuestas
2. **Services**: Implementan la lógica de negocio
3. **Repositories**: Manejan el acceso a datos
4. **Interfaces**: Definen contratos entre capas

## Módulo de Usuarios (Ejemplo)

Este módulo demuestra la implementación de inyección de dependencias:

- **Interfaces**: Definen `User`, `UserRepository` y `UserService`
- **Repository**: Implementa el acceso a datos (simulado con un array)
- **Service**: Implementa la lógica de negocio utilizando el repositorio
- **Controller**: Maneja las solicitudes HTTP y utiliza el servicio

## Ejecución del Proyecto

```bash
# Instalar dependencias
npm install

# Modo desarrollo (con recarga automática)
npm run dev

# Compilar TypeScript
npm run build

# Ejecutar versión compilada
npm start
```

## Endpoints API

- `GET /users`: Obtiene todos los usuarios
- `GET /users/:id`: Obtiene un usuario por ID
- `GET /users/email/:email`: Obtiene un usuario por correo electrónico
- `POST /users`: Crea un nuevo usuario

## Ventajas de Awilix

- **Desacoplamiento**: Las clases no necesitan conocer las implementaciones concretas
- **Testabilidad**: Facilita el mock de dependencias para pruebas
- **Mantenibilidad**: Reduce el acoplamiento entre componentes
- **Escalabilidad**: Permite añadir nuevos módulos fácilmente

