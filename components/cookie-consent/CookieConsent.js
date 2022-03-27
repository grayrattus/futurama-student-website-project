import {useEffect, useState} from 'react';
import styles from './CookieConsent.module.css';

export default function CookieConsent() {
  const [showCookies, setShowCookies] = useState(false);

  const acceptCookiesCallback = () => {
    document.cookie = "accepted_cookies=yes;"
    setShowCookies(false);
  }

  useEffect(() => {
      if (document.cookie.indexOf("accepted_cookies=") < 0) {
	setShowCookies(true);
      }
  }, []);

  return showCookies && <div className={styles.cookieConsent}>
    Korzystając z serwisu zgadzasz się na wykorzystywanie przez nas:

    <h2>Ciasteczek technicznych lub funkcjonalnych</h2>

    <p>Niektóre pliki cookie zapewniają prawidłowe działanie niektórych części witryny i poznanie preferencji użytkownika. Umieszczając funkcjonalne pliki cookie, ułatwiamy odwiedzanie naszej strony internetowej. W ten sposób nie musisz wielokrotnie wprowadzać tych samych informacji podczas odwiedzania naszej strony internetowej i, na przykład, przedmioty pozostają w koszyku, dopóki nie zapłacisz. Możemy umieścić te pliki cookie bez Twojej zgody.</p>
    <button onClick={acceptCookiesCallback} >Zgadzam się</button>
  </div>
}
