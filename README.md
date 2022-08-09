# BARONI Eneas - Curso CODERHOUSE Backend

Desafio 07

eCommerce Backend

## Instalación

1. Forkeá y cloná el repositorio

2. Parado en la raíz del proyecto corré el comando 

   ```
   npm install
   ```
    para instalar todas las dependecias del proyecto


3. Usá 

   ```
   npm node server.js
   ```

    para correr el proyecto, que estará disponible en http://localhost:8080

4. Peticiones en PRODUCTOS
    
    - GET en '/api/productos' para obtener los productos  
    - GET en '/api/productos/:id' para obtener un producto segun id
    - POST en '/api/productos/' para cargar un producto    
        Formato de ejemplo de producto en body:
        ```  
        {
          "name":"teclado", 
          "description":"Teclado para PC",
          "code": "50E55",
          "thumbnail":"alguna url",
          "price":500,
          "stock":50
        }
        ``` 
    - DELETE en '/api/productos/:id' para eliminar un producto segun id 
    - PUT en '/api/productos/:id' para modificar un producto segun id
        Formato de ejemplo de producto en body:  
        ```
        {
          "name":"teclado", 
          "description":"Teclado para PC",
          "code": "50E55",
          "thumbnail":"alguna url",
          "price":500,
          "stock":50
        }
        ```
    
4. Peticiones en CARRITO
    
    - POST en '/api/carrito' para crear un carrito
    - DELETE en '/api/carrito/:id' para eliminar un carrito segun id   
    - GET en '/api/carrito/:id/productos' para obtener los productos de  un carrito segun id
    - POST en '/api/carrito/:id/productos/:idProducto' para cargar un producto en un carrito segun id de carrito y producto
    - DELETE en '/api/carrito/:id/productos/:idProducto' para eliminar un producto de un carrito segun id de carrito y producto


### Autor

Eneas Baroni

2022 - Curso de Backend en CoderHouse