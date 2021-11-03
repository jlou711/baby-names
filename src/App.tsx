import { babyNames } from "./data/baby-names";
import { compareBabyNames } from "./utils/compareBabyNames";

function App(): JSX.Element {
  const sortNames = babyNames.sort(compareBabyNames);
  return (
    <div>
      {sortNames.map((x, i) => {
        return <p key={i}>{x.name}</p>;
      })}
    </div>
  );
}

export default App;
