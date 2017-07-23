package api.repositories;

import api.models.PokemonType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PokemonTypeRepository extends JpaRepository<PokemonType, Long> {
    PokemonType findOneByTitle(String title);
}
