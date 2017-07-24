package api.controllers;

import api.dtos.PokemonDto;
import api.dtos.PokemonTypeDto;
import api.exceptions.BadValueParameterException;
import api.services.PokemonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/pokemons", produces = MediaType.APPLICATION_JSON_VALUE)
public class PokemonController {
    @Autowired
    private PokemonService pokemonService;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<PokemonDto>> getAllPokemons() {
        return ResponseEntity.ok().body(pokemonService.findAll());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<PokemonDto> getPokemon(@PathVariable("id") Long id) {
        return pokemonService.find(id)
                .map((pokemonDto) -> new ResponseEntity<>(pokemonDto, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<PokemonDto> createPokemon(@Valid @RequestBody PokemonDto pokemonDto)
            throws URISyntaxException, BadValueParameterException {

        checkPokemonParameter(pokemonDto, null);
        PokemonDto newPokemonDto = pokemonService.save(pokemonDto);

        return ResponseEntity.created(new URI("/api/pokemons/" + newPokemonDto.getId()))
                .body(newPokemonDto);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<PokemonDto> updatePokemon(@PathVariable("id") Long id,
                                                        @Valid @RequestBody PokemonDto pokemonDto) throws BadValueParameterException {
        checkPokemonParameter(pokemonDto, id);
        pokemonDto.setId(id);
        return pokemonService.update(pokemonDto)
                .map(updatedPokemon -> new ResponseEntity<>(updatedPokemon, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));

    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> deletePokemon(@PathVariable Long id) {
        return pokemonService.delete(id)
                .map(pokemonDto -> new ResponseEntity<>(HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @RequestMapping(value = "/types", method = RequestMethod.GET)
    public ResponseEntity<List<PokemonTypeDto>> getAllTypes() {
        List<PokemonTypeDto> pokemonTypeDtoList = pokemonService.findAllTypes();

        return ResponseEntity.ok()
                .body(pokemonTypeDtoList);
    }

    private void checkPokemonParameter(PokemonDto pokemonDto, Long id) throws BadValueParameterException {
        if(id == null) {
            if (pokemonService.findByName(pokemonDto.getName())
                    .isPresent()) {
                throw new BadValueParameterException("Name of the Pokemon already exists");
            }
        } else {
            Optional<PokemonDto> existingPokemon = pokemonService.findByName(pokemonDto.getName());
            if (existingPokemon.isPresent() && !existingPokemon.get()
                    .getId()
                    .equals(id)) {
                throw new BadValueParameterException("Name of the Pokemon already exists");
            }
        }

        if(pokemonDto.isFavourite() && pokemonService.findAllByFavourite(true).size() == 10) {
            throw new BadValueParameterException("This pokemon can't be set as favourite. Maximum reached (10).");
        }

        if(pokemonDto.getTypes() == null || pokemonDto.getTypes().size() == 0 || pokemonDto.getTypes().size() > 2) {
            throw new BadValueParameterException("A Pokemon must have at least one type and at maximum 2");
        }
    }
}
