import { Localization } from '../store/models/localization.model';

export const getLocalizationData = () =>
  fetch('http://localhost:3001/i18n')
    .then<Localization>(response => response.json())
    .catch(() => {
      throw new Error('Destination host unreachable');
    });
