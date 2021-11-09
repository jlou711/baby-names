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
      <main>
        <div className="filter_container">
          <SearchBar input={searchText} onChange={setSearchText} />
          <input
            type="radio"
            className="radio_item"
            value=""
            name="item"
            id="neutral"
            onChange={(e) => setGenderSelected(e.target.value)}
          />
          <label className="label_item" htmlFor="neutral">
            <img
              src="https://cdn-icons.flaticon.com/png/512/1996/premium/1996667.png?token=exp=1636387861~hmac=2a65e8aedc7a39c262b24c2d2c327ebc"
              alt="neutral select"
            />
          </label>
          <input
            type="radio"
            className="radio_item"
            value="m"
            name="item"
            id="male"
            onChange={(e) => setGenderSelected(e.target.value)}
          />
          <label className="label_item" htmlFor="male">
            <img
              src="https://cdn-icons-png.flaticon.com/512/81/81184.png"
              alt="male select"
            />
          </label>
          <input
            type="radio"
            className="radio_item"
            value="f"
            name="item"
            id="female"
            onChange={(e) => setGenderSelected(e.target.value)}
          />
          <label className="label_item" htmlFor="female">
            <img
              src="https://cdn-icons-png.flaticon.com/512/81/81184.png"
              alt="female select"
            />
          </label>
        </div>
        <div className="name_container">
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
        <div className="name_container">
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
      </main>
      <footer>
        <div>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
