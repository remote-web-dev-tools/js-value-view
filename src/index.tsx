import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import ObjectValueView from './object-value-view/object-value-view';
import ArrayValueView from './array-value-view/array-value-view';

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

export interface AtomViewProps {
  value: any;
  valueType: ValueType;
}

const AtomValueView = (props: AtomViewProps) => {
  const { value, valueType } = props;
  const [showText, setShowText] = useState<string>('');

  useEffect(() => {
    switch (valueType) {
      case 'string':
        setShowText(`"${value}"`);
        break;
      case 'boolean':
      case 'number':
        setShowText(value.toString());
        break;
      case 'undefined':
        setShowText('undefined');
        break;
      case 'null':
        setShowText('null');
        break;
    }
  }, [valueType, value]);

  return <span className={styles[valueType]}>{showText}</span>;
};

export interface JsValueViewProps {
  value: any;
  summary?: boolean;
  disabledExpand?: boolean;
}

export default function Index(props: JsValueViewProps) {
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
