const row = "<div class=\"row\">  </div>";
const sqr = "<div class=\"sqr\">  </div>";
let turn = 1;

/*
Populates our table based on our x and y parameters.
*/
function createTable(x, y)
{
    table = document.getElementById('table');
    console.log(table.innerHTML);
    for( let i = 0; i < x; i++ )
    {
        table.innerHTML += row;
        rows = document.getElementsByClassName('row');
        for( let j = 0; j < y; j++ )
        {
            rows[i].innerHTML += sqr;
        }
    }
}

/*
Iterating over our square array, and implementing the
appropriate onclick, onmouseover, and onmouseout listeners
for each.
*/
createTable(4,4);
function setListeners()
{
    sqrs = document.getElementsByClassName('sqr');
    for(let i = 0; i < sqrs.length; i++)
    {
        sqrs[i].style.backgroundColor = "gainsboro";
        sqrs[i].style.backgroundImage = "";
        sqrs[i].onclick = function()
        {
            if(sqrs[i].style.backgroundImage == "")
            {
                sqrs[i].style.background = "no-repeat center center";
                sqrs[i].style.backgroundSize = "8vh 8vh";
                if(turn % 2 == 0)
                {
                    sqrs[i].style.backgroundColor = "gray";
                    sqrs[i].style.backgroundImage = "url('ex.png')";
                }
                else
                {
                    sqrs[i].style.backgroundColor = "gray";
                    sqrs[i].style.backgroundImage = "url('oh.png')"
                }
                turn += 1;
            }
        }

        sqrs[i].onmouseover = function()
        {
            if(sqrs[i].style.backgroundColor == "gainsboro")
                sqrs[i].style.backgroundColor = "gray"
        }

        sqrs[i].onmouseout = function()
        {
            if(sqrs[i].style.backgroundColor == "gray")
                sqrs[i].style.backgroundColor = "gainsboro";
        }
    }
}