import './TeaDescription.scss';

import type { Teas } from '../../types/teas';

export default function TeaDescription({ teas }: { teas: Teas }) {
  return (
    <>
      <p>Чай, который будет в рассылке:</p>
      <ul className="tea-description">
        {teas.map(tea => {
          return (
            <li key={tea.id} className="tea-description__row">
              {tea.description}
            </li>
          );
        })}
      </ul>
    </>
  );
}
