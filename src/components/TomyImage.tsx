import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

interface TomyImageProps {
  filename: string;
  alt: string;
  children?: React.ReactNode;
}

export default function Image({ filename, alt, children }: TomyImageProps) {
  const { siteConfig } = useDocusaurusContext();
  const src = `${siteConfig.customFields.imageBaseURL}${filename}`;
  return (
    <figure>
      <picture>
        <img src={src} alt={alt} />
      </picture>
      {children && <figcaption>{children}</figcaption>}
    </figure>
  );
}
