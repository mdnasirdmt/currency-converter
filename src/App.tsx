import { useState, useEffect } from "react";
import axios from "axios";
import InputBox from "./components/InputBox";

interface ExchangeRates {
  [key: string]: number;
}

// import useCurrencyInfo from "./hooks/useCurrencyInfo";
// Define your API endpoint for fetching exchange rates
const EXCHANGE_RATE_API = "https://api.exchangerate-api.com/v4/latest/USD";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
  // const [exchangeRates, setExchangeRates] = useState({});

  useEffect(() => {
    // Fetch exchange rates when the component mounts
    axios
      .get(EXCHANGE_RATE_API)
      .then((response) => {
        setExchangeRates(response.data.rates);
      })
      .catch((error) => {
        console.error("Failed to fetch exchange rates:", error);
      });
  }, []);

  const options = Object.keys(exchangeRates);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const convert = () => {
    if (exchangeRates[from] && exchangeRates[to]) {
      const newConvertedAmount =
        (amount / exchangeRates[from]) * exchangeRates[to];
      setConvertedAmount(newConvertedAmount);
    } else {
      console.error("Invalid currency codes for conversion");
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency: string) => {
                  setFrom(currency); // Update 'from' when currency changes
                }}
                selectCurrency={from}
                onAmountChange={(amount: number) => {
                  setAmount(amount);
                }}
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency: string) => {
                  setTo(currency); // Update 'to' when currency changes
                }}
                selectCurrency={to} // Change to 'to'
                onAmountChange={(amount: number) => {
                  setAmount(amount);
                }}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
