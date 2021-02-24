/*
 * @Author: your name
 * @Date: 2021-02-14 22:11:10
 * @LastEditTime: 2021-02-24 16:53:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mesonDoc/src/pages/index.js
 */
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Miner[Terminal]',
    imageUrl: 'img/sales.svg',
    description: (
      <>
        Provide services by accessing the network according to standards and obtain tokens
      </>
    ),
  },
  {
    title: 'Client',
    imageUrl: 'img/research.svg',
    description: (
      <>
        Use Meson to accelerate your application and protect it from malicious attacks from the Internet
      </>
    ),
  },
  {
    title: 'Cooperation',
    imageUrl: 'img/marketing.svg',
    description: (
      <>
        Reasonable business model to reach more terminal nodes through Meson
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} style={{width:"50%"}}/>
        </div>
      )}
      <h3 style={{textAlign:'center'}}>{title}</h3>
      <p style={{textAlign:'center'}}>{description}</p>
    </div>
  );
}

class Home extends React.Component {

  constructor(props) {
      super(props);
      // window.location.href="/homepage.html";
      this.props.history.push("/docs")
  }
  render() {
      return (
          <div></div>
      );
  }

// function Home() {
  // const context = useDocusaurusContext();
  // const {siteConfig = {}} = context;
  // return (
  //   <Layout
  //     title={`Hello from ${siteConfig.title}`}
  //     // description="Description will go into a meta tag in <head />">
  //     description="meson.network">
  //     <header className={clsx('hero hero--primary', styles.heroBanner)}>
  //       <div className="container">
  //         <h1 className="hero__title" style={{color:"white"}}>{siteConfig.title}</h1>
  //         <p className="hero__subtitle" style={{color:"white"}}>{siteConfig.tagline}</p>
  //         <div className={styles.buttons}>
  //           <Link
  //             className={clsx(
  //               'button button--outline button--secondary button--lg',
  //               styles.getStarted,
  //             )}
  //             to={useBaseUrl('docs/')}>
  //             Get Started
  //           </Link>
  //         </div>
  //       </div>
  //     </header>
  //     <main>
  //       {features && features.length > 0 && (
  //         <section className={styles.features}>
  //           <div className="container">
  //             <div className="row">
  //               {features.map((props, idx) => (
  //                 <Feature key={idx} {...props} />
  //               ))}
  //             </div>
  //           </div>
  //         </section>
  //       )}
  //     </main>
  //   </Layout>
  // );
}

export default Home;
