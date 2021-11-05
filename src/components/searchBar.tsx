export interface ISearchBar {
  input: string;
  onChange: (value: string) => void;
}

export function SearchBar(props: ISearchBar): JSX.Element {
  return (
    <input
      placeholder="Search for a name.."
      type="text"
      id="search-bar"
      value={props.input}
      onChange={(e) => props.onChange(e.target.value)}
    ></input>
  );
}
