const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_KEY = "YOUR_SUPABASE_KEY";

async function addMatch(){
await fetch(SUPABASE_URL + "/rest/v1/matches", {
method:"POST",
headers:{
apikey:SUPABASE_KEY,
Authorization:"Bearer "+SUPABASE_KEY,
"Content-Type":"application/json"
},
body: JSON.stringify({
home:document.getElementById("home").value,
away:document.getElementById("away").value,
home_score:document.getElementById("hs").value,
away_score:document.getElementById("as").value
})
});
alert("Match saved");
}

async function addNews(){
await fetch(SUPABASE_URL + "/rest/v1/news", {
method:"POST",
headers:{
apikey:SUPABASE_KEY,
Authorization:"Bearer "+SUPABASE_KEY,
"Content-Type":"application/json"
},
body: JSON.stringify({
title:document.getElementById("news").value
})
});
alert("News published");
}
