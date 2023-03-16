# Prueba tecnica 

Esta es una prueba tecnica que se compone de una API desarrolada en ASP.NET 6 API conectada
a una base de datos relacional MYSQL



## Ejecutar el Front usando Docker

1 - docker build -t frontapp .
```sh
    nos situamos en el directorio raiz del front(frontTest) y creamos la imagen .
```
2 - docker run -dp 8050:80 --name containerfront frontapp 
```sh
    Despues de crear la imagen ejecutamos este comando para crear el contenedor
```
```sh
    Despues de realizados estos pasos podemos acceder a la aplicacion por el puerto 8050 (http://localhost:8050)
```

## Ejecutar Backend

Puedes correr la API realizada en ASP.NET y la base de datos de la siguiente manera en la raiz del proyecto:

1 - Migracion de base de datos con  EntityFrameworkCore con los siguientes comandos en la consola de administrador de paquetes NuGet:

```sh
    Add-Migration v1.0 - database update
    De igual manera la base de datos estara alojada en el repositorio
```

2 - Ejecutar API
```sh
    En la raiz del proyecto ejecutar dotnet build
    Despues ejecutar dotnet run
```
