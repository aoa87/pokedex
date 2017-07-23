package api.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "pokemons")
public class Pokemon {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Size(min = 4, max = 24)
    @Column(unique = true, nullable = false)
    private String name;

    @NotNull
    @Size(min = 30)
    @Column(nullable = false)
    private String description;

    @NotNull
    @Column(nullable = false)
    private boolean favourite;

    @ManyToMany
    @JoinTable(name = "pokemon_has_types", joinColumns = { @JoinColumn(name = "pokemon_id") }, inverseJoinColumns = { @JoinColumn(name = "pokemon_types_id") })
    private List<PokemonType> types = new ArrayList<>();

    public Pokemon() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isFavourite() {
        return favourite;
    }

    public void setFavourite(boolean favourite) {
        this.favourite = favourite;
    }

    public List<PokemonType> getTypes() {
        return types;
    }

    public void setTypes(List<PokemonType> types) {
        this.types = types;
    }
}
