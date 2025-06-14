import { Icon } from "@iconify/react";
import "@primer/primitives/dist/css/functional/themes/light.css";
import { Button, Link } from "@primer/react";
import { useEffect, useState } from "react";

interface GitHubBadgeProps {
  slug: string;
}

function formatNumber(num: number): string {
  return Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(num);
}

export default function GitHubBadge({ slug }: GitHubBadgeProps) {
  const [count, setCount] = useState(0);

  // Fetch the number of stars from GitHub API
  const fetchStars = async () => {
    try {
      const response = await fetch(`https://api.github.com/repos/${slug}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCount(data.stargazers_count);
    } catch (error) {
      console.error("Error fetching stars:", error);
    }
  };

  // Fetch stars when the slug changes
  useEffect(() => {
    fetchStars();
  }, [slug]);

  return (
    <Button
      as={Link}
      href={`http://github.com/${slug}`}
      target="_blank"
      rel="noopener noreferrer"
      muted={true}
      leadingVisual={<Icon icon="logos:github-icon" inline={true} />}
      count={formatNumber(count)}
    >
      {slug}
    </Button>
  );
}
