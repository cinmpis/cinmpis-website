import fs from 'node:fs';
const doi=process.argv[2]?.trim().replace(/^https?:\/\/(dx\.)?doi\.org\//,'');
if(!doi) throw new Error('DOI mancante');
const r=await fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}`,{headers:{'User-Agent':'CINMPIS-website/1.0 (mailto:direzione.cinmpis@uniba.it)'}});
if(!r.ok) throw new Error(`Crossref ${r.status}`);
const m=(await r.json()).message;
const authors=(m.author||[]).map(a=>[a.family,a.given].filter(Boolean).join(', ')).join('; ');
const pub={title:(m.title||[''])[0],authors,journal:(m['container-title']||[''])[0],year:m.published?.['date-parts']?.[0]?.[0]||m.issued?.['date-parts']?.[0]?.[0]||null,doi:m.DOI||doi};
const file='src/data/publications.json'; const data=JSON.parse(fs.readFileSync(file,'utf8'));
if(data.some(p=>(p.doi||'').toLowerCase()===pub.doi.toLowerCase())){console.log('DOI già presente');process.exit(0)}
data.unshift(pub); fs.writeFileSync(file,JSON.stringify(data,null,2)+'\n'); console.log('Importato',pub.doi);
