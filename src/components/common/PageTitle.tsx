import React, { useEffect } from 'react';

interface IProps {
  title?: string | null;
}

export function PageTitle(props: IProps): JSX.Element {
  const { title } = props;

  useEffect(() => {
    document.title = `${title} | Google Admin`;
  }, []);

  return <></>;
}

PageTitle.defaultProps = {
  title: 'Google Admin',
};
