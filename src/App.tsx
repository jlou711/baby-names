import { babyNames } from "./data/baby-names";
import { SearchBar } from "./components/searchBar";
import { compareBabyNames } from "./utils/compareBabyNames";
import { useState } from "react";
import { applyNameSearchFilter } from "./utils/applySearchFilter";
import { IBabyNames } from "./IBabyNames";
import { NameButton } from "./components/nameButton";

const sortNames: IBabyNames[] = [...babyNames].sort(compareBabyNames);

function App(): JSX.Element {
  const [searchText, setSearchText] = useState("");
  const [favoriteNames, setFavoriteNamesList] = useState<IBabyNames[]>([]);
  const [genderSelected, setGenderSelected] = useState("");

  function handleFavoriteNames(value: string, add: boolean) {
    if (add) {
      setFavoriteNamesList((favoriteNames) => [
        ...favoriteNames,
        ...babyNames.filter((x) => x.name === value),
      ]);
    } else {
      setFavoriteNamesList((favoriteNames) => [
        ...favoriteNames.filter((x) => x.name !== value),
      ]);
    }
  }
  const filteredNames = applyNameSearchFilter(
    sortNames,
    searchText,
    genderSelected,
    favoriteNames.map((a) => a.name)
  );

  return (
    <>
      <SearchBar input={searchText} onChange={setSearchText} />
      <div>
        <br></br>
        <input
          type="radio"
          id="neutral"
          name="gender_select"
          value=""
          onChange={(e) => setGenderSelected(e.target.value)}
        />
        <label htmlFor="neutral">No Gender</label>
        <br></br>
        <input
          type="radio"
          id="male"
          name="gender_select"
          value="m"
          onChange={(e) => setGenderSelected(e.target.value)}
        />
        <label htmlFor="male">Male</label>
        <br></br>
        <input
          type="radio"
          id="female"
          name="gender_select"
          value="f"
          onChange={(e) => setGenderSelected(e.target.value)}
        />
        <label htmlFor="female">Female</label>
        <br></br>
      </div>
      <div>
        <h1>Favorite Names: </h1>
        {favoriteNames.map((x, i) => {
          return (
            <NameButton
              key={i}
              name={x.name}
              sex={x.sex}
              add={false}
              onClick={handleFavoriteNames}
            ></NameButton>
          );
        })}
      </div>
      <div>
        {filteredNames.map((x, i) => {
          return (
            <NameButton
              key={i}
              name={x.name}
              sex={x.sex}
              add={true}
              onClick={handleFavoriteNames}
            ></NameButton>
          );
        })}
      </div>
    </>
  );
}

export default App;
