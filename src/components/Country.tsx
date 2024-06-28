import countries from "@site/src/data/countries.json";

export default function Country({ iso, noEmoji }): JSX.Element {
  console.log(iso);
  const country = countries[iso.toUpperCase()];
  return (
    <>
      {!noEmoji && (
        <>
          <span title={country.name}>{country.emoji}</span>{" "}
        </>
      )}
      {country.name}
    </>
  );
}
