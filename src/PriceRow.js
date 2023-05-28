import currencyFormatter from 'currency-formatter';
import React, { useEffect, useState } from "react";

function PriceRow(props) {
  const [priceInCurrency, setPriceInCurrency] = useState('');
  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/c96f02f30dcc0818f8c65ce6/pair/USD/${props.currency}`)
      .then(response => response.json())
      .then(data => {
        const exchange_rate = data.exchange_rate;
        const formattedPrice = currencyFormatter.format(props.price * exchange_rate, { code: props.currency });
        setPriceInCurrency(formattedPrice);
      })
      .catch(error => console.log('error', error));
  }, [props.currency, props.price]);

  return <>{priceInCurrency}</>;
}
export default PriceRow;
