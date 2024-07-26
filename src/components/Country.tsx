import countries from "@site/src/data/countries.json";

// 'tw' → '🇹🇼'
export function CountryEmoji({ iso }): JSX.Element {
  const country = countries[iso.toUpperCase()];
  return <span title={country.name}>{country.emoji}</span>;
}

// 'tw' → 'Taiwan'
export function CountryNameEn({ iso }): JSX.Element {
  const country = countries[iso.toUpperCase()];
  return <>{country.name}</>;
}

// 'tw' → '🇹🇼 Taiwan'
export default function Country({ iso }): JSX.Element {
  return (
    <>
      <CountryEmoji iso={iso} /> <CountryNameEn iso={iso} />
    </>
  );
}
