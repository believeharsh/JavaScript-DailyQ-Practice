class TableBooking {
    constructor(name , HotelName , greeting ){
        this.name = name;
        this.HotelName = HotelName;
        this.greeting = greeting;
      }
      single() {
        console.log( this.name + " : your two sitter table booked Time : 5PM 17 Aug Evening  :) "+ this.HotelName + "" + this.greeting)
      }
      couple(){
        console.log( this.name + " : your couple table booked for candle light dinner time : 8PM 17Aug Night :) " + this.HotelName + "" + this.greeting)
      }
      family(){
        console.log( this.name + " : your family table booked for family dinner Time : 8.30PM 18Aug Night  :) " + this.HotelName + "" + this.greeting)
      }
     
    }
    
    const Harsh = new TableBooking("Harsh ", "Hotel Blue Queen  " , "Enjoy Your time")
    const Asyab = new TableBooking("Saket " , "Hotel Ever Green  " , "have a great time")
    const Shubham = new TableBooking("Shubham ", "Hotel High Hills  ", "good time")
  
    
    Harsh.single()
    Asyab.couple()
    Shubham.family()
  