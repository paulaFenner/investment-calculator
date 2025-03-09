import logoImg from '../assets/investment-calculator-logo.png';

export default function Header() {
  return (
    <header>
      <img
        src={logoImg}
        alt=" Green bag with a golden dollar sign, surrounded by gold coins and bars."
      />
      <h1>Investment Calculator</h1>
    </header>
  );
}
