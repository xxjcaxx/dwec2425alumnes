function mostrarTestsFallidos(report) {
    console.log('Resumen de los tests fallidos:\n');
    let nTests = 0;
    let failedTests = 0;
    
    // Iterar por los resultados de las pruebas
    report.testResults.forEach(testSuite => {
        console.log(`Test Suite: ${testSuite.name}`);
        testSuite.assertionResults.forEach(assertion => {
            console.log(`  - Título del test: ${assertion.title} resultado: ${assertion.status}`);
            nTests++;
            failedTests+= assertion.status === 'failed' ? 1 : 0;
        });
    });
    console.log(`Nota: ${failedTests/nTests} (${failedTests}/${nTests})`)
  }
  
// Leer el JSON desde la entrada estándar
let input = '';

process.stdin.on('data', chunk => {
  input += chunk; // Acumular los datos
});

process.stdin.on('end', () => {
  try {
    const vitestReport = JSON.parse(input); // Parsear el JSON de la entrada estándar
    mostrarTestsFallidos(vitestReport); // Llamada a la función para mostrar los tests fallidos
  } catch (error) {
    console.error('Error al parsear el JSON:', error.message);
  }
});