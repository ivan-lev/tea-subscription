import './Main.scss';

// React hooks
import { useState, useEffect } from 'react';

// Redux
import { useSelector } from 'react-redux';
import type { RootState } from '../../slices';

// Components
import Calculator from '../Calculator/Calculator';
import Faq from '../Faq/Faq';

// Utils

// Variables

export default function Main() {
  const [isListCopied, setIsListCopied] = useState<boolean>(false);
  const showFaq = useSelector((state: RootState) => state.content.showFaq);

  useEffect(() => {
    setTimeout(() => isListCopied && setIsListCopied(false), 1500);
  }, [isListCopied]);

  return (
    <main className="content">
      { !showFaq ? <Calculator/> : <Faq/> }
    </main>
  );
}
