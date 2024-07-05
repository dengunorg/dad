import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Technical Documentation",
    Svg: require("@site/static/img/something-that-resembles-coding-and-technical-stuff-mostly-for-w.svg").default,
    description: (
      <>
        Coding standards, design principles
      </>
    )
  },
  {
    title: "Blog",
    Svg: require("@site/static/img/a-diary-or-a-book-cover-resembling-coding-but-simple-maybe-with-.svg").default,
    description: (
      <>
        Our <code>coding</code> adventures!
      </>
    )
  }
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={`row ${styles.features__row}`}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              See our documentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
