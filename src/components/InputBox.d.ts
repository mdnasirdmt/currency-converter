// InputBox.d.ts
import React from 'react';

interface InputBoxProps {
  label: string;
  amount: number;
  currencyOptions: string[];
  onCurrencyChange: (currency: string) => void;
  selectCurrency: string;
  onAmountChange: (amount: number) => void;
}

declare const InputBox: React.FC<InputBoxProps>;

export default InputBox;
