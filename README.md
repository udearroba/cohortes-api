# Cohortes

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)


## Instalación

Use el manejador de paquetes de Node [npm](https://www.npmjs.com/) para instalar los paquetes necesarios.

```bash
npm install
```

## Uso

Debe tenerse MySQL instalado en la máquina, crearse una base de datos llamada *cohortes* y modificar el archivo **cohortesds.datasource.json** según haya configurado la conexión con la base de datos. Por defecto están los siguientes datos en el archivo.

**src/datasources/cohortesds.datasource.json**

```javascript
{
  "name": "cohortesds",
  "connector": "mysql",
  "url": "mysql://root:123456@localhost/cohortes",
  "host": "localhost",
  "port": 3306,
  "user": "root",
  "password": "123456",
  "database": "cohortes"
}
```
Luego, en el directorio del proyecto ejecute las siguientes líneas.

```python

npm run build # hace las construcciones necesarias al proyecto
npm run migrate # hace la migración de los repositorios basados en los modelos que hay en LoopBack hacia la base de datos
```

Por último, para iniciar el proyecto, ejecute 
```python
npm run start
```
El proyecto se ejecutará en el localhost, puerto **3000**.

## License
[MIT](https://choosealicense.com/licenses/mit/)
