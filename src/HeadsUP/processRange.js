
let mapRanges = e => {
    if (e.includes('amber')) {
      return ['limp', 'call-3x']
    }
    if (e.includes('blue')) {
      return ['limp', 'jam']
    }
    if (e.includes('pink')) {
      return ['raise', 'call-jam']
    }
    if (e.includes('light-green')) {
      return ['raise', 'fold']
    }
    if (e.includes('purple')) {
      return ['limp', 'fold']
    }
    if (e.includes('lime')) {
      return ['raise', 'call-3x']
    }
  }

  function findActions(range){
    var actionSet = new Set()
    range.forEach(e => actionSet.add(e))
    return Array.from(actionSet)
  }

var string = '["cell p mdl-color--amber","cell s mdl-color--blue","cell s mdl-color--blue","cell s mdl-color--blue","cell s mdl-color--blue","cell s mdl-color--pink","cell s mdl-color--amber","cell s mdl-color--amber","cell s mdl-color--amber","cell s mdl-color--amber","cell s mdl-color--amber","cell s mdl-color--amber","cell s mdl-color--amber","cell o mdl-color--pink","cell p mdl-color--pink","cell s mdl-color--pink","cell s mdl-color--pink","cell s mdl-color--lime","cell s mdl-color--lime","cell s mdl-color--lime","cell s mdl-color--lime","cell s mdl-color--lime","cell s mdl-color--amber","cell s mdl-color--amber","cell s mdl-color--amber","cell s mdl-color--amber","cell o mdl-color--pink","cell o mdl-color--pink","cell p mdl-color--pink","cell s mdl-color--pink","cell s mdl-color--lime","cell s mdl-color--lime","cell s mdl-color--lime","cell s mdl-color--amber","cell s mdl-color--light-green","cell s mdl-color--light-green","cell s mdl-color--light-green","cell s mdl-color--light-green","cell s mdl-color--light-green","cell o mdl-color--pink","cell o mdl-color--lime","cell o mdl-color--lime","cell p mdl-color--pink","cell s mdl-color--lime","cell s mdl-color--lime","cell s mdl-color--lime","cell s mdl-color--amber","cell s mdl-color--light-green","cell s mdl-color--light-green","cell s mdl-color--light-green","cell s mdl-color--light-green","cell s mdl-color--light-green","cell o mdl-color--pink","cell o mdl-color--lime","cell o mdl-color--lime","cell o mdl-color--lime","cell p mdl-color--pink","cell s mdl-color--lime","cell s mdl-color--lime","cell s mdl-color--amber","cell s mdl-color--light-green","cell s mdl-color--light-green","cell s mdl-color--light-green","cell s mdl-color--light-green","cell s mdl-color--light-green","cell o mdl-color--pink","cell o mdl-color--amber","cell o mdl-color--amber","cell o mdl-color--amber","cell o mdl-color--amber","cell p mdl-color--pink","cell s mdl-color--lime","cell s mdl-color--lime","cell s mdl-color--light-green","cell s mdl-color--light-green","cell s mdl-color--light-green","cell s mdl-color--light-green","cell s mdl-color--deep-purple","cell o mdl-color--pink","cell o mdl-color--light-green","cell o mdl-color--light-green","cell o mdl-color--light-green","cell o mdl-color--light-green","cell o mdl-color--light-green","cell p mdl-color--pink","cell s mdl-color--lime","cell s mdl-color--lime","cell s mdl-color--light-green","cell s mdl-color--light-green","cell s mdl-color--light-green","cell s mdl-color--deep-purple","cell o mdl-color--amber","cell o mdl-color--light-green","cell o mdl-color--light-green","cell o mdl-color--light-green","cell o mdl-color--light-green","cell o mdl-color--light-green","cell o mdl-color--light-green","cell p mdl-color--pink","cell s mdl-color--lime","cell s mdl-color--lime","cell s mdl-color--light-green","cell s mdl-color--light-green","cell s mdl-color--deep-purple","cell o mdl-color--amber","cell o mdl-color--light-green","cell o mdl-color--light-green","cell o mdl-color--light-green","cell o mdl-color--light-green","cell o mdl-color--light-green","cell o mdl-color--light-green","cell o mdl-color--light-green","cell p mdl-color--pink","cell s mdl-color--lime","cell s mdl-color--amber","cell s mdl-color--light-green","cell s mdl-color--deep-purple","cell o mdl-color--amber","cell o mdl-color--light-green","cell o mdl-color--light-green","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell p mdl-color--pink","cell s mdl-color--amber","cell s mdl-color--amber","cell s mdl-color--deep-purple","cell o mdl-color--amber","cell o mdl-color--light-green","cell o mdl-color--light-green","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell p mdl-color--blue","cell s mdl-color--amber","cell s mdl-color--deep-purple","cell o mdl-color--amber","cell o mdl-color--light-green","cell o mdl-color--light-green","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o","cell o","cell o","cell o","cell o","cell o","cell p mdl-color--blue","cell s mdl-color--deep-purple","cell o mdl-color--amber","cell o mdl-color--light-green","cell o mdl-color--light-green","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o","cell o","cell o","cell o","cell o","cell o","cell o","cell p mdl-color--blue"]'
var string2 = '["cell p mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell o mdl-color--cyan","cell p mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell o mdl-color--cyan","cell o mdl-color--cyan","cell p mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell o mdl-color--brown","cell o mdl-color--cyan","cell o mdl-color--red","cell p mdl-color--cyan","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell o mdl-color--brown","cell o mdl-color--red","cell o mdl-color--red","cell o mdl-color--red","cell p mdl-color--cyan","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--deep-purple","cell s mdl-color--deep-purple","cell s mdl-color--deep-purple","cell o mdl-color--brown","cell o mdl-color--red","cell o mdl-color--red","cell o mdl-color--red","cell o mdl-color--red","cell p mdl-color--cyan","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--deep-purple","cell s mdl-color--deep-purple","cell s mdl-color--deep-purple","cell o mdl-color--brown","cell o mdl-color--red","cell o mdl-color--red","cell o mdl-color--red","cell o mdl-color--red","cell o mdl-color--red","cell p mdl-color--cyan","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--deep-purple","cell s mdl-color--deep-purple","cell o mdl-color--brown","cell o mdl-color--red","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--red","cell p mdl-color--cyan","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--deep-purple","cell s mdl-color--deep-purple","cell o mdl-color--brown","cell o mdl-color--red","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell p mdl-color--cyan","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--deep-purple","cell o mdl-color--red","cell o mdl-color--red","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell p mdl-color--brown","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--purple","cell o mdl-color--red","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o","cell o","cell o mdl-color--purple","cell o mdl-color--purple","cell o mdl-color--purple","cell o mdl-color--purple","cell p mdl-color--brown","cell s mdl-color--red","cell s mdl-color--purple","cell o mdl-color--red","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--purple","cell o","cell o","cell o","cell o","cell o","cell o","cell o mdl-color--purple","cell p mdl-color--brown","cell s mdl-color--purple","cell o mdl-color--red","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--purple","cell o","cell o","cell o","cell o","cell o","cell o","cell o","cell o","cell p mdl-color--brown"]'
var string3 = '["cell p mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--blue","cell s mdl-color--blue","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--blue","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell o mdl-color--cyan","cell p mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--amber","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--amber","cell s mdl-color--amber","cell s mdl-color--amber","cell o mdl-color--cyan","cell o mdl-color--cyan","cell p mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--amber","cell s mdl-color--amber","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell o mdl-color--cyan","cell o mdl-color--cyan","cell o mdl-color--cyan","cell p mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--amber","cell s mdl-color--amber","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--deep-purple","cell s mdl-color--deep-purple","cell s mdl-color--deep-purple","cell o mdl-color--brown","cell o mdl-color--cyan","cell o mdl-color--amber","cell o mdl-color--amber","cell p mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--brown","cell s mdl-color--amber","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--deep-purple","cell s mdl-color--deep-purple","cell s mdl-color--deep-purple","cell o mdl-color--brown","cell o mdl-color--brown","cell o mdl-color--amber","cell o mdl-color--amber","cell o mdl-color--amber","cell p mdl-color--cyan","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--deep-purple","cell s mdl-color--deep-purple","cell s mdl-color--deep-purple","cell o mdl-color--brown","cell o mdl-color--amber","cell o mdl-color--red","cell o mdl-color--red","cell o mdl-color--red","cell o mdl-color--red","cell p mdl-color--cyan","cell s mdl-color--brown","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--deep-purple","cell s mdl-color--deep-purple","cell o mdl-color--brown","cell o mdl-color--red","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--red","cell p mdl-color--cyan","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--deep-purple","cell s mdl-color--deep-purple","cell o mdl-color--brown","cell o mdl-color--red","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell p mdl-color--brown","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--deep-purple","cell o mdl-color--brown","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell p mdl-color--brown","cell s mdl-color--red","cell s mdl-color--red","cell s mdl-color--deep-purple","cell o mdl-color--brown","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o","cell o","cell o","cell o","cell o","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell p mdl-color--brown","cell s mdl-color--red","cell s mdl-color--deep-purple","cell o mdl-color--brown","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o","cell o","cell o","cell o","cell o","cell o","cell o","cell o","cell p mdl-color--brown","cell s mdl-color--deep-purple","cell o mdl-color--brown","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o","cell o","cell o","cell o","cell o","cell o","cell o","cell o","cell o","cell p mdl-color--brown"]'
var string4 = '["cell p mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell o mdl-color--brown","cell p mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell o mdl-color--brown","cell o mdl-color--brown","cell p mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell o mdl-color--brown","cell o mdl-color--brown","cell o mdl-color--brown","cell p mdl-color--cyan","cell s mdl-color--cyan","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--deep-purple","cell s mdl-color--deep-purple","cell o mdl-color--brown","cell o mdl-color--brown","cell o mdl-color--brown","cell o mdl-color--brown","cell p mdl-color--cyan","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--deep-purple","cell s mdl-color--deep-purple","cell s mdl-color--deep-purple","cell o mdl-color--brown","cell o mdl-color--brown","cell o mdl-color--brown","cell o mdl-color--brown","cell o mdl-color--brown","cell p mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--deep-purple","cell s mdl-color--deep-purple","cell s mdl-color--deep-purple","cell o mdl-color--brown","cell o mdl-color--brown","cell o mdl-color--brown","cell o mdl-color--brown","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell p mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--deep-purple","cell s mdl-color--deep-purple","cell s mdl-color--deep-purple","cell o mdl-color--brown","cell o mdl-color--brown","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell p mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--deep-purple","cell s mdl-color--deep-purple","cell o mdl-color--brown","cell o mdl-color--brown","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell p mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--deep-purple","cell s mdl-color--deep-purple","cell o mdl-color--brown","cell o mdl-color--brown","cell o mdl-color--deep-purple","cell o","cell o","cell o","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell p mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--brown","cell s mdl-color--deep-purple","cell o mdl-color--brown","cell o mdl-color--brown","cell o mdl-color--deep-purple","cell o","cell o","cell o","cell o","cell o","cell o mdl-color--deep-purple","cell o mdl-color--deep-purple","cell p mdl-color--brown","cell s mdl-color--brown","cell s","cell o mdl-color--brown","cell o mdl-color--brown","cell o mdl-color--deep-purple","cell o","cell o","cell o","cell o","cell o","cell o","cell o","cell o","cell p mdl-color--brown","cell s","cell o mdl-color--brown","cell o mdl-color--brown","cell o mdl-color--deep-purple","cell o","cell o","cell o","cell o","cell o","cell o","cell o","cell o","cell o","cell p mdl-color--brown"]'

var array = JSON.parse(string)
var array2 = JSON.parse(string2)
var array3 = JSON.parse(string3)
var array4 = JSON.parse(string4)
var twenty = array.map(mapRanges)
var fifteen = array2.map(mapRanges)
var ten = array3.map(mapRanges)
var eight = array.map(mapRanges)

//heads up position = sb and 20 - 25 bb



var twentyRange = [["limp","call"],["limp","jam"],["limp","jam"],["limp","jam"],["limp","jam"],["raise","call-jam"],["limp","call"],["limp","call"],["limp","call"],["limp","call"],["limp","call"],["limp","call"],["limp","call"],["raise","call-jam"],["raise","call-jam"],["raise","call-jam"],["raise","call-jam"],["raise","call-3x"],["raise","call-3x"],["raise","call-3x"],["raise","call-3x"],["raise","call-3x"],["limp","call"],["limp","call"],["limp","call"],["limp","call"],["raise","call-jam"],["raise","call-jam"],["raise","call-jam"],["raise","call-jam"],["raise","call-3x"],["raise","call-3x"],["raise","call-3x"],["limp","call"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","call-jam"],["raise","call-3x"],["raise","call-3x"],["raise","call-jam"],["raise","call-3x"],["raise","call-3x"],["raise","call-3x"],["limp","call"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","call-jam"],["raise","call-3x"],["raise","call-3x"],["raise","call-3x"],["raise","call-jam"],["raise","call-3x"],["raise","call-3x"],["limp","call"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","call-jam"],["limp","call"],["limp","call"],["limp","call"],["limp","call"],["raise","call-jam"],["raise","call-3x"],["raise","call-3x"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["limp","fold"],["raise","call-jam"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","call-jam"],["raise","call-3x"],["raise","call-3x"],["raise","fold"],["raise","fold"],["raise","fold"],["limp","fold"],["limp","call"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","call-jam"],["raise","call-3x"],["raise","call-3x"],["raise","fold"],["raise","fold"],["limp","fold"],["limp","call"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","call-jam"],["raise","call-3x"],["limp","call"],["raise","fold"],["limp","fold"],["limp","call"],["raise","fold"],["raise","fold"],["limp","fold"],["limp","fold"],["limp","fold"],["limp","fold"],["limp","fold"],["limp","fold"],["raise","call-jam"],["limp","call"],["limp","call"],["limp","fold"],["limp","call"],["raise","fold"],["raise","fold"],["limp","fold"],["limp","fold"],null,["limp","fold"],["limp","fold"],["limp","fold"],["limp","fold"],["limp","jam"],["limp","call"],["limp","fold"],["limp","call"],["raise","fold"],["raise","fold"],["limp","fold"],["limp","fold"],null,null,null,null,null,null,["limp","jam"],["limp","fold"],["limp","call"],["raise","fold"],["raise","fold"],["limp","fold"],["limp","fold"],null,null,null,null,null,null,null,["limp","jam"]]
var twentyRangeOne =twentyRange.map(e => !e? ['fold','fold'] : e)

var twentyToTwentyFive = [["limp","call-3x"],["limp","jam"],["limp","jam"],["limp","jam"],["limp","jam"],["raise","call-jam"],["limp","call-3x"],["limp","call-3x"],["limp","call-3x"],["limp","call-3x"],["limp","call-3x"],["limp","call-3x"],["limp","call-3x"],["raise","call-jam"],["raise","call-jam"],["raise","call-jam"],["raise","call-jam"],["raise","call-3x"],["raise","call-3x"],["raise","call-3x"],["raise","call-3x"],["raise","call-3x"],["limp","call-3x"],["limp","call-3x"],["limp","call-3x"],["limp","call-3x"],["raise","call-jam"],["raise","call-jam"],["raise","call-jam"],["raise","call-jam"],["raise","call-3x"],["raise","call-3x"],["raise","call-3x"],["limp","call-3x"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","call-jam"],["raise","call-3x"],["raise","call-3x"],["raise","call-jam"],["raise","call-3x"],["raise","call-3x"],["raise","call-3x"],["limp","call-3x"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","call-jam"],["raise","call-3x"],["raise","call-3x"],["raise","call-3x"],["raise","call-jam"],["raise","call-3x"],["raise","call-3x"],["limp","call-3x"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","call-jam"],["limp","call-3x"],["limp","call-3x"],["limp","call-3x"],["limp","call-3x"],["raise","call-jam"],["raise","call-3x"],["raise","call-3x"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["limp","fold"],["raise","call-jam"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","call-jam"],["raise","call-3x"],["raise","call-3x"],["raise","fold"],["raise","fold"],["raise","fold"],["limp","fold"],["limp","call-3x"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","call-jam"],["raise","call-3x"],["raise","call-3x"],["raise","fold"],["raise","fold"],["limp","fold"],["limp","call-3x"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","fold"],["raise","call-jam"],["raise","call-3x"],["limp","call-3x"],["raise","fold"],["limp","fold"],["limp","call-3x"],["raise","fold"],["raise","fold"],["limp","fold"],["limp","fold"],["limp","fold"],["limp","fold"],["limp","fold"],["limp","fold"],["raise","call-jam"],["limp","call-3x"],["limp","call-3x"],["limp","fold"],["limp","call-3x"],["raise","fold"],["raise","fold"],["limp","fold"],["limp","fold"],["fold","fold"],["limp","fold"],["limp","fold"],["limp","fold"],["limp","fold"],["limp","jam"],["limp","call-3x"],["limp","fold"],["limp","call-3x"],["raise","fold"],["raise","fold"],["limp","fold"],["limp","fold"],["fold","fold"],["fold","fold"],["fold","fold"],["fold","fold"],["fold","fold"],["fold","fold"],["limp","jam"],["limp","fold"],["limp","call-3x"],["raise","fold"],["raise","fold"],["limp","fold"],["limp","fold"],["fold","fold"],["fold","fold"],["fold","fold"],["fold","fold"],["fold","fold"],["fold","fold"],["fold","fold"],["limp","jam"]]

function getRangeSB(bb){
  switch (bb){
    case 25:{
      return twentyToTwentyFive
    }
  }
}

function getRangeBB(bb){
  switch (bb){
    case 25:{
      return twentyToTwentyFive
    }
  }
}

export const getInitRange = (bb, position, action, id) => getRangeSB(25).map(e=>e[0])

export default function(bb, position, action){
      const range = getRangeSB(25).map(e => (e[0] != action) ? 'fold' : e[1])
      const actions = findActions(range)
      return {
        range,
        actions
      }
}




