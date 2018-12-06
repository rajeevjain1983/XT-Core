
import {calculate} from './calculate';
import {Router }from './Router';
import {Router as MyRouter} from './MyRouter';
import {add} from './MyMath';
import Employee,{SKILLS} from './employee';
import {InvoiceService} from './services/invoiceService';

console.log(calculate(10,10));
console.log(add(10,50));
console.log(new Employee());
console.log(SKILLS);


new Router();
new MyRouter();
new InvoiceService().getCustomer();
new InvoiceService().getOrder();
new InvoiceService().getProduct();

