import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// IMPORTS D'IMAGES
import Image1 from '@site/static/img/Image-intro-1.png';
import Image2 from '@site/static/img/Image-intro-2.png';
import Image3 from '@site/static/img/Image-intro-3.png';

const FeatureList = [
  {
    title: 'Apprendre Facilement',
    image: Image1,
    description: (
      <>
        Firedocs vous permet d'accéder à des fiches de révision
        opérationnelles pour les sapeurs-pompiers, facilitant l'apprentissage
        et la révision des procédures essentielles.
      </>
    ),
  },
  {
    title: 'Concentrez-vous sur l\'essentiel',
    image: Image2,
    description: (
      <>
        Avec des fiches concises et ciblées, Firedocs vous aide à vous concentrer
        sur les informations les plus importantes, optimisant ainsi votre temps
        de révision.
      </>
    ),
  },
  {
    title: 'Testez vos connaissances',
    image: Image3,
    description: (
      <>
        Mettez vos connaissances à l'épreuve avec des quiz et des exercices
        interactifs, vous permettant de renforcer votre compréhension des
        procédures et des techniques essentielles.
      </>
    ),
  },
];

function Feature({title, image, description}) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className="text--center">
        <img src={image} className={styles.featureImage} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
