import s from "./page.module.css";

export const Home = () => {
  return (
    <div className={s.wrapper}>
      <div className="container">
        <article>
          <h1 className={s.h1}>Home page</h1>
          <section className={s.flex}>
						{/* <div className={s.diva}></div> */}
            <p className={s.text}>
              k.ugflgoiy; importii Mollit ea eu ea exercitation nostrud laboris
              reprehenderit velit laborum sit cillum incididunt. Enim mollit non
              dolor eiusmod sunt. Anim occaecat cillum exercitation laboris
              aliquip. Cillum non do laboris excepteur aliqua laboris et elit
              excepteur laborum incididunt. Minim qui veniam nisi Lorem et sint
              eiusmod officia ea consequat deserunt Lorem ad occaecat. Lorem
              consectetur ut mollit ipsum minim in. 'u'pup
            </p>
            <p className={s.text}>
              Qui laborum aliquip aute laborum pariatur tempor voluptate laboris
              consequat aute duis duis. Laboris laborum pariatur pariatur
              tempor. Magna non exercitation laborum laboris incididunt nulla
              nulla officia minim ullamco Lorem irure minim.
            </p>
            <p className={s.text}>
              Qui laborum aliquip aute laborum pariatur tempor voluptate laboris
              consequat aute duis duis. Laboris laborum pariatur pariatur
              tempor. Magna non exercitation laborum laboris incididunt nulla
              nulla officia minim ullamco Lorem irure minim.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};
