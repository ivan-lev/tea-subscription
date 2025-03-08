import './Faq.scss';

// Types
import type { QA } from '../../types/qa';

// Redux
import { useDispatch } from 'react-redux';
import { showCalc } from '../../slices/mainContentSlice';

// Rsuite
import 'rsuite/dist/rsuite.min.css';
import { Accordion } from 'rsuite';

// variables
import { faq } from '../../variables/faq';

export default function Faq() {
    const dispatch = useDispatch();

    return (
        <section className='faq'>
            <Accordion>
                { faq.map((faq: QA, i: number) => {
                    return (
                        <Accordion.Panel header={faq.question} eventKey={i}>
                            {faq.answer}
                        </Accordion.Panel>
                    )
                }) }
            </Accordion>
            <button className='button' onClick={() => dispatch(showCalc())}>Назад</button>
        </section>
    );
}
