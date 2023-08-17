// Basic Knowledge of Object orinted programming 

// class TableBooking {
//     single() {
//       console.log( this.name + " : your two sitter table booked Time : 5PM 17 Aug Evening  :) "+ this.HotelName)
//     }
//     couple(){
//       console.log( this.name + " : your couple table booked for candle light dinner time : 8PM 17Aug Night :) " + this.HotelName)
//     }
//     family(){
//       console.log( this.name + " : your family table booked for family dinner Time : 8.30PM 18Aug Night  :) " + this.HotelName)
//     }
//     Customer_Name (name , HotelName){
//       this.name = name;
//       this.HotelName = HotelName;
//     }
//   }
  
//   const Harsh = new TableBooking()
//   Harsh.Customer_Name("Harsh" , "Hotel Bluequeen")
//   const Asyab = new TableBooking()
//   Asyab.Customer_Name("Asyab" , "Hotel Taj")
//   const Shubham = new TableBooking()
//   Shubham.Customer_Name("Shubham" , "Magdheera Palace ")
  
//   Harsh.single()
//   Asyab.couple()
//   Shubham.family()


// with constructors 

class TableBooking {
    constructor(name , HotelName){
      console.log("CONSTRUCTOR CALLED ..... + " + name + " " , HotelName)
        this.name = name;
        this.HotelName = HotelName;
       
    }
      single() {
        console.log( this.name + " : your two sitter table booked Time : 5PM 17 Aug Evening  :) "+ this.HotelName)
      }
      couple(){
        console.log( this.name + " : your couple table booked for candle light dinner time : 8PM 17Aug Night :) " + this.HotelName)
      }
      family(){
        console.log( this.name + " : your family table booked for family dinner Time : 8.30PM 18Aug Night  :) " + this.HotelName)
      }
     
      }
    
    
    const Harsh = new TableBooking("Harsh" , "Hotel Bluequeen")
    // Harsh.Customer_Name()
    const Asyab = new TableBooking("Asyab" , "Hotel Taj")
    // Asyab.Customer_Name()
    const Shubham = new TableBooking("Shubham" , "Magdheera Palace ")
    // Shubham.Customer_Name()
    
    Harsh.single()
    Asyab.couple()
    Shubham.family()
    
    
  
  