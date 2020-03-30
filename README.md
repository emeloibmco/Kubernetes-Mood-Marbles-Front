# Kubernetes-Mood-Marbles

[![Apache License](https://img.shields.io/badge/license-Apache%202.0-orange.svg)](http://www.apache.org/licenses/LICENSE-2.0)
[![GitHub](https://img.shields.io/github/release/emeloibmco/Kubernetes-Mood-Marbles.svg?color=green)](https://github.com/emeloibmco/Kubernetes-Mood-Marbles/releases)

Repositorio para la aplicación Mood Marbles basada en la práctica _agile_ del mismo nombre.

[Haz click para visualizar el resultado de la siguiente guia](http://moodmarblesfcol.mybluemix.net/)

---

## 🏰 **Arquitectura**

El siguiente diagrama muestra la arquitectura de la aplicación usando los servicios de [IBM Cloud](https://cloud.ibm.com), [Cloud Foundry]() y [IBM Kubernetes Service](https://cloud.ibm.com/kubernetes/clusters)

![Mood Marbles Architecture](https://raw.githubusercontent.com/emeloibmco/Kubernetes-Mood-Marbles/master/Images/Mood_Marbles_Arch.png)

---

## :rocket: **Despliegue de Aplicacion Angular en Cloud Foundry** :cloud:

### Prerequisitos:

- Cuenta IBM Cloud
- [IBM Cloud CLI](https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started&locale=en)
- [Angular CLI](https://angular.io/cli)

### Agregar archivos necesarios de configuración

Se debe ejecutar el comando `ibmcloud dev enable` para descargar los archivos de configuración para el ambiente Cloud Foundry. <br/> **Nota:** Para conocer más información sobre esta instrucción visitar [Documentación IBM Cloud CLI](https://cloud.ibm.com/docs/cli/idt?topic=cloud-cli-idt-cli#enable)

### Compilar aplicación Angular

Se debe **compilar** el código TypeScript, generando así la carpeta de archivos distribuibles `dist` preparados para un ambiente de produción. Las opciones de este comando se encuentran en la [documentación de Angular CLI sobre el párametro build](https://angular.io/cli/build)

`ng build --aot --prod`

### Archivo manifest.yml

Necesitamos editar el archivo manifest.yml, generado anteriormente, para definir la ruta de despliegue y el servidor a usar. En este caso, nuestro archivo va a quedar de la siguiente manera:

```YAML
applications:
  - name: moodmarblesfcol
    memory: 256M
    buildpack: staticfile_buildpack
    path: dist

```

- **name**: el nombre de la aplicación debe ser único, ya que de este se deriva la ruta de acceso.
- **memory**: según la naturaleza de nuestra cuenta IBM Cloud podemos asignar más memoria a nuestra aplicación, en megabytes **M**.
- **buildpack**: hace referencia al tipo de aplicación que se desea desplegar en Cloud Foundry, esta asignación prontamente se va a retirar por lo que en siguientes pasos se mostrará una advertencia.
- **path**: carpeta en la que están nuestros archivos de despliegue

### Push a Cloud Foundry

Para realizar los siguientes comandos debemos estar en la ruta raiz de nuestra aplicación, donde están los archivos package.json, manifest.yml y .cfignore.

- Conectar nuestro entorno con el ambiente Cloud Foundry de IBM Cloud:<br/>
  `ibmcloud target --cf`<br/>
- Definir nuestro grupo de recursos: <br/>
  `ibmcloud target --g Default`
- Finalmente podemos ejecutar el comando que se encargará de subir y compilar nuestra aplicación en la nube: <br/>
  `ibmcloud cf push`

El resultado de los pasos anteriores se verá reflejado en nuestra página de IBM Cloud, en la sección de recursos, más específicamente, Cloud Foundry. Donde podemos acceder a nuestra aplicación en Visit App URL

![Dashboard IBM Cloud](https://raw.githubusercontent.com/emeloibmco/Kubernetes-Mood-Marbles/master/Images/Aplicacion_en_IBM_Cloud.png)

## 🚀 **Despliegue de Backend en IBM Kubernetes Service (IKS)** 📦

El código y la documentación de la aplicación está en su respectivo [repositorio](https://github.com/emeloibmco/Kubernetes-Mood-Marbles-Backend)

Para más información consultar [IBM Docs](https://cloud.ibm.com/docs)
