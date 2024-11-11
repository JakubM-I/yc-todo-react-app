import { useSearchParams } from "react-router-dom";
import { StyledForm, StyledInput } from "../../../common/Form/styled";

const SearchForm = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("szukaj")

    const onInputChange = ({ target }) => {
        setSearchParams(target.value.trim() ?
            { szukaj: target.value } :
            searchParams.delete("szukaj"))
    }

    return (
        <StyledForm>
            <StyledInput
                placeholder="Wpisz wyszukiwaną frazę"
                value={query ? query : ""}
                onChange={onInputChange}
            />
        </StyledForm>
    )
};

export default SearchForm;