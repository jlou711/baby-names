export interface ISearchBar {
  input: string;
  onChange: (value: string) => void;
}

export function SearchBar(props: ISearchBar): JSX.Element {
  return (
    <>
      <label htmlFor="search-bar">Search bar </label>
      <input
        type="text"
        id="search-bar"
        value={props.input}
        onChange={(e) => props.onChange(e.target.value)}
      ></input>
    </>
  );
}
