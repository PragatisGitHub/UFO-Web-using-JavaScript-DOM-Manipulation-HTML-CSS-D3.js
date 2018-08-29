// from data.js
var Data = data;

var table = d3.select("table")
var body = d3.select("tbody")

Data.forEach(datum =>
{
    // console.log(datum);
    var row = body.append("tr");
    row.append("td").text(datum.datetime);
    row.append("td").text(datum.city.toUpperCase());
    row.append("td").text(datum.state.toUpperCase());
    row.append("td").text(datum.country.toUpperCase());
    row.append("td").text(datum.shape.toUpperCase());
    row.append("td").text(datum.durationMinutes);
    row.append("td").text(datum.comments);
})

function OnSubmit(){
    d3.select("tbody").html(" ");

    var Date = d3.select("#datetime").property("value").trim();
    console.log(Date)

    var City = d3.select("#city").property("value").trim();
    console.log(City.toLowerCase())

    var State = d3.select("#state").property("value").trim();
    console.log(State.toLowerCase())

    var Country = d3.select("#country").property("value").trim();
    console.log(Country.toLowerCase())

    var Shape = d3.select("#shape").property("value").trim();
    console.log(Shape.toLowerCase())

     function Datarange(Case){
        // return(Case.datetime == Date || Case.city == City.toLowerCase() || Case.state == State.toLowerCase()
        //       || Case.country == Country.toLowerCase() || Case.shape == Shape.toLowerCase())
        return(Case.datetime == Date && Case.city == City.toLowerCase() && Case.state == State.toLowerCase()
        && Case.country == Country.toLowerCase() && Case.shape == Shape.toLowerCase())
    }

    tableData = Data.filter(Datarange)
    
    var table = d3.select("table")
    var body = d3.select("tbody")
    
    tableData.forEach(datum =>
    {
        var row = body.append("tr");
        row.append("td").text(datum.datetime);
        row.append("td").text(datum.city.toUpperCase());
        row.append("td").text(datum.state.toUpperCase());
        row.append("td").text(datum.country.toUpperCase());
        row.append("td").text(datum.shape.toUpperCase());
        row.append("td").text(datum.durationMinutes);
        row.append("td").text(datum.comments);
    })
}

function Reset(){
    d3.select("#datetime").property("value","").attr("placeholder",'1/11/2011');
    d3.select("#city").property("value","").attr("placeholder",'BENTON');
    d3.select("#state").property("value","").attr("placeholder",'AR');
    d3.select("#country").property("value","").attr("placeholder",'US');
    d3.select("#shape").property("value","").attr("placeholder",'CIRCLE');
}
