# CI/CD Programación IV

## Universidad Latina de Costa Rica

Proyecto académico desarrollado para el curso **Programación IV** de la **Universidad Latina de Costa Rica**.

Este proyecto consiste en una API de ejemplo desarrollada con **Node.js y Express**, diseñada para demostrar la implementación de procesos de **Integración Continua (CI)** y **Despliegue Continuo (CD)** mediante GitHub Actions, Docker y Render.

## Descripción del proyecto

La aplicación proporciona una API REST con operaciones matemáticas básicas y un endpoint para determinar si un número es primo.

El proyecto incluye tres workflows de GitHub Actions:

* **CI Pipeline:** ejecuta análisis de código, pruebas automatizadas y genera un reporte de cobertura.
* **CD Pipeline:** construye y publica una imagen Docker en GitHub Container Registry y puede activar un despliegue en Render.
* **Matrix Testing:** ejecuta las pruebas utilizando diferentes versiones de Node.js y sistemas operativos.

## Tecnologías utilizadas

* Node.js
* Express
* pnpm
* JavaScript
* Jest
* ESLint
* GitHub Actions
* Docker
* GitHub Container Registry
* Render

## Ejecución local

### Instalar dependencias

```bash
pnpm install
```

### Ejecutar ESLint

```bash
pnpm run lint
```

### Ejecutar pruebas

```bash
pnpm test
```

### Ejecutar pruebas con cobertura

```bash
pnpm test -- --coverage
```

### Iniciar la aplicación

```bash
pnpm start
```

La aplicación estará disponible en:

```text
http://localhost:3000
```

## Endpoints

| Método | Ruta           | Descripción                       |
| ------ | -------------- | --------------------------------- |
| GET    | `/`            | Mensaje de bienvenida             |
| GET    | `/health`      | Verificación del estado de la API |
| POST   | `/sumar`       | Realiza una suma                  |
| POST   | `/restar`      | Realiza una resta                 |
| POST   | `/multiplicar` | Realiza una multiplicación        |
| POST   | `/dividir`     | Realiza una división              |
| GET    | `/primo/:n`    | Determina si un número es primo   |

### Ejemplo de solicitud

Para realizar una suma mediante `/sumar`:

```json
{
  "a": 2,
  "b": 3
}
```

## Workflows de GitHub Actions

### CI Pipeline

Archivo:

```text
.github/workflows/ci.yml
```

El workflow se ejecuta automáticamente mediante `push` en las ramas `main` y `develop`, y mediante Pull Requests dirigidos hacia `main`.

El pipeline realiza:

1. Instalación de dependencias.
2. Análisis de código mediante ESLint.
3. Ejecución de pruebas automatizadas.
4. Generación del reporte de cobertura.
5. Publicación del reporte como artifact de GitHub Actions.

### CD Pipeline

Archivo:

```text
.github/workflows/cd.yml
```

El workflow se ejecuta cuando el **CI Pipeline** finaliza correctamente en la rama `main`.

El proceso realiza:

1. Construcción de la imagen Docker.
2. Publicación de la imagen en GitHub Container Registry.
3. Activación del despliegue en Render mediante un Deploy Hook.

La imagen se publica utilizando una ruta con el siguiente formato:

```text
ghcr.io/usuario/repositorio
```

### Matrix Testing

Archivo:

```text
.github/workflows/matrix.yml
```

Este workflow ejecuta las pruebas automatizadas utilizando diferentes versiones de Node.js y sistemas operativos.

Las versiones utilizadas son:

* Node.js 18
* Node.js 20
* Node.js 22

Las pruebas se ejecutan en diferentes sistemas operativos, incluyendo Ubuntu, Windows y macOS.

El parámetro `fail-fast` está configurado como `false`, permitiendo que las demás combinaciones continúen aunque una de ellas presente un fallo.

## Configuración necesaria para el CD

### Environment `production`

En GitHub:

```text
Settings → Environments → New environment
```

Crear un environment llamado:

```text
production
```

Se recomienda configurar una regla de protección mediante **Required reviewers** para solicitar aprobación antes de ejecutar el despliegue.

### Secret `RENDER_DEPLOY_HOOK`

En GitHub:

```text
Settings - Secrets and variables → Actions
```

Crear un nuevo repository secret llamado:

```text
RENDER_DEPLOY_HOOK
```

El valor corresponde al **Deploy Hook URL** proporcionado por Render.

### GitHub Token

GitHub proporciona automáticamente el `GITHUB_TOKEN` utilizado por el workflow para autenticarse.

El workflow cuenta con los permisos necesarios para publicar la imagen en GitHub Container Registry mediante:

```text
packages: write
```

## Estructura del proyecto

```text
CI-CD-Extra-Clase-II/
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       ├── cd.yml
│       └── matrix.yml
│
├── src/
│   ├── app.js
│   └── calculadora.js
│
├── tests/
│   ├── calculadora.test.js
│   └── app.test.js
│
├── Dockerfile
├── package.json
├── package-lock.json
├── .eslintrc.json
├── .gitignore
└── README.md
```

## Objetivo académico

El objetivo de este proyecto es demostrar la implementación práctica de un flujo de trabajo **CI/CD**, integrando control de versiones, análisis de código, pruebas automatizadas, cobertura de código, construcción de imágenes Docker y procesos automatizados de despliegue.

 
**Universidad Latina de Costa Rica**
**Programación IV**
