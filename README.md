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
Luego, es necesario crear el esquema en la base de datos *cohortes*, creada anteriormente.
El script sql para crear el esquema puede encontrarlo [aquí](https://github.com/ealejandro101/cohortes-admin/wiki/Script).

Por último, para iniciar el proyecto, ejecute ``npm run start``.

El proyecto se ejecutará en el localhost, puerto **3000**.

## Importación Base de datos

Para importar la base de datos utilice el script sql para crear la estructutura DDL ubicado en el directorio /doc/ en el archivo cohortes.sql

https://github.com/udearroba/cohortes-api/blob/master/doc/cohortes.sql

Para crear el formulario de curadurias importe el script sql ubicado en el directorio /doc/ en el archivo volcado_cohortes.sql

https://github.com/udearroba/cohortes-api/blob/master/doc/volcado_cohortes.sql

## License
[MIT](https://choosealicense.com/licenses/mit/)
