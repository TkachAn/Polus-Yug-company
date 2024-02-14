import React from "react";
import {Outlet} from "react-router-dom";import s from "./layOut.module.css";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

export function ShareLayout() {
  return (
    <div className={s.vertical}>
      <Header />
      <main className={s.main}>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
		  );
		}
		