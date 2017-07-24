package api.repositories;

import api.models.Pokemon;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PokemonRepository extends JpaRepository<Pokemon, Long> {
    Optional<Pokemon> findOneById(Long pokemonId);
    Optional<Pokemon> findOneByName(String name);
    List<Pokemon> findAllByFavourite(Boolean favourite);
}