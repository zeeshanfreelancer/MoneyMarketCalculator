import React, { useState } from 'react';
import "../pages/Home/home.css";
import searchLogo from "../assets/searchLogo.png";
import graph from "../assets/graph.png"
import database from "../assets/database.png"
import bmi from "../assets/bmi.png"
import ruler from "../assets/ruler.png"
import ankl from "../assets/ankl.png"
import ultrasound from "../assets/ultrasound.png"
import square from "../assets/squrae.png"
import per from "../assets/percent.png"
import cooking from "../assets/cooking.png"
import cookie from "../assets/cookie.png"
import area from "../assets/area.png"
import height from "../assets/height.png"
import SearchNavigator from '../SearchNavigator';



function Home() {
  console.log(" Bismillah HasbiAllah HU La illaha Illala hu Astagfirullah");

  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', query);
    // Add search logic here
  };


  return (
    <div className='homepage'>
      <div>
      <h2 className='free'>Free Calculators and Converters</h2>
      <p className='p1'>
        An extensive collection of free, highly-rated online calculators and converters covering finance, construction, education, health, cooking and math for everyday use.
      </p>
      <form className="quick-search-form" onSubmit={handleSubmit}>
        <label htmlFor="search">Quick Search:</label>
        <br />
        <div className='search'>
          <SearchNavigator  className='search-input' />
          
          <br />
          <img className='searchimg' src={searchLogo} />
        </div>
      </form>
      <div>
        <div className='fc'>
          <h2 className='h2-fc'>Financial Calculators</h2>
        </div>
        <p className='p2'>
          A suite of financial calculators to assist with projections for savings, investments, loans, mortgages and small business calculations.
        </p>
      </div>
      <div className='mainFC'>
         <a className='mainlink' href='/CompoundInterestCalculator'>
        
        <div className='mainfcf'>
           
          <div> <img src={graph} /></div>
          <div className='mainfcff'>
            <h6>Compound Interest Calculator</h6>
            <p className='p4'>Use our popular compound interest calculator to determine the future value of your savings or investments over time. </p>
          </div>
          
          
        </div>
    </a>
     <a className='mainlink' href='/LoanCalculator'>
        <div className='mainfcf'>
          <div style={{ marginTop: 20 }}><img src={database} /></div>
          <div className='mainfcff'>
            <h6>Loan Calculator</h6>
            <p className='p4'>Calculate repayments for personal loans, student loans and mortgages. You can also incoperate extra payments. </p>
          </div>
        </div>
</a>
      </div>
      
      <div className='CI'>
        <div>
          
          <div className='ci-link-div'><a href='/CompoundInterestCalculator' className='ci-link'>Compound Interest (Daily)</a></div>
          <div className='ci-link-div'><a href='/APYCalculator' className='ci-link'>APY Calculator</a></div>
          <div className='ci-link-div'><a href='/CashBackCalculator' className='ci-link'>Cash Back Calculator</a></div>
          <div className='ci-link-div'><a href='/HowLongToSaveCalculator' className='ci-link'>How Long to Save</a></div>
          <div className='ci-link-div'><a href='/IRRCalculator' className='ci-link'>Interest Rate Calculator</a></div>
          <div className='ci-link-div'><a href='/LoanPayOff' className='ci-link'>Loan Payoff Calculator</a></div>
          <div className='ci-link-div'><a href='/MoneyMarketCalculator' className='ci-link'>MMA Calculator</a></div>
          <div className='ci-link-div'><a href='/' className='ci-link'>Pay Raise Calculator</a></div>
          <div className='ci-link-div'><a href='/' className='ci-link'>Price Per Square Foot</a></div>
          <div className='ci-link-div'><a href='/SimpleInterestCalculator' className='ci-link'>SIP Calculator</a></div>

        </div>
         <div>
          <div className='ci-link-div'><a href='/CompoundInterestCalculator' className='ci-link'>Compound Interest Formula</a></div>
          <div className='ci-link-div'><a href='/CAGRCalculator' className='ci-link'>CAGR Calculator</a></div>
          <div className='ci-link-div'><a href='/ForexCompoundCalculator' className='ci-link'>Forex Compounding</a></div>
          <div className='ci-link-div'><a href='/HowLongWillMoneyLast' className='ci-link'>How Long Will My Money Last</a></div>
          <div className='ci-link-div'><a href='/InvestmentCalculator' className='ci-link'>Investment Calculator</a></div>
          <div className='ci-link-div'><a href='/MarginCalculator' className='ci-link'>Margin Calculator</a></div>
          <div className='ci-link-div'><a href='/PricePerSquareFootCalculator' className='ci-link'>Price Per Square Foot</a></div>
          <div className='ci-link-div'><a href='/SavingsGoalCalculator' className='ci-link'>Savings Goal Calculators</a></div>
          <div className='ci-link-div'><a href='/StockAverageCalculator' className='ci-link'>Stock Average Calculator</a></div>
       

        </div>
         <div>
          <div className='ci-link-div'><a href='/AmortizationCalculator' className='ci-link'>Amortization Calculator</a></div>
          <div className='ci-link-div'><a href='/CarLoanCalculator' className='ci-link'>Car Loan Calculator</a></div>
          <div className='ci-link-div'><a href='/FutureValueCalculator' className='ci-link'>Future Value Calculator</a></div>
          <div className='ci-link-div'><a href='/HourlyToSalaryCalculator' className='ci-link'>Hourly to Salary Calculator</a></div>
          <div className='ci-link-div'><a href='/IRRCalculator' className='ci-link'>IRR Calculator</a></div>
          <div className='ci-link-div'><a href='/MillionToBillionConverter' className='ci-link'>Million to Billion Converter</a></div>
          <div className='ci-link-div'><a href='/OvertimeCalculator' className='ci-link'>Overtime Calculator</a></div>
          <div className='ci-link-div'><a href='/SimpleInterestCalculator' className='ci-link'>Simple Interest Calculator</a></div>
          <div className='ci-link-div'><a href='/SalaryToHourlyCalculator' className='ci-link'>Salary to Hourly Calculator</a></div>
     

        </div>
      </div>
      <div>
        <div className='fc'>
          <h2 className='h2-fc'>Featured Conversions</h2>
        </div>
        <p className='p2'>
          A series of individual converters for popular weight, length, height, area and energy units.
        </p>
      </div>
      <div className='mainFC'>
        <div className='mainfcf'>
          <div><img src={bmi} /></div>
          <div className='mainfcff'>
            <h6>Kilos to Stone & Pounds</h6>
            <p className='p4'>Convert between these popular units of weight in the imperial and metric systems. </p>
          </div>
        </div>
        <div className='mainfcf'>
          <div style={{ marginTop: 20 }}><img src={ruler} /></div>
          <div className='mainfcff'>
            <h6>Centimeters to feet & inches</h6>
            <p className='p4'> Our popular calculator for converting units of heights, length or distance. </p>
          </div>
        </div>

      </div>
      <div className='CI'>
        <div>
          <div className='ci-link'>Grams to Pounds </div>
          <div className='ci-link'>Centimeter to inches</div>
          <div className='ci-link'>Feet to Meter</div>
          <div className='ci-link'>Hetrz to Second</div>
          <div className='ci-link'>Inches to Feet</div>
          <div className='ci-link'>Microgram to mg</div>
          <div className='ci-link'>Newton-Meters to ft lb</div>
          <div className='ci-link'>Square Feet to Cubic Feet</div>
          <div className='ci-link'>Watts to Amps</div>
         

        </div>
         <div>
          <div className='ci-link'>Kilos to Pounds</div>
          <div className='ci-link'>Cubic Yards to Tons</div>
          <div className='ci-link'>Gallons to Ounces</div>
          <div className='ci-link'>Inch-pounds to ft-lb</div>
          <div className='ci-link'>Liters to Gallons</div>
          <div className='ci-link'>Lumens to Watts</div>
          <div className='ci-link'>Milligram to Grams </div>
          <div className='ci-link'>Ounces and Pounds</div>
          <div className='ci-link'>Square Feet to Cubic Yarss</div>
          

        </div>
         <div>
          <div className='ci-link'>Stone to Pounds</div>
          <div className='ci-link'>Feet to Inches</div>
          <div className='ci-link'>Gallons to Pounds</div>
          <div className='ci-link'>Inches to Centimeters</div>
          <div className='ci-link'>Liter to Ounces</div>
          <div className='ci-link'>Meters to Feet & Inches</div>
          <div className='ci-link'>Millimeters to Inces</div>
          <div className='ci-link'>Square Feet to Acres</div>
          <div className='ci-link'>Square Feet to Acres</div>
          

        </div>
      </div>
      <div>
        <div className='fc'>
          <h2 className='h2-fc'>Health</h2>
        </div>
        <p className='p2'>
         A small collection of health calculators, from BMI and BMR through to pregnancy and exercise.
        </p>
      </div>
      <div className='mainFC'>
        <div className='mainfcf'>
          <div><img style={{marginTop: 20, width: 70}} src={ankl} /></div>
          <div className='mainfcff'>
            <h6>Steps to Miles Calculator</h6>
            <p className='p4'>Calculate how many miles you've walked and how many calories you've burned for your walk or run.</p>
          </div>
        </div>
        <div className='mainfcf'>
          <div style={{ marginTop: 15 }}>
            <img style={{marginTop: -5}} src={ultrasound} /></div>
          <div className='mainfcff'>
            <h6>Pregnancy Calculator</h6>
            <p className='p4'>Use our calculator to work out your possible due date and dee the key milestones on your pregnancy journey.</p>
          </div>
        </div>

      </div>
       <div className='CI'>
        <div>
          <div className='ci-link'>BMI  Calculator</div>
          <div className='ci-link'>Kilojoules to Calories</div>
          <div className='ci-link'>Steps to Km Calculator</div>
        </div>
         <div>
          <div className='ci-link'>BMR Calculator</div>
          <div className='ci-link'>Miles to Steps Calculator</div>
          <div className='ci-link'>Sobriety Calculator</div>
        </div>
         <div>
          <div className='ci-link'>How Many Steps in a Mile</div>
          <div className='ci-link'>Steps to Calories</div>
          <div className='ci-link'>WHR Calculator</div>

        </div>
      </div>
      <div>
        <div className='fc'>
          <h2 className='h2-fc'>Handy and Fun</h2>
        </div>
        <p className='p2'>
         A collection of handy calculators for DIY construction projects as well as math calculators and a selection of tools for calculating dates.
        </p>
      </div>
      <div className='mainFC'>
        <div className='mainfcf'>
          <div><img src={square} /></div>
          <div className='mainfcff'>
            <h6>Square Footage Calculator</h6>
            <p className='p4'>Work out the Square footage of an area for flooring, landscaping, carpets, or other construction projeccts.</p>
          </div>
        </div>
        <div className='mainfcf'>
          <div style={{ marginTop: 20 }}>
            <img src={per} /></div>
          <div className='mainfcff'>
            <h6>Percentage Calculator</h6>
            <p className='p4'>Work Out Percentage inscreases, decreases or differences for tax, gratitude, discounts, gradies or more.</p>
          </div>
        </div>

      </div>
       <div className='CI'>
        <div>
          <div className='ci-link'>Age Calculator</div>
          <div className='ci-link'>CBM Calculator</div>
          <div className='ci-link'>Cubic Yards Calculator</div>
          <div className='ci-link'>Days From Today</div>
          <div className='ci-link'>Density Calculator</div>
          <div className='ci-link'>Genaration Calculator</div>
          <div className='ci-link'>How Many Flooring do I Need</div>
          <div className='ci-link'>MPGe Calculator</div>
          <div className='ci-link'>Roman Numerals</div>
          <div className='ci-link'>Uni Grade Calculator</div>
        </div>
         <div>
          <div className='ci-link'>Age Difference Calculator</div>
          <div className='ci-link'>Chronological Age</div>
          <div className='ci-link'>Date Calculator</div>
          <div className='ci-link'>Days Calculator</div>
          <div className='ci-link'>Electricity Cost Calculator</div>
          <div className='ci-link'>Gravel Calculator</div>
          <div className='ci-link'>LED Saving Calculator</div>
          <div className='ci-link'>Mulch Calculator</div>
          <div className='ci-link'>Slg Flgs Calculator</div>
        </div>
         <div>
          <div className='ci-link'>Birthday Calculator</div>
          <div className='ci-link'>Cubic Feet Calculator</div>
          <div className='ci-link'>Days Between Dates</div>
          <div className='ci-link'>Decimal to Fraction (Daily)</div>
          <div className='ci-link'>Fractions Calculator</div>
          <div className='ci-link'>Hex to Decimal Calculator</div>
          <div className='ci-link'>Miles Per KWH Calculator</div>
          <div className='ci-link'>Percentage Change</div>
          <div className='ci-link'>Final Grade Calculator</div>

          
        </div>
      </div>
      <div>
        <div className='fc'>
          <h2 className='h2-fc'>Cooking Calculators</h2>
        </div>
        <p className='p2'>
         A suite of recipe calculators to help you with converting between metric and imperial units when baking or cooking.
        </p>
      </div>
      <div className='mainFC'>
        <div className='mainfcf'>
          <div><img style={{width: 70, marginTop:20}} src={cooking} /></div>
          <div className='mainfcff'>
            <h6>Cooking Convertor</h6>
            <p className='p4'>Use this recipe conveter to quickly convert between all common units involved in cooking.</p>
          </div>
        </div>
        <div className='mainfcf'>
          <div style={{ marginTop: 20 }}>
            <img style={{width: 70, }} src={cookie} /></div>
          <div className='mainfcff'>
            <h6>Cups to Grams</h6>
            <p className='p4'>Convert easily between cups and grams using the handy conversion tool.</p>
          </div>
        </div>

      </div>
       <div className='CI'>
        <div>
          <div className='ci-link'>Air Fryer Converter Compound Interest (Daily)</div>
          <div className='ci-link'>Cups to ml</div>
          <div className='ci-link'>Gram to Cups</div>
          <div className='ci-link'>Gram to Teaspoons</div>
          <div className='ci-link'>Ounces to mL</div>
          <div className='ci-link'>Pounds and Cups</div>
          <div className='ci-link'>Teaspoons to Grams</div>
        </div>
         <div>
          <div className='ci-link'>Baking Conversions</div>
          <div className='ci-link'>Cups to Ounces</div>
          <div className='ci-link'>Gram to Ounces</div>
          <div className='ci-link'>mL to Grams</div>
          <div className='ci-link'>Oven Temperatures</div>
          <div className='ci-link'>Quarts to Cups</div>
          <div className='ci-link'>Teaspoons to ml</div>
        </div>
         <div>
          <div className='ci-link'>Butter Converter</div>
          <div className='ci-link'>Cups to Tablespoons</div>
          <div className='ci-link'>Gram to tablespoons</div>
          <div className='ci-link'>Ounces to Grams</div>
          <div className='ci-link'>Pints to Cups</div>
          <div className='ci-link'>Tablespoons to Teaspoons</div>
         
        </div>
      </div>

      <div>
        <div className='fc'>
          <h2 className='h2-fc'>Unit Conversions</h2>
        </div>
        <p className='p2'>
         A series of unit converters for area, energy, fuel consumption, length & distance, volume, weight and more.
        </p>
      </div>
      <div className='mainFC'>
        <div className='mainfcf'>
          <div><img style={{marginTop: 20}} src={area} /></div>
          <div className='mainfcff'>
            <h6>Area Convertor</h6>
            <p className='p4'>Convert between acres, square centimeters, squzre feet, square miles and other units of area. </p>
          </div>
        </div>
        <div className='mainfcf'>
          <div style={{ marginTop: 20 }}>
            <img src={height} /></div>
          <div className='mainfcff'>
            <h6>Height Converter</h6>
            <p className='p4'>Use this converter to change imperial measurement of height into metric and vice versa.</p>
          </div>
        </div>

      </div>
       <div className='CI'>
        <div>
          <div className='ci-link'>Acceleration Converter</div>
          <div className='ci-link'>Fuel Economy Calculator</div>
          <div className='ci-link'>Power Converter</div>
          <div className='ci-link'>Velocity Converter </div>
          <div className='ci-link'>Weight Converter</div>
       
        </div>
         <div>
          <div className='ci-link'>Data Storage Converter</div>
          <div className='ci-link'>Length and Distance</div>
          <div className='ci-link'>Pressure Converter</div>
          <div className='ci-link'>Volume Converter</div>
          <div className='ci-link'>Weight to Volume</div>
         
        </div>
         <div>
          <div className='ci-link'>Energy Converter</div>
          <div className='ci-link'>Mass & Weight Converter</div>
          <div className='ci-link'>Time Converter</div>
          <div className='ci-link'>Water Weight Calculator</div>
         
        </div>
      </div>

      <div>
        <h1 className='freecalh1'>Are the calculators on our site free to use?</h1>
        <p className='hp5'>
          Yes, all the online calculators on The Calculator Site are free for you to use at your convenience. Our website is funded by the advertising we feature on our pages.
          <br />
          <br />
          We hope you find our calculators useful. You can learn more about The Calculator Site and the causes we support (tree planting) on our about page.
        </p>
      </div>
        </div>
        <div className='popularFeature'>
          <h1 style={{fontSize: 25, color: 'grey', marginBottom: 30}}> Popular Features </h1>
          <div className='popularfmain'>
            <div className='num'>1</div>
            <div className='numtext'><a className='sidelinks' href='/HowmuchTrillion'> How Much is a TRILLION?</a></div>
          </div>
           <div className='popularfmain'>
            <div className='num'>2</div>
            <div className='numtext'><a className='sidelinks' href='/WalkAMile'> How Long Does it Take to Walk a Mile?</a></div>
          </div>
          <div className='popularfmain'>
            <div className='num'>3</div>
            <div className='numtext'> <a className='sidelinks' href='/StepsToMiles'>How Many Miles is 10,000 Steps?</a></div>
          </div>
          <div className='popularfmain'>
            <div className='num'>4</div>
            <div className='numtext'><a className='sidelinks' href='/StepsToMiles'> How to Calculate Square Footage?</a></div>
          </div>
          <div className='popularfmain'>
            <div className='num'>5</div>
            <div className='numtext'><a className='sidelinks' href='/SquareFootageCalculator'> How Long Will it Take to Save?</a></div>
          </div>
        </div>
    </div>
  )
}

export default Home