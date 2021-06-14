import React from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import { Input } from './Input';
import './page.css';
import { Img } from './circle-img';

export interface PageProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
  pageName: () => void;
}

export const Page: React.FC<PageProps> = ({ user, onLogin, onLogout, onCreateAccount, pageName }) => (
  <article>
    <Header user={user} pageName={pageName} />
    <section>
      페이지입니다.
        <Input></Input>
        <div className="imgBox">
        <Img></Img>
        <Img></Img>
        <Img></Img>
        </div>
        
    </section>
    <Footer user={user} onLogin={onLogin} onLogout={onLogout}/>
  </article>
);
