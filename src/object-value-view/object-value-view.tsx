import React, { useMemo, useState, MouseEvent, useEffect } from 'react';
import styles from './object-value-view.module.scss';
import classnames from 'classnames';
import Index from '../index';

export interface ObjectViewProps {
  value: Record<string, any>;
  summary?: boolean;
  disabledExpand?: boolean;
}

const ObjectValueView = (props: ObjectViewProps) => {
  const { value, disabledExpand, summary } = props;
  const [showDetails, setShowDetails] = useState(false);
  const [keys, setKeys] = useState(Object.keys(value));

  useEffect(() => {
    setKeys(Object.keys(value));
  }, [value]);

  const handleShowDetails = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (disabledExpand) return;

    setShowDetails((prevState) => !prevState);
  };

  const handleClickDetails = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  /* display: {a: 1, b: {...}, c: Array(3)} */
  const InlineView = useMemo(
    () => (
      <div className={styles.inlineView}>
        <span>{'{'}</span>
        {keys.map((key, i) => (
          <span key={key} className={styles.inlineViewItem}>
            <span className={styles.key}>{key}</span>
            <span className={styles.colon}>:</span>
            <span className={styles.value}>
              <Index value={value[key]} summary disabledExpand />
            </span>
            {i !== keys.length - 1 ? <span className={styles.comma}>,</span> : null}
          </span>
        ))}
        <span>{'}'}</span>
      </div>
    ),
    [value]
  );

  /* display: {...} */
  const SummaryView = useMemo(() => <div className={'summary-view'}>{'{...}'}</div>, [value]);

  /**
   * display:
   *   a: 1,
   *   b: {a: 1},
   *   c: (3) [1, 2, 3]
   */
  const DetailsView = useMemo(
    () => (
      <div className={styles.detailsView} onClick={handleClickDetails}>
        {keys.map((key) => (
          <div key={key} className={styles.detailsViewItem}>
            <span className={styles.key}>{key}</span>
            <span className={styles.colon}>:</span>
            <span className={styles.value}>
              <Index value={value[key]} />
            </span>
          </div>
        ))}
      </div>
    ),
    [value]
  );

  return (
    <div
      className={classnames(['object-value', styles.wrap], {
        [styles.disabledShowDetails]: disabledExpand,
        [styles.showDetails]: showDetails,
      })}
      onClick={handleShowDetails}
    >
      {summary ? SummaryView : InlineView}
      {showDetails ? DetailsView : null}
    </div>
  );
};

export default ObjectValueView;
