const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_KEY = "YOUR_SUPABASE_KEY";

async function loadMatches(){
const res = await fetch(SUPABASE_URL + "/rest/v1/matches", {
headers:{
apikey:SUPABASE_KEY,
Authorization:"Bearer "+SUPABASE_KEY
}
});
const data = await res.json();

document.getElementById("matches").innerHTML =
data.map(m => `${m.home} ${m.home_score} - ${m.away_score} ${m.away}`).join("<br>");
}

async function loadNews(){
const res = await fetch(SUPABASE_URL + "/rest/v1/news", {
headers:{
apikey:SUPABASE_KEY,
Authorization:"Bearer "+SUPABASE_KEY
}
});
const data = await res.json();

document.getElementById("news").innerHTML =
data.map(n => "📰 " + n.title).join("<br>");
}

loadMatches();
loadNews();
setInterval(loadMatches,10000);
