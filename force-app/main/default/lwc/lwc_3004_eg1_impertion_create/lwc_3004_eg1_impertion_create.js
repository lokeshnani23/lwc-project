import MasterRecordId from '@salesforce/schema/Account.MasterRecordId';
import { createRecord } from 'lightning/uiRecordApi';
import { LightningElement } from 'lwc';

export default class Lwc_3004_eg1_impertion_create extends LightningElement 
{
   name;
   phone;
   fax;
   industry;
   rating;



    clname(event)
    {

       this.name=event.target.value;

    }

    phname(event)
    {

        this.name=event.target.value;

    } 
    
    fxname(event)
    {


        this.name=event.target.value;
    } 
    
    indname(event)
    {

        this.name=event.target.value;

    } 
    
    ratname(event)
    {
        this.name=event.target.value;


    }  
    
    callme(event)
    {

        createRecord(recordid).then(Response=>{ 
            
             
             
                                               }).catch(error=>{
                                                        

                                                                 })

    }






}