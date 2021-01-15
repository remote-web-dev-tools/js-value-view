import React, { MouseEvent, useMemo, useRef, useState } from 'react';
import classnames from 'classnames';
import styles from './array-value-view.module.scss';
import JsValueView from '../js-value-view';

export interface ArrayViewProps {
  value: any[];
  summary?: boolean;
  disabledExpand?: boolean;
}

const ArrayValueView = (props: ArrayViewProps) => {
  const { disabledExpand, summary, value } = props;

  const lengthRef = useRef(value.length);
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = (e: MouseEvent) => {
    e.stopPropagation();

    if (disabledExpand) return;

    setShowDetails((prevState) => !prevState);
  };

  const handleClickExpandArea = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const SummaryView = useMemo(
    () => (
      <div className={styles.summary}>
        <span>Array(</span>
        <span>{lengthRef.current}</span>
        <span>)</span>
      </div>
    ),
    [value]
  );

  const InlineView = useMemo(
    () => (
      <div className={styles.inline}>
        <span className={styles.inlineLength}>{lengthRef.current}</span>
        <span>[</span>
        {value.map((item, index) => (
          <span className={styles.inlineItem} key={index}>
            <JsValueView value={item} disabledExpand summary />
            {index === lengthRef.current - 1 ? null : <span>,</span>}
          </span>
        ))}
        <span>]</span>
      </div>
    ),
    [value]
  );

  const DetailsItem = ({ index, value }: { value: any; index: string | number }) => (
    <div className={styles.detailsItem} key={index}>
      <span className={styles.key}>{index}</span>
      <span className={styles.colon}>:</span>
      <span className={styles.value}>
        <JsValueView value={value} />
      </span>
    </div>
  );

  const DetailsView = useMemo(
    () => (
      <div className={styles.details} onClick={handleClickExpandArea}>
        {value.map((item, index) => (
          <DetailsItem value={item} index={index} key={index} />
        ))}
        <DetailsItem value={lengthRef.current} index={'length'} />
      </div>
    ),
    [value]
  );

  return (
    <div
      className={classnames(['array-value-view', styles.wrap], {
        [styles.disabledExpand]: disabledExpand,
        [styles.showDetails]: showDetails,
      })}
      onClick={handleShowDetails}
    >
      {summary ? SummaryView : InlineView}
      {showDetails ? DetailsView : null}
    </div>
  );
};

export default ArrayValueView;
