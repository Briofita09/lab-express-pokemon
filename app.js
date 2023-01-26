import express from "express";

import { allPokemon } from "./data.js";

const app = express();
app.use(express.json());

//Aqui vão as minhas funções
const findPokemonByName = name => {
    return allPokemon.find((element) => {
        return element.name === name;
    });
}

const findPokemonByType = type => {
    return allPokemon.filter(element => {
        return element.types
    })
}

app.get('/pokemon', (req, res, next) => {
    res.json(allPokemon);
});

app.get('/pokemon/:id', (req, res, next) =>{
    const { id } = req.params;
    
    const foundPokemon = allPokemon.find(element => {
        return element.id === +id
    })
    res.json(foundPokemon);
});

app.get('/search', (req, res, next) => {
    const { name, type } = req.query

    let result = null
    
    if (name) {
        result = findPokemonByName(name);
    } else if (type) {
        result = findPokemonByType(type)
    }

    res.json(result)
})

export { app };
