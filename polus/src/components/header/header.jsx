import s from "./header.module.css";

export const Header = () => {
  return (
    <header className={s.wrapper}>
      <div className="container">
        <div className={s.flex}>
          <section className={s.section}>
            <div className={s.logo}>polus yug</div>
          </section>
          <section className={s.section}>
            <div className={s.phone}>
              tel.: <span>+380(512)711690</span>
            </div>
          </section>
          <section className={s.section}>
						<div className={s.burger}>
							<span></span>
						</div>
            <nav className={s.navigation}>
              <ul className={s.flexNav}>
                <li className={s.item}>
                  <a href="/">home</a>
                </li>
                <li>
                  <a href="/products">products</a>
                </li>
                <li>
                  <a href="/downloads">hdownloads</a>
                </li>
                <li>
                  <a href="/about">abuot us</a>
                </li>
                <li>
                  <a href="/contacts">contacts</a>
                </li>
              </ul>
            </nav>
          </section>
        </div>
      </div>
    </header>
  );
};
