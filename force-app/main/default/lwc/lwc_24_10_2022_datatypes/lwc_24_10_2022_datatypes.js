import { LightningElement } from 'lwc';

export default class Lwc_24_10_2022_datatypes extends LightningElement 
{
    result;
    num1;
    num2;
    num3;

    fnam(event)
    {

      this.num1 =event.target.value;

    }

    snm(event)
    {

        this.num2 =event.target.value;


    }
   
    tnm(event)
    {

        this.num3 =event.target.value;



    }

    calme(event)
    {

      if(parseint(this.num1)>parseint(this.num2) && parseint(this.num3)>parseint(this.num1))
      {

       this. result= this.num1;
      }
      else if(this.num1>this.num3 && this.num1 >this.num2)
      {

        this. result= this.num2; 

      }
      else
      {
        this. result= this.num3;

      }


    }

    clearme(event)
    {

      this.num1='null';
      this.num2='null';
      this.num3='null';

    }





}