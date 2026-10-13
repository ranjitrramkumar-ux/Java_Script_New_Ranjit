
let responseTime = 850;  // ms
let sla = 1000;          // ms
let slaStatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";
console.log(`Response: ${responseTime}ms — ${slaStatus}`); // Output: Response: 850ms — Within SLA ✅
console.log(`What is the SLA time ? - ${sla}`); // Output: What is the SLA time ? - 1000

// Template Literal
console.log(`What is the SLA time ? - ${sla}`);

let condition = true;
let isSKMale = condition ? true : false;
console.log(isSKMale);
console.log(`Value is , ${isSKMale}`);
