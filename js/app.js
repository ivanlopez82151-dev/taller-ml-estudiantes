// Función de activación sigmoide
function sigmoid(x) {
    return 1 / (1 + Math.exp(-Math.max(-700, Math.min(700, x)))); // Evita overflow
}

// Cargar modelo desde JSON
async function loadModel(type) {
    try {
        const response = await fetch(`models/${type}_regression_model.json`);
        if (!response.ok) throw new Error(`No se pudo cargar el modelo: ${type}`);
        return await response.json();
    } catch (error) {
        console.error(error);
        alert("Error al cargar el modelo. Verifica la carpeta 'models'.");
        return null;
    }
}

// Predicción
async function predict(type) {
    const model = await loadModel(type);
    if (!model) return;

    const inputs = {};
    for (const feature of model.features) {
        const el = document.getElementById(feature);
        if (!el) {
            alert(`Falta el campo: ${feature}`);
            return;
        }
        const val = parseFloat(el.value);
        if (isNaN(val)) {
            alert(`Valor inválido en: ${feature}`);
            return;
        }
        inputs[feature] = val;
    }

    // Calcular predicción lineal
    let y = model.intercept;
    for (let i = 0; i < model.features.length; i++) {
        const f = model.features[i];
        y += model.coef[i] * inputs[f];
    }

    let resultText = "";
    if (type === "linear") {
        const nota = Math.max(0, Math.min(20, y)); // Asegurar rango 0-20
        resultText = `📚 Nota final estimada: <strong>${nota.toFixed(2)}</strong>`;
    } else if (type === "logistic") {
        const prob = sigmoid(y);
        const aprueba = prob >= 0.5 ? "✅ SÍ" : "❌ NO";
        resultText = `🎓 ¿Aprueba el curso? ${aprueba}<br>Probabilidad: <strong>${(prob * 100).toFixed(1)}%</strong>`;
    }

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = resultText;
    resultDiv.style.display = "block";
}