import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";

interface TomyImageProps {
  filename: string;
  alt: string;
  children?: React.ReactNode;
}

export default function Image({ filename, alt, children }: TomyImageProps) {
  const { siteConfig } = useDocusaurusContext();
  const src = `${siteConfig.customFields.imageBaseURL}${filename}`;
  return (
    <figure className={clsx("m-0")}>
      <picture>
        <img src={src} alt={alt} />
      </picture>
      {children && <figcaption>{children}</figcaption>}
    </figure>
  );
}
