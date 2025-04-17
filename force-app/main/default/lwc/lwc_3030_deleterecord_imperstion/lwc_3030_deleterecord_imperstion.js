import { LightningElement,api } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';

export default class Lwc_3030_deleterecord_imperstion extends LightningElement 
{
    @api recordId;
    callme(event)
    {
       deleteRecord(recordId).then().catch();

    }
}