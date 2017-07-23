package api.services;

import api.dtos.PokemonDto;
import api.dtos.PokemonTypeDto;
import api.mappers.PokemonMapper;
import api.mappers.PokemonTypeMapper;
import api.models.Pokemon;
import api.models.PokemonType;
import api.repositories.PokemonRepository;
import api.repositories.PokemonTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PokemonService {
    @Autowired
    private PokemonRepository pokemonRepository;

    @Autowired
    private PokemonTypeRepository pokemonTypeRepository;

    @Autowired
    private PokemonTypeMapper pokemonTypeMapper;

    @Autowired
    private PokemonMapper pokemonMapper;

    @Transactional(readOnly = true)
    public List<PokemonDto> findAll() {
        List<Pokemon> pokemonList = pokemonRepository.findAll();
        return pokemonMapper.entitiesListToDtosList(pokemonList);
    }

    @Transactional(readOnly = true)
    public Optional<PokemonDto> find(Long id) {
        Optional<Pokemon> pokemon = pokemonRepository.findOneById(id);
        //List<PokemonType> pokemonTypeList = pokemon.get().getTypes();

        return pokemon
                .map(p -> pokemonMapper.entityToDto(p));
    }

    public PokemonDto save(PokemonDto pokemonDto) {
        Pokemon pokemon = pokemonMapper.dtoToEntity(pokemonDto);
        pokemonRepository.save(pokemon);

        return pokemonMapper.entityToDto(pokemon);
    }

    public Optional<PokemonDto> update(PokemonDto pokemonDto) {
        return pokemonRepository.findOneById(pokemonDto.getId())
                .map(pokemon -> {
                    //Update pokemon with dto data
                    pokemonMapper.updateEntityFromDto(pokemonDto, pokemon);
                    pokemonRepository.save(pokemon);
                    return pokemonMapper.entityToDto(pokemon);
                });
    }

    public Optional<PokemonDto> delete(Long id) {
        return pokemonRepository.findOneById(id)
                .map(pokemon -> {
                    pokemonRepository.delete(pokemon);
                    return pokemonMapper.entityToDto(pokemon);
                });
    }

    @Transactional(readOnly = true)
    public Optional<PokemonDto> findByName(String name) {
        return pokemonRepository.findOneByName(name)
                .map(pokemon -> pokemonMapper.entityToDto(pokemon));
    }

    @Transactional(readOnly = true)
    public List<PokemonTypeDto> findAllTypes() {
        return pokemonTypeMapper.entitiesListToDtosList(pokemonTypeRepository.findAll());
    }

    @Transactional(readOnly = true)
    public PokemonType findTypeByTitle(String typeTitle) {
        return pokemonTypeRepository.findOneByTitle(typeTitle);
    }
}
