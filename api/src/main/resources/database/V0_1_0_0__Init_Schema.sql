DROP TABLE IF EXISTS pokemon_has_types;
DROP TABLE IF EXISTS pokemon_types;
DROP TABLE IF EXISTS pokemons;

CREATE TABLE pokemons (
    id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(24) NOT NULL,
    description VARCHAR(255) NOT NULL,
    favourite BIT(1) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT UK_pokemon_name UNIQUE (name)
);

CREATE TABLE pokemon_types (
    id BIGINT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT UK_pokemon_types_title UNIQUE (title)
);

CREATE TABLE pokemon_has_types (
    pokemon_id BIGINT NOT NULL,
    pokemon_types_id BIGINT NOT NULL,
    PRIMARY KEY (pokemon_id, pokemon_types_id),
    CONSTRAINT FK_pokemon_has_types_ref_pokemon_types FOREIGN KEY (pokemon_types_id) REFERENCES pokemon_types (id),
    CONSTRAINT FK_pokemon_has_types_ref_pokemons FOREIGN KEY (pokemon_id) REFERENCES pokemons (id)
);