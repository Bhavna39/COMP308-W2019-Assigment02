/**********************************/
/*        Java Script File        */
/*      Bhavna Pulliahgari        */
/*          300931671             */
/*       16th February, 2019      */
/**********************************/

/* Custom javascript */

//IIFE - immediately invoked function expression
(function()
{
    function Start()
    {
        console.log(`%c App Started......`, "font-size: 20px; color: blue; font-weight: bold");

        $(".btn-danger").click(function(event)
        {
            if(!confirm("Are you sure???"))
            {
                event.preventDefault();
                window.location.assign("/contact-list");
            }
        });
    }

    window.addEventListener("load", Start);

})();