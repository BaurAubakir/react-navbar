import { useState, useLayoutEffect } from 'react';

const queries = [
  '(max-width: 280px)',
  '(min-width: 576px) and (max-width: 767px)',
  '(min-width: 768px) and (max-width: 1199px)',
  '(min-width: 1200px)',
];

export const useMatchMedia = () => {
  const mediaQuieriesList = queries.map((query) => matchMedia(query));

  const getValues = () => mediaQuieriesList.map((mql) => mql.matches);

  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const screenHandler = () => setValues(getValues);

    mediaQuieriesList.forEach((mql) =>
      mql.addEventListener('change', screenHandler)
    );

    return () =>
      mediaQuieriesList.forEach((mql) =>
        mql.removeEventListener('change', screenHandler)
      );
  });

  return ['isFold', 'isMobile', 'isTablet', 'isDesktop'].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {}
  );
};
