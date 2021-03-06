package api.dtos;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class PokemonTypeDto {
    private Long id;

    @NotNull
    @Size(max = 50)
    private String title;

    public PokemonTypeDto() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
