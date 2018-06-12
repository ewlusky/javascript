const advisor = Object.create({}, {
    company: {
        value: "Company",
        enumerable: true,
        writable: true
    },

    specialty: {
        value: "Being Special",
        enumerable: true,
        writable: true
    },

    name: {
        value: "Namie McMoniker",
        enumerable: true
    },

    portfolio: {
        value: {
            "AAPL": {
                "shares": 152,
                "valuation": 30400
            },
            "MSFT": {
                "shares": 290,
                "valuation": 49300
            }
        },
        writable: true
    },

    worth: {
        value: function () {
            let totes = 0
            for (stock in this.portfolio){
                // console.log(stock)
                totes += this.portfolio[stock].valuation
            }
            totes += this.capital
            console.log("This person is worth:", totes, 'dollareedoos!')
            return totes
        }
    },

    capital: {
        value: 200000,
        writable: true
    },

    purchase: {
        value: function(ticker, quant, price){
            const total = quant*price
            this.portfolio[ticker] = {
                "shares": quant,
                "valuation": total
            }
            this.capital -= total
        }
    },

    sell: {
        value: function(ticker, quant, price){
            let tempQuant = quant
            if (this.portfolio[ticker]){
                const portQuant = this.portfolio[ticker].shares
                if ((portQuant - tempQuant) >= 0){
                    this.portfolio[ticker].shares -= tempQuant
                    this.portfolio[ticker].valuation = price*this.portfolio[ticker].shares
                    this.capital += price*quant
                } else{
                    alert('Not Enough Stock, Could Not Sell')
                }
                if (this.portfolio[ticker].shares === 0){
                    delete this.portfolio[ticker]
                }
            } else{
                alert('That is not a valid stock.')
            }       
        }
    }

})