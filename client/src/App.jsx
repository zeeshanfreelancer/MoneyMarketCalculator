import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Finance from './pages/Finance'
import Header from './pages/Header'
import "./app.css"
import Footer from './pages/Footer/Footer'
import CompoundInterestCalculator from './CompoundInterestCalculator'
import SimpleInterestCalculator from './pages/calculator/SimpleInterestCalculator'
import DailyCompoundCalculator from './pages/calculator/DailyCompound'
import ForexCompoundCalculator from './pages/calculator/ForexCompound'
import APYCalculator from './pages/calculator/APYCalculator'
import CAGRCalculator from './pages/calculator/CAGRCalculator'
import FutureValueCalculator from './pages/calculator/FutureValueCalculator'
import SavingsCalculator from './pages/savingcalculators/SavingsCalculator'
import InvestmentCalculator from './pages/savingcalculators/InvestmentCalculator'
import HowLongToSaveCalculator from './pages/savingcalculators/HowLongToSaveCalculator'
import HowLongWillMoneyLast from './pages/savingcalculators/HowLongWillMoneyLast'
import IRRCalculator from './pages/savingcalculators/IRRCalculator'
import MoneyMarketCalculator from './pages/calculator/MoneyMarketCalculator'
import SavingsGoalCalculator from './pages/savingcalculators/SavingsGoalCalculator'
import SIPCalculator from './pages/calculator/SIPCalculator'
import StockAverageCalculator from './pages/calculator/StockAverageCalculator'
import HourlyToSalaryCalculator from './pages/Hourly/HourlyToSalaryCalculator'
import SalaryToHourlyCalculator from './pages/calculator/SalaryToHourlyCalculator'
import TimeAndHalfCalculator from './pages/calculator/TimeAndHalfCalculator'
import OvertimeCalculator from './pages/calculator/OvertimeCalculator'
import LoanCalculator from './pages/loan/LoanCalculator'
import LoanPayoffCalculator from './pages/loan/calculatePayoff'
import AmortizationCalculator from './pages/loan/calculateAmortization'
import BoatLoanCalculator from './pages/loan/BoatLoanCalculator'
import CarLoanCalculator from './pages/loan/CarLoanCalculator'
import CashBackCalculator from './pages/loan/CashBackCalculator'
import CreditCardPayoffCalculator from './pages/loan/CreditCardPayoffCalculator'
import HowmuchTrillion from './pages/Hourly/HowmuchTrillion'
import WalkAMile from './pages/Hourly/WalkAMile'
import StepsToMiles from './pages/Hourly/StepsToMiles'
import SquareFootageCalculator from './pages/Hourly/SquareFootageCalculator'
import MarginCalculator from './pages/Hourly/MarginCalculator'
import PricePerSquareFootCalculator from './pages/Hourly/PricePerSquareFootCalculator'
import MillionToBillionConverter from './pages/Hourly/MillionToBillionConverter'






function App() {
  return (
    <BrowserRouter >
      <div className="app">
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/finance" element={<Finance /> } />
        <Route path="/CompoundInterestCalculator" element={<CompoundInterestCalculator /> } />
        <Route path="/SimpleInterestCalculator" element={<SimpleInterestCalculator /> } />
        <Route path="/DailyCompoundCalculator" element={<DailyCompoundCalculator /> } />
        <Route path="/ForexCompoundCalculator" element={<ForexCompoundCalculator /> } />
        <Route path="/APYCalculator" element={<APYCalculator /> } />
        <Route path="/CAGRCalculator" element={<CAGRCalculator /> } />
        <Route path="/FutureValueCalculator" element={<FutureValueCalculator /> } />
        <Route path="/SavingsCalculator" element={<SavingsCalculator /> } />
        <Route path="/InvestmentCalculator" element={<InvestmentCalculator /> } />
        <Route path="/HowLongToSaveCalculator" element={<HowLongToSaveCalculator /> } />
        <Route path="/HowLongWillMoneyLast" element={<HowLongWillMoneyLast /> } />
        <Route path="/IRRCalculator" element={<IRRCalculator /> } />
        <Route path="/MoneyMarketCalculator" element={<MoneyMarketCalculator /> } />
        <Route path="/SavingsGoalCalculator" element={<SavingsGoalCalculator /> } />
        <Route path="/SIPCalculator" element={<SIPCalculator /> } />
        <Route path="/StockAverageCalculator" element={<StockAverageCalculator /> } />
        <Route path="/HourlyToSalaryCalculator" element={<HourlyToSalaryCalculator /> } />
        <Route path="/SalaryToHourlyCalculator" element={<SalaryToHourlyCalculator /> } />
        <Route path="/TimeAndHalfCalculator" element={<TimeAndHalfCalculator /> } />
        <Route path="/OvertimeCalculator" element={<OvertimeCalculator /> } />
        <Route path="/LoanCalculator" element={<LoanCalculator /> } />
        <Route path="/LoanPayOff" element={<LoanPayoffCalculator /> } />
        <Route path="/AmortizationCalculator" element={<AmortizationCalculator /> } />
        <Route path="/BoatLoanCalculator" element={<BoatLoanCalculator /> } />
        <Route path="/CarLoanCalculator" element={<CarLoanCalculator /> } />
        <Route path="/CashBackCalculator" element={<CashBackCalculator /> } />
        <Route path="/CreditCardPayoffCalculator" element={<CreditCardPayoffCalculator /> } />
        <Route path="/HowmuchTrillion" element={<HowmuchTrillion /> } />
        <Route path="/WalkAMile" element={<WalkAMile /> } />
        <Route path="/StepsToMiles" element={<StepsToMiles /> } />
        <Route path="/SquareFootageCalculator" element={<SquareFootageCalculator /> } />
        <Route path="/MarginCalculator" element={<MarginCalculator /> } />
        <Route path="/PricePerSquareFootCalculator" element={<PricePerSquareFootCalculator /> } />
        <Route path="/MillionToBillionConverter" element={<MillionToBillionConverter /> } />

  














        






        







      </Routes>

      <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App