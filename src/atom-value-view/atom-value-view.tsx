import React, { useEffect, useState } from 'react';
import styles from './atom-value-view.module.scss';
import { ValueType } from '../index';

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

export default AtomValueView;
