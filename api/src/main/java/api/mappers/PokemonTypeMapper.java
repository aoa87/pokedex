package api.mappers;

import api.dtos.PokemonTypeDto;
import api.models.PokemonType;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public abstract class PokemonTypeMapper {
    public abstract PokemonTypeDto entityToDto(PokemonType entity);

    @Mapping(target = "id", ignore = true)
    public abstract PokemonType dtoToEntity(final PokemonTypeDto dashboardDto);

    public abstract List<PokemonTypeDto> entitiesListToDtosList(List<PokemonType> entities);
}
