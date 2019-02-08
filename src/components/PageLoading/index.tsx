import React from 'react';
import { formatMessage } from 'umi/locale';
import styles from './index.less';

interface ILoaderProps {
  spinning?: boolean;
  fullScreen?: boolean;
}

const Loader = (props: ILoaderProps) => {
  return (
    <div>
      <div className={styles.warpper}>
        <div className={styles.inner} />
        <div className={styles.text}>{formatMessage({ id: 'component.pageloading.loading' })}</div>
      </div>
    </div>
  );
};

Loader.defaultProps = {
  spinning: true,
  fullScreen: false,
};

export default Loader;
