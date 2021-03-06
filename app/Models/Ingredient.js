import { generateId } from "../Utils/GenerateId.js"

export default class Ingredient {
  constructor(name, pizzaId, id = generateId()) {
    this.id = id
    this.name = name
    this.pizzaId = pizzaId
  }

  get Template() {
    return `<li>${this.name} <i class="fas fa-times ml-2 text-danger" onclick="app.ingredientsController.deleteIngredient('${this.id}')"></i></li>`
  }
}