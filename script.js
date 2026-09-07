const stories = [
{n:1,cat:"culture",title:"Hyderabad Deccani / Old City Culture",desc:"Hyderabad’s Old City reflects a unique Deccani culture shaped by its language, food, markets, architecture and traditions. Beyond Charminar, its everyday streets and local communities reveal a deeper side of Hyderabad."},
{n:2,cat:"culture",title:"Koya Culture – Medaram & Mulugu",desc:"The Koya community has a strong connection with the forests and traditions of the Mulugu region. Their music, festivals, food and community practices offer a different perspective on Telangana’s cultural heritage."},
{n:3,cat:"culture",title:"Gond Culture – Adilabad",desc:"Gond communities in northern Telangana have rich traditions of art, music, dance and festivals. Their connection with the land and traditional way of life makes this an interesting cultural story for visitors."},
{n:4,cat:"culture",title:"Chenchu Culture – Nallamala",desc:"The Chenchu have traditionally lived closely with the Nallamala forest environment. Their knowledge of nature, traditional foods and forest life gives visitors a glimpse into an important part of Telangana’s indigenous heritage."},
{n:5,cat:"monuments",title:"Ramappa Temple",desc:"Ramappa Temple is a remarkable Kakatiya-era temple famous for its detailed sculptures and distinctive architecture. Its UNESCO World Heritage status makes it a major gateway to Telangana’s medieval heritage."},
{n:6,cat:"monuments",title:"Ghanpur Group of Temples",desc:"The Ghanpur temples are a lesser-known group of Kakatiya-era structures with impressive stone carvings and architectural details. They provide an opportunity to explore Kakatiya heritage beyond the more famous Ramappa Temple."},
{n:7,cat:"monuments",title:"Phanigiri Buddhist Site",desc:"Phanigiri is an important archaeological site that reveals the presence of Buddhism in ancient Telangana. Its stupas and excavated structures offer visitors a chance to explore a lesser-known chapter of the region’s history."},
{n:8,cat:"monuments",title:"Medak Cathedral",desc:"Medak Cathedral is known for its impressive Gothic-style architecture and beautiful stained-glass windows. It adds a different dimension to Telangana’s heritage by showcasing its Christian architectural history."},
{n:9,cat:"monuments",title:"Elgandal Fort",desc:"Elgandal Fort stands on a hill near the Manair River and has witnessed several phases of Deccan history. Its historic setting and views of the surrounding landscape make it interesting for both history lovers and photographers."},
{n:10,cat:"arts",title:"Cheriyal Paintings",desc:"Cheriyal paintings are a colourful traditional art form used to narrate stories through a series of painted scenes. They capture Telangana’s mythology, folklore and local storytelling traditions."},
{n:11,cat:"arts",title:"Oggu Katha",desc:"Oggu Katha combines storytelling, singing, music and dramatic narration. Performers bring traditional stories and local beliefs to life, making it an example of Telangana’s living oral heritage."},
{n:12,cat:"arts",title:"Tholu Bommalata",desc:"Tholu Bommalata is a traditional leather shadow-puppet theatre. Puppets, light, music and narration come together to create performances based on traditional stories."},
{n:13,cat:"arts",title:"Perini Dance",desc:"Perini is a powerful dance associated with the Kakatiya period and is often linked with warrior traditions. Its energetic movements and strong rhythm make it one of Telangana’s distinctive performing arts."},
{n:14,cat:"festivals",title:"Bathukamma",desc:"Bathukamma is Telangana’s famous flower festival, where women create colourful flower arrangements and celebrate through songs and dances. It beautifully represents the connection between nature, culture and community."},
{n:15,cat:"festivals",title:"Sammakka-Saralamma Jatara – Medaram",desc:"The Medaram Jatara is a major tribal festival dedicated to Sammakka and Saralamma. Its traditional rituals, stories and huge gatherings make it one of Telangana’s most significant cultural events."},
{n:16,cat:"festivals",title:"Nagoba Jatara – Keslapur",desc:"Nagoba Jatara is an important tribal festival held at Keslapur in Adilabad. It brings together traditional rituals and cultural practices associated with the region’s tribal communities."},
{n:17,cat:"festivals",title:"Komuravelli Mallanna Jatara",desc:"The Komuravelli Mallanna Jatara is celebrated at the Mallanna temple and attracts devotees from different parts of Telangana. The festival combines religious traditions with music, rituals and lively community gatherings."},
{n:18,cat:"crafts",title:"Pochampally Ikat",desc:"Pochampally Ikat is a famous handloom tradition known for its colourful geometric designs. The careful dyeing and weaving process shows the skill and patience of Telangana’s weavers."},
{n:19,cat:"crafts",title:"Pembarthi Metal Craft",desc:"Pembarthi is known for its traditional brass and metalwork, featuring detailed decorative designs. The craft has been passed down through generations and reflects Telangana’s artistic heritage."},
{n:20,cat:"crafts",title:"Karimnagar Silver Filigree",desc:"Karimnagar’s silver filigree is made by shaping extremely thin silver wires into delicate designs. The detailed craftsmanship and patience involved make it a fascinating traditional art form."},
{n:21,cat:"crafts",title:"Siddipet Gollabhama Sarees",desc:"Gollabhama sarees are a distinctive handloom tradition from Siddipet, recognised for their traditional milkmaid motifs. The designs connect the craft with local culture and the lives of the weavers."},
{n:22,cat:"food",title:"Hyderabadi Biryani",desc:"Hyderabadi Biryani is one of the most famous foods associated with Hyderabad and the Deccan. In our project, it can serve as a familiar starting point for discovering lesser-known Telangana dishes."},
{n:23,cat:"food",title:"Sarva Pindi",desc:"Sarva Pindi is a traditional Telangana savoury dish made with ingredients such as rice flour, peanuts, sesame and spices. Its simple preparation and crispy texture reflect the region’s home-style cooking."},
{n:24,cat:"food",title:"Sakinalu",desc:"Sakinalu is a traditional rice-flour snack commonly prepared during festivals such as Sankranti. Its distinctive circular shape and preparation process make it both a tasty dish and a cultural tradition."},
{n:25,cat:"food",title:"Jonna Rotte & Telangana Millet Food Traditions",desc:"Jonna Rotte is a traditional sorghum-based flatbread connected with Telangana’s agricultural and rural traditions. Exploring millet foods also gives visitors a taste of the region’s older and more sustainable food practices."}
];

const labels={culture:"Regional Cultures",monuments:"Historic Monuments & Temples",arts:"Folklore, Art & Literature",festivals:"Festivals",crafts:"Handicrafts & Textiles",food:"Traditional Cuisine"};
const collection=document.getElementById("collection"), search=document.getElementById("search"), filter=document.getElementById("categoryFilter");

function openStory(id){
  const s=stories.find(x=>x.n===id);
  document.getElementById("modalNumber").textContent=String(s.n).padStart(2,"0");
  document.getElementById("modalCategory").textContent=labels[s.cat];
  document.getElementById("modalTitle").textContent=s.title;
  document.getElementById("modalDescription").textContent=s.desc;
  document.getElementById("modal").classList.add("open");
  document.getElementById("modal").setAttribute("aria-hidden","false");
}
function render(){
  const q=search.value.toLowerCase().trim(), cat=filter.value;
  const result=stories.filter(s=>(cat==="all"||s.cat===cat)&&(!q||(s.title+" "+s.desc+" "+labels[s.cat]).toLowerCase().includes(q)));
  collection.innerHTML=result.length?result.map(s=>`
    <article class="story" data-id="${s.n}">
      <div><div class="story-number">${String(s.n).padStart(2,"0")}</div><div class="story-cat">${labels[s.cat]}</div></div>
      <div><h3>${s.title}</h3><p>${s.desc}</p></div><span class="story-arrow">↗</span>
    </article>`).join(""):`<div class="empty">No stories found. Try another search.</div>`;
  document.querySelectorAll(".story").forEach(el=>el.addEventListener("click",()=>openStory(+el.dataset.id)));
}
function closeModal(){document.getElementById("modal").classList.remove("open");document.getElementById("modal").setAttribute("aria-hidden","true")}
search.addEventListener("input",render); filter.addEventListener("change",render);
document.querySelectorAll(".cat-card").forEach(btn=>btn.addEventListener("click",()=>{
  filter.value=btn.dataset.cat; document.getElementById("discover").scrollIntoView({behavior:"smooth"}); render();
}));
document.querySelectorAll("[data-close]").forEach(x=>x.addEventListener("click",closeModal));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
render();
