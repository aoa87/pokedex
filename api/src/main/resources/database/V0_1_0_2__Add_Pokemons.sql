INSERT INTO pokemons (id, name, description, favourite, evolution)
VALUES  (1, 'Pikachu', 'Pikachu is a pokemon of type electric and the favourite of Ash', true, 'Raichu'),
        (2, 'Bulbasaur', 'Bulbasaur is a plant pokemon and one of the most important of the serie', false, 'Ivysur');

INSERT INTO pokemon_has_types(pokemon_id, pokemon_types_id)
VALUES  (1, 11),
        (2, 14);