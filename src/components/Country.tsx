import countries from "@site/src/data/countries.json";

// 'tw' → '🇹🇼'
function CountryEmoji({ iso }) {
  const country = countries[iso.toUpperCase()];
  return <span title={country.name}>{country.emoji}</span>;
}

// 'tw' → 'Taiwan'
function CountryNameEn({ iso }) {
  const country = countries[iso.toUpperCase()];
  return <>{country.name}</>;
}

type CountryProps = {
  iso: string;
  emoji?: boolean;
  name?: boolean;
};

// 'tw' → '🇹🇼 Taiwan'
export default function Country({
  iso,
  emoji = true,
  name = true,
}: CountryProps) {
  return (
    <>
      {emoji && <CountryEmoji iso={iso} />}
      {emoji && name && " "}
      {name && <CountryNameEn iso={iso} />}
    </>
  );
}
