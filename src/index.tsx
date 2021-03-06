import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';

import ObjectValueView from './object-value-view/object-value-view';
import ArrayValueView from './array-value-view/array-value-view';
import AtomValueView from './atom-value-view/atom-value-view';

export type ValueType =
  | 'undefined'
  | 'object'
  | 'boolean'
  | 'number'
  | 'string'
  | 'function'
  | 'symbol'
  | 'bigint'
  | 'null'
  | 'array';

export interface JsValueViewProps {
  value: any;
  summary?: boolean;
  disabledExpand?: boolean;
}

export default function JsValueView(props: JsValueViewProps) {
  const { value, summary = false, disabledExpand = false } = props;
  const [valueType, setValueType] = useState<ValueType>('undefined');

  useEffect(() => {
    if (Array.isArray(value)) {
      setValueType('array');
    } else {
      let valueType: ValueType = typeof value;

      if (valueType === 'object' && !value) {
        valueType = 'null';
      }

      setValueType(valueType);
    }
  }, [value]);

  let view;
  if (valueType === 'array') {
    view = <ArrayValueView value={value} disabledExpand={disabledExpand} summary={summary} />;
  } else if (valueType === 'object') {
    view = <ObjectValueView value={value} disabledExpand={disabledExpand} summary={summary} />;
  } else {
    view = <AtomValueView value={value} valueType={valueType} />;
  }

  return <div className={styles.valueView}>{view}</div>;
}
