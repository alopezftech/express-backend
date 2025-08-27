Definición de los scripts en tu package.json:

"dev": "ts-node-dev [index.ts](http://_vscodecontentref_/0)"
Ejecuta el proyecto en modo desarrollo usando ts-node-dev, que compila y reinicia automáticamente el servidor cuando detecta cambios en los archivos TypeScript.

"start": "node [index.js](http://_vscodecontentref_/1)"
Inicia la aplicación usando Node.js, ejecutando el archivo JavaScript compilado ubicado en index.js. Este comando se usa normalmente en producción, después de compilar el código TypeScript.

"tsc": "tsc"
Ejecuta el compilador de TypeScript (tsc) para transpilar todos los archivos .ts a .js según la configuración del proyecto.

"test": "echo \"Error: no test specified\" && exit 1"
Muestra un mensaje de error indicando que no hay pruebas definidas y termina el proceso con un código de error. Es un placeholder hasta que agregues tests.


// eslintrc.json : 

    - npx eslint src/**/*.ts => Analizar todos los archivos ts en la carpeta src

// Plantilla backend:
    - TS
    - Express
    - Montar en el propio index un crud básico con un objeto "example" para pruebas
    - Montar un unums con nun params


RUTAS ENDPOINTS: 

 - /api/errors

 - /api/diaries
