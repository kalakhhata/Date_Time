document.addEventListener('DOMContentLoaded', function()
{

    function updateCountdown(){
        const now = new Date();
        const newdate = new Date('January 1, 2025 00:00:00');
        const target = newdate-now; 

        //Convert the Milliesecond into days,hours,minutes,seconds
        const days= Math.floor(target/(24*60*60*1000));
        const hours = Math.floor((target%(24*60*60*1000))/(60*60*1000));
        const minutes = Math.floor((target%(60*60*1000))/(60*1000));
        const seconds = Math.floor((target%(60*1000))/1000);

        document.getElementById('days').innerText=`${days} Days`;
        document.getElementById('hours').innerText=`${hours} Hours`;
        document.getElementById('minutes').innerText=`${minutes} Minutes`;
        document.getElementById('seconds').innerText=`${seconds} Seconds`;

        

    }
    setInterval(updateCountdown,1000);
    updateCountdown();
});