function gradeCalculate(number)
{
   // switch(number>30)
    switch(true)
    {
        case (number>90)    :
            return "Excellent";
        

            case(number >80):
            return "Good";
           

            case(number >50):
            return "Meet expectations";
            

            case(number>35):
            return "Need improvement";
            
            default:
                return "Prepare well";

    }
    console.log("Invalid value");
}

console.log(gradeCalculate(25));