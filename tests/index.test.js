
const test = require("ava")
const mesa = require("./../src/mesa.js")
const pedido = require("./../src/pedido.js")

test ("Creacion mesa", t => {
	let mesa1 = new mesa.Mesa(1, 5, false, true)
	t.is((typeof mesa1), "object")
})

test ("Creacion pedido", t => {
	let mesa1 = new mesa.Mesa(1, 5, false, true)
	let plato1 = new pedido.Pedido(10, "Postre", 1, 5)
	t.is((typeof plato1), "object")
})


test ("Cambiar mesa", t => {
	let mesa2 = new mesa.Mesa(1, 5, false, true);
	mesa2.setMesa(2);
	t.is(mesa2.getMesa(), 2)
})

test ("Cambiar numero personas", t => {
	let mesa2 = new mesa.Mesa(1, 10, false, true);
	mesa2.setPersonas(10);
	t.is(mesa2.getPersonas(), 10)
})

test ("Cambiar cuenta", t => {
	let mesa2 = new mesa.Mesa(1, 10, true, true);
	mesa2.setCuenta(true)
	t.is(mesa2.getCuenta(), true)
})


test ("Incluir pedido", t => {
	let mesa2 = new mesa.Mesa(1, 10, false, true);
	mesa2.incluirPedido(54, "Postre", 1, 5)
	t.is(mesa2.getPedidos().length, 1)
})

test ("Cambiar Pedido", t => {
	let mesa2 = new mesa.Mesa(1, 5, false, true)
	let plato1 = new pedido.Pedido(10, "Postre", 1, 5)
	mesa2.setPedidos([])
	resultado=JSON.stringify([])==JSON.stringify(mesa2.getPedidos())
	t.is(resultado, true)
})

test ("Borrar pedido", t => {
	let mesa2 = new mesa.Mesa(1, 10, false, true);
	mesa2.incluirPedido(54, "Postre", 1, 5)
	mesa2.incluirPedido(4, "Principal", 2, 7)
	mesa2.borrarPedido(1)
	t.is(mesa2.getPedidos().length, 1)
})

test ("Consulta si una mesa está ocupada", t => {
	let mesa2 = new mesa.Mesa(1, 5, false, true)
	mesa2.setOcupada(true)
	t.is(mesa2.getOcupada(), true)
})

test ("Incluir ingredientes a evitar", t => {
	let mesa2 = new mesa.Mesa(1, 10, false, true);
	mesa2.incluirPedido(54, "Postre", 1, 5, ["Ingrediente1", "Ingrediente2"])
	t.is(mesa2.getPedidos()[0].getIngredientesEvitar().length, 2)
})


test ("Dar propina al finalizar servicio", t => {
	let mesa2 = new mesa.Mesa(1, 10, false, true);
	mesa2.incluirPedido(54, "Postre", 1, 5, ["Ingrediente1", "Ingrediente2"])
	mesa2.incluirPedido(4, "Postre", 1, 10)
	mesa2.incluirPedido(44, "Postre", 1, 5, ["Ingrediente1", "Ingrediente2"])
	mesa2.darPropina(5)
	t.is(mesa2.sumaPrecioTotal(), 25)
})

test ("Comprobar que hay propina", t => {
	let mesa2 = new mesa.Mesa(1, 10, false, true);
	mesa2.incluirPedido(4, "Postre", 1, 10)
	t.is(mesa2.hayPropina(), false)
})


test ("Incluir comentario opcional plato", t => {
	let mesa2 = new mesa.Mesa(1, 10, false, true);
	mesa2.incluirPedido(54, "Postre", 1, 5, ["Ingrediente1", "Ingrediente2"], "Para compartir")
	t.is(mesa2.getPedidos()[0].getComentarioOpcionalPlato(), "Para compartir")
})


test("Comprueba lo que tiene que pagar cada persona", t=> {
	let mesa2 = new mesa.Mesa(1, 10, false, true);
	mesa2.incluirPedido(54, "Plato1", 1, 5, ["Ingrediente1", "Ingrediente2"], "Vacio", 1)
	mesa2.incluirPedido(4, "Plato2", 2, 15, ["Ingrediente1", "Ingrediente2"], "Vacio", 2)
	mesa2.incluirPedido(98, "Postre", 2, 1.2, ["Ingrediente1", "Ingrediente2"], "Vacio", 1)
	mesa2.incluirPedido(33, "Postre", 1, 5, ["Ingrediente1"], "Vacio", 1)
	total = [ { usuario: 1, precioTotal: 11.2 }, { usuario: 2, precioTotal: 15 } ];
	resultado=JSON.stringify(total)==JSON.stringify(mesa2.pagarPorSeparado())
	t.is(resultado,true)
})

test ("Comprobar el número de usuarios que hay en una mesa", t=> {
	let mesa2 = new mesa.Mesa(1, 10, false, true);
	mesa2.incluirPedido(34, "Plato3", 1, 3, ["Ingrediente1", "Ingrediente2"], "Vacio", 1)
	mesa2.incluirPedido(98, "Postre", 2, 1.2, ["Ingrediente1", "Ingrediente2"], "Vacio", 2)
	t.is(mesa2.pagarPorSeparado().length, 2)
})

test ("Calcula el precio que tiene que pagar uno de los usuarios", t => {
	let mesa2 = new mesa.Mesa(1, 10, false, true);
	// Usuario 1 Precio = 15
	mesa2.incluirPedido(54, "Plato1", 1, 5, ["Ingrediente1", "Ingrediente2"], "Vacio", 1)
	mesa2.incluirPedido(33, "Postre", 1, 5, ["Ingrediente1"], "Vacio", 1)
	mesa2.incluirPedido(78, "Plato4", 1, 2, ["Ingrediente1", "Ingrediente2"], "Vacio", 1)
	mesa2.incluirPedido(34, "Plato3", 1, 3, ["Ingrediente1", "Ingrediente2"], "Vacio", 1)
	// Usuario 2 Precio = 11.2
	mesa2.incluirPedido(4, "Plato2", 2, 10, ["Ingrediente1", "Ingrediente2"], "Vacio", 2)
	mesa2.incluirPedido(98, "Postre", 2, 1.2, ["Ingrediente1", "Ingrediente2"], "Vacio", 2)
	t.is(mesa2.pagarPorSeparado()[0].precioTotal, 15)
})
