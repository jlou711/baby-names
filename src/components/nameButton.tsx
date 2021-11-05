interface Props {
  name: string;
  sex: string;
  add: boolean;
  onClick: (value: string, add: boolean) => void;
}

export function NameButton(props: Props): JSX.Element {
  return (
    <button
      className={props.sex === "m" ? "boy-name" : "girl-name"}
      onClick={(e) => props.onClick(e.currentTarget.innerHTML, props.add)}
    >
      {props.name}
    </button>
  );
}
