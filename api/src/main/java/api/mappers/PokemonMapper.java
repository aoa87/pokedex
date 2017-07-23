package api.mappers;

import api.dtos.PokemonDto;
import api.models.Pokemon;
import api.models.PokemonType;
import api.services.PokemonService;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.ReportingPolicy;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public abstract class PokemonMapper {
    @Autowired
    private PokemonService pokemonService;

    public abstract PokemonDto entityToDto(Pokemon entity);

    @Mapping(target = "id", ignore = true)
    public abstract Pokemon dtoToEntity(final PokemonDto dashboardDto);

    public abstract List<PokemonDto> entitiesListToDtosList(List<Pokemon> entities);

    @Mapping(target = "id", ignore = true)
    public abstract void updateEntityFromDto(PokemonDto pokemonDto, @MappingTarget Pokemon pokemon);

    public List<String> stringsFromPokemonTypes(List<PokemonType> pokemonTypeList) {
        List<String> typeList = null;

        if (pokemonTypeList != null) {
            typeList = pokemonTypeList.stream()
                    .map(PokemonType::getTitle)
                    .collect(Collectors.toList());
        }

        return typeList;
    }

    public List<PokemonType> pokemonTypesFromStrings(List<String> typeList) {
        List<PokemonType> pokemonTypeList = null;

        if (typeList != null) {
            pokemonTypeList = typeList.stream()
                    .distinct()
                    .map(title -> pokemonService.findTypeByTitle(title))
                    .collect(Collectors.toList());
        }

        return pokemonTypeList;
    }
}
