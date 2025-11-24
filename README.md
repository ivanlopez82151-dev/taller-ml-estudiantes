# 🎓 Predictor de Rendimiento Estudiantil

Aplicación web de Machine Learning para predecir el rendimiento académico de estudiantes utilizando modelos de regresión lineal y logística.

![ML Student Predictor](https://img.shields.io/badge/ML-Student%20Predictor-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![HTML5](https://img.shields.io/badge/HTML5-CSS3-orange)

## 🚀 Demo en Vivo

Visita la aplicación: [GitHub Pages](#) *(próximamente)*

## 📋 Características

- **Regresión Lineal**: Predice la nota final del estudiante (escala 0-20)
- **Regresión Logística**: Predice si el estudiante aprobará el curso
- Interfaz moderna y responsive
- Modelos pre-entrenados en formato JSON
- Sin dependencias externas (JavaScript vanilla)

## 🛠️ Tecnologías

- HTML5
- CSS3 (Gradientes, Animaciones)
- JavaScript (ES6+)
- Machine Learning (Modelos exportados)

## 📊 Variables de Entrada

El modelo utiliza las siguientes características:

- **age**: Edad del estudiante (15-25 años)
- **studytime**: Tiempo de estudio semanal en horas (0-20)
- **absences**: Número de ausencias
- **G2**: Nota del segundo periodo (0-20)

## 🎯 Modelos

### Regresión Lineal
Predice la nota final usando la fórmula:
```
Nota = 0.85 + (0.1 × age) + (1.2 × studytime) - (0.05 × absences) + (0.92 × G2)
```

### Regresión Logística
Predice la probabilidad de aprobar usando función sigmoide:
```
P(aprobar) = sigmoid(-2.5 + (0.05 × age) + (0.8 × studytime) - (0.04 × absences) + (0.7 × G2))
```

## 🚀 Uso Local

1. **Clona el repositorio**:
```bash
git clone https://github.com/tu-usuario/taller-ml-estudiantes.git
cd taller-ml-estudiantes
```

2. **Inicia un servidor local**:

Con Python:
```bash
python -m http.server 8000
```

Con Node.js:
```bash
npx http-server -p 8000
```

Con PHP:
```bash
php -S localhost:8000
```

3. **Abre tu navegador** en `http://localhost:8000`

## 📁 Estructura del Proyecto

```
taller-ml-estudiantes/
├── index.html              # Interfaz principal
├── js/
│   └── app.js             # Lógica de predicción
├── models/
│   ├── linear_regression_model.json
│   └── logistic_regression_model.json
└── README.md
```

## 💡 Ejemplo de Uso

1. Ingresa los datos del estudiante en el formulario
2. Haz clic en "📊 Predecir Nota Final" para obtener la nota estimada
3. O haz clic en "🎯 ¿Aprueba el curso?" para ver la probabilidad de aprobar

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

Creado como parte del taller de Machine Learning

## 🙏 Agradecimientos

- Modelos basados en datasets de rendimiento estudiantil
- Inspirado en aplicaciones educativas de ML

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
