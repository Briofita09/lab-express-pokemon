import express, { response } from "express";
import { allPokemon } from "./data.js";

const app = express();
app.use(express.json());

export { app };

app.get('/pokemon', (req, res, next) => {
  res.send(allPokemon)
})

app.get('/search', (req, res, next) => {
  const { name, type = "" } = req.query

  const foundPokemon = allPokemon.filter((searchPokemon) => {
    return type.length ? 
    searchPokemon.types.includes(type.toLowerCase()) : 
    searchPokemon.name.toLowerCase().includes(name.toLowerCase())
  })

  if (foundPokemon.length === 0) {
    res.status(404)
    return res.send("Pokemon not found! Try adding more details.")
  }
  return res.json(foundPokemon)
})

app.get('/pokemon/:id', (req, res, next) => {
  const { id } = req.params

  const foundPokemon = allPokemon.find((element) => {
    return element.id === Number(id)
  })

  if (!foundPokemon) {
    res.status(404)
    res.send("Sorry, we do not have this Pokemon in our list!")
  }

  res.send([foundPokemon])
})