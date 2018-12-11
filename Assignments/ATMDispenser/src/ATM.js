import { DispenseNotes} from './DispenseNotes';
export class ATM{
    constructor(notes){
        this.notes=notes;
        this.result=[];
    }

    dispense(amount,index){
        
        if(index<0) {
           return new Promise((resolve, reject)=>{
                setTimeout(_=>resolve(this.result),2000);
            })
        }
        var bal=amount%this.notes[index];
        var count=(amount-bal)/this.notes[index];
        this.result.push(new DispenseNotes(this.notes[index],count));
        index--;
        return this.dispense(bal,index);
    }
}