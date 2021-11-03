import { babyNames } from "./data/baby-names";
import { compareBabyNames } from "./utils/compareBabyNames";

function App(): JSX.Element {
  const sortNames = babyNames.sort(compareBabyNames);
  return (
    <div>
      {sortNames.map((x, i) => {
        return x.sex === "m" ? (
          <p key={i} className="boy-name">
            {x.name}
          </p>
        ) : (
          <p key={i} className="girl-name">
            {x.name}
          </p>
        );
      })}
    </div>
  );
}

export default App;
