import React, { useEffect, useState } from 'react';
import styles from './js-value-view.module.scss';

/**
 * 视察过此项目的 B 站观众（你们有够闲）
 *
 * 爬爬仙
 */

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

export interface ViewProps {
  value: any;
  valueType?: ValueType;
}

export interface JsValueViewProps {
  value: any;
}

const AtomValueView = (props: Required<ViewProps>) => {
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

const ArrayValueView = (props: ViewProps) => {
  return <div>ArrayValueView Work</div>;
};

const ObjectValueView = (props: ViewProps) => {
  return <div>ObjectValueView Work</div>;
};

export default function JsValueView(props: JsValueViewProps) {
  const { value } = props;
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
    view = <ArrayValueView value={value} />;
  } else if (valueType === 'object') {
    view = <ObjectValueView value={value} />;
  } else {
    view = <AtomValueView value={value} valueType={valueType} />;
  }

  return <div className={styles.valueView}>{view}</div>;
}
