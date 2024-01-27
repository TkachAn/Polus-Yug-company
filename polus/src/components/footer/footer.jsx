import s from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={s.wrapper}>
      <div className="container">
        {/* <h1 className={s.h1}>Footer</h1> */}
        <div className={s.flex}>
          <section className={s.address}>
            <h2>address</h2>
            <div className={s.content}>
              <p className={s.text}>вул. 12 Поздовжня, 63.</p>
              <p className={s.text}>54028, м. Миколаїв.</p>
							<p className={s.text}>абонентська скринька : 174</p>
							<br/>
              <p className={s.text}>тел.: +380(512)71-16-90</p>
              <p className={s.text}>e-mail: sales@polus-ug.mk.ua</p>
            </div>
          </section>
          <section className={s.socials}>
            <h2>socials</h2>
            <div className={s.content}>
              <ul className={s.flexSocial}>
                <li>
                  <a href="https://about.instagram.com/">
                    <svg className={s.instagram}>
										{/* <use href="./images/icon/m-defs.svg#s-instagram"></use> */}
										<use href="./icon/defs.svg#s-instagram"></use>
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="https://twitter.com/">
                    <svg className={s.twitter}>
                      <use href="./icon/defs.svg#s-twitter"></use>
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="https://www.facebook.com/">
                    <svg className={s.facebook}>
                      <use href="./icon/defs.svg#s-facebook"></use>
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/">
                    <svg className={s.linkedin}>
                      <use href="./icon/defs.svg#s-linkedin"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section className={s.subscription}>
            <h2>subscription</h2>
            <form className={s.content}>
						<div className={s.flexSub}>

              <input
                className={s.name}
                type="text"
                name="name"
                placeholder="ваше имя"
              />
              <input
                className={s.email}
                type="email"
                name="email"
                placeholder="info@devstudio.com"
              />
              <button className={s.btnSubmit} type="submit">подписаться</button>
						</div>
              <p></p>
            </form>
          </section>
        </div>
      </div>
    </footer>
  );
};
