let topicsArray =　[
    "美式咖啡",
    "espresso",
    "不上課",
    "拿鐵",
    "不上課",
    "單品"
];

let startDate = new Date();

function setMonthAndDay(startMonth,startDay){
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(4,1);
