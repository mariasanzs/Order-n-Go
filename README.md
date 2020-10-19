# :mag: Order'n'Go :mag:
---
### Proyecto asignatura Infraestructura Virtual de la UGR.

API que gestiona los pedidos y la cuenta de y en cada mesa en un restaurante.

***

## :pencil2: Descripción :pencil2:

En plena era COVID-19 muchos restaurantes se han visto abocados al cierre debido a la incapacidad de mantener a sus empleados ante la crisis venidera y guardar las distancias.
Pero ¿y si sólo requiriésemos de un dispositivo en cada mesa (de cada persona, en principio) en el cual hiciéramos nosotros mismos el pedido?
¿Cuántas veces tenias prisa por que te atendieran o para pedirle al camarero saturado la cuenta?
¿Cuántas veces te has puesto nervioso/a y querias cambiar de eleccion justo cuando el camarero está tomando nota?

---

Con Order'n'Go tú mismo harás el pedido en tu mesa cambiando los platos en el momento que quieras, pedirás tu cuenta cuando quieras y manteniendo las distancias en este año de paranoia 2020 que a saber que más nos trae. El camarero solo tendrá que traer/recoger los platos con lo cual el restaurante sera mas eficiente pudiendo gestionar las mesas más rápido, con la consiguiente mejora del servicio y las ganancias.

---


## :cyclone: Historias de Usuario :cyclone:

Enlace para acceder a las [HU](https://github.com/LCinder/Order-n-Go/issues) establecidas como *issues*.
- [|HU1| - Seleccionar nº personas en mesa](https://github.com/LCinder/Order-n-Go/issues/1) - Como usuario quiero seleccionar el nº de personas a comer en una mesa (y poder modificarlo)
- [|HU2| - Pedir platos](https://github.com/LCinder/Order-n-Go/issues/2) - Como usuario quiero poder realizar cualquier pedido en cualquier momento sin esperas.
- [|HU3| - Pedir cuenta](https://github.com/LCinder/Order-n-Go/issues/3) - Como usuario quiero pagar la cuenta de manera eficiente y rapida.
- [|HU4| - Cambio en el pedido](https://github.com/LCinder/Order-n-Go/issues/4) - Como usuario quiero poder cambiar los platos una vez realizado el pedido (con un breve margen de tiempo).
- [|HU5| - Seleccionar cantidad platos ](https://github.com/LCinder/Order-n-Go/issues/26) - Como usuario quiero cambiar la cantidad de platos a elegir
- [|HU6| - Dar propina](https://github.com/LCinder/Order-n-Go/issues/27) - Como usuario quiero dar propina una vez terminado el servicio
- [|HU7| - Eliminar platos](https://github.com/LCinder/Order-n-Go/issues/28) - Como usuario quiero eliminar pedidos (platos) incluso después de haberlos seleccionado

---

## :globe_with_meridians: Issues y Milestones :globe_with_meridians:

Enlace para acceder a todos los [issues cerrados (ya realizados)](https://github.com/LCinder/Order-n-Go/issues?q=is%3Aissue+is%3Aclosed) y a los [milestones](https://github.com/LCinder/Order-n-Go/milestones) que se dividen en diferentes versiones del proyecto a lo largo de la asignatura

---

## :information_source: Documentación y lenguajes a usar :information_source:

- Enlace a la carpeta [docs](https://github.com/LCinder/Order-n-Go/tree/master/docs) con todos los documentos que contiene entre otros los [pasos a seguir en el proyecto](https://github.com/LCinder/Order-n-Go/blob/master/docs/stepsProyecto.md) y toda la información de las [herramientas necesarias para la creación del servicio](https://github.com/LCinder/Order-n-Go/blob/master/docs/elaboracionProyecto.md) (BBDD, framework test, lenguaje, etc)

- Lenguaje a usar: Se usará *Node.js* debido a las [siguientes razones](https://github.com/LCinder/Order-n-Go/blob/master/docs/herramientas/nodejs.md)
- Gestor de paquetes: Se usará *npm* como gestor debido a las razones que se [detallan aquí](https://github.com/LCinder/Order-n-Go/blob/master/docs/herramientas/npm.md)
- Test: Para la realización de los *test* se ha usado [AVA](https://github.com/avajs/ava), un *framework* poco conocido que supera en tiempo de ejecución a los frameworks de *Node.js* más usados y además permite ejecución asíncrona y está especialmente destinada a proyectos no muy grandes, como es el caso.



---


## :triangular_flag_on_post: Archivo iv.yaml :triangular_flag_on_post:

Enlace al archivo [iv.yaml](https://github.com/LCinder/Order-n-Go/blob/master/iv.yaml)

---

## :thought_balloon: Ideas :thought_balloon:
Enlace para acceder a [todas las ideas](https://github.com/LCinder/Order-n-Go/blob/master/docs/ideas.md) que se me ocurren para el servicio, tanto las realizables como las descartables

---

## :chart_with_upwards_trend: Código :chart_with_upwards_trend:
- Enlace para acceder a la clase  [Mesa](https://github.com/LCinder/Order-n-Go/blob/master/src/mesa.js) 
- Enlace para acceder a la clase  [Pedido](https://github.com/LCinder/Order-n-Go/blob/master/src/pedido.js) 
- Enlace para acceder a la carpeta [sources](https://github.com/LCinder/Order-n-Go/tree/master/src) que contiene todos los archivos necesarios para el mismo.

---

## :hammer: Tests :hammer:

- Como se ha comentado anteriormente, se ha usado [AVA](https://github.com/avajs/ava) para la realización de los test. Se indica además la explicación de [por qué se ha usado AVA](https://github.com/LCinder/Order-n-Go/blob/master/docs/herramientas/avatest.md)

- Se incluye el enlace para acceder al fichero [index.test.js](https://github.com/LCinder/Order-Go/tree/master/tests/index.test.js) que contiene los tests iniciales del *microservicio*
- [Enlace para acceder a la carpeta test](https://github.com/LCinder/Order-n-Go/tree/master/tests) con el fichero  donde se han realizado los mismos e [imagen que demuestra](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/tests1.PNG) que los tests se ejecutan y funcionan.

- En este caso los test no se ejecutan con *Grunt.js* sino con el comando que aparece más abajo. Esto se explica en el siguiente [enlace en el apartado Tareas](https://github.com/LCinder/Order-n-Go/blob/master/docs/elaboracionProyecto.md).

- Los test se ejecutan con el comando:
`npm test`






